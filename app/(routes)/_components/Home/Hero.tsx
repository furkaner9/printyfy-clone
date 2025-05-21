import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        <div className="lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl lg:text-5xl font-semibold">
            Create and sell custum products
          </h2>
          <div className="mt-6 flex flex-col gap-4">
            <p className="flex items-center gap-2 text-lg">
              <Check className="text-mycolor text-lg" />
              100% free to use
            </p>
            <p className="flex items-center gap-2 text-lg">
              <Check className="text-mycolor text-lg" />
              900+ High-Quality products
            </p>
            <p className="flex items-center gap-2 text-lg">
              <Check className="text-mycolor text-lg" />
              Largest global print network
            </p>
          </div>
          <div className="mt-8 flex flex-row gap-4 lg:flex-row lg:gap-6">
            <Button variant="mybutton" size="lg">
              Start Free
            </Button>
            <Button variant="outline" size="lg">
              Ho w it works
            </Button>
          </div>
          <div className="mt-4 ">
            <p className="text-sm text-mycolor font-semibold">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-ceter items-center">
          <Image
          unoptimized
            src="/hero.gif"
            alt="hero"
            width={512}
            height={512}
            className="max-w-full h-auto"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Hero;
