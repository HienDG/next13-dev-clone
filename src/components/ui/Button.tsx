import React from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

type ButtonAttributes = React.ButtonHTMLAttributes<HTMLButtonElement>;
type Children = React.PropsWithChildren;

type Variants = "error" | "primary" | "secondary" | "ghost" | "info" | "accent" | "neutral";
type Sizes = "md" | "lg" | "xs" | "sm";

interface ButtonProps extends ButtonAttributes, Children {
   variant?: Variants;
   size?: Sizes;
   isLoading?: boolean;
   outline?: boolean;
}

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
            ["btn-accent"]: variant === "accent",
            ["btn-neutral"]: variant === "neutral",
            ["btn-md"]: size === "md",
            ["btn-lg"]: size === "lg",
            ["btn-xs"]: size === "xs",
            ["btn-sm"]: size === "sm",
            ["loading"]: isLoading,
            ["btn-outline"]: outline,
         })}
         {...rest}
      >
         {children}
      </button>
   );
};
export default Button;
