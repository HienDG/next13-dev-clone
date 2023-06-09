"use client";

import React from "react";

import LeftContent from "./LeftContent";

const Sidebar: React.FC<React.PropsWithChildren> = ({ children }) => {
   return (
      <div className="mx-auto py-5 grid lg:grid-cols-[240px_1fr_350px] gap-4 w-full text-base relative">
         <LeftContent />

         <div className="h-full bg-red-500">{children}</div>

         <aside className="hidden h-full lg:block bg-slate-600"></aside>
      </div>
   );
};
export default Sidebar;
