"use client";

import React from "react";
import { signIn } from "next-auth/react";

import { Button } from "@src/components/ui";
import type { OAuthButtonObject } from "@src/@types/button";

type ProviderType = OAuthButtonObject["provider"];

interface OAuthButtonProps extends OAuthButtonObject {}

const OAuthButton: React.FC<OAuthButtonProps> = ({ icon: Icon, label, provider, ...restProps }) => {
   const signInWithProvider = async (provider: ProviderType) =>
      await signIn(provider, {
         redirect: false,
         //callbackUrl: HOME_PATH
      });

   return (
      <Button {...restProps} onClick={() => signInWithProvider(provider)}>
         <Icon className="w-6 h-6" />
         <p>{label}</p>
      </Button>
   );
};
export default OAuthButton;
