"use client";

import React, { forwardRef } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

type FormAttribute = React.FormHTMLAttributes<HTMLFormElement>;
type Children = React.PropsWithChildren;

interface FormControllerProps extends FormAttribute, Children {}

// eslint-disable-next-line react/display-name
const FormController = forwardRef<HTMLFormElement, FormControllerProps>(
   ({ className, children, ...restProps }, ref) => {
      return (
         <form className={clsx(twMerge("space-y-4", className))} ref={ref} {...restProps}>
            {children}
         </form>
      );
   }
);
export default FormController;
