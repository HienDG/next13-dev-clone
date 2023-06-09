"use client";

import React from "react";
import Link from "next/link";

import { IconType } from "react-icons";

interface NavItemProps extends React.PropsWithChildren {
   to?: string;
   icon: IconType;
}

const NavItem: React.FC<NavItemProps> = ({ to = "#", icon: Icon, children }) => {
   return (
      <li>
         <Link href={to} className="flex items-center gap-4 py-3 pl-6 pr-4 hover:bg-gray-300">
            <Icon className="w-6 h-6" />
            <span>{children}</span>
         </Link>
      </li>
   );
};
export default NavItem;
