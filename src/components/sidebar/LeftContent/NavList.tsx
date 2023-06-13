import React from "react";

const NavList: React.FC<React.PropsWithChildren> = ({ children }) => {
   return (
      <nav className="mb-4 h-max">
         <ul className="space-y-2">{children}</ul>
      </nav>
   );
};
export default NavList;
