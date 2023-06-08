"use client";

import React, { Fragment, JSX } from "react";
import { Menu, Transition } from "@headlessui/react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface MenuDropdownProps {
   children: JSX.Element | JSX.Element[];
   avatar: JSX.Element;
   className?: string;
}

const MenuDropdown: React.FC<MenuDropdownProps> = ({ children, avatar, className }) => {
   return (
      <div>
         <Menu as="div" className="relative inline-block text-left">
            <Menu.Button>{avatar}</Menu.Button>

            <Transition
               as={Fragment}
               enter="transition ease-out duration-100"
               enterFrom="transform opacity-0 scale-95"
               enterTo="transform opacity-100 scale-100"
               leave="transition ease-in duration-75"
               leaveFrom="transform opacity-100 scale-100"
               leaveTo="transform opacity-0 scale-95"
            >
               <Menu.Items
                  className={clsx(
                     "absolute right-0 [&>div]:w-full w-60 mt-2 [&>div]:p-2 origin-top-right z-100 bg-white divide-y divide-gray-200 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
                     twMerge(className)
                  )}
               >
                  {children}
               </Menu.Items>
            </Transition>
         </Menu>
      </div>
   );
};
export default MenuDropdown;
