"use client";

import React from "react";

import { FormController, Input } from "@src/components/form";
import { Button } from "@src/components/ui";

import { useCreateUserWithCredentials } from "@src/hooks";

const SignUp: React.FC = () => {
   const { register, isDirty, isLoading, isValid, onSubmit, errors } =
      useCreateUserWithCredentials();

   return (
      <FormController className="space-y-8" onSubmit={onSubmit}>
         <Input
            label="Username"
            id="username"
            {...register("username")}
            errorMessage={errors.username?.message}
         />
         <Input
            label="Email"
            id="email"
            type="email"
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
         <Input
            label="Confirm Password"
            id="confirmPassword"
            type="password"
            autoComplete="off"
            {...register("confirmPassword")}
            errorMessage={errors.confirmPassword?.message}
         />
         <Button
            className="w-full h-12"
            variant="primary"
            size="md"
            disabled={!isDirty || !isValid}
            isLoading={isLoading}
         >
            Sign Up
         </Button>
      </FormController>
   );
};
export default SignUp;
