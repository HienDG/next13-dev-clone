"use client";

import React from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface TextInputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
   wrapperClassName?: string;
}

const TextInput: React.FC<TextInputProps> = ({
   className,
   placeholder,
   wrapperClassName,
   ...restProps
}) => {
   return (
      <div className={clsx(twMerge("mb-2", wrapperClassName))}>
         <textarea
            className={clsx(
               twMerge("w-full h-full  resize-none textarea placeholder:text-slate-700 ", className)
            )}
            placeholder={placeholder}
            {...restProps}
         />
      </div>
   );
};
export default TextInput;
