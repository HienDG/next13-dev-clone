"use client";

import React from "react";
import { signOut, useSession } from "next-auth/react";

import AuthButtonGroup from "./AuthButtonGroup";
import { Button } from "@src/components/ui";

interface RightContentProps {}

const RightContent: React.FC<RightContentProps> = () => {
   const { data: session } = useSession();

   return (
      <div className="flex items-center h-full ml-auto">
         {session ? (
            <Button outline variant="primary" className="mr-2" onClick={() => signOut()}>
               Sign Out
            </Button>
         ) : (
            <AuthButtonGroup />
         )}
      </div>
   );
};
export default RightContent;
