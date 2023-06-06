import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { signUpSchema, type SignUpSchema } from "@src/libs/validations";

const defaultValues: SignUpSchema = {
   email: "",
   username: "",
   password: "",
   confirmPassword: "",
};

const useCreateUserWithCredentials = () => {
   const [isLoading, setIsLoading] = useState<boolean>(false);

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

   const onSubmit: SubmitHandler<SignUpSchema> = (data) => {
      console.log(data);
   };

   return {
      onSubmit: handleSubmit(onSubmit),
      register,
      errors,
      isDirty,
      isValid,
      isLoading,
   };
};

export default useCreateUserWithCredentials;
