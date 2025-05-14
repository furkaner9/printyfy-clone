import React from "react";
import Header from "./_components/Menu/Header";
import Footer from "./_components/Footer";

interface RoutesLayoutProps {
  children: React.ReactNode;
}

const RoutesLayout = ({ children }: RoutesLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default RoutesLayout;
