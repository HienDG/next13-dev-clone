import React from "react";
import { NextPage } from "next";

import { LeftContent, RightContent, MainContent } from "./components";

import { getCurrentPost } from "@src/libs/actions";

type Params = {
   postId: string;
};
interface PostProps {
   params: Params;
}

export const revalidate = 60; // revalidate this page every 60 seconds;

const Post: NextPage<PostProps> = async ({ params: { postId } }) => {
   const post = await getCurrentPost(postId);

   if (!post) return null;

   return (
      <div className="max-w-7xl mx-auto h-full text-base lg:p-4 p-2 grid lg:grid-cols-[4rem_7fr_3fr] md:grid-cols-[4rem_1fr] grid-cols-[100%] lg:gap-4 gap-2">
         <LeftContent
            postId={postId}
            numberOfComments={post.comments.length}
            likedId={post.likedId}
            save={post.save}
         />
         <MainContent post={post} />
         <RightContent />
      </div>
   );
};
export default Post;
