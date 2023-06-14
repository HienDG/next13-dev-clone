"use client";

import React from "react";
import Image from "next/image";

interface CoverImageProps {
   src: string;
}

const CoverImage: React.FC<CoverImageProps> = ({ src }) => {
   return (
      <div className="w-full h-full">
         <Image
            src={src}
            alt="image"
            width={1000}
            height={420}
            className="w-full h-full"
            priority
            placeholder="blur"
            blurDataURL="/images/image_placeholder.png"
         />
      </div>
   );
};
export default CoverImage;
