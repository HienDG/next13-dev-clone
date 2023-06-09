"use client";

import React from "react";

import { AiFillHome, AiFillBook, AiFillTags } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { TiGroup } from "react-icons/ti";
import { FcAbout } from "react-icons/fc";
import { MdFeed } from "react-icons/md";

import NavList from "./NavList";
import NavItem from "./NavItem";

interface LeftContentProps {}

const LeftContent: React.FC<LeftContentProps> = () => {
   return (
      <aside className="hidden h-full top-4 md:block ">
         <NavList>
            <NavItem icon={AiFillHome}>Home</NavItem>
            <NavItem icon={FaUserFriends}>Friends</NavItem>
            <NavItem icon={TiGroup}>Group</NavItem>
            <NavItem icon={MdFeed}>Feeds</NavItem>
            <NavItem icon={AiFillBook}>Reading List</NavItem>
            <NavItem icon={AiFillTags}>Tags</NavItem>
            <NavItem icon={FcAbout}>About</NavItem>
         </NavList>
      </aside>
   );
};
export default LeftContent;
