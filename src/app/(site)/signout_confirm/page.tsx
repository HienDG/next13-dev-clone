"use client";

import React from "react";
import { signOut } from "next-auth/react";

import { Button } from "@src/components/ui";

const Page: React.FC = () => {
   const handleSignOut = async () => signOut();

   return (
      <div className="flex gap-4 flex-col items-center justify-center text-center h-[calc(100vh-56px)] max-h-screen">
         <h1 className="text-2xl font-bold">Are you sure you want to sign out?</h1>
         <Button size="md" variant="primary" className="h-12 text-white" onClick={handleSignOut}>
            Yes, sign out
         </Button>
      </div>
   );
};
export default Page;
