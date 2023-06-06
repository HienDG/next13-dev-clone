"use client";

import React from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

type FormAttribute = React.FormHTMLAttributes<HTMLFormElement>;
type Children = React.PropsWithChildren;

interface FormControllerProps extends FormAttribute, Children {}

const FormController: React.FC<FormControllerProps> = ({ className, children, ...restProps }) => {
   return (
      <form className={clsx(twMerge("space-y-4", className))} {...restProps}>
         {children}
      </form>
   );
};
export default FormController;
