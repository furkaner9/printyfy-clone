// app/(routes)/_components/Product/PhoneCase/PhonePreview.tsx

import PhoneDesign from "@/components/PhoneDesign";
import { cn } from "@/lib/utils";
import { CaseColor, Configuration } from "@prisma/client";
import React from "react";
import { COLORS } from "./PhoneCase"; // COLORS dizinizin yolu doğru olduğundan emin olun

interface PhonePreviewProps {
  configurations: Configuration;
}

const PhonePreview = ({ configurations }: PhonePreviewProps) => {
  const { id } = configurations;
  const { caseColor, caseModel, caseFinish, croppedImageUrl } = configurations;
  const tw = COLORS.find(
    (supportedcolor) => supportedcolor.value === caseColor
  )?.tw;
  console.log("tw", tw);
  return (
    <div className="container mx-auto mt-20 flex flex-col items-center md:grid text-sm md:grid-cols-12 md:gap-8">
      {" "}
      {/* 'gab-8' yerine 'gap-8' */}
      <div className="md:col-span-4 flex justify-center">
        {" "}
        {/* Telefonu ortalamak için flex ve justify-center ekledim */}
        <PhoneDesign
          // max-w-[150px]'i kaldırarak PhoneDesign'ın kendi içindeki veya dışarıdan gelen diğer boyutlandırmaların etkili olmasını sağlıyoruz
          className={cn(`${tw}`, "rounded-[32px]")}
          imgSrc={configurations.croppedImageUrl}
        />
      </div>
      <div className="md:col-span-8">aaa</div>
    </div>
  );
};

export default PhonePreview;
