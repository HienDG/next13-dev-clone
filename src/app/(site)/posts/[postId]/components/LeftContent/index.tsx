"use client";

import React from "react";

import { AiOutlineHeart, AiOutlineComment } from "react-icons/ai";
import { BsBookmarksFill, BsBookmark } from "react-icons/bs";

import { Button, IconButton } from "@src/components/ui";

interface LeftContentProps {
   postId: string;
   likedId?: string[];
   save?: boolean | null;
}

const LeftContent: React.FC<LeftContentProps> = ({ postId, likedId = [], save }) => {
   return (
      <aside className="hidden h-full md:block">
         <div className="grid gap-4 sticky z-1 top-[calc(56px+1rem+6vh)]">
            <Button className="flex-col w-full h-full group hover:bg-transparent" variant="ghost">
               <AiOutlineHeart className="w-6 h-6 group-hover:text-red-600" />
               <span>{likedId.length}</span>
            </Button>
            <Button className="flex-col w-full h-full group hover:bg-transparent" variant="ghost">
               <AiOutlineComment className="w-6 h-6 group-hover:text-red-600" />
               <span>0</span>
            </Button>
            <IconButton
               icon={save ? BsBookmarksFill : BsBookmark}
               variant="ghost"
               className="w-full h-full hover:text-red-500 hover:bg-transparent"
            />
         </div>
      </aside>
   );
};
export default LeftContent;
