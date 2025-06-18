"use client";
import React, { use, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup } from "@headlessui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { register } from "module";
import axios from "axios";
import { PhoneNumber } from "@clerk/nextjs/server";
interface PaymentFormProps {
  configId: string;
  product: string; // "phone", "tshirt", "mug" gibi değerler alacak
  totalPrice: string;
  userId: string;
}
const paymentSchema = z
  .object({
    name: z.string().min(2, { message: "Name must be at least 2 characters " }),
    street: z
      .string()
      .min(2, { message: "Street must be at least 2 characters" }),
    city: z.string().min(2, { message: "City must be at least 2 characters" }),
    postalCode: z
      .string()
      .min(2, { message: "Postal code must be at least 2 characters" }),
    country: z.string().min(1, { message: "Count must be at least 1" }),
    state: z
      .string()
      .min(2, { message: "State must be at least 2 characters" }),
    phoneNumber: z
      .string()
      .min(2, { message: "Phone number must be at least 2 characters" }),
    paymentMethod: z.string().min(1, { message: "Payment method is required" }),
    cardNumber: z.string().optional(),
    expiryDate: z.string().optional(),
    cvv: z.string().optional(),
  })
  .refine(
    (data) => {
      if (data.paymentMethod === "iyzico") {
        return data.cardNumber && data.expiryDate && data.cvv;
      }
      return true;
    },
    {
      path: ["cardNumber"],
      message: "Card details are required when using Iyzico",
    }
  );

const PaymentForm = ({
  configId,
  product,
  totalPrice,
  userId,
}: PaymentFormProps) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<string>("stripe");

  const [response, setResponse] = useState(null);
  const router = useRouter();

  const paymentMethods = [
    { label: "Stripe", value: "stripe", imgSrc: "/stripe.jpg" },
    { label: "Iyzico", value: "iyzico", imgSrc: "/iyzico.jpg" },
  ];

  const form = useForm<z.infer<typeof paymentSchema>>({
    resolver: zodResolver(paymentSchema),
    defaultValues: {
      name: "Furkan",
      street: "Yildirim",
      city: "Bursa",
      postalCode: "1600",
      country: "Turkey",
      state: "Akıncılar",
      phoneNumber: "555444444",
      paymentMethod: "stripe",
      cardNumber: "5526080000000006",
      expiryDate: "10/29",
      cvv: "121",
    },
  });

  const watchPaymentMethod = useWatch({
    control: form.control,
    name: "paymentMethod",
  });
  const onSubmit = async (data: z.infer<typeof paymentSchema>) => {
    if (
      data.paymentMethod === "iyzico" &&
      data.cardNumber &&
      data.expiryDate &&
      data.cvv
    ) {
      try {
        const [month, year] = data.expiryDate.split("/");

        const paymentCard = {
          cardHolderName: data.name,
          cardNumber: data.cardNumber,
          expireMonth: month.trim(),
          expireYear: year.trim(),
          cvc: data.cvv,
          registerCard: "0", // "registerdCard" yazım hatası düzeltildi
        };

        const buyer = {
          id: userId,
          name: data.name,
          surname: "Eric",
          gsmNumber: data.phoneNumber,
          email: "john.doe@example.com", // yazım düzeltildi
          identityNumber: "74300864791", // "identitiyNumber" düzeltildi
          lastLoginDate: "2025-10-23 00:00:00",
          registrationAddress: `${data.state} ${data.street}`,
          ip: "85.34.78.112",
          city: data.city,
          country: data.country,
          zipCode: data.postalCode, // tutarlılık için PascalCase veya camelCase tercih edebilirsin
        };

        const shippingAddress = {
          contactName: data.name,
          country: data.country,
          city: data.city,
          address: ` ${data.state} ${data.street}`,
          zipCode: data.postalCode,
        };

        const billingAddress = {
          contactName: data.name,
          country: data.country,
          city: data.city,
          address: ` ${data.state} ${data.street}`,
          zipCode: data.postalCode,
        };

        const basketItems = [
          {
            id: configId,
            name: product,
            category1: "Collectibles",
            category2: "Accessories",
            itemType: "PHYSICAL",
            price: totalPrice,
          },
        ];

        const paymentData = {
          price: totalPrice,
          paidPrice: totalPrice,
          currency: "TRY",
          basketId: "B67832",
          paymentCard,
          buyer,
          billingAddress, // yazım düzeltildi
          shippingAddress,
          basketItems,
        };

        const response = await axios.post(
          "http://localhost:3001/api/payment",
          paymentData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.data.status === "success") {
          const orderData = {
            configurationId: configId,
            userId: userId,
            amount: totalPrice,
            paidType: "iyzico",
            status: "waiting",
            address: {
              name: data.name,
              street: data.street,
              city: data.city,
              postalCode: data.postalCode,
              state: data.state,
              PhoneNumber: data.phoneNumber,
            },
          };
        } else {
          console.log("Error");
        }
      } catch (error) {}
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 bg-gray-100 p-6 rounded-lg shadow-md"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your name" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your City" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="street"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Street</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your street" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="postalCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Posttal Code</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your postal code" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your country" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="state"
          render={({ field }) => (
            <FormItem>
              <FormLabel>State</FormLabel>
              <FormControl>
                <Input placeholder="Enter your state" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phoen Number</FormLabel>
              <FormControl>
                <Input placeholder="Enter your phone number" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="paymentMethod"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Payment Method</FormLabel>
              <FormControl>
                <RadioGroup
                  value={selectedPaymentMethod}
                  onChange={(val) => {
                    setSelectedPaymentMethod(val);
                    field.onChange(val);
                  }}
                  className="flex flex-row mt-4 gap-4"
                >
                  {paymentMethods.map((method) => (
                    <RadioGroup.Option
                      key={method.value}
                      value={method.value}
                      className={({ active, checked }) =>
                        `relative -m-0.5 flex cursor-pointer items-center border-2 ${
                          active || checked
                            ? "border-mycolor"
                            : "border-gray-300"
                        }`
                      }
                    >
                      <div>
                        <Image
                          src={method.imgSrc}
                          alt=""
                          width={150}
                          height={100}
                        />
                      </div>
                    </RadioGroup.Option>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {watchPaymentMethod === "iyzico" && (
          <>
            <FormField
              control={form.control}
              name="cardNumber"
              rules={{ required: "Card number is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Card Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your card number" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="expiryDate"
                rules={{ required: "Expiry date is required" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Expiry Date</FormLabel>
                    <FormControl>
                      <Input placeholder="MM/YY" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="cvv"
                rules={{ required: "CVV is required" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>CVV</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your CVV" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </>
        )}

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default PaymentForm;
