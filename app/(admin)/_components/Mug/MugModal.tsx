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
import { MCOLORS } from "@/app/(routes)/_components/Product/Mug/Mug";
import MugDesign from "@/components/MugDesign";

interface MugModalProps {
  croppedImageUrl?: string | null;
  mugColor: string | null;
}
const MugModal = ({ croppedImageUrl, mugColor }: MugModalProps) => {
  const color = MCOLORS.find(
    (supportedcolor) => supportedcolor.value === mugColor
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

        <MugDesign imgSrc={croppedImageUrl ?? null} src={color ?? null} />
      </DialogContent>
    </Dialog>
  );
};

export default MugModal;
