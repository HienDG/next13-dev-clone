"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { User } from "@prisma/client";

import { FormController } from "@src/components/form";
import { Avatar, Button } from "@src/components/ui";

import { API_COMMENTS_URL } from "@src/utils/constants";

interface CommentFormProps {
   user: User;
   postId: string;
}

const CommentForm: React.FC<CommentFormProps> = ({ user, postId }) => {
   const [isLoading, setIsLoading] = useState<boolean>(false);

   const {
      register,
      formState: { isDirty },
      handleSubmit,
      reset,
   } = useForm<FieldValues>({
      defaultValues: {
         body: "",
      },
   });

   const onSubmit: SubmitHandler<FieldValues> = async (data) => {
      try {
         setIsLoading(true);
         const { body } = data;

         await axios.post(API_COMMENTS_URL, { body, postId });
      } catch (error: unknown) {
         // eslint-disable-next-line no-console
         console.log(error);
         toast.error("Something went wrong");
      }

      setIsLoading(false);
      reset();
   };

   return (
      <FormController onSubmit={handleSubmit(onSubmit)} className="flex gap-2 mb-4 space-y-0">
         <Avatar src={user?.image || "/images/devlogo.webp"} />

         <div className="w-full mb-3">
            <div className="mb-4">
               <textarea
                  className="w-full h-32 resize-none textarea textarea-bordered hover:textarea-primary textarea-lg"
                  placeholder="Add to the discussion"
                  {...register("body", { required: true })}
               />
            </div>

            <Button variant="primary" isLoading={isLoading} type="submit" disabled={!isDirty}>
               Submit
            </Button>
         </div>
      </FormController>
   );
};
export default CommentForm;
