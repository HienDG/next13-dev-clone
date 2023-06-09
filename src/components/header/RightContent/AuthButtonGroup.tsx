"use client";

import React, { useCallback } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@src/components/ui";

import { SIGN_IN_URL, SIGN_UP_URL } from "@src/utils/constants";

interface AuthButtonGroupProps {}

const AuthButtonGroup: React.FC<AuthButtonGroupProps> = () => {
   const router = useRouter();

   const handleNavigation = useCallback((path: string) => router.push(path), [router]);

   return (
      <div className="gap-2 join">
         <Button
            variant="ghost"
            onClick={() => handleNavigation(SIGN_IN_URL)}
            className="hidden md:block"
         >
            Login
         </Button>
         <Button
            outline
            variant="primary"
            className="mr-2"
            onClick={() => handleNavigation(SIGN_UP_URL)}
         >
            Create account
         </Button>
      </div>
   );
};
export default AuthButtonGroup;
