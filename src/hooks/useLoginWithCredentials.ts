import { useMemo, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

import { signInSchema, type SignInSchema } from "@src/libs/validations";
import { HOME_URL } from "@src/utils/constants";

const defaultValues: SignInSchema = {
   email: "",
   password: "",
};

const useLoginWithCredentials = () => {
   const [isLoading, setIsLoading] = useState<boolean>(false);
   const router = useRouter();

   const {
      register,
      formState: { errors, isDirty, isValid },
      reset,
      handleSubmit,
   } = useForm<SignInSchema>({
      resolver: zodResolver(signInSchema),
      mode: "onChange",
      defaultValues,
   });

   const onSubmit: SubmitHandler<SignInSchema> = async (data) => {
      setIsLoading(true);
      try {
         const { email, password } = data;

         const res = await signIn("credentials", {
            email,
            password,
            redirect: false,
         });

         if (!res?.ok || !!res.error) throw res?.error;

         toast.success("You are successfully logged in");
         router.push(HOME_URL);
      } catch (error: unknown) {
         // eslint-disable-next-line no-console
         console.error(error);
         toast.error("Something went wrong");
      }

      reset();
      setIsLoading(false);
   };

   return useMemo(
      () => ({
         register,
         errors,
         isDirty,
         isValid,
         onSubmit: handleSubmit(onSubmit),
         isLoading,
      }),
      [errors, handleSubmit, isDirty, isLoading, isValid, register]
   );
};

export default useLoginWithCredentials;
