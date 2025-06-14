"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useRef, useState, useEffect, use } from "react"; // useEffect eklendi
import { toast } from "sonner";
import { Rnd } from "react-rnd";
import HandleComponent from "../HandleComponent";
import { ScrollArea } from "@/components/ui/scroll-area";
import { RadioGroup } from "@headlessui/react";
import { TColor, TSHİRT_BASE_PRİCE, TSize } from "./Tshirt";
import { Label } from "@/components/ui/label";
import { cn, formatPrice } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, ChevronsUpDown } from "lucide-react";
// _saveConfig import'ı kaldırıldı, SaveConfigArgs tipi ise PhoneAction'dan alınacak
import { SaveConfigArgs } from "./TshirtAction"; // Sadece tipi import ediyoruz
import { useUploadThing } from "@/lib/uploadthing";
import { useMutation } from "@tanstack/react-query";
import { number } from "zod";
import { start } from "repl";

interface TshirtDesignConfigProps {
  configId: string;
  imageUrl: string;
  imageDimensions: { width: number; height: number };
  productType: string;
}

const TshirtDesignConfig = ({
  configId,
  imageUrl,
  imageDimensions,
  productType,
}: TshirtDesignConfigProps) => {
  const router = useRouter();
  const { startUpload } = useUploadThing("imageUploader"); // Provide the endpoint name as argument

  // Define default image dimensions

  const [renderedDimension, setRenderedDimension] = useState({
    width: imageDimensions.width / 4,
    height: imageDimensions.height / 4,
  });

  const [renderedPosition, setRenderedPosition] = useState({
    x: 150,
    y: 205,
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

  async function saveConfigurations() {
    const {
      left: caseLeft,
      top: caseTop,
      width,
      height,
    } = tshirtRef.current!.getBoundingClientRect();

    const { left: containerLeft, top: containerTop } =
      containerRef.current!.getBoundingClientRect();

      const leftOffset=caseLeft - containerLeft;
      const topOffset=caseTop - containerTop;

      const actualX= renderedPosition.x + leftOffset;
      const actualY= renderedPosition.y + topOffset;

      const canvas =document.createElement("canvas");
      canvas.width=width;
      canvas.height=height;
      const ctx = canvas.getContext("2d");

      const userImage=new window.Image();
      userImage.crossOrigin = "anonymous";
      userImage.src=imageUrl;
      await new Promise((resolve) => {userImage.onload = resolve;});

      ctx?.drawImage(
        userImage,
        actualX,
        actualY,
        renderedDimension.width,
        renderedDimension.height
        
      )
      const base64 =canvas.toDataURL();
      const base64Data=base64.split(",")[1];

      const blob = base64ToBlob(base64Data, "image/png");
      const file = new File([blob], "filename.png", { type: "image/png" });
      await startUpload([file], { configId });

      // Helper function to convert base64 to Blob
      function base64ToBlob(base64: string, mime: string) {
        const byteChars = atob(base64);
        const byteNumbers = new Array(byteChars.length);
        for (let i = 0; i < byteChars.length; i++) {
          byteNumbers[i] = byteChars.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        return new Blob([byteArray], { type: mime });
      }



  }

  return <div></div>;
};

export default TshirtDesignConfig;
