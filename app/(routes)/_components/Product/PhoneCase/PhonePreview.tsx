import { Configuration } from "@prisma/client";
import React from "react";
interface PhonePreviewProps {
  configurations: Configuration;
}

const PhonePreview = ({ configurations }: PhonePreviewProps) => {
  return (
    <div className="container mx-auto mt-20 flex flex-col items-center md:grid text-sm">
      <div className="md:col-span-3"></div>
      <div className="md:col-span-9"></div>
    </div>
  );
};

export default PhonePreview;
