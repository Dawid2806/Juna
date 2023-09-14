import { useSignUpEmailPassword } from "@nhost/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CustomModal } from "../Modal/Modal";
import { Radio, RadioGroup, Spinner } from "@nextui-org/react";
import { CustomInput } from "@/Components/Atoms/Input/CustomInput";

type FormData = {
  email: string;
  password: string;
  confirmPassword: string;
  first_name: string;
  last_name: string;
};
const schema = yup
  .object({
    email: yup.string().required(),
    first_name: yup.string().required(),
    last_name: yup.string().required(),
    password: yup.string().min(9).required(),
    confirmPassword: yup
      .string()
      .label("confirm password")
      .required()
      .oneOf([yup.ref("password")], "Passwords must match"),
  })
  .required();

export const RegisterForm = ({}) => {
  const { signUpEmailPassword, needsEmailVerification, isLoading, error } =
    useSignUpEmailPassword();
  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = React.useState("user");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const handleFormSubmit = async (data: FormData) => {
    let roles = ["user"];
    if (selected === "journalist") {
      roles.push("Journalist");
    }
    await signUpEmailPassword(data.email, data.password, {
      displayName: `${data.first_name} ${data.last_name}`,
      defaultRole: "user",
      allowedRoles: roles,
    });
    reset();
    if (needsEmailVerification) {
      setShowModal(true);
    }
  };

  return (
    <div className="">
      <div className="flex min-h-full flex-col justify-center px-6  lg:px-8">
        <div className=" sm:mx-auto sm:w-full sm:max-w-sm">
          {isLoading ? (
            <Spinner />
          ) : (
            <form
              onSubmit={handleSubmit(handleFormSubmit)}
              className="space-y-6"
            >
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
              <CustomInput
                label="powtórz hasło"
                id="confirm_password"
                type="password"
                registerFunction={register("confirmPassword")}
                autoComplete="current-password"
                errorMessage={errors.confirmPassword?.message}
              />
              <div className="flex gap-4">
                <CustomInput
                  label="imie"
                  id="first_name"
                  type="text"
                  registerFunction={register("first_name")}
                  errorMessage={errors.first_name?.message}
                />
                <CustomInput
                  label="nazwisko"
                  id="last_name"
                  type="text"
                  registerFunction={register("last_name")}
                  errorMessage={errors.last_name?.message}
                />
              </div>
              <RadioGroup
                label="Wybierz swoją role"
                orientation="horizontal"
                value={selected}
                onValueChange={setSelected}
              >
                <Radio value="user">Czytelnik</Radio>
                <Radio value="journalist">Dziennikarz</Radio>
              </RadioGroup>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
      {needsEmailVerification && (
        <CustomModal
          buttonTitle="ok"
          title="Rejestracja zakonczona pomyslnie"
          message="Twoja rejestracja przebiegła pomyslnie, pamietaj aby zweryfikowac swoj adres email "
        />
      )}
    </div>
  );
};
