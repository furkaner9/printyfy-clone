import { createUploadthing, type FileRouter } from "uploadthing/next";
import { z } from "zod";
import sharp from "sharp";
import { prismadb } from "@/lib/prismadb";

const f = createUploadthing();

const auth = (req: Request) => ({ id: "fakeId" }); // Fake auth function

export const ourFileRouter = {
  imageUploader: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 1,
    },
  })
    .input(z.object({ configId: z.string().optional() }))
    .middleware(async ({ input }) => {
      return { input };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      const { configId } = metadata.input;
      const res = await fetch(file.ufsUrl); // Değişiklik yapıldı
      const buffer = await res.arrayBuffer();

      const imgMetadata = await sharp(buffer).metadata();
      const { width, height } = imgMetadata;

      if (configId) {
        const configration = await prismadb.configuration.create({
          data: {
            imageUrl: file.ufsUrl, // Değişiklik yapıldı
            width: width || 500,
            height: height || 500,
          },
        });
        return { configId: configration.id };
      } else {
        const updateConfigration = await prismadb.configuration.update({
          where: {
            id: configId,
          },
          data: {
            croppedImageUrl: file.ufsUrl, // Değişiklik yapıldı
          },
        });
        return { configId: updateConfigration.id };
      }
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
