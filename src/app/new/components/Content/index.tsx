"use client";

import React, { useCallback } from "react";
import { useRecoilState } from "recoil";

import TextInput from "./TextInput";
import UploadImage from "./UploadImage";

import { formState } from "@src/atoms";

type ChangeEvent = React.ChangeEvent<HTMLTextAreaElement>;

interface ContentProps {}

const Content: React.FC<ContentProps> = () => {
   const [formStateValue, setFormStateValue] = useRecoilState(formState);

   const onUpload = useCallback(
      (result: any) => {
         return setFormStateValue((prev) => ({ ...prev, image: result.info.secure_url }));
      },
      [setFormStateValue]
   );

   const onRemove = useCallback(
      () => setFormStateValue((prev) => ({ ...prev, image: null })),
      [setFormStateValue]
   );

   const onTitleChange = useCallback(
      (event: ChangeEvent) => setFormStateValue((prev) => ({ ...prev, title: event.target.value })),
      [setFormStateValue]
   );

   const onBodyChange = useCallback(
      (event: ChangeEvent) => setFormStateValue((prev) => ({ ...prev, body: event.target.value })),
      [setFormStateValue]
   );

   return (
      <div className="md:col-start-2 md:col-end-2 md:row-start-2 h-[calc(100vh-56px-72px)] bg-white rounded-xl shadow-md flex flex-col overflow-y-scroll scrollbar-hide">
         <div className="p-4 lg:px-16 md:p-12 sm:!pb-4 lg:pt-8">
            <UploadImage
               selectedFile={formStateValue.image}
               onRemove={onRemove}
               onUpload={onUpload}
            />
            <TextInput
               placeholder="New post title here..."
               className="text-xl font-bold textarea-xs lg:text-4xl md:text-2xl"
               value={formStateValue.title}
               onChange={onTitleChange}
            />
         </div>

         <TextInput
            placeholder="Write your post content here"
            wrapperClassName="flex-1 p-4 lg:px-16 md:p-12 lg:py-8"
            className="text-xl"
            value={formStateValue.body}
            onChange={onBodyChange}
         />
      </div>
   );
};
export default Content;
