import { prismadb } from "@/lib/prismadb";
import { MugColor, ProductType } from "@prisma/client";

export type SaveConfigArgs = {
  mugColor: MugColor;
  configId: string;
  type: ProductType;
  basePrice: number;
  totalPrice: number;
};
export async function saveConfig({
  basePrice,
  configId,
  mugColor,
  totalPrice,
  type,
}: SaveConfigArgs) {
  await prismadb.configuration.update({
    where: { id: configId },
    data: { mugColor, type, basePrice, totalPrice },
  });
}
