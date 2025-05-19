import React from "react";
import Header from "./_components/Menu/Header";
import Footer from "./_components/Footer";
import Providers from "@/providers/Providers";

interface RoutesLayoutProps {
  children: React.ReactNode;
}

const RoutesLayout = ({ children }: RoutesLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header />

      <main className="flex-grow pt-16">
        <Providers>{children}</Providers>
      </main>
      <Footer />
    </div>
  );
};

export default RoutesLayout;
