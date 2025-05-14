import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { routes } from "@/app/contains";
import Link from "next/link";

const MobileMenu = () => {
  return (
    <div className="lg:hidden flex items-center">
      <Sheet>
        <SheetTrigger>
          <MenuIcon />
        </SheetTrigger>
        <SheetContent side={"left"}>
          <SheetHeader>
            <SheetTitle>Welcome PrintyFy </SheetTitle>
          </SheetHeader>
          <div className="flex flex-col mt-8 p-4 space-y-6">
            {routes.map((route) => (
              <Link href={route.href} key={route.id}>
                {route.title}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
