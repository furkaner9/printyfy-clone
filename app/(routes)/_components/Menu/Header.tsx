import { Menu, MenuIcon, User } from "lucide-react";
import React from "react";
import Image from "next/image";
import { routes } from "@/app/contains";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import MobileMenu from "./MobileMenu";
import UserMenu from "./UserMenu";

const Header = () => {
  return (
    <div className="h-16 shadow-md bg-mycolor2 w-full fixed z-50">
      <div className="container mx-auto flex flex-row items-center justify-between p-2">
        <div className="lg:hidden flex items-center">
          <MobileMenu />
        </div>
        <div className="flex items-center mr-auto">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="logo"
              width={512}
              height={120}
              className="h-8 w-auto"
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
        <UserMenu />
      </div>
    </div>
  );
};

export default Header;
