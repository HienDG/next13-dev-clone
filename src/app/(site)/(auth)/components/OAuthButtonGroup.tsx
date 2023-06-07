"use client";

import React from "react";

import { AiOutlineGoogle, AiOutlineGithub } from "react-icons/ai";

import { OAuthButton } from "@src/components/ui";

interface OAuthButtonGroupProps {}

const OAuthButtonGroup: React.FC<OAuthButtonGroupProps> = () => {
   return (
      <div className="gap-3 flex items-center flex-col [&>button]:w-full [&>button]:h-12 mb-6">
         <OAuthButton
            label="Continue with Google"
            provider="google"
            icon={AiOutlineGoogle}
            size="md"
            variant="primary"
            outline
         />
         <OAuthButton
            icon={AiOutlineGithub}
            label="Continue with Github"
            provider="github"
            size="md"
            variant="neutral"
         />
      </div>
   );
};
export default OAuthButtonGroup;
