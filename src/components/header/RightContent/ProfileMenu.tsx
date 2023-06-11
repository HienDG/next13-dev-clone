"use client";

import React from "react";
import type { Session } from "next-auth";

import { MdOutlineAccountCircle, MdLogout } from "react-icons/md";
import { IoMdBookmarks } from "react-icons/io";
import { AiOutlineFileText } from "react-icons/ai";
import { GrNotification } from "react-icons/gr";
import { BsFillPencilFill } from "react-icons/bs";

import { MenuDropdown, MenuItem, Avatar } from "@src/components/ui";

import { SIGN_OUT_CONFIRM_URL, NEW_URL } from "@src/utils/constants";

interface ProfileMenuProps {
   session: Session;
}

const ProfileMenu: React.FC<ProfileMenuProps> = ({ session }) => {
   return (
      <MenuDropdown avatar={<Avatar src={session.user.image as string} className="w-10 h-10" />}>
         <div>
            <MenuItem className="flex items-center gap-4">
               <Avatar src={session.user.image as string} className="w-12 h-12" />
               <div className="text-gray-900">
                  <span className="block font-bold">{session.user.name}</span>
                  <small className="text-sm opacity-75 ">
                     @{session.user.username || session.user.email?.split("@")[0]}
                  </small>
               </div>
            </MenuItem>
         </div>

         <div className="space-y-2">
            <MenuItem icon={MdOutlineAccountCircle}>Account Setting</MenuItem>
            <MenuItem icon={BsFillPencilFill} to={NEW_URL}>
               Create Post
            </MenuItem>
            <MenuItem icon={GrNotification}>Notifications</MenuItem>
            <MenuItem icon={IoMdBookmarks}>My Bookmarks</MenuItem>
            <MenuItem icon={AiOutlineFileText}>My Drafts</MenuItem>
         </div>

         <div>
            <MenuItem className="text-red-500" icon={MdLogout} to={SIGN_OUT_CONFIRM_URL}>
               Sign Out
            </MenuItem>
         </div>
      </MenuDropdown>
   );
};
export default ProfileMenu;
