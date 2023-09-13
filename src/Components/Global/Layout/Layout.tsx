import React, { ReactNode } from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
interface LayoutProps {
  children: ReactNode;
}
export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative">
      <Header />
      <div className="">{children} </div>
      <Footer />
    </div>
  );
};
