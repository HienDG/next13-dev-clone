"use client";

import React from "react";

import AuthButtonGroup from "./AuthButtonGroup";

interface RightContentProps {}

const RightContent: React.FC<RightContentProps> = () => {
   return (
      <div className="flex items-center h-full ml-auto">
         <AuthButtonGroup />
      </div>
   );
};
export default RightContent;
