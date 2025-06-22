import { prismadb } from "@/lib/prismadb";
import { NextResponse } from "next/server";
import { OrderStatus } from "@prisma/client";

export async function PATCH(request: Request) {
  try {
    const { orderId, status: statusStr } = await request.json();

    if (typeof orderId !== "string" || typeof statusStr !== "string") {
      return NextResponse.json({ message: "Invalid input" }, { status: 400 });
    }

    // Burada statusStr'nin enum içindeki bir değer olup olmadığını kontrol et
    if (!Object.values(OrderStatus).includes(statusStr as OrderStatus)) {
      return NextResponse.json({ message: "Invalid status" }, { status: 400 });
    }

    // TypeScript'e statusStr'nin OrderStatus olduğunu belirt
    const status = statusStr as OrderStatus;

    const updateOrder = await prismadb.order.update({
      where: { id: orderId },
      data: { status },
    });

    return NextResponse.json(updateOrder, { status: 200 });
  } catch (error) {
    console.error("Failed to update status:", error);
    return NextResponse.json(
      { message: "Failed to update status" },
      { status: 500 }
    );
  }
}
