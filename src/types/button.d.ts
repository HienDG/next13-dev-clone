import { IconType } from "react-icons";
import React from "react";

type ButtonAttributes = React.ButtonHTMLAttributes<HTMLButtonElement>;
type Children = React.PropsWithChildren;

type Variants = "error" | "primary" | "secondary" | "ghost" | "info" | "accent" | "neutral";
type Sizes = "md" | "lg" | "xs" | "sm";
type ProviderType = "google" | "github";

export interface DaisyUiButton {
   variant?: Variants;
   size?: Sizes;
   isLoading?: boolean;
   outline?: boolean;
}

export interface ButtonBaseObject extends ButtonAttributes, Children, DaisyUiButton {}

export interface OAuthButtonObject extends DaisyUiButton, Pick<ButtonAttributes, "className"> {
   icon: IconType;
   label: string;
   provider: ProviderType;
}

export interface IconButtonObject extends DaisyUiButton, ButtonAttributes {
   icon: IconType;
}
