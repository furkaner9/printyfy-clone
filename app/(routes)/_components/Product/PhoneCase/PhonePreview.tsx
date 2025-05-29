import PhoneDesign from "@/components/PhoneDesign";
import { cn } from "@/lib/utils";
import { CaseColor, Configuration } from "@prisma/client";
import React from "react";
import { COLORS } from "./PhoneCase";
interface PhonePreviewProps {
  configurations: Configuration;
}

const PhonePreview = ({ configurations }: PhonePreviewProps) => {
  const { id } = configurations;
  const { caseColor, caseModel, caseFinish, croppedImageUrl } = configurations;
  const tw = COLORS.find(
    (supportedcolor) => supportedcolor.value === caseColor
  )?.tw;
  return (
    <div className="container mx-auto mt-20 flex flex-col items-center md:grid text-sm md:grid-cols-12 md:gap-8">
      <div className="md:col-span-4">
        <PhoneDesign
          className={cn(
            `${tw}`,
            "max-w-[200px] rounded-[28px] md:max-w-full md:rounded-[24px] lg:rounded-[38px] xl:rounded-[60px]"
          )}
          imgSrc={configurations.croppedImageUrl}
        />
      </div>

      {/* Metinler: Features + Materials */}
      <div className="md:col-span-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-b py-6">
          {/* Features */}
          <div>
            <p className="font-semibold text-xl text-zinc-950">Features</p>
            <ol className="mt-3 text-zinc-700 list-disc list-inside">
              <li>Supports wireless charging</li>
              <li>Shock-absorbing TPU material</li>
              <li>Eco-friendly packaging</li>
              <li>5-years print warranty</li>
            </ol>
          </div>

          {/* Materials */}
          <div>
            <p className="font-semibold text-xl text-zinc-950">Materials</p>
            <ol className="mt-3 text-zinc-700 list-disc list-inside">
              <li>Durable, high-quality material</li>
              <li>Resistant to scratches and fingerprints</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhonePreview;
