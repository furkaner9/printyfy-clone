"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useRef, useState, useEffect } from "react"; // useEffect eklendi
import { toast } from "sonner";
import { Rnd } from "react-rnd";
import HandleComponent from "../HandleComponent";
import { ScrollArea } from "@/components/ui/scroll-area";
import { RadioGroup } from "@headlessui/react";
import {
  COLORS,
  FINISHES,
  MATERIALS,
  MODEL,
  PHONE_BASE_PRICE,
} from "./PhoneCase";
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
import { SaveConfigArgs } from "./PhoneAction"; // Sadece tipi import ediyoruz
import { useUploadThing } from "@/lib/uploadthing";
import { useMutation } from "@tanstack/react-query";
import {
  CaseColor,
  CaseFinish,
  CaseMaterial,
  PhoneModel,
  ProductType,
} from "@/lib/generated/prisma"; // Prisma tarafından oluşturulan tipleri kullanabilirsiniz

interface PhoneDesingConfigProps {
  configId: string;
  imageUrl: string;
  imageDimensions: {
    width: number;
    height: number;
  };
  productType: string;
}

const PhoneDesingConfig = ({
  configId,
  imageDimensions,
  imageUrl,
  productType,
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

  const [options, setOptions] = useState<{
    color: (typeof COLORS)[number];
    model: (typeof MODEL)[number];
    material: (typeof MATERIALS)[0]["options"][number];
    finish: (typeof FINISHES)[0]["options"][number];
  }>({
    color: COLORS[0],
    model: MODEL[0],
    material: MATERIALS[0].options[0],
    finish: FINISHES[0].options[0],
  });

  const { startUpload } = useUploadThing("imageUploader");

  async function processAndUploadImage(): Promise<string> {
    const {
      left: caseLeft,
      top: caseTop,
      width,
      height,
    } = phoneCaseRef.current!.getBoundingClientRect();

    const { left: containerLeft, top: containerTop } =
      containerRef.current!.getBoundingClientRect();

    const leftOffset = caseLeft - containerLeft;
    const topOffset = caseTop - containerTop;

    const actualX = renderedPosition.x - leftOffset;
    const actualY = renderedPosition.y - topOffset;

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

    // Düzeltme burada: startUpload'a ikinci argüman olarak boş bir obje geçiyoruz
    const uploadResult = await startUpload(
      [new File([blob], "cropped.png", { type: "image/png" })],
      {} // İkinci argüman: metadata (şu an boş bir obje)
    );

    if (!uploadResult || uploadResult.length === 0 || !uploadResult[0].url) {
      throw new Error("Resim yüklenemedi veya URL alınamadı.");
    }

    const fileResponse = uploadResult[0];

    return fileResponse.url;
  }

  const { mutate: saveConfigMutation, isPending } = useMutation({
    mutationKey: ["save-config"],
    mutationFn: async () => {
      // Önce resmi işle ve UploadThing'e yükle, URL'ini al
      const croppedImageUrl = await processAndUploadImage();

      // API rotasına gönderilecek payload'ı oluştur
      const payload: SaveConfigArgs = {
        configId,
        casecolor: options.color.value as CaseColor,
        casemodel: options.model.value as PhoneModel,
        casematerial: options.material.value as CaseMaterial,
        casefinish: options.finish.value as CaseFinish,
        type: productType as ProductType, // Ensure productType is valid
        croppedImageUrl, // Yüklenen resmin URL'ini gönder
        imageX: renderedPosition.x,
        imageY: renderedPosition.y,
        imageWidth: renderedDimension.width,
        imageHeight: renderedDimension.height,
      };

      // API rotasına POST isteği gönder
      // Bu fetch isteğini ayrı bir API route (örneğin /api/save-phone-config) üzerinden yaptığınızdan emin olun.
      // PhoneAction.ts'yi doğrudan çağırmayın.
      const response = await fetch("/api/save-config", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.error || "Yapılandırma kaydedilirken bir hata oluştu."
        );
      }

      return response.json(); // Başarılı yanıtı döndür
    },
    onError: (error) => {
      console.error("Mutation onError:", error);
      toast.error(`Bir şeyler yanlış gitti: ${error.message}`);
    },
    onSuccess: () => {
      console.log("Mutation onSuccess");
      toast.success("Telefon kılıfınız başarıyla yapılandırıldı!");
      router.push(`/`); // Başarılı olursa preview sayfasına yönlendirin
    },
  });
  return (
    <div className="container mx-auto">
      <div className="relative mt-20 grid grid-cols-1 lg:grid-cols-3 mb-20 pb-20">
        {/* Görsel Alanı */}
        <div
          ref={containerRef}
          className="col-span-2 relative h-[600px] overflow-hidden w-full max-w-4xl flex items-center justify-center rounded-lg border-2 border-dashed border-b-gray-300 p-12 text-center"
        >
          <div className="relative w-60 bg-opacity-50 pointer-events-none aspect-[896/1831]">
            <AspectRatio
              ref={phoneCaseRef}
              ratio={896 / 1831}
              className="aspect-[896/1831] pointer-events-none z-50 relative"
            >
              <Image
                alt="Phone template"
                fill
                src="/phone-template.png"
                className="pointer-events-none z-50 select-none"
              />
            </AspectRatio>
            <div className="absolute z-40 inset-0 left-[2px] top-px bottom-px right-[2px] rounded-[32px] shadow-[0_0_0_99999px_rgba(229,231,235,0.7)]" />
            <div
              className={cn(
                "absolute inset-0 left-[3px] top-px right-[3px] bottom-px rounded-[32px]",
                options.color.tw
              )}
            ></div>
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
                height: parseInt(ref.style.height),
                width: parseInt(ref.style.width),
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

        {/* Ayarlar Alanı */}
        <div className="col-span-1 h-[600px] relative flex flex-col bg-white">
          <ScrollArea className="relative flex-1 overflow-auto">
            <div className="px-8 pb-12 pt-8">
              <h2 className="font-semibold text-2xl mb-6">
                Customize your case
              </h2>

              {/* Color Seçimi */}
              <div className="flex flex-col gap-6">
                <RadioGroup
                  value={options.color}
                  onChange={(val) => {
                    setOptions((prev) => ({ ...prev, color: val }));
                  }}
                >
                  <Label>Color: {options.color.label}</Label>
                  <div className="flex flex-row gap-4 mt-4 space-x-3">
                    {COLORS.map((color) => (
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

                <div className="relative flex flex-col gap-3 w-full">
                  <Label>Model</Label>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        role="combobox"
                        className="w-full justify-between"
                      >
                        {options.model.label}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {MODEL.map((model) => (
                        <DropdownMenuItem
                          key={model.label}
                          onClick={() => {
                            setOptions((prev) => ({ ...prev, model }));
                          }}
                          className={cn(
                            "flex w-72 lg:w-96 sm:w-72 text-sm gap-1 items-center ",
                            {
                              "bg-zinc-200":
                                model.label === options.model.label,
                            }
                          )}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              model.label === options.model.label
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {model.label}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <div className="flex flex-col gap-6 mt-6">
                  {[...MATERIALS, ...FINISHES].map((group) => (
                    <RadioGroup
                      key={group.name}
                      value={options[group.name as "material" | "finish"]}
                      onChange={(val) =>
                        setOptions((prev) => ({
                          ...prev,
                          [group.name]: val,
                        }))
                      }
                    >
                      <Label className="mb-2 block">
                        {group.name.charAt(0).toUpperCase() +
                          group.name.slice(1)}
                      </Label>
                      <div className="flex flex-col gap-2">
                        {group.options.map((option) => (
                          <RadioGroup.Option
                            key={option.value}
                            value={option}
                            className={({ checked }) =>
                              cn(
                                "flex items-start p-4 border rounded-md cursor-pointer transition-colors",
                                {
                                  "border-black bg-gray-100": checked,
                                  "border-gray-300": !checked,
                                }
                              )
                            }
                          >
                            {({ checked }) => (
                              <div className="flex flex-col">
                                <span className="font-medium">
                                  {option.label}
                                </span>
                                {option.descriptions && (
                                  <span className="text-sm text-gray-500">
                                    {option.descriptions}
                                  </span>
                                )}
                              </div>
                            )}
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  ))}
                </div>
              </div>
            </div>
          </ScrollArea>
          <div className="w-full px-8 h-16 bg-white">
            <div className="h-px w-full bg-zinc-200"></div>
            <div className="w-full h-full flex justify-end items-center ">
              <div className="w-full flex gap-6 items-center">
                <p className="font-semibold">
                  {formatPrice(
                    (PHONE_BASE_PRICE +
                      options.finish.price +
                      options.material.price) /
                      100
                  )}
                </p>
                <Button
                  variant="mybutton"
                  size="sm"
                  className="w-full"
                  disabled={isPending} // isPending'i kullanın
                  onClick={() => {
                    // saveConfigMutation'ı çağırın. Argümanlar mutationFn içinde belirlenecek.
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
    </div>
  );
};

export default PhoneDesingConfig;
