"use client";

import React from "react";

import { AiOutlineMenu } from "react-icons/ai";

interface MobileMenuProps {}

const MobileMenu: React.FC<MobileMenuProps> = () => {
   return (
      <button className="block p-2 mx-2 rounded-lg md:hidden btn-dev">
         <AiOutlineMenu className="w-6 h-6" />
      </button>
   );
};
export default MobileMenu;
