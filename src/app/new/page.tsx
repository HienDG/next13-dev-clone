"use client";

import React, { useCallback, useState } from "react";
import { NextPage } from "next";
import { useRecoilValue, useResetRecoilState } from "recoil";
import toast from "react-hot-toast";
import axios from "axios";

import { FormController } from "@src/components/form";
import { Button } from "@src/components/ui";
import { Header, Content } from "./components";

import { formState } from "@src/atoms";

const Page: NextPage = () => {
   const { image, title, body } = useRecoilValue(formState);
   const [isLoading, setIsLoading] = useState<boolean>(false);
   const reset = useResetRecoilState(formState);

   const handleSubmit = useCallback(
      async (event: React.FormEvent) => {
         event.preventDefault();
         setIsLoading(true);

         if (title.length === 0) return toast.error("Title can't be blank");

         await axios.post("/api/posts", {
            image,
            title,
            body,
         });

         setIsLoading(false);
         reset();
      },
      [body, image, reset, title]
   );

   return (
      <FormController
         onSubmit={handleSubmit}
         className="grid lg:grid-cols-[64px_7fr_3fr] space-y-0 md:grid-cols-[64px_1fr] min-h-screen max-w-7xl mx-auto w-full grid-rows-[min-content_calc(100vh-56px-72px)_min-content]  gap-x-2 md:gap-x-4 px-4"
      >
         <Header />
         <span className="sr-only"></span>
         <Content />
         <div className="py-4 md:col-span-2 md:col-start-2 md:row-start-3">
            <Button variant="primary" className="btn-wide" type="submit" isLoading={isLoading}>
               Publish
            </Button>
         </div>
      </FormController>
   );
};
export default Page;
