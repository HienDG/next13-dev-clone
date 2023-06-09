import React from "react";
import clsx from "clsx";

import Header from "@src/components/header";
import Footer from "@src/components/footer";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
   return (
      <div className="w-full h-full">
         <Header />
         <main className={clsx("min-h-screen bg-base-300/40 mt-14")}>{children}</main>
         <Footer />
      </div>
   );
};
export default Layout;
