"use client";

import React from "react";
import { Toaster } from "react-hot-toast";

const HotToastProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
   return (
      <div className="w-full h-full">
         <>{children}</>
         <Toaster />
      </div>
   );
};
export default HotToastProvider;
