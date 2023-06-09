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
   width = 36,
   height = 36,
   className,
   src = "/images/user_placeholder.png",
}) => {
   return (
      <div className="avatar">
         <div className={clsx(twMerge("rounded-full w-9 h-9", className))}>
            <Image
               src={src}
               alt="avatar"
               width={width}
               height={height}
               className="inline-block object-fill w-full h-full align-bottom"
               priority
            />
         </div>
      </div>
   );
};
export default Avatar;
