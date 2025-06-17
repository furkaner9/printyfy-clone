import MugDesignConfig from "@/app/(routes)/_components/Product/Mug/MugDesignConfig";
import PhoneDesingConfig from "@/app/(routes)/_components/Product/PhoneCase/PhoneDesingConfig";
import TshirtDesignConfig from "@/app/(routes)/_components/Product/Tshirt/TshirtDesignConfig";
import { prismadb } from "@/lib/prismadb";
import { isValidObjectId } from "@/lib/utils";
import { notFound } from "next/navigation";

// --- IMPORTANT CHANGE HERE ---
// params will be a Promise<T>
interface ProductPageProps {
  params: Promise<{ configId: string; product: string }>;
}

export default async function ProductPage({
  params: paramsPromise,
}: ProductPageProps) {
  // Await the promise to get the actual params object
  const params = await paramsPromise;
  const { configId, product } = params;

  if (!isValidObjectId(configId)) return notFound();

  const configuration = await prismadb.configuration.findUnique({
    where: { id: configId },
  });

  if (!configuration) return notFound();

  const { imageUrl, width, height, id } = configuration;

  switch (product.toLowerCase()) {
    case "phone":
      return (
        <PhoneDesingConfig
          configId={id}
          imageDimensions={{ width, height }}
          imageUrl={imageUrl}
          productType="phoneCase"
        />
      );

    case "tshirt":
      return (
        <TshirtDesignConfig
          configId={id}
          imageDimensions={{ width, height }}
          imageUrl={imageUrl}
          productType="tshirt"
        />
      );

    case "mug":
      return (
        <MugDesignConfig
          configId={id}
          imageDimensions={{ width, height }}
          imageUrl={imageUrl}
          productType="mug"
        />
      );

    default:
      return notFound();
  }
}
