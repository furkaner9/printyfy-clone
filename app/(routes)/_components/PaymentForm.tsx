"use client";
import React, { useState } from "react";
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

interface PaymentFormProps {
  configId: string;
  product: string; // "phone", "tshirt", "mug" gibi değerler alacak
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
    expiryData: z.string().optional(),
    cvv: z.string().optional(),
  })
  .refine(
    (data) => {
      if (data.paymentMethod === "iyzico") {
        return data.cardNumber && data.expiryData && data.cvv;
      }
      return true;
    },
    {
      path: ["cardNumber"],
      message: "Card details are required when using Iyzico",
    }
  );

const PaymentForm = ({ configId, product }: PaymentFormProps) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<string>("stripe");

  const paymentMethods = [
    { label: "Stripe", value: "stripe", imgSrc: "/stripe.jpg" },
    { label: "Iyzico", value: "iyzico", imgSrc: "/iyzico.jpg" },
  ];

  const form = useForm<z.infer<typeof paymentSchema>>({
    resolver: zodResolver(paymentSchema),
    defaultValues: {
      name: "",
      street: "",
      city: "",
      postalCode: "",
      country: "",
      state: "",
      phoneNumber: "",
      paymentMethod: "stripe",
      cardNumber: "",
      expiryData: "",
      cvv: "",
    },
  });

  const watchPaymentMethod = useWatch({
    control: form.control,
    name: "paymentMethod",
  });
  function onSubmit(values: z.infer<typeof paymentSchema>) {
    console.log(values);
  }

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
                name="expiryData"
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
