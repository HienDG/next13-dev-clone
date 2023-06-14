"use client";

import React, { useCallback } from "react";
import { useSession } from "next-auth/react";
import { useSetRecoilState } from "recoil";
import Link from "next/link";

import { AiOutlineHeart, AiOutlineComment } from "react-icons/ai";
import { BsBookmarksFill, BsBookmark } from "react-icons/bs";

import { Button, IconButton } from "@src/components/ui";

import { modalState } from "@src/atoms";
import { POSTS_URL } from "@src/utils/constants";

interface LeftContentProps {
   postId: string;
   likedId?: string[];
   save?: boolean | null;
   numberOfComments?: number;
}

const LeftContent: React.FC<LeftContentProps> = ({
   postId,
   likedId = [],
   save,
   numberOfComments = 0,
}) => {
   const setModalStateValue = useSetRecoilState(modalState);
   const { status } = useSession();

   const onLike = () => {
      if (status === "unauthenticated")
         return setModalStateValue(() => ({ isOpen: true, view: "un-auth" }));
   };
   const onSave = () => {
      if (status === "unauthenticated")
         return setModalStateValue(() => ({ isOpen: true, view: "un-auth" }));
   };

   const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      // first prevent the default behavior
      e.preventDefault();
      // get the href and remove everything before the hash (#)
      const href = e.currentTarget.href;
      const targetId = href.replace(/.*\#/, "");
      // get the element by id and use scrollIntoView
      const elem = document.getElementById(targetId);
      elem?.scrollIntoView({
         behavior: "smooth",
      });
   };

   return (
      <aside className="hidden h-full md:block">
         <div className="grid gap-4 sticky z-1 top-[calc(56px+1rem+6vh)]">
            <Button
               className="flex-col w-full h-full group hover:bg-transparent"
               variant="ghost"
               onClick={onLike}
            >
               <AiOutlineHeart className="w-6 h-6 group-hover:text-red-600" />
               <span>{likedId.length}</span>
            </Button>

            <Link
               className="flex-col w-full h-full text-base font-normal btn group hover:bg-transparent btn-ghost"
               href="#comments"
               onClick={handleScroll}
            >
               <AiOutlineComment className="w-6 h-6 group-hover:text-red-600" />
               <span>{numberOfComments}</span>
            </Link>

            <IconButton
               icon={save ? BsBookmarksFill : BsBookmark}
               variant="ghost"
               className="w-full h-full hover:text-red-500 hover:bg-transparent"
               onClick={onSave}
            />
         </div>
      </aside>
   );
};
export default LeftContent;
