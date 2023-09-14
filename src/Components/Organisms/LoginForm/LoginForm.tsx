import React from "react";
import { CustomInput } from "@/Components/Atoms/Input/CustomInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Spinner } from "@nextui-org/react";
import { SignedIn, useSignInEmailPassword } from "@nhost/react";

type FormData = {
  email: string;
  password: string;
};
const schema = yup
  .object({
    email: yup.string().required(),
    password: yup.string().min(9).required(),
  })
  .required();
export const LoginForm = () => {
  const {
    signInEmailPassword,
    needsEmailVerification,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useSignInEmailPassword();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    signInEmailPassword(data.email, data.password);
  };
  return (
    <div className="">
      <SignedIn>jestes zalogowawny</SignedIn>
      <div className="flex min-h-full flex-col justify-center px-6  lg:px-8">
        <div className=" sm:mx-auto sm:w-full sm:max-w-sm">
          {isLoading ? (
            <Spinner />
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <CustomInput
                id="email"
                label="adres Email"
                registerFunction={register("email")}
                autoComplete="email"
                type="email"
                errorMessage={errors.email?.message}
              />
              <CustomInput
                id="password"
                label="hasło"
                registerFunction={register("password")}
                autoComplete="current-password"
                type="password"
                errorMessage={errors.password?.message}
              />
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Zaloguj się
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
