import { routes } from "@/app/contains";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="border-t-2 border-t-mycolor2 ">
      <div className="container mx-auto py-16">
        <div className="text-center space-y-8">
          <h2 className="text-2xl font-semibold ">
            Have Questions About Printy?
          </h2>
          <p className="font-light">
            We're here to help! Whether you're customizing a phone case, mug, or
            t-shirt, our support team is ready to assist with your order,
            payment, or design process. Need quick answers? Check out our FAQ or
            contact us directly!
          </p>
          <Button variant="default">Help Center</Button>
        </div>
      </div>
      <div className="mt-8 bg-mycolor2 p-8">
        <div className="container mx-auto flex flex-row">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="logo"
              width={512}
              height={120}
              className="h-10 w-auto"
            />
          </Link>
          <div className="flex flex-row gap-4 ml-auto">
            <Button size="icon" variant="mybutton">
              <Facebook />
            </Button>
            <Button size="icon" variant="mybutton">
              <Instagram />
            </Button>
            <Button size="icon" variant="mybutton">
              <Linkedin />
            </Button>
            <Button size="icon" variant="mybutton">
              <Twitter />
            </Button>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 mb-8 space-x-8 ">
        {routes.map((route) => (
          <Link href={route.href} key={route.id}>
            {route.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
