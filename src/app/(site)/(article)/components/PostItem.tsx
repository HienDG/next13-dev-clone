"use client";

import React, { Fragment } from "react";

import CoverImage from "./CoverImage";
import Content from "./Content";
import BottomContent from "./BottomContent";

import { AuthorBar } from "@src/components/ui";
import { PostObject } from "@src/types/post";

interface PostItemProps {
   post: PostObject;
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
   return (
      <article className="w-full h-full mb-6 overflow-hidden shadow-md cursor-pointer sm:rounded-lg bg-base-100">
         <div>
            <Fragment>
               {post.coverImage && <CoverImage src={post.coverImage} postId={post.id} />}
            </Fragment>

            <div className="p-4 lg:p-5">
               <AuthorBar user={post.user} created_at={post.created_at} />
               <Content postId={post.id} title={post.title} />
               <BottomContent postId={post.id} likedId={post.likedId} />
            </div>
         </div>
      </article>
   );
};
export default PostItem;
