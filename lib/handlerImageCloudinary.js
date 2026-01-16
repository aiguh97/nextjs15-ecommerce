import cloudinary from "@/lib/cloudinary";

export async function uploadImage(file) {
  const buffer = Buffer.from(await file.arrayBuffer());

  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream(
      {
        folder: "media",
      },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    ).end(buffer);
  });
}

export async function deleteImage(public_id) {
  if (!public_id) return;
  await cloudinary.uploader.destroy(public_id);
}


