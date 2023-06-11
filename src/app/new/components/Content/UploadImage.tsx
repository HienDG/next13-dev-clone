"use client";

import React from "react";
import Image from "next/image";

import { UploadButton, Button } from "@src/components/ui";

interface UploadImageProps {
   selectedFile: string | null;
   // eslint-disable-next-line no-unused-vars
   onUpload: (result: any) => void;
   onRemove: () => void;
}

const UploadImage: React.FC<UploadImageProps> = ({
   selectedFile,

   onRemove,
   onUpload,
}) => {
   return (
      <div className="flex flex-col items-center gap-4 mb-5 sm:flex-row">
         {!selectedFile ? (
            <UploadButton outline variant="neutral" onUpload={onUpload}>
               Add a cover image
            </UploadButton>
         ) : (
            <>
               <Image
                  src={selectedFile}
                  priority
                  alt="coverImage"
                  width={250}
                  className="object-scale-down w-[250px] h-[105px]"
                  height={105}
               />

               <div className="gap-2 join">
                  <UploadButton outline variant="neutral" onUpload={onUpload}>
                     Change
                  </UploadButton>
                  <Button variant="error" onClick={onRemove}>
                     Remove
                  </Button>
               </div>
            </>
         )}
      </div>
   );
};
export default UploadImage;
