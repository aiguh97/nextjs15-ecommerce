import cloudinary from "@/lib/cloudinary";
import { connectDB } from "@/lib/dbConnection";
import { catchError, isAuthenticated, response } from "@/lib/helperFunction";
import MediaModel from "@/models/Media.model";

export async function PUT(request){
    try {
        const auth = await isAuthenticated('admin')
        if(!auth.isAuth){
            return response(false,403,'Unauthorized.')
        }

        await connectDB()
        const payload = await request.json()

        const ids = payload.ids||[]

        const deleteType = payload.deleteType

        if(!Array.isArray(ids)|| ids.length===0){
               return response(false,400,'Invalid or empty id list.')
        }

        const media = await MediaModel.find({_id:{$in:ids}}).lean()

        if(!media.length){
               return response(false,404,'Data not found.')
        }

        if(!['SD','RSD'].includes(deleteType)){
               return response(false,404,'Invalid delete operation. delete type should be sd or RSD for this route')
        }

        if(deleteType==='SD'){
            await MediaModel.updateMany({_id:{$in:ids}},{$set:{deletedAt:new Date().toISOString()}});
        }else{
             await MediaModel.updateMany({_id:{$in:ids}},{$set:{deletedAt:null}});
        }

        return response(true,201,deleteType==='SD'?'data moved into trash.':'data restored')

    } catch (error) {
        return catchError(error)
    }
}


export async function DELETE(request){
    const session = await mongoose.startSession()
    session.startSession()

    try {
        const auth = await isAuthenticated('admin')
        if(!auth.isAuth){
            return response(false,403,'Unauthorized.')
        }

        await connectDB()
        const payload = await request.json()

        const ids = payload.ids||[]

        const deleteType = payload.deleteType

        if(!Array.isArray(ids)|| ids.length===0){
               return response(false,400,'Invalid or empty id list.')
        }

        const media = await MediaModel.find({_id:{$in:ids}}).session(session).lean()

        if(!media.length){
               return response(false,404,'Data not found.')
        }

        if(!deleteType==='PD'){
               return response(false,404,'Invalid delete operation. delete type should be PD for this route')
        }

        await MediaModel.deleteMany({_id:{$in:ids}}).session(session)

        //delete all media from cloudinary.
        const publicIds = media.map(m=>m.public_id)

        try {
            await cloudinary.api.delete_resources(publicIds)
        } catch (error) {
            await session.abortTransaction()
            session.endSession()
        }

        await session.commitTransaction()
        session.endSession()

        return response(true,201,'Data deleted permanently')

    } catch (error) {
           await session.abortTransaction()
            session.endSession()
        return catchError(error)
    }
}