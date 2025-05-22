// app/api/save-config/route.ts
import { NextResponse } from "next/server";
import {
  saveConfig,
  SaveConfigArgs,
} from "@/app/(routes)/_components/Product/PhoneCase/PhoneAction"; // Bu yolu kontrol edin!

export async function POST(req: Request) {
  // Sadece POST metodu
  try {
    const body = await req.json();

    // İstek gövdesinden gelen verileri güvenli bir şekilde alın
    const {
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
    } = body;

    // saveConfig fonksiyonuna göndereceğiniz argümanları oluşturun
    const args: SaveConfigArgs = {
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
    };

    // Sunucu tarafı fonksiyonunu çağırın
    await saveConfig(args);

    // Başarılı yanıt gönderin
    return NextResponse.json(
      { message: "Yapılandırma başarıyla kaydedildi!" },
      { status: 200 }
    );
  } catch (error) {
    // Hata durumunda konsola loglayın ve hata yanıtı gönderin
    console.error("API Hatası:", error);
    // Hatanın türünü kontrol etmek iyi bir pratik olabilir
    let errorMessage = "Yapılandırma kaydedilirken bilinmeyen bir hata oluştu.";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
