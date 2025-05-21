import { prismadb } from "@/lib/prismadb";

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const config = await prismadb.configuration.create({
      data: {
        caseColor: data.casecolor,
        caseFinish: data.casefinish,
        caseMaterial: data.casematerial,
        caseModel: data.casemodel,
        type: data.type,
        imageUrl: data.imageUrl,
        width: data.width,
        height: data.height,
        croppedImageUrl: data.croppedImageUrl ?? null,
      },
    });

    return NextResponse.json(config, { status: 201 });
  } catch (error) {
    console.error("API save-config error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
