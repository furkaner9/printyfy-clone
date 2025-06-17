import { prismadb } from "@/lib/prismadb";
import { isValidObjectId } from "@/lib/utils";
import { notFound } from "next/navigation";
import React from "react";

interface CheckoutPageProps {
  params: {
    configId: string;
    product: string; // "phone", "tshirt", "mug" gibi değerler alacak
  };
}

const CheckoutPage = async ({ params }: CheckoutPageProps) => {
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

  return (
    <div className="container mx-auto ">
      <div className="grid grid-cols-3 gap-3">
        <div className="md:col-span-2">
          <div className="border bg-slate-200 p-4 mt-8 rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
