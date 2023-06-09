"use client";

import React from "react";
import Link from "next/link";

import { HOME_URL } from "@src/utils/constants";

const Footer: React.FC = () => {
   return (
      <footer className="p-5 lg:p-12 text-neutral bg-base-300">
         <div className="flex flex-row justify-center w-full gap-2 py-1 mx-auto max-w-7xl">
            <p className="text-sm">
               <Link
                  href={HOME_URL}
                  className="font-semibold text-blue-600 capitalize hover:underline"
               >
                  DEV Community{" "}
               </Link>
               — A constructive and inclusive social network for software developers. With you every
               step of your journey.
            </p>
         </div>
      </footer>
   );
};
export default Footer;
