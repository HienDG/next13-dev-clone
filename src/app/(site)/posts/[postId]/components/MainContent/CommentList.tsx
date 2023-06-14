"use client";

import React from "react";

import CommentItem from "./CommentItem";

import { useFetchComments } from "@src/hooks";

interface CommentListProps {
   postId: string;
}

const CommentList: React.FC<CommentListProps> = ({ postId }) => {
   const { comments } = useFetchComments(postId);
   return (
      <div>
         {comments && comments.map((comment) => <CommentItem comment={comment} key={comment.id} />)}
      </div>
   );
};
export default CommentList;
