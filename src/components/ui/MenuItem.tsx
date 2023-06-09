"use client";

import React from "react";
import { Menu } from "@headlessui/react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import type { IconType } from "react-icons";

interface MenuItemProps extends React.PropsWithChildren {
   className?: string;
   to?: string;
   icon?: IconType;
}

const MenuItem: React.FC<MenuItemProps> = ({ className, children, to = "#", icon: Icon }) => {
   return (
      <Menu.Item>
         {({ active }) => (
            <Link
               href={to}
               className={clsx(
                  twMerge(
                     "group flex w-full min-h-[40px] items-center p-4 leading-5 text-base",
                     className
                  ),
                  {
                     ["bg-gray-300/80"]: active,
                     ["gap-3"]: Icon,
                  }
               )}
            >
               <>{Icon && <Icon className="w-6 h-6" />}</>
               <>{children}</>
            </Link>
         )}
      </Menu.Item>
   );
};
export default MenuItem;
