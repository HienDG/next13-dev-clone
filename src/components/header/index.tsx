import React from "react";

import { MobileMenu, SearchBar, Logo } from "./LeftContent";
import RightContent from "./RightContent";

const Header = () => {
   return (
      <header className="fixed inset-x-0 top-0 z-10 shadow-md h-14 bg-base-100 ">
         <div className="flex items-center mx-auto lg:px-4 h-14 md:px-2 max-w-7xl">
            <MobileMenu />
            <Logo />
            <SearchBar />
            <RightContent />
         </div>
      </header>
   );
};

export default Header;
