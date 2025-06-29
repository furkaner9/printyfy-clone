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
import { TColor } from "./Tshirt";

interface TshirtPreviewProps {
  // configurations prop'unun tipi Configuration olduğu için Prisma şemasındaki alanlara sahip olmalı.
  // Bu hata, Prisma'dan gelen Configuration tipinde 'tshirtColor' adında bir alan olmadığını gösteriyor.
  // Büyük ihtimalle 'tshirtcolor' (küçük harfli 'c') olarak adlandırılmıştır.
  configurations: Configuration;
}

const TshirtPreview = ({ configurations }: TshirtPreviewProps) => {
  const { id } = configurations;

  // Hata buradaydı: 'tshirtColor' yerine 'tshirtcolor' kullanmalısınız.
  // Prisma şemanızda 'tshirtcolor' olarak tanımlandığını varsayıyoruz.
  const { tshirtcolor, size, croppedImageUrl, basePrice, totalPrice } =
    configurations;

  const color = TColor.find(
    (supportesdcolor) => supportesdcolor.value === tshirtcolor
  )?.timage;

  const { isSignedIn, user } = useUser();
  const router = useRouter();
  const [showConfetti, setShowConfetti] = useState<boolean>(false);

  useEffect(() => {
    setShowConfetti(true);
  }, []);

  return (
    <>
      <div className="pointer-events-none select-none absolute inset-0 overflow-hidden flex justify-center">
        <Confetti
          active={showConfetti}
          config={{ elementCount: 600, spread: 150 }}
        />
      </div>

      <div className="container mx-auto mt-20 flex flex-col items-center md:grid text-sm md:grid-cols-12 md:gap-8">
        <div className="md:col-span-4">
          <TshirtDesign
            src={color ?? null}
            imgSrc={configurations.croppedImageUrl}
          />
        </div>

        <div className="md:col-span-8">
          {/* Features + Materials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-b py-6">
            <div>
              <p className="font-semibold text-xl text-zinc-950">Features</p>
              <ol className="mt-3 text-zinc-700 list-disc list-inside">
                <li>Supports wireless charging</li>
                <li>Shock-absorbing TPU material</li>
                <li>Eco-friendly packaging</li>
                <li>5-years print warranty</li>
              </ol>
            </div>

            <div>
              <p className="font-semibold text-xl text-zinc-950">Materials</p>
              <ol className="mt-3 text-zinc-700 list-disc list-inside">
                <li>Durable, high-quality material</li>
                <li>Resistant to scratches and fingerprints</li>
              </ol>
            </div>
          </div>

          {/* Price Box */}
          <div className="mt-8">
            <div className="bg-gray-200 p-5 rounded-lg">
              <div className="flow-root text-sm gap-y-3">
                <div className="flex items-center justify-between py-1 mt-2">
                  <p className="text-gray-700">Base Price</p>
                  <p className="font-semibold text-gray-900">
                    {formatPrice(basePrice)}
                  </p>
                </div>
                <div className="flex items-center justify-between py-1 mt-2">
                  <p className="text-gray-700">Material and Textured Finish</p>
                  <p className="font-semibold text-gray-900">
                    {formatPrice((totalPrice ?? 0) - (basePrice ?? 0))}
                  </p>
                </div>
                <div className="my-2 h-px bg-gray-400" />
                <div className="flex items-center justify-between py-1 mt-2">
                  <p className="text-gray-700">Total Price</p>
                  <p className="font-semibold text-gray-900">
                    {formatPrice(totalPrice)}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Checkout */}
          <div className="mt-8 flex justify-end pb-12 space-x-4">
            {!isSignedIn || !user ? (
              <ModalLogin redirectUrl={`/catalog/${id}/phone/preview`} />
            ) : (
              <Button
                onClick={() => router.push(`/catalog/${id}/phone/checkout`)}
                disabled={!isSignedIn}
              >
                Checkout <ArrowRight className="h-4 w-4 ml-2 inline" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TshirtPreview;
