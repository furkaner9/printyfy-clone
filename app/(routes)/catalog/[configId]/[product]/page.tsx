import PhoneDesingConfig from "@/app/(routes)/_components/Product/PhoneCase/PhoneDesingConfig";
import TshirtDesignConfig from "@/app/(routes)/_components/Product/Tshirt/TshirtDesignConfig";
import { prismadb } from "@/lib/prismadb";
import { isValidObjectId } from "@/lib/utils";
import { notFound } from "next/navigation";
import React from "react";

const ProductPage = async ({
  params,
}: {
  params: { configId: string; product: string };
}) => {
  const { configId, product } = params;

  if (!isValidObjectId(configId)) return notFound();

  const configuration = await prismadb.configuration.findUnique({
    where: { id: configId },
  });

  if (!configuration) return notFound();

  const { imageUrl, width, height, id } = configuration;

  switch (product) {
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
      return <div>mug</div>;

    default:
      return notFound();
  }
};

export default ProductPage;
