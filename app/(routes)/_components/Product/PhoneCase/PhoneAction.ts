// PhoneAction.ts
// "use client"; satırını SİLİN.

import {
  CaseColor,
  CaseFinish,
  CaseMaterial,
  PhoneModel,
  ProductType,
} from "@/lib/generated/prisma";
import { prismadb } from "@/lib/prismadb"; // Bu import sunucu tarafında kalacak

export type SaveConfigArgs = {
  casecolor: CaseColor;
  casefinish: CaseFinish;
  casematerial: CaseMaterial;
  casemodel: PhoneModel;
  configId: string;
  type: ProductType;
  // Eğer kaydetme işlemine kırpılmış resmin URL'i, pozisyon ve boyut gibi ek veriler
  // gönderecekseniz, SaveConfigArgs tipine bunları da eklemelisiniz.
  croppedImageUrl?: string;
  imageX?: number;
  imageY?: number;
  imageWidth?: number;
  imageHeight?: number;
};

export async function saveConfig({
  casecolor,
  casefinish,
  casematerial,
  casemodel,
  configId,
  type,
  croppedImageUrl, // Yeni eklenen alanlar
  imageX,
  imageY,
  imageWidth,
  imageHeight,
}: SaveConfigArgs) {
  try {
    await prismadb.configuration.update({
      where: { id: configId },
      data: {
        caseColor: casecolor,
        caseFinish: casefinish,
        caseMaterial: casematerial,
        caseModel: casemodel,
        type,
        // Eklenen alanları da veritabanına kaydedin
        croppedImageUrl: croppedImageUrl || null,
        imagePositionX: imageX, // Prisma modelinizde bu alanların tanımlı olduğundan emin olun
        imagePositionY: imageY,
        imageDimensionWidth: imageWidth,
        imageDimensionHeight: imageHeight,
      },
    });
    console.log("Configuration updated successfully in DB.");
  } catch (error) {
    console.error("Error updating configuration in DB:", error);
    throw error; // Hatayı yukarı fırlatın
  } finally {
    // Genellikle Next.js API rotalarında veya sunucu tarafı fonksiyonlarda
    // prisma.$disconnect() her istekte çağrılmaz, global bir instance yönetimi olur.
    // Ama eğer her seferinde yeni bağlantı açılıp kapanıyorsa bu gerekli olabilir.
    // Çoğu durumda, lib/prismadb.ts dosyanızda tekil (singleton) bir Prisma instance'ı yönetilir.
    // await prismadb.$disconnect();
  }
}
