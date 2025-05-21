import PhoneDesingConfig from "@/app/(routes)/_components/Product/PhoneCase/PhoneDesingConfig";
import { prismadb } from "@/lib/prismadb";
import { isValidObjectId } from "@/lib/utils";
import { notFound } from "next/navigation";
import React from "react";

interface ProductPageProps {
  params: Promise<{
    configId: string;
    product: string;
  }>;
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const resolvedParams = await params;
  const { configId } = resolvedParams;

  if (!isValidObjectId(configId)) {
    return notFound();
  }

  const configuration = await prismadb.configuration.findUnique({
    where: {
      id: configId,
    },
  });

  if (!configuration) {
    return notFound();
  }

  const { imageUrl, width, height, id } = configuration;

  if ((await params).product === "phone") {
    return (
      <PhoneDesingConfig
        configId={id}
        imageDimensions={{ width, height }}
        imageUrl={imageUrl}
        productType="phoneCase"
      />
    );
  } else if ((await params).product === "mug") {
    return <div>mug</div>;
  } else if ((await params).product === "tshirt") {
    return <div>tshirt</div>;
  } else {
    return notFound();
  }
};

export default ProductPage;
