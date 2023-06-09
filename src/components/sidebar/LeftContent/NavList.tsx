import React from "react";

const NavList: React.FC<React.PropsWithChildren> = ({ children }) => {
   return (
      <nav className="my-4 h-max">
         <ul className="space-y-2">{children}</ul>
      </nav>
   );
};
export default NavList;
