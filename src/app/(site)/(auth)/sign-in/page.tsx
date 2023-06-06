"use client";

import React from "react";

import { FormController, Input } from "@src/components/form";
import { Button } from "@src/components/ui";

import { useLoginWithCredentials } from "@src/hooks";

const SignIn: React.FC = () => {
   const { register, isDirty, errors, isLoading, isValid, onSubmit } = useLoginWithCredentials();

   return (
      <FormController className="space-y-8" onSubmit={onSubmit}>
         <Input
            label="Email"
            id="email"
            {...register("email")}
            errorMessage={errors.email?.message}
         />
         <Input
            label="Password"
            id="password"
            type="password"
            autoComplete="off"
            {...register("password")}
            errorMessage={errors.password?.message}
         />
         <Button
            className="w-full h-12"
            variant="primary"
            size="md"
            disabled={!isDirty || !isValid}
            isLoading={isLoading}
         >
            Sign In
         </Button>
      </FormController>
   );
};
export default SignIn;
