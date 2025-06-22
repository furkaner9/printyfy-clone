import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { HTMLAttributes } from "react";

interface MugDesignProps extends HTMLAttributes<HTMLDivElement> {
  src: string | null;
  imgSrc: string | null;
}

const MugDesign = ({ src, imgSrc, className, ...props }: MugDesignProps) => {
  return (
    <div
      className={cn(
        "relative pointer-events-none z-45 overflow-hidden",
        className
      )}
      {...props}
    >
      {/* Mug template resmi */}
      {src && (
        <Image
          alt="Mug template"
          src={src}
          width={770}
          height={1600}
          className="z-50 select-none pointer-events-none"
        />
      )}

      {/* Kullanıcının yüklediği resim arka planda */}
      {(imgSrc || src) && (
        <div className="absolute -z-10 inset-0">
          <Image
            alt="User design"
            src={imgSrc || src!}
            width={770}
            height={1600}
            className="object-cover min-w-full min-h-full"
          />
        </div>
      )}
    </div>
  );
};

export default MugDesign;
