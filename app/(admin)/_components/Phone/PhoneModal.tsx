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

interface PhoneModalProps {
  croppedImageUrl?: string | null;
  casecolor?: string | null;
}

const PhoneModal = ({ croppedImageUrl, casecolor }: PhoneModalProps) => {
  const tw = COLORS.find(
    (supportedcolor) => supportedcolor.value === casecolor
  )?.tw;
  return (
    <Dialog>
      <DialogTrigger>
        <Eye />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[450px]">
        <PhoneDesign
          className={cn(
            `${tw}`,
            "max-w-[200px] rounded-[28px] md:max-w-full md:rounded-[68px] lg:rounded-[68px] xl:rounded-[68px]"
          )}
          imgSrc={croppedImageUrl}
        />
      </DialogContent>
    </Dialog>
  );
};

export default PhoneModal;
