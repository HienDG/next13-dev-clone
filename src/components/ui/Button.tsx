import React from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

import { ButtonBaseObject } from "@src/@types/button";

interface ButtonProps extends ButtonBaseObject {}

const Button: React.FC<ButtonProps> = ({
   children,
   variant,
   size,
   className,
   outline,
   isLoading,
   ...rest
}) => {
   return (
      <button
         className={clsx("btn", twMerge("h-10 text-base", className), {
            ["btn-primary text-white"]: variant === "primary",
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
         {...rest}
      >
         {isLoading ? (
            <span className="loading loading-infinity loading-lg"></span>
         ) : (
            <>{children}</>
         )}
      </button>
   );
};
export default Button;
