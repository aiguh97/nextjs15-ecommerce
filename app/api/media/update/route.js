import { connectDB } from "@/lib/dbConnection";
import { deleteImage, uploadImage } from "@/lib/handlerImageCloudinary";
import { catchError, isAuthenticated, response } from "@/lib/helperFunction";
import { gallerySchema } from "@/lib/zodSchema";
import MediaModel from "@/models/Media.model";
import { isValidObjectId } from "mongoose";

export async function PUT(request) {
  try {
    /** AUTH */
    const auth = await isAuthenticated("admin");
    if (!auth.isAuth) {
      return response(false, 403, "Unauthorized");
    }

    await connectDB();

    /** 1️⃣ Ambil FormData */
    const formData = await request.formData();

    /** 2️⃣ Payload text */
    const payload = {
      _id: formData.get("_id"),
      alt: formData.get("alt"),
      title: formData.get("title"),
    };

    /** 3️⃣ File */
    const image = formData.get("image"); // File | null

    /** 4️⃣ Validasi */
    const schema = gallerySchema.pick({
      _id: true,
      alt: true,
      title: true,
    });

    const validate = schema.safeParse(payload);
    if (!validate.success) {
      return response(false, 400, "Invalid or missing field", validate.error);
    }

    const { _id, alt, title } = validate.data;

    if (!isValidObjectId(_id)) {
      return response(false, 400, "Invalid object id");
    }

    /** 5️⃣ Cari media */
    const media = await MediaModel.findById(_id);
    if (!media) {
      return response(false, 404, "Media not found");
    }

    /** 6️⃣ Update text field */
    media.alt = alt;
    media.title = title;

    /** 7️⃣ Update image (optional) */
    if (image && image.size > 0) {
      // hapus image lama
      if (media.public_id) {
        await deleteImage(media.public_id);
      }

      // upload image baru
      const upload = await uploadImage(image);

      media.secure_url = upload.secure_url;
      media.public_id = upload.public_id;
    }

    /** 8️⃣ Save */
    await media.save();

    /** 9️⃣ Response */
    return response(true, 200, "Media updated successfully", media);

  } catch (error) {
    return catchError(error);
  }
}
