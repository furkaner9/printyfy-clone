import { prismadb } from "@/lib/prismadb";
import { ProductType, TshirtColor, TshirtSize } from "@prisma/client";

export type SaveConfigArgs = {
  tshirtcolor: TshirtColor;
  size: TshirtSize;
  configId: string;
  type: ProductType;
  basePrice: number;
  totalPrice: number;
  croppedImageUrl?: string;
};

export async function saveConfig({
  basePrice,
  configId,
  size,
  totalPrice,
  tshirtcolor,
  type,
  croppedImageUrl, // 🔥 Parametreye ekle
}: SaveConfigArgs) {
  await prismadb.configuration.update({
    where: { id: configId },
    data: {
      tshirtcolor,
      size,
      type,
      basePrice,
      totalPrice,
      croppedImageUrl, // 🔥 Veritabanına yaz
    },
  });
}
