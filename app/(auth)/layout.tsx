import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}
const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="flex gap-2 max-h-screen relative">
      <div className="absolute top-2 left-2">
        <Link href="/">
          <X className="text-slate-700" />
        </Link>
      </div>
      <div className="w-full  md:w-1/2 flex flex-col items-center justify-center h-screen">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="logo"
            width={512}
            height={120}
            className="h-10 w-auto"
          />
        </Link>

        <div className="text-center">
          <h2 className="font-semibold text-2xl">Welcome Back</h2>
        </div>

        {children}
      </div>
      <div className="hidden md:flex w-1/2 h-screen">
        <Image
          alt="auth"
          src="/auth.jpg"
          width={1080}
          height={1920}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default AuthLayout;
