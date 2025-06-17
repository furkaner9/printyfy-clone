"use client";

import PhoneDesign from "@/components/PhoneDesign"; // Bu component telefon için, tişört için de benzer bir component var mı?
import TshirtDesign from "@/components/TshirtDesign"; // TshirtDesign component'ini ekledim, çünkü tişört önizlemesi için buna ihtiyacınız var gibi duruyor.
import { cn, formatPrice } from "@/lib/utils";
import { CaseColor, Configuration } from "@prisma/client"; // Configuration tipi Prisma'dan geliyor
import React, { useEffect, useState } from "react";
// import {} from "./TshirtAction"; // Bu import boş ve gerekli değil, kaldırılabilir.
import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import ModalLogin from "@/components/ModalLogin";
import Confetti from "react-dom-confetti";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MCOLORS } from "./Mug";
import MugDesign from "@/components/MugDesign";

interface MugPreviewProps {
  // configurations prop'unun tipi Configuration olduğu için Prisma şemasındaki alanlara sahip olmalı.
  // Bu hata, Prisma'dan gelen Configuration tipinde 'tshirtColor' adında bir alan olmadığını gösteriyor.
  // Büyük ihtimalle 'tshirtcolor' (küçük harfli 'c') olarak adlandırılmıştır.
  configurations: Configuration;
}

const MugPreview = ({ configurations }: MugPreviewProps) => {
  const { id } = configurations;

  // Hata buradaydı: 'tshirtColor' yerine 'tshirtcolor' kullanmalısınız.
  // Prisma şemanızda 'tshirtcolor' olarak tanımlandığını varsayıyoruz.
  const { mugColor, basePrice, totalPrice } = configurations;

  const color = MCOLORS.find(
    (supportesdcolor) => supportesdcolor.value === mugColor
  )?.timage;

  const { isSignedIn, user } = useUser();
  const router = useRouter();
  const [showConfetti, setShowConfetti] = useState<boolean>(false);

  useEffect(() => {
    // Sayfa yüklendiğinde konfeti göstermek için
    setShowConfetti(true);
  }, []);

  // Konfeti için yapılandırma
  const confettiConfig = {
    angle: 90,
    spread: 360,
    startVelocity: 40,
    elementCount: 70,
    decay: 0.9,
  };

  return (
    <>
      <Confetti active={showConfetti} config={confettiConfig} />

      <div className="container mx-auto px-4 mt-20 mb-20 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Sol taraf: Tişört önizleme alanı */}
          <div className="col-span-2 flex justify-center items-center h-[600px] bg-slate-100 border border-gray-300 rounded-lg p-6 relative">
            <div className="relative w-full h-full flex items-center justify-center">
              <MugDesign
                src={color ?? "/mug/white.png"} // Örnek yol: Tişört rengine göre değişen bir görsel
                imgSrc={configurations.croppedImageUrl}
                // width ve height prop'larını TshirtDesign component'iniz bekliyorsa ekleyin.
                // Eğer TshirtDesign sabit boyutlar kullanıyorsa, bunları göndermenize gerek yok.
              />
            </div>
          </div>

          {/* Sağ taraf: Sipariş Özeti ve İşlemler */}
          <div className="h-[600px] bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden">
            <ScrollArea className="flex-1 overflow-auto">
              <div className="px-8 py-8">
                <h2 className="text-2xl font-semibold mb-6">Order summary</h2>

                <div className="flex flex-col gap-4 text-gray-700">
                  <p>
                    <strong>Color:</strong> {mugColor}
                  </p>

                  <p>
                    <strong>Base Price:</strong> {formatPrice(basePrice)}
                  </p>
                  <p>
                    <strong>Order Total:</strong> {formatPrice(totalPrice)}
                  </p>
                </div>
              </div>
            </ScrollArea>

            <div className="border-t border-gray-200 px-8 h-16 bg-white flex items-center justify-end">
              <div className="w-full flex justify-between items-center">
                <p className="font-semibold text-lg">
                  {formatPrice(totalPrice)}
                </p>
                <Button
                  variant="mybutton"
                  size="sm"
                  className="w-40"
                  onClick={() => router.push(`/catalog/${id}/mug/checkout`)}
                >
                  Checkout
                  <ArrowRight className="h-4 w-4 ml-1 inline" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ModalLogin component'ini, gerektiğinde gösterilecek şekilde sayfanın en altına ekleyin */}
      {/* Eğer bir state ile kontrol ediyorsanız: {showLoginModal && <ModalLogin onClose={() => setShowLoginModal(false)} />} */}
      {/* Şu anki kullanımınızda direkt görünecek mi, yoksa bir state'e mi bağlı, net değil. */}
      {/* ModalLogin component'inizin nasıl tetiklendiğini kontrol edin. */}
      {!isSignedIn && <ModalLogin />}
    </>
  );
};

export default MugPreview;
