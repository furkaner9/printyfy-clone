import { NextResponse } from "next/server";
import {
  saveConfig as savePhoneConfig,
  SaveConfigArgs as PhoneSaveConfigArgs,
} from "@/app/(routes)/_components/Product/PhoneCase/PhoneAction";

import {
  saveConfig as saveTshirtConfig,
  SaveConfigArgs as TshirtSaveConfigArgs,
} from "@/app/(routes)/_components/Product/Tshirt/TshirtAction"; // yolu kontrol et

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { type } = body;

    if (type === "phoneCase") {
      const {
        configId,
        casecolor,
        casefinish,
        casematerial,
        casemodel,
        croppedImageUrl,
        imageX,
        imageY,
        imageWidth,
        imageHeight,
        basePrice,
        totalPrice,
      } = body;

      const args: PhoneSaveConfigArgs = {
        configId,
        casecolor,
        casefinish,
        casematerial,
        casemodel,
        type,
        croppedImageUrl,
        imageX,
        imageY,
        imageWidth,
        imageHeight,
        basePrice,
        totalPrice,
      };

      await savePhoneConfig(args);
    } else if (type === "tshirt") {
      const { configId, tshirtcolor, size, basePrice, totalPrice } = body;

      const args: TshirtSaveConfigArgs = {
        configId,
        tshirtcolor,
        size,
        type,
        basePrice,
        totalPrice,
      };

      await saveTshirtConfig(args);
    } else if (type === "mug") {
      const { configId, mugColor, basePrice, totalPrice } = body;

      // Import the saveConfig function from MugActions
      const {
        saveConfig,
      } = require("@/app/(routes)/_components/Product/Mug/MugActions");

      // Create the arguments object
      const args = {
        configId,
        mugColor,
        type,
        basePrice,
        totalPrice,
      };

      // Call the saveConfig function with the arguments
      await saveConfig(args);
    } else {
      return NextResponse.json(
        { error: "Geçersiz ürün tipi!" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Yapılandırma başarıyla kaydedildi!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("API Hatası:", error);
    const message =
      error instanceof Error
        ? error.message
        : "Yapılandırma kaydedilirken bilinmeyen bir hata oluştu.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
