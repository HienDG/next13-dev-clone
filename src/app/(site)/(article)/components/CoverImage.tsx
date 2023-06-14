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
      <div className="max-w-3xl w-full max-h-[275px] h-[275px]">
         <Link href={`${POSTS_URL}/${postId}`} className="block w-full h-full">
            <Image
               src={src}
               alt="image"
               width={650}
               height={275}
               className="object-cover w-full h-full sm:rounded-t-lg"
               placeholder="blur"
               blurDataURL="/images/image_placeholder.png"
            />
         </Link>
      </div>
   );
};
export default CoverImage;
