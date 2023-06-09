"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { SIGN_IN_URL, SIGN_UP_URL } from "@src/utils/constants";

interface RegistrationThematicProps {}

const RegistrationThematic: React.FC<RegistrationThematicProps> = () => {
   const pathname = usePathname();

   const signInThematic = (
      <>
         Don`t have an account?{" "}
         <Link href={SIGN_UP_URL} className="text-blue-600">
            {" "}
            Sign up
         </Link>
      </>
   );

   const signUpThematic = (
      <>
         Already have an account?{" "}
         <Link href={SIGN_IN_URL} className="text-blue-600">
            {" "}
            Log in.
         </Link>
      </>
   );

   return (
      <div className="relative mb-4 text-center after:border after:border-solid after:border-neutral/10 after:block after:rounded-md after:top-1/2 after:w-full after:absolute">
         <div className="relative text-sm bg-base-100 mx-auto text-neutral px-2 z-1 max-w-[50%]">
            <>{pathname === SIGN_IN_URL && signInThematic}</>
            <>{pathname === SIGN_UP_URL && signUpThematic}</>
         </div>
      </div>
   );
};
export default RegistrationThematic;
