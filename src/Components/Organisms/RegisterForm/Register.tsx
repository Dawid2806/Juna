import { useSignUpEmailPassword } from "@nhost/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CustomModal } from "../Modal/Modal";

type FormData = {
  email: string;
  password: string;
  confirmPassword: string;
};
const schema = yup
  .object({
    email: yup.string().required(),
    password: yup.string().min(9).required(),
    confirmPassword: yup
      .string()
      .label("confirm password")
      .required()
      .oneOf([yup.ref("password")], "Passwords must match"),
  })
  .required();

export const RegisterForm = ({}) => {
  const {
    signUpEmailPassword,
    needsEmailVerification,
    isLoading,
    isError,
    error,
  } = useSignUpEmailPassword();
  const [showModal, setShowModal] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const handleFormSubmit = async (data: FormData) => {
    await signUpEmailPassword(data.email, data.password);
    if (needsEmailVerification) {
      setShowModal(true);
    }
    if (isError) {
      reset();
    }
  };
  isError;
  return (
    <div className="">
      {needsEmailVerification && (
        <CustomModal
          buttonTitle="ok"
          title="Rejestracja zakonczona pomyslnie"
          message="Twoja rejestracja przebiegła pomyslnie, pamietaj aby zweryfikowac swoj adres email "
        />
      )}

      <div className="flex min-h-full flex-col justify-center px-6  lg:px-8">
        <div className=" sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  type="email"
                  {...register("email")}
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <p>{errors.email?.message || error?.error}</p>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  type="password"
                  {...register("password")}
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <p>{errors.password?.message}</p>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="confirm_password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Powtórz hasło
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="confirm_password"
                  type="password"
                  {...register("confirmPassword")}
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <p>{errors.confirmPassword?.message}</p>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
