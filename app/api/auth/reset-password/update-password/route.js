import { connectDB } from "@/lib/dbConnection";
import { catchError, response } from "@/lib/helperFunction";
import { authSchema } from "@/lib/zodSchema";
import UserModel from "@/models/User.model";

export async function POST(request) {
  try {
    await connectDB();

    const payload = await request.json();
    const validationSchema = authSchema.pick({ email: true, password: true });

    const validatedData = validationSchema.safeParse(payload)
    if(!validatedData.success){
        return response(false,401,"Invalid or missing input field",validatedData.error)
    }


    const {email,password}= validatedData.data

    const getUser = await UserModel.findOne({deletedAt:null,email}).select("+password")


    if(!getUser){
        return response(false,401,"user not found")
    }

    getUser.password = password
    await getUser.save()

    return response(true,200,'Password updated success')
  } catch (error) {
    catchError(error);
  }
}
