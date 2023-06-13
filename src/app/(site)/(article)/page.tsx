"use client";

import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { LoadingSkeleton } from "@src/components/ui";

import PostItem from "./components/PostItem";

import { useFetchedPosts } from "@src/hooks";

export const revalidate = 300; // revalidate this page every 300 seconds

const Home = () => {
   const { posts, isLoading, setSize, isReachedEnd } = useFetchedPosts();
   const { ref, entry } = useInView({ threshold: 0 });

   useEffect(() => {
      if (entry?.isIntersecting && !isReachedEnd) {
         setSize((prev) => prev + 1);
      }
   }, [entry?.isIntersecting, isReachedEnd, setSize]);

   if (isLoading) {
      return (
         <div>
            {[...Array(5)].map((_, index) => (
               <LoadingSkeleton key={index} />
            ))}
         </div>
      );
   }

   return (
      <div className="w-full">
         <div>{posts && posts.map((post) => <PostItem post={post} key={post.id} />)}</div>
         <span className="invisible w-full" ref={ref}></span>
      </div>
   );
};

export default Home;
