"use client";

import React, { forwardRef } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface TextInputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
   wrapperClassName?: string;
}

// eslint-disable-next-line react/display-name
const TextInput = forwardRef<HTMLTextAreaElement, TextInputProps>((props, ref) => {
   const { className, placeholder, wrapperClassName, ...restProps } = props;
   return (
      <div className={clsx(twMerge("mb-2", wrapperClassName))}>
         <textarea
            ref={ref}
            className={clsx(
               twMerge("w-full h-full  resize-none textarea placeholder:text-slate-700 ", className)
            )}
            placeholder={placeholder}
            {...restProps}
         />
      </div>
   );
});
export default TextInput;
