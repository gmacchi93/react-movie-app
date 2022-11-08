import React, { ReactNode } from "react";
import ScrollToTop from "../common/ScrollToTop";
import Footer from "../Footer";
import Header from "../Header";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
