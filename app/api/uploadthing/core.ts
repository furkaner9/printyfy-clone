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
      const res = await fetch(file.ufsUrl);
      const buffer = await res.arrayBuffer();

      const imgMetadata = await sharp(buffer).metadata();
      const { width, height } = imgMetadata;

      let newConfigId = configId;

      if (!configId) {
        // Eğer `configId` yoksa yeni bir konfigürasyon oluştur
        const configration = await prismadb.configuration.create({
          data: {
            imageUrl: file.ufsUrl,
            width: width || 500,
            height: height || 500,
          },
        });

        newConfigId = configration.id;
      } else {
        // Eğer `configId` varsa mevcut kaydı güncelle
        await prismadb.configuration.update({
          where: {
            id: configId,
          },
          data: {
            croppedImageUrl: file.ufsUrl,
          },
        });
      }

      console.log("Config ID:", newConfigId);

      return { configId: newConfigId };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
