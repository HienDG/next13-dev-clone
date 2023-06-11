"use client";

import React from "react";
import { CldUploadButton } from "next-cloudinary";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

import { DaisyUiButton } from "@src/types/button";

type Children = React.PropsWithChildren;

interface UploadButtonProps extends DaisyUiButton, Children {
   className?: string;
   onUpload: Function;
}

const UploadButton: React.FC<UploadButtonProps> = ({
   variant,
   outline,
   size,
   className,
   children,
   onUpload,
}) => {
   return (
      <CldUploadButton options={{ maxFiles: 1 }} onUpload={onUpload} uploadPreset="mtntbo4z">
         <div
            className={clsx("btn", twMerge("h-10 text-base", className), {
               ["btn-primary"]: variant === "primary",
               ["btn-error"]: variant === "error",
               ["btn-secondary"]: variant === "secondary",
               ["btn-ghost"]: variant === "ghost",
               ["btn-info"]: variant === "info",
               ["btn-accent text-white"]: variant === "accent",
               ["btn-neutral"]: variant === "neutral",
               ["btn-md"]: size === "md",
               ["btn-lg"]: size === "lg",
               ["btn-xs"]: size === "xs",
               ["btn-sm"]: size === "sm",

               ["btn-outline"]: outline,
            })}
         >
            {children}
         </div>
      </CldUploadButton>
   );
};
export default UploadButton;
