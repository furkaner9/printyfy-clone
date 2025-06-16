import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { HTMLAttributes } from "react";
interface TshirtDesignProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string | null;
  src: string;
}

const TshirtDesign = ({
  imgSrc,
  className,
  src,
  ...props
}: TshirtDesignProps) => {
  return (
    <div
      className={cn(
        "relative pointer-events-none z-45 overflow-hidden",
        className
      )}
      {...props}
    >
      <Image
        alt=""
        src={src}
        width={896}
        height={1831}
        className="z-50 select-none pointer-events-none"
      />
      <div className="absolute -z-10 inset-0 flex items-center justify-center">
        <Image
          width={177}
          height={385}
          alt=""
          src={imgSrc || "/phone-template.png"}
          className="object-cover "
        />
      </div>
    </div>
  );
};

export default TshirtDesign;
