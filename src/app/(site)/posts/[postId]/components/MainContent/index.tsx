"use client";

import React, { Fragment } from "react";

import CoverImage from "./CoverImage";
import { AuthorBar } from "@src/components/ui";

import { PostObject } from "@src/types/post";

interface MainContentProps {
   post: PostObject;
}

const MainContent: React.FC<MainContentProps> = ({ post }) => {
   return (
      <div className="w-full min-h-screen bg-white rounded-xl">
         <header>
            <Fragment>{post.coverImage ? <CoverImage src={post.coverImage} /> : null}</Fragment>
            <div className="p-3 pb-0 space-y-5 md:pt-8 lg:px-16 md:px-12 sm:px-5 sm:pt-5">
               <AuthorBar user={post.user} created_at={post.created_at} />
               <h1 className="text-xl font-bold md:text-4xl sm:text-3xl">{post.title}</h1>
            </div>
         </header>
         <section className="p-3 md:py-8 lg:px-16 md:px-12 sm:px-5 sm:py-5">
            <p className="mb-5">{post.body}</p>
         </section>
         <section
            className="p-3 md:py-8 lg:px-16 md:px-12 sm:px-5 sm:py-5"
            id="#comments"
         ></section>
      </div>
   );
};
export default MainContent;
