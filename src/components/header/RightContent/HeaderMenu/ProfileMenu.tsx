"use client";

import React from "react";

import { MenuDropdown, MenuItem, Avatar } from "@src/components/ui";
import { useSetRecoilState } from "recoil";

import { modalState } from "@src/atoms";

interface ProfileMenuProps {}

const ProfileMenu: React.FC<ProfileMenuProps> = () => {
   const setModalStateValue = useSetRecoilState(modalState);

   const onOpenSignOutModal = (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();

      return setModalStateValue(() => ({ isOpen: true, view: "sign-out" }));
   };

   return (
      <MenuDropdown avatar={<Avatar />}>
         <div>
            <MenuItem className="hover:underline-offset-2 hover:underline">
               <div>
                  <span className="block font-medium">DangVanHien</span>
                  <small className="text-sm opacity-75 ">@hiendg</small>
               </div>
            </MenuItem>
         </div>

         <div className="space-y-2">
            <MenuItem>MenuItem</MenuItem>
            <MenuItem>MenuItem</MenuItem>
            <MenuItem>MenuItem</MenuItem>
         </div>

         <div>
            <MenuItem onClick={onOpenSignOutModal}>Sign Out</MenuItem>
         </div>
      </MenuDropdown>
   );
};
export default ProfileMenu;
