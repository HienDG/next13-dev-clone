/* eslint-disable no-console */
import { useCallback, useMemo, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { HOME_URL } from "@src/utils/constants";

import { signUpSchema, type SignUpSchema } from "@src/libs/validations";

const defaultValues: SignUpSchema = {
   email: "",
   username: "",
   password: "",
   confirmPassword: "",
};

const useCreateUserWithCredentials = () => {
   const [isLoading, setIsLoading] = useState<boolean>(false);
   const router = useRouter();

   const {
      register,
      formState: { errors, isDirty, isValid },
      reset,
      handleSubmit,
   } = useForm<SignUpSchema>({
      resolver: zodResolver(signUpSchema),
      mode: "onChange",
      defaultValues,
   });

   const onSubmit: SubmitHandler<SignUpSchema> = useCallback(
      async (data) => {
         setIsLoading(true);
         try {
            const { email, username, password } = data;
            await axios.post("/api/auth/sign-up", { email, username, password });

            const res = await signIn("credentials", {
               email,
               password,
               redirect: false,
            });

            if (!res?.ok || !!res.error) throw res?.error;

            toast.success("Thanks for signing up. Your account has been created.");
            router.push(HOME_URL);
         } catch (error: unknown) {
            console.error(error);
            toast.error("Something went wrong");
         }

         reset();
         setIsLoading(false);
      },
      [reset, router]
   );

   return useMemo(
      () => ({
         onSubmit: handleSubmit(onSubmit),
         register,
         errors,
         isDirty,
         isValid,
         isLoading,
      }),
      [errors, handleSubmit, isDirty, isLoading, isValid, onSubmit, register]
   );
};

export default useCreateUserWithCredentials;
