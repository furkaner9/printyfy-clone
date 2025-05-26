import PhonePreview from "@/app/(routes)/_components/Product/PhoneCase/PhonePreview";
import { prismadb } from "@/lib/prismadb"; // Bu dosyada sadece @prisma/client kullanıldığından emin ol
import { isValidObjectId } from "@/lib/utils";
import { notFound } from "next/navigation";
import React from "react";

interface PreviewPageProps {
  params: {
    configId: string;
    product: string;
  };
}

const PreviewPage = async ({ params }: PreviewPageProps) => {
  const configId = params.configId;

  if (!isValidObjectId(configId)) {
    return notFound();
  }

  const configurations = await prismadb.configuration.findUnique({
    where: { id: configId },
  });

  if (!configurations) {
    return notFound();
  }

  if (params.product === "phone") {
    return (
      <div>
        <PhonePreview configurations={configurations} />
      </div>
    );
  } else if (params.product === "mug") {
    return <div>mug</div>;
  } else if (params.product === "tshirt") {
    return <div>tshirt</div>;
  } else {
    return notFound();
  }
};

export default PreviewPage;
