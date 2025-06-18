import { prismadb } from "@/lib/prismadb";
import { stripe } from "@/lib/stripe";
import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req: Request) {
  try {
    const sig = req.headers.get("stripe-signature");
    if (!sig) {
      return new NextResponse("Stripe signature not found", { status: 400 });
    }

    const body = await req.text();

    const event = await stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );

    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;
      const orderData = JSON.parse(session.metadata?.orderData || "{}");

      if (orderData) {
        const { address, configurationId, amount, paidType, status, userId } =
          orderData;

        if (!userId) {
          console.error("User ID not found in orderData");
          return new NextResponse("User ID not found", { status: 400 });
        }

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

        return NextResponse.json({ received: true });
      }
    }

    return new NextResponse("Event not handled", { status: 200 });
  } catch (error) {
    console.error("Stripe webhook error:", error);
    return new NextResponse("Webhook handler failed", { status: 500 });
  }
}
