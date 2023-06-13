"use client";

import React from "react";
import Link from "next/link";

import { POSTS_URL } from "@src/utils/constants";

interface ContentProps {
   postId: string;
   title: string;
}

const Content: React.FC<ContentProps> = ({ postId, title }) => {
   return (
      <Link href={`${POSTS_URL}/${postId}`} className="block w-full h-full mr-5">
         <h1 className="my-4 text-2xl font-bold text-gray-900 hover:text-primary">{title}</h1>
      </Link>
   );
};
export default Content;
