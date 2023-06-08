"use client";

import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

type SafeNumber = number | `${number}`;

export interface AvatarProps {
   width?: SafeNumber;
   height?: SafeNumber;
   className?: string;
   src?: string;
}

const Avatar: React.FC<AvatarProps> = ({
   width = 32,
   height = 32,
   className,
   src = "/images/user_placeholder.png",
}) => {
   return (
      <div className="avatar">
         <div
            className={clsx(
               "rounded-full w-9 hover:ring hover:ring-neutral/20 ring-offset-base-100 ring-offset-1",
               twMerge(className)
            )}
         >
            <Image
               src={src}
               alt="avatar"
               width={width}
               height={height}
               className="inline-block w-full h-full align-bottom"
            />
         </div>
      </div>
   );
};
export default Avatar;
