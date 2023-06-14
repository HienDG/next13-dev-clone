"use client";

import React, { useCallback } from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";

import TextInput from "./TextInput";
import UploadImage from "./UploadImage";

interface ContentProps {
   register: UseFormRegister<FieldValues>;
   selectedImage: string | null;
   setSelectedImage: React.Dispatch<React.SetStateAction<string | null>>;
}

const Content: React.FC<ContentProps> = ({ register, selectedImage, setSelectedImage }) => {
   const onUpload = useCallback(
      (result: any) => {
         return setSelectedImage(() => result.info.secure_url);
      },
      [setSelectedImage]
   );

   const onRemove = useCallback(() => setSelectedImage(() => null), [setSelectedImage]);

   return (
      <div className="md:col-start-2 md:col-end-2 md:row-start-2 h-[calc(100vh-56px-72px)] bg-white rounded-xl shadow-md flex flex-col overflow-y-scroll scrollbar-hide">
         <div className="p-4 lg:px-16 md:p-12 sm:!pb-4 lg:pt-8">
            <UploadImage selectedFile={selectedImage} onRemove={onRemove} onUpload={onUpload} />
            <TextInput
               placeholder="New post title here..."
               className="text-xl font-bold textarea-xs lg:text-4xl md:text-2xl textarea-bordered"
               {...register("title")}
            />
         </div>

         <TextInput
            placeholder="Write your post content here"
            wrapperClassName="flex-1 p-4 lg:px-16 md:p-12 lg:py-8 "
            className="text-xl textarea-bordered"
            {...register("body")}
         />
      </div>
   );
};
export default Content;
