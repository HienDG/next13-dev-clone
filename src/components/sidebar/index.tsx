"use client";

import React from "react";

import LeftContent from "./LeftContent";

const Sidebar: React.FC<React.PropsWithChildren> = ({ children }) => {
   return (
      <div className="mx-auto py-5 grid lg:grid-cols-[240px_1fr_350px] md:grid-cols-[240px_1fr] gap-4 max-w-7xl w-full text-base relative">
         <LeftContent />

         <div className="h-full">{children}</div>

         <aside className="hidden h-full lg:block bg-slate-600"></aside>
      </div>
   );
};
export default Sidebar;
