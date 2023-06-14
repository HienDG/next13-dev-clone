"use client";

import React, { useCallback, useState } from "react";
import { NextPage } from "next";
import toast from "react-hot-toast";
import axios from "axios";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";

import { FormController } from "@src/components/form";
import { Button } from "@src/components/ui";
import { Header, Content } from "./components";
import { LoadingModal } from "@src/components/modal";

import { API_POST_URL } from "@src/utils/constants";

const defaultValues: FieldValues = {
   title: "",
   body: "",
};

const Draft: NextPage = () => {
   const [isLoading, setIsLoading] = useState<boolean>(false);
   const [selectedImage, setSelectedImage] = useState<string | null>(null);

   const {
      register,
      handleSubmit,
      formState: { isDirty },
      reset,
   } = useForm<FieldValues>({
      mode: "onChange",
      defaultValues,
   });

   const onSubmit: SubmitHandler<FieldValues> = useCallback(
      async (data) => {
         setIsLoading(true);
         try {
            const { title, body } = data;

            if (title.length === 0) return toast.error("Title can't be blank");

            const newPost = { image: selectedImage, title, body };

            await axios.post(API_POST_URL, newPost);
         } catch (error) {
            toast.error("Something went wrong");
         }

         setSelectedImage(null); // reset upload image
         setIsLoading(false);
         reset(); // rest all input fields
      },
      [reset, selectedImage]
   );

   return (
      <LoadingModal loading={isLoading}>
         <FormController
            onSubmit={handleSubmit(onSubmit)}
            className="grid lg:grid-cols-[64px_7fr_3fr] space-y-0 md:grid-cols-[64px_1fr] min-h-screen max-w-7xl mx-auto w-full grid-rows-[min-content_calc(100vh-56px-72px)_min-content]  gap-x-2 md:gap-x-4 px-4"
         >
            <Header />
            <span className="sr-only"></span>
            <Content
               register={register}
               selectedImage={selectedImage}
               setSelectedImage={setSelectedImage}
            />

            <div className="py-4 md:col-span-2 md:col-start-2 md:row-start-3">
               <Button
                  variant="primary"
                  className="btn-wide"
                  type="submit"
                  isLoading={isLoading}
                  disabled={!isDirty}
               >
                  Publish
               </Button>
            </div>
         </FormController>
      </LoadingModal>
   );
};
export default Draft;
