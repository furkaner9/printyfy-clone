"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { useUploadThing } from "@/lib/uploadthing";
import { toast } from "sonner";
import { Rnd } from "react-rnd";
import Image from "next/image";

import { TSHİRT_BASE_PRİCE, TColor, TSize } from "./Tshirt";
import HandleComponent from "../HandleComponent";
import { SaveConfigArgs } from "./TshirtAction";
import { TshirtColor, TshirtSize, ProductType } from "@prisma/client";

interface TshirtDesignConfigProps {
  configId: string;
  imageUrl: string;
  imageDimensions: {
    width: number;
    height: number;
  };
  productType: string;
}

const TshirtDesignConfig = ({
  configId,
  imageUrl,
  imageDimensions,
  productType,
}: TshirtDesignConfigProps) => {
  const router = useRouter();
  const [renderedDimension, setRenderedDimension] = useState({
    width: imageDimensions.width / 4,
    height: imageDimensions.height / 4,
  });

  const [renderedPosition, setRenderedPosition] = useState({
    x: 100,
    y: 100,
  });

  const tshirtRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [options, setOptions] = useState<{
    color: (typeof TColor)[number];
    size: (typeof TSize)[number];
  }>({
    color: TColor[0],
    size: TSize[0],
  });

  const { startUpload } = useUploadThing("imageUploader");

  async function processAndUploadImage(): Promise<string> {
    const {
      left: tshirtLeft,
      top: tshirtTop,
      width,
      height,
    } = tshirtRef.current!.getBoundingClientRect();

    const { left: containerLeft, top: containerTop } =
      containerRef.current!.getBoundingClientRect();

    const actualX = renderedPosition.x - (tshirtLeft - containerLeft);
    const actualY = renderedPosition.y - (tshirtTop - containerTop);

    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");

    const userImage = new window.Image();
    userImage.crossOrigin = "anonymous";
    userImage.src = imageUrl;
    await new Promise((resolve) => (userImage.onload = resolve));

    ctx?.drawImage(
      userImage,
      actualX,
      actualY,
      renderedDimension.width,
      renderedDimension.height
    );

    const base64 = canvas.toDataURL("image/png");
    const base64Data = base64.split(",")[1];

    function base64ToBlob(base64: string, mimeType: string) {
      const byteCharacters = atob(base64);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      return new Blob([byteArray], { type: mimeType });
    }

    const blob = base64ToBlob(base64Data, "image/png");

    const uploadResult = await startUpload(
      [new File([blob], "cropped.png", { type: "image/png" })],
      {}
    );

    if (!uploadResult || uploadResult.length === 0 || !uploadResult[0].url) {
      throw new Error("Görsel yüklenemedi.");
    }

    return uploadResult[0].url;
  }

  const { mutate: saveConfigMutation, isPending } = useMutation({
    mutationKey: ["save-tshirt-config"],
    mutationFn: async () => {
      const croppedImageUrl = await processAndUploadImage();

      const payload: SaveConfigArgs = {
        configId,
        tshirtcolor: options.color.value as TshirtColor,
        size: options.size.value as TshirtSize,
        type: productType as ProductType,
        basePrice: TSHİRT_BASE_PRİCE,
        totalPrice: TSHİRT_BASE_PRİCE,
      };

      const response = await fetch("/api/save-config", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Yapılandırma kaydedilemedi.");
      }

      return response.json();
    },
    onError: (error) => {
      toast.error(`Hata oluştu: ${error.message}`);
    },
    onSuccess: () => {
      toast.success("Tişört yapılandırmanız kaydedildi!");
      router.push(`/catalog/${configId}/tshirt/preview`);
    },
  });

  return (
    <div ref={containerRef} className="relative w-full h-[600px] bg-gray-100">
      <div
        ref={tshirtRef}
        className="relative mx-auto w-[300px] h-[500px] overflow-hidden"
      >
        <Image
          src={options.color.timage}
          alt="Tshirt"
          fill
          className="object-contain"
        />

        <Rnd
          bounds="parent"
          size={renderedDimension}
          position={renderedPosition}
          onDragStop={(_, d) => setRenderedPosition({ x: d.x, y: d.y })}
          onResizeStop={(_, __, ref, ___, position) => {
            setRenderedDimension({
              width: parseFloat(ref.style.width),
              height: parseFloat(ref.style.height),
            });
            setRenderedPosition(position);
          }}
          enableResizing
          lockAspectRatio
          className="z-10"
          resizeHandleComponent={{
            bottomRight: <HandleComponent />,
          }}
        >
          <Image src={imageUrl} alt="Preview" fill className="object-contain" />
        </Rnd>
      </div>

      <div className="flex flex-col items-center mt-4 space-y-4">
        <div className="flex gap-2">
          {TColor.map((c) => (
            <button
              key={c.value}
              className={`w-10 h-10 rounded-full border-2 ${c.tw} ${
                options.color.value === c.value ? c.twborder : "border-gray-300"
              }`}
              onClick={() => setOptions((prev) => ({ ...prev, color: c }))}
            />
          ))}
        </div>
        <div className="flex gap-2">
          {TSize.map((s) => (
            <button
              key={s.value}
              className={`px-3 py-1 border rounded ${
                options.size.value === s.value
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
              onClick={() => setOptions((prev) => ({ ...prev, size: s }))}
            >
              {s.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => saveConfigMutation()}
          disabled={isPending}
          className="mt-4 px-6 py-2 bg-black text-white rounded hover:bg-gray-800"
        >
          {isPending ? "Kaydediliyor..." : "Kaydet"}
        </button>
      </div>
    </div>
  );
};

export default TshirtDesignConfig;
