// app/(routes)/catalog/[configId]/[product]/preview/page.tsx

import MugPreview from "@/app/(routes)/_components/Product/Mug/MugPreview";
import PhonePreview from "@/app/(routes)/_components/Product/PhoneCase/PhonePreview";
import TshirtPreview from "@/app/(routes)/_components/Product/Tshirt/TshirtPreview";
import { prismadb } from "@/lib/prismadb";
import { isValidObjectId } from "@/lib/utils";
import { notFound } from "next/navigation";
import React from "react";

interface PreviewPageProps {
  params: {
    configId: string;
    product: string; // "phone", "tshirt", "mug" gibi değerler alacak
  };
}

const PreviewPage = async ({ params }: PreviewPageProps) => {
  // params objesini await ile bekleyin
  const { configId, product } = await params; // <-- Düzeltme burada!

  // configId'nin geçerli bir MongoDB ObjectId olup olmadığını kontrol edin
  if (!isValidObjectId(configId)) {
    return notFound(); // Geçersiz ID ise 404 sayfasına yönlendir
  }

  // Veritabanından konfigürasyonları çekin
  const configurations = await prismadb.configuration.findUnique({
    where: { id: configId },
  });

  // Konfigürasyon bulunamazsa 404 sayfasına yönlendir
  if (!configurations) {
    return notFound();
  }

  // product parametresine göre doğru önizleme bileşenini render edin
  // NOT: "phone" yerine "phoneCase" gibi enum değerleriniz varsa
  // onu kullanmak daha iyi olacaktır. Aşağıdaki örnek "phoneCase" kullanır.
  // Eğer hala "phone" olarak tutuyorsanız, o şekilde bırakın.
  if (product === "phone") {
    // Eğer "phone" ise, product === "phone" olarak bırakın
    return (
      <div>
        <PhonePreview configurations={configurations} />
      </div>
    );
  } else if (product === "mug") {
    return (
      <div>
        <MugPreview configurations={configurations} />
      </div>
    );
  } else if (product === "tshirt") {
    return (
      <div>
        <TshirtPreview configurations={configurations} />
      </div>
    );
  } else {
    // Tanınmayan bir ürün tipi ise 404 sayfasına yönlendir
    return notFound();
  }
};

export default PreviewPage;
