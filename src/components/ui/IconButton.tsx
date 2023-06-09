"use client";

import React from "react";
import { twMerge } from "tailwind-merge";

import { Button } from "@src/components/ui";

import { IconButtonObject } from "@src/types/button";

interface IconButtonProps extends IconButtonObject {
   iconClassName?: string;
}

const IconButton: React.FC<IconButtonProps> = ({ icon: Icon, iconClassName, ...restProps }) => {
   return (
      <Button {...restProps}>
         <Icon className={twMerge("w-6 h-6", iconClassName)} />
      </Button>
   );
};
export default IconButton;
