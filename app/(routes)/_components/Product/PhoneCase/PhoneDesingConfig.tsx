"use client";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { toast, useSonner } from "sonner";
import { Rnd } from "react-rnd";
import HandleComponent from "../HandleComponent";

interface PhoneDesingConfigProps {
  configId: string;
  imageUrl: string;
  imageDimensions: {
    width: number;
    height: number;
  };
}

const PhoneDesingConfig = ({
  configId,
  imageDimensions,
  imageUrl,
}: PhoneDesingConfigProps) => {
  const router = useRouter();
  const [renderedDimension, setRenderedDimension] = useState({
    width: imageDimensions.width / 4,
    height: imageDimensions.height / 4,
  });

  const [renderedPosition, setRenderedPosition] = useState({
    x: 150,
    y: 205,
  });
  const phoneCaseRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="container mx-auto">
      <div className="relative mt-20 grid-cols-1 lg:grid-cols-3 mb-20 pb-20">
        <div
          ref={containerRef}
          className="col-span-2 relative h-[600px] overflow-hidden w-full max-w-4xl flex items-center justify-center rounded-lg border-2 border-dashed border-b-gray-300 p-12 text-center"
        >
          <div className="relative w-60 bg-opacity-50 pointer-events-none aspect-[896/1840]">
            <AspectRatio
              ref={phoneCaseRef}
              ratio={896 / 1840}
              className="aspect-[896/1840] pointer-events-none z-50 relative"
            >
              <Image
                alt=""
                fill
                src="/phone-template.png"
                className="pointer-events-none z-50 select-none"
              />
            </AspectRatio>
            <div
              className="absolute z-40 inset-0 left-[2px] top-px bottom-px right-[2px] rounded-[32px]
            shadow-[0_0_0_99999px_rgba(229,231,235,0.7)]"
            ></div>
            <div className="bg-yellow-200  absolute left-[2px] top-px bottom-px right-[2px] rounded-[32px]"></div>
          </div>
          <Rnd
            default={{
              x: 150,
              y: 205,
              height: imageDimensions.height / 4,
              width: imageDimensions.width / 4,
            }}
            onResizeStop={(e, _, ref, __, { x, y }) => {
              setRenderedDimension({
                height: parseInt(ref.style.height.slice(0, -2)),
                width: parseInt(ref.style.width.slice(0, -2)),
              });
              setRenderedPosition({ x, y });
            }}
            onDragStop={(_, data) => {
              const { x, y } = data;
              setRenderedPosition({ x, y });
            }}
            className="absolute z-20 border-[3px] border-primary"
            lockAspectRatio
            resizeHandleComponent={{
              bottomRight: <HandleComponent />,
              bottomLeft: <HandleComponent />,
              topRight: <HandleComponent />,
              topLeft: <HandleComponent />,
            }}
          >
            <Image
              src={imageUrl}
              fill
              alt="your image"
              className="pointer-events-none"
            />
          </Rnd>
        </div>
        {/**col span1 */}
        <div className="col-span-1">asda</div>
      </div>
    </div>
  );
};

export default PhoneDesingConfig;
