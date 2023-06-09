"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import { HOME_URL } from "@src/utils/constants";

const Logo: React.FC = () => {
   return (
      <Link href={HOME_URL} className="w-[50px] h-[40px]">
         <Image
            src="/images/logo.png"
            alt="logo"
            width={50}
            height={40}
            className="inline-block object-contain w-full h-full max-w-full align-middle outline-0"
            priority
         />
      </Link>
   );
};
export default Logo;
