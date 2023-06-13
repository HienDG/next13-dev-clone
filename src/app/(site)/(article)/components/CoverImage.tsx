"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import { POSTS_URL } from "@src/utils/constants";

interface CoverImageProps {
   postId: string;
   src: string;
}

const CoverImage: React.FC<CoverImageProps> = ({ postId, src }) => {
   return (
      <div>
         <Link href={`${POSTS_URL}/${postId}`} className="w-[650px] h-[275px] block mx-auto">
            <Image
               src={src}
               alt="image"
               width={650}
               height={275}
               className="object-cover w-full h-full sm:rounded-t-lg"
            />
         </Link>
      </div>
   );
};
export default CoverImage;
