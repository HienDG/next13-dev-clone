import React from "react";
import { NextPage } from "next";

import Header from "@src/components/header";
import Footer from "@src/components/footer";

const MainLayout: NextPage<React.PropsWithChildren> = ({ children }) => {
   return (
      <div className="w-full h-full">
         <Header />
         <main className="min-h-screen bg-base-300/40 mt-14">{children}</main>
         <Footer />
      </div>
   );
};
export default MainLayout;
