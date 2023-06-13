"use client";
import React, { useState, useMemo } from "react";
import Link from "next/link";

import { AiOutlineHeart, AiOutlineComment } from "react-icons/ai";
import { BsBookmarksFill, BsBookmark } from "react-icons/bs";

import { IconButton } from "@src/components/ui";

import { POSTS_URL } from "@src/utils/constants";

interface CommentsProps {
   postId: string;
   likedId?: string[];
}

const Comments: React.FC<CommentsProps> = ({ postId, likedId = [] }) => {
   const [save, setSave] = useState<boolean>(false);

   const likedIdCount = useMemo(() => likedId.length, [likedId]);

   const handleClick = () => setSave((prev) => !prev);

   return (
      <div className="flex items-center justify-between text-xs">
         <div className="flex-1 gap-2 join">
            <Link
               href={`${POSTS_URL}/${postId}`}
               className="h-10 text-sm font-normal btn btn-ghost"
            >
               <AiOutlineHeart className="w-5 h-5" />
               {!!likedIdCount ? likedIdCount : null} Reactions
            </Link>

            <Link
               href={`${POSTS_URL}/${postId}#comments`}
               className="h-10 text-sm font-normal btn btn-ghost"
            >
               <AiOutlineComment className="w-5 h-5" />
               Add Comments
            </Link>
         </div>

         <div>
            <IconButton
               icon={save ? BsBookmarksFill : BsBookmark}
               iconClassName="w-5 h-5"
               variant="ghost"
               className="text-sm"
               onClick={handleClick}
            />
         </div>
      </div>
   );
};
export default Comments;
