import { NextPage } from "next";
import React from "react";

import { Title, OAuthButtonGroup, RegistrationThematic } from "./components";

const Layout: NextPage<React.PropsWithChildren> = ({ children }) => {
   return (
      <section className="w-full mx-auto lg:p-4 md:p-2 max-w-7xl grid grid-cols-[1fr] place-items-center">
         <div className="max-w-[640px] w-full rounded-xl bg-base-100 shadow-md text-neutral md:p-12 p-6 border border-solid border-neutral/10">
            <Title />

            <div className="w-full h-full py-4 md:px-6">
               <OAuthButtonGroup />
               <div>
                  <RegistrationThematic />
                  <div>{children}</div>
               </div>
            </div>
         </div>
      </section>
   );
};
export default Layout;
