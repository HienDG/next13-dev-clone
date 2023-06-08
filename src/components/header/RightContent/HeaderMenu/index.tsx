import React from "react";

import { GrNotification } from "react-icons/gr";

import { Button, IconButton } from "@src/components/ui";
import ProfileMenu from "./ProfileMenu";

interface HeaderMenuProps {}

const HeaderMenu: React.FC<HeaderMenuProps> = () => {
   return (
      <div className="relative flex items-center gap-3 mr-2">
         <Button outline variant="primary" className="hidden mr-2 md:block">
            Create Post
         </Button>

         <IconButton icon={GrNotification} className="rounded-lg btn-circle" />

         <ProfileMenu />
      </div>
   );
};
export default HeaderMenu;
