import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { HTMLAttributes } from "react";
interface PhoneDesign extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string | null;
}

const PhoneDesign = ({ imgSrc, className, ...props }: PhoneDesign) => {
  return (
    <div
      className={cn("relative pointer-events-none z-50 overflow-hidden")}
      {...props}
    >
      <Image
        alt=""
        src="/phone-template.png"
        width={896}
        height={1831}
        className="z-50 select-none pointer-events-none"
      />
      <div className="absolute -z-10 inset-0 ">
        <Image
          width={896}
          height={1831}
          alt=""
          src={imgSrc || "/phone-template.png"}
        />
      </div>
    </div>
  );
};

export default PhoneDesign;
