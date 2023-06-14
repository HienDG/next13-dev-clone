import React, { Fragment } from "react";
import { User } from "@prisma/client";

import CoverImage from "./CoverImage";
import { AuthorBar } from "@src/components/ui";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

import { getCurrentUser } from "@src/libs/actions";
import { PostObject } from "@src/types/post";

interface MainContentProps {
   post: PostObject;
}

const MainContent: React.FC<MainContentProps> = async ({ post }) => {
   const currentUser = await getCurrentUser();

   return (
      <div className="w-full min-h-screen overflow-hidden bg-white rounded-xl">
         <header>
            <Fragment>{post.coverImage ? <CoverImage src={post.coverImage} /> : null}</Fragment>
            <div className="p-3 pb-0 space-y-5 md:pt-8 lg:px-16 md:px-12 sm:px-5 sm:pt-5">
               <AuthorBar user={post.user} created_at={post.created_at} />
               <h1 className="text-xl font-bold md:text-4xl sm:text-3xl">{post.title}</h1>
            </div>
         </header>

         <section className="p-3 border-b border-solid border-b-gray-200 md:py-8 lg:px-16 md:px-12 sm:px-5 sm:py-5">
            <p className="mb-5">{post.body}</p>
         </section>

         <section className="w-full p-3 md:py-8 lg:px-16 md:px-12 sm:px-5 sm:py-5" id="comments">
            <CommentForm
               user={currentUser as User}
               postId={post.id}
               numberOfComments={post.comments.length}
            />

            <br className="block w-full h-2 p-4" />

            <CommentList postId={post.id} />
         </section>
      </div>
   );
};
export default MainContent;
