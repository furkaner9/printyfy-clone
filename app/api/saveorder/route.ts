import { auth } from "@clerk/nextjs/server";
import { prismadb } from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = await auth(); // ✅ await ekledik
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const { address, configurationId, amount, paidType, status } =
      await req.json();

    const createdAddress = await prismadb.address.create({
      data: {
        name: address.name,
        street: address.street,
        city: address.city,
        postalCode: address.postalCode,
        country: address.country,
        state: address.state,
        phoneNumber: address.phoneNumber,
      },
    });

    const order = await prismadb.order.create({
      data: {
        configurationId,
        userId,
        amount,
        isPaid: true,
        paidType,
        status: status || "waiting",
        addressId: createdAddress.id,
      },
    });

    return NextResponse.json(order);
  } catch (error) {
    console.error("[Order Save ERROR]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
