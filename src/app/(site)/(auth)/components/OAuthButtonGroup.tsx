"use client";

import React from "react";

import { AiOutlineGoogle } from "react-icons/ai";

import { Button } from "@src/components/ui";

interface OAuthButtonGroupProps {}

const OAuthButtonGroup: React.FC<OAuthButtonGroupProps> = () => {
   return (
      <div className="gap-3 flex items-center flex-col [&>button]:w-full [&>button]:h-12 mb-6">
         <Button size="md" variant="primary" outline>
            <AiOutlineGoogle />
            <p>Continue with Google</p>
         </Button>
         <Button size="md" variant="neutral">
            <AiOutlineGoogle />
            <p>Continue with Google</p>
         </Button>
      </div>
   );
};
export default OAuthButtonGroup;
