// app\(routes)\catalog\[configId]\[product]\checkout\page.tsx

import PaymentForm from "@/app/(routes)/_components/PaymentForm";
import { prismadb } from "@/lib/prismadb";
import { isValidObjectId } from "@/lib/utils";
import { currentUser } from "@clerk/nextjs/server"; // Clerk'ten currentUser'ı import ettiğinizden emin olun
import { notFound } from "next/navigation";
import React from "react";

interface CheckoutPageProps {
  params: {
    configId: string;
    product: string; // "phone", "tshirt", "mug" gibi değerler alacak
  };
}

const CheckoutPage = async ({ params }: CheckoutPageProps) => {
  const { configId, product } = await Promise.resolve(params);

  if (!isValidObjectId(configId)) {
    return notFound();
  }

  const configurations = await prismadb.configuration.findUnique({
    where: { id: configId },
  });

  if (!configurations) {
    return notFound();
  }

  const { totalPrice } = configurations; // totalPrice artık number | null olabilir

  const user = await currentUser();
  const userId = user?.id || null; // user?.id null olabilir, bunu userId'ye atayın.

  // Eğer PaymentForm userId'nin string olmasını kesinlikle bekliyorsa ve null olamazsa
  // aşağıdakini yapmalısınız:
  if (!userId) {
    // Kullanıcı giriş yapmamışsa veya ID'si yoksa ne yapılacağına karar verin.
    // Örneğin, bir hata mesajı gösterebilir veya giriş sayfasına yönlendirebilirsiniz.
    // Şimdilik sadece bir hata mesajı bastırıp işlemeye devam edebiliriz.
    console.error("User ID not found. User might not be logged in.");
    // return notFound(); // Veya kullanıcı yoksa 404 sayfasına yönlendirebilirsiniz.
  }

  console.log(userId); // Artık userId değişkenini kullanıyoruz

  const displayTotalPrice = totalPrice !== null ? totalPrice.toString() : "";

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-3">
        <div className="md:col-span-2 col-span-3">
          <div className="border bg-slate-200 p-4 mt-8 rounded-2xl">
            <PaymentForm
              configId={configId}
              product={product}
              totalPrice={displayTotalPrice} // totalPrice tipini PaymentFormProps'ta kontrol edin
              userId={userId || ""} // userId null ise boş string geçebilir veya PaymentForm'da null'ı kabul edebilir
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
