"use client";

import React from "react";
import { signIn } from "next-auth/react";
import { IconType } from "react-icons";

import { Button, type ButtonProps } from "@src/components/ui";

import { HOME_PATH } from "@src/utils/constants";

type ProviderType = "google" | "github";

interface OAuthButtonProps
   extends Pick<ButtonProps, "size" | "className" | "variant" | "isLoading" | "outline"> {
   icon: IconType;
   label: string;
   provider: ProviderType;
}

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
