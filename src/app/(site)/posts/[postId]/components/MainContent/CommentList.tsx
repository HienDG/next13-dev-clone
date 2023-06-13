"use client";

import React from "react";

import CommentItem from "./CommentItem";

import { useFetchComments } from "@src/hooks";

interface CommentListProps {}

const CommentList: React.FC<CommentListProps> = () => {
   const { comments } = useFetchComments();
   return (
      <div>
         {comments && comments.map((comment) => <CommentItem comment={comment} key={comment.id} />)}
      </div>
   );
};
export default CommentList;
