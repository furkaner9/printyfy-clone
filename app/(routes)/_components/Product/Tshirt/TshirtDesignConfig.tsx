"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { useUploadThing } from "@/lib/uploadthing";
import { toast } from "sonner";
import { Rnd } from "react-rnd";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Label } from "@/components/ui/label";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowRight, Check, ChevronsUpDown } from "lucide-react";
import { RadioGroup } from "@headlessui/react";

import { TSHİRT_BASE_PRİCE, TColor, TSize } from "./Tshirt";
import HandleComponent from "../HandleComponent";
import { TshirtColor, TshirtSize, ProductType } from "@prisma/client";
import { Button } from "@/components/ui/button";
import { cn, formatPrice } from "@/lib/utils";

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
    x: 150,
    y: 205,
  });

  const tshirtRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null); // Bu ref'in de JSX içinde bir div'e bağlı olduğundan emin olun

  const [options, setOptions] = useState<{
    color: (typeof TColor)[number];
    size: (typeof TSize)[number];
  }>({
    color: TColor[0],
    size: TSize[0],
  });

  const { startUpload } = useUploadThing("imageUploader");

  async function processAndUploadImage(): Promise<string> {
    // Referansların null olup olmadığını kontrol edin ve konsola yazdırın
    console.log("processAndUploadImage çağrıldı.");
    console.log("tshirtRef.current değeri:", tshirtRef.current);
    console.log("containerRef.current değeri:", containerRef.current);

    // tshirtRef.current veya containerRef.current null ise hata fırlat
    if (!tshirtRef.current || !containerRef.current) {
      console.error(
        "HATA: tshirtRef.current veya containerRef.current null. DOM'a bağlanmamış olabilir."
      );
      throw new Error(
        "Tişört veya konteyner referansı bulunamadı. Lütfen sayfanın tamamen yüklendiğinden emin olun."
      );
    }

    // Artık '!' operatörünü güvenle kullanabiliriz çünkü null kontrolü yapıldı
    const {
      left: tshirtLeft,
      top: tshirtTop,
      width,
      height,
    } = tshirtRef.current.getBoundingClientRect();

    const { left: containerLeft, top: containerTop } =
      containerRef.current.getBoundingClientRect();

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
    mutationKey: ["save-config"],
    mutationFn: async () => {
      // processAndUploadImage fonksiyonunun içindeki null kontrolünü yaptığınızdan emin olun.
      const croppedImageUrl = await processAndUploadImage();

      const payload = {
        configId,
        tshirtcolor: options.color.value as TshirtColor,
        size: options.size.value as TshirtSize,
        // productType prop'unun 'tshirt' (küçük harf) olduğundan emin olun.
        // API'niz 'tshirt' bekliyor.
        type: productType as ProductType,
        basePrice: TSHİRT_BASE_PRİCE,
        totalPrice: TSHİRT_BASE_PRİCE, // Tişört fiyatlandırmanızda değişiklik varsa burayı güncelleyin
        croppedImageUrl,
      };

      // API'ye gönderilmeden hemen önce payload'ı konsola yazdırın
      console.log("API'ye gönderilen tişört payload'ı:", payload);

      const response = await fetch("/api/save-config", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        // Sunucudan gelen hata yanıtını yakalayın ve loglayın.
        const errorData = await response.json();
        console.error("API'den hata yanıtı alındı:", errorData);
        throw new Error(
          errorData.error ||
            "Yapılandırma kaydedilirken bilinmeyen bir hata oluştu."
        );
      }

      return response.json();
    },
    onError: (error: any) => {
      toast.error(`Hata oluştu: ${error.message}`);
      console.error("Mutasyon başarısız oldu (onError):", error);
    },
    onSuccess: () => {
      toast.success("Tişört yapılandırmanız başarıyla kaydedildi!");
      router.push(`/catalog/${configId}/tshirt/preview`);
    },
  });

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-20 mb-20 pb-20">
        {/* Sol: Tişört tasarım alanı */}
        {/* containerRef'in buraya atanmış olduğundan emin olun */}
        <div
          ref={containerRef}
          className="col-span-2 flex justify-center items-center h-[600px] bg-gray-300 border border-gray-300 rounded-lg p-6 relative"
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {/* tshirtRef'in buraya atanmış olduğundan emin olun */}
            <div
              ref={tshirtRef}
              className="relative w-[300px] aspect-[770/1600] "
            >
              <AspectRatio
                ratio={770 / 1600}
                className="w-full h-full relative"
              >
                <Image
                  alt="T-shirt"
                  src={options.color.timage}
                  fill
                  sizes="770/1600"
                  className="object-contain select-none pointer-events-none"
                />
              </AspectRatio>

              <Rnd
                bounds="parent"
                size={{ width: 150, height: 280 }}
                position={{
                  x: (300 - 150) / 2,
                  y: ((300 * 1600) / 770 - 280) / 2,
                }} // Ortalamak için
                disableDragging
                enableResizing={false}
                className="absolute z-30 border-[3px] border-primary"
              >
                <Image
                  src={imageUrl}
                  fill
                  alt="your image"
                  className="pointer-events-none object-cover"
                />
              </Rnd>

              {/* Tasarım alanı */}
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none">
                <div className="w-[150px] h-[280px] border-2 border-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Sağ: Ayarlar paneli */}
        <div className="h-[600px] bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden ">
          <ScrollArea className="flex-1 overflow-auto">
            <div className="px-8 py-8">
              <h2 className="text-2xl font-semibold mb-6">
                Customize your case
              </h2>

              <div className="flex flex-col gap-6">
                <RadioGroup
                  value={options.color}
                  onChange={(val) => {
                    setOptions((prev) => ({ ...prev, color: val }));
                  }}
                >
                  <Label>Color: {options.color.label}</Label>
                  <div className="flex flex-row gap-4 mt-4">
                    {TColor.map((color) => (
                      <RadioGroup.Option
                        key={color.label}
                        value={color}
                        className={({ active, checked }) =>
                          cn(
                            "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full border-2 p-0.5",
                            {
                              "ring-2 ring-offset-2 ring-black":
                                active || checked,
                            }
                          )
                        }
                      >
                        <span
                          className={cn(
                            "h-8 w-8 rounded-full border border-black border-opacity-10",
                            color.tw
                          )}
                        />
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              <div className="relative flex flex-col gap-3 w-full mt-6">
                <Label>Size</Label>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      className="w-full justify-between"
                    >
                      {options.size.label}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {TSize.map((size) => (
                      <DropdownMenuItem
                        key={size.label}
                        onClick={() => {
                          setOptions((prev) => ({ ...prev, size }));
                        }}
                        className={cn(
                          "flex w-96 md:w-72 sm:w-72 xl:w-96 text-sm items-center",
                          {
                            "bg-zinc-200": size.label === options.size.label,
                          }
                        )}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            size.label === options.size.label
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                        {size.label}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </ScrollArea>

          <div className="border-t border-gray-200 px-8 h-16 bg-white flex items-center justify-end">
            <div className="w-full flex justify-between items-center">
              <p className="font-semibold">{formatPrice(TSHİRT_BASE_PRİCE)}</p>
              <Button
                variant="mybutton"
                size="sm"
                className="w-40"
                disabled={isPending}
                onClick={() => {
                  console.log("Continue clicked");
                  saveConfigMutation();
                }}
              >
                Continue
                <ArrowRight className="h-4 w-4 ml-1 inline" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TshirtDesignConfig;
