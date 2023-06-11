"use client";

import React from "react";

import Logo from "./Logo";
import FormTabs from "./FormTabs";
import Title from "./Title";
import CloseButton from "./CloseButton";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
   return (
      <header className="flex items-center md:col-span-2 h-14 max-md:px-2">
         <Logo />
         <Title />
         <FormTabs />
         <CloseButton />
      </header>
   );
};
export default Header;
