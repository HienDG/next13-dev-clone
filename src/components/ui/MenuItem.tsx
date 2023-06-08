"use client";

import React from "react";
import { Menu } from "@headlessui/react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

type AnchorAttributes = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

interface MenuItemProps extends React.PropsWithChildren, AnchorAttributes {
   className?: string;
   to?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ className, children, to = "#", ...restProps }) => {
   return (
      <Menu.Item>
         {({ active }) => (
            <Link
               href={to}
               className={clsx(
                  twMerge(
                     "group flex w-full min-h-[40px] items-center rounded-md px-4 py-2 text-sm",
                     className
                  ),
                  active ? "bg-violet-500 text-white" : "text-gray-900"
               )}
               {...restProps}
            >
               {children}
            </Link>
         )}
      </Menu.Item>
   );
};
export default MenuItem;
