"use client";

import React, { forwardRef, useMemo } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

type InputAttributes = Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">;

type Variants = "error" | "primary" | "secondary" | "ghost" | "info" | "accent" | "neutral";
type Sizes = "md" | "lg" | "xs" | "sm";

interface InputProps extends InputAttributes {
   label?: string;
   variant?: Variants;
   size?: Sizes;
   errorMessage?: string;
}

// eslint-disable-next-line react/display-name
const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
   const { className, label, variant, size, errorMessage, ...restProps } = props;

   const hasError = useMemo(() => !!errorMessage, [errorMessage]);

   return (
      <div className="form-control">
         <>
            {label ? (
               <label htmlFor={restProps.id} className="font-semibold label">
                  {label}
               </label>
            ) : null}
         </>
         <input
            ref={ref}
            {...restProps}
            className={clsx(
               "input input-bordered",
               twMerge("transition-all duration-100", className),
               {
                  ["input-primary"]: variant === "primary",
                  ["input-error"]: variant === "error" || hasError,
                  ["input-secondary"]: variant === "secondary",
                  ["input-ghost"]: variant === "ghost",
                  ["input-info"]: variant === "info",
                  ["input-accent"]: variant === "accent",
                  ["input-neutral"]: variant === "neutral" || !variant,
                  ["input-md"]: size === "md",
                  ["input-lg"]: size === "lg",
                  ["input-xs"]: size === "xs",
                  ["input-sm"]: size === "sm",
                  ["focus:input-primary"]: !variant && !hasError,
               }
            )}
         />
         <>{hasError && <p className="mt-1 text-xs text-red-600">{errorMessage}</p>}</>
      </div>
   );
});
export default Input;
