import { prismadb } from "@/lib/prismadb";
import { ProductType, TshirtColor, TshirtSize } from "@prisma/client";

export type SaveConfigArgs = {
  tshirtcolor: TshirtColor;
  size: TshirtSize;
  configId: string;
  type: ProductType;
  basePrice: number;
  totalPrice: number;
};

export async function saveConfig({
  basePrice,
  configId,
  size,
  totalPrice,
  tshirtcolor,
  type,
}: SaveConfigArgs) {
  await prismadb.configuration.update({
    where: { id: configId },
    data: {
      tshirtcolor,
      size,
      type,
      basePrice,
      totalPrice,
    },
  });
}
