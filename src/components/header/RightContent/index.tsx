"use client";

import React from "react";
import { useSession } from "next-auth/react";

import AuthButtonGroup from "./AuthButtonGroup";
import HeaderMenu from "./HeaderMenu";

interface RightContentProps {}

const RightContent: React.FC<RightContentProps> = () => {
   const { data: session } = useSession();

   return (
      <div className="flex items-center h-full ml-auto">
         <>{session ? <HeaderMenu /> : <AuthButtonGroup />}</>
      </div>
   );
};
export default RightContent;
