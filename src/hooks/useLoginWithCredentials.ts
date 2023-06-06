import { useMemo, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { signInSchema, type SignInSchema } from "@src/libs/validations";

const defaultValues: SignInSchema = {
   email: "",
   password: "",
};

const useLoginWithCredentials = () => {
   const [isLoading, setIsLoading] = useState<boolean>(false);

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

   const onSubmit: SubmitHandler<SignInSchema> = (data) => {
      console.log(data);
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
