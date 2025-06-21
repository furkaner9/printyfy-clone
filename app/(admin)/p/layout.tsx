import { Button } from "@/components/ui/button";
import { currentUser } from "@clerk/nextjs/server";
import { Menu } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import React, { ReactNode } from "react";
import MobileMenu from "../_components/MobileMenu";
import Sidebar from "../_components/Sidebar";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = async ({ children }: AdminLayoutProps) => {
  const user = await currentUser();
  const ADMIN_USER = process.env.ADMIN_USER;
  if (!user || ADMIN_USER !== user?.id) {
    notFound();
  }
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 h-screen flex flex-col">
        <header className="bg-gray-800 text-white flex justify-between items-center p-4">
          <div className="hidden lg:block">Admin Panel</div>
          <MobileMenu />
          <Link href="/">
            <Button variant="mybutton">Go to Home</Button>
          </Link>
        </header>
        <main className="flex-1 p-6 bg-gray-100 overflow-auto">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
