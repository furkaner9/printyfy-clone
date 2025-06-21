"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { navLinks } from "./Sidebar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <div className="lg:hidden block">
          <Menu />
        </div>
      </SheetTrigger>
      <SheetContent className="bg-slate-800 text-white">
        <div className="w-full h-12 justify-center">
          {navLinks.map((link) => (
            <Button
              asChild
              variant="link"
              key={link.route}
              className="w-full h-12 justify-center"
            >
              div
              <Link href={link.route}>
                <div className="flex items-center text-white w-full gap-2 text-lg">
                  <p>{link.label}</p>
                </div>
              </Link>
            </Button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
