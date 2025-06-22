import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Eye } from "lucide-react";
import PhoneDesign from "@/components/PhoneDesign";
import { cn } from "@/lib/utils";
import { COLORS } from "@/app/(routes)/_components/Product/PhoneCase/PhoneCase";
import { TColor } from "@/app/(routes)/_components/Product/Tshirt/Tshirt";
import MugDesign from "@/components/MugDesign";
import TshirtDesign from "@/components/TshirtDesign";

interface TshirtModalProps {
  croppedImageUrl?: string | null;
  tshirtColor: string | null;
}
const TshirtModal = ({ croppedImageUrl, tshirtColor }: TshirtModalProps) => {
  const color = TColor.find(
    (supportedcolor) => supportedcolor.value === tshirtColor
  )?.timage;

  return (
    <Dialog>
      <DialogTrigger>
        <Eye />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[450px]">
        <DialogHeader>
          <DialogTitle>Phone Case Preview</DialogTitle>
          <DialogDescription>
            This is a preview of your phone case design.
          </DialogDescription>
        </DialogHeader>

        <TshirtDesign imgSrc={croppedImageUrl ?? null} src={color ?? null} />
      </DialogContent>
    </Dialog>
  );
};

export default TshirtModal;
