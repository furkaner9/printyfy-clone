import { prismadb } from "@/lib/prismadb";
import { NextResponse } from "next/server";
import { OrderStatus } from "@prisma/client";

export async function PATCH(request: Request) {
  try {
    const { orderId, status } = await request.json();

    if (typeof orderId !== "string" || typeof status !== "string") {
      return NextResponse.json({ message: "Invalid input" }, { status: 400 });
    }

    // Enum kontrolü
    const statusEnum = status.toUpperCase() as keyof typeof OrderStatus;
    if (!Object.keys(OrderStatus).includes(statusEnum)) {
      return NextResponse.json({ message: "Invalid status" }, { status: 400 });
    }

    const updateOrder = await prismadb.order.update({
      where: { id: orderId },
      data: { status: OrderStatus[statusEnum] },
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
