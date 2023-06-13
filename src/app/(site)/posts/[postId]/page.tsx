import React from "react";

import { LeftContent, RightContent, MainContent } from "./components";

import { getCurrentPost } from "@src/libs/actions";

interface PostProps {
   params: Params;
}

type Params = {
   postId: string;
};

const Post: React.FC<PostProps> = async ({ params: { postId } }) => {
   const post = await getCurrentPost(postId);

   if (!post) return null;

   return (
      <div className="max-w-7xl mx-auto h-full text-base lg:p-4 p-2 grid lg:grid-cols-[4rem_7fr_3fr] md:grid-cols-[4rem_1fr] grid-cols-[100%] lg:gap-4 gap-2">
         <LeftContent postId={postId} likedId={post.likedId} save={post.save} />
         <MainContent post={post} />
         <RightContent />
      </div>
   );
};
export default Post;
