"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { toast } from "sonner";
import { Rnd } from "react-rnd";
import HandleComponent from "../HandleComponent";
import { ScrollArea } from "@/components/ui/scroll-area";
import { RadioGroup } from "@headlessui/react";
import { COLORS, FINISHES, MATERIALS, MODEL } from "./PhoneCase";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronsUpDown } from "lucide-react";

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

  return (
    <div className="container mx-auto">
      <div className="relative mt-20 grid grid-cols-1 lg:grid-cols-3 mb-20 pb-20">
        {/* Görsel Alanı */}
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
            <div className="absolute z-40 inset-0 left-[2px] top-px bottom-px right-[2px] rounded-[32px] shadow-[0_0_0_99999px_rgba(229,231,235,0.7)]" />
            <div className="bg-yellow-200 absolute left-[2px] top-px bottom-px right-[2px] rounded-[32px]" />
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

                <div className="relative flex  flex-col gap-3 w-full">
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
                            "flex w-72 lg:w-96 text-sm gap-1 items-center ",
                            {
                              "bg-zinc-200":
                                model.label === options.model.label,
                            }
                          )}
                        >
                          {model.label}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default PhoneDesingConfig;
