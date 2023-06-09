"use client";

import React from "react";
import { useSession } from "next-auth/react";

import { GrNotification } from "react-icons/gr";
import { BsFillPencilFill, BsSearch } from "react-icons/bs";

import { Button, IconButton } from "@src/components/ui";
import ProfileMenu from "./ProfileMenu";
import AuthButtonGroup from "./AuthButtonGroup";

interface RightContentProps {}

const RightContent: React.FC<RightContentProps> = () => {
   const { data: session } = useSession();

   return (
      <div className="flex items-center h-full gap-3 ml-auto max-lg:mr-3">
         <IconButton icon={BsSearch} variant="ghost" className="rounded-lg btn-circle md:hidden" />
         <>
            {session ? (
               <div className="relative flex items-center gap-3">
                  <Button
                     variant="primary"
                     className="items-center hidden gap-3 mr-2 text-white md:flex rounded-3xl"
                  >
                     <BsFillPencilFill className="w-4 h-4" />
                     <span>Create Post</span>
                  </Button>

                  <IconButton
                     icon={GrNotification}
                     variant="ghost"
                     className="hidden rounded-lg btn-circle md:flex"
                  />

                  <ProfileMenu session={session} />
               </div>
            ) : (
               <AuthButtonGroup />
            )}
         </>
      </div>
   );
};
export default RightContent;
