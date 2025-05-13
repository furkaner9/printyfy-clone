import { Menu, MenuIcon } from "lucide-react";
import React from "react";
import Image from "next/image";
import { routes } from "@/app/contains";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <div className="h-16 shadow-md bg-mycolor-2 w-full fixed z- z-50">
      <div className="container mx-auto flex flex-row items-center justify-between p-3">
        <div className="lg:hidden flex items-center">
          <MenuIcon />
        </div>
        <div className="flex items-center mr-auto">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="logo"
              width={512}
              height={120}
              className="h-10 w-auto"
            />
          </Link>
        </div>
        <nav className="hidden lg:flex mr-auto ml-16 space-x-8">
          {routes.map((route) => (
            <Link href={route.href} key={route.id}>
              {route.title}
            </Link>
          ))}
        </nav>
        <div className="space-x-4">
          <Link href="/login">
            <Button variant={"mybutton"}>Login</Button>
          </Link>
          <Link href="/signup">
            <Button variant="default">Sign Up</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
