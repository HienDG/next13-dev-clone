"use client";

import React from "react";
import moment from "moment";

import { Avatar } from "@src/components/ui";

import { CommentObject } from "@src/types/comment";
import Link from "next/link";

import { USER_URL } from "@src/utils/constants";

interface CommentItemProps {
   comment: CommentObject;
}

const CommentItem: React.FC<CommentItemProps> = ({ comment }) => {
   return (
      <div className="flex w-full gap-2 mb-6">
         <Link href={`${USER_URL}/${comment.user.id}`}>
            <Avatar src={comment.user.image || "/images/user_placeholder.png"} />
         </Link>

         <div className="flex-1 p-2 border border-gray-200 border-solid rounded-lg">
            <Link
               href={`${USER_URL}/${comment.user.id}`}
               className="flex items-center gap-2 px-3 pt-2 text-base"
            >
               <div className="font-bold text-gray-900">{comment.user.name}</div>
               <span>•</span>
               <div className="text-gray-700">{moment(comment.created_at).format("MMMM Do")}</div>
            </Link>
            <div className="px-3 mt-2 mb-4 text-lg">
               <p>{comment.body}</p>
            </div>
         </div>
      </div>
   );
};
export default CommentItem;
