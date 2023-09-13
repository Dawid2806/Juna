import React, { useState } from "react";
import { RegisterForm } from "@/Components/Global/AuthComponents/Register";
const Login = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  return (
    <div className="flex min-h-full flex-col justify-center px-6  lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          {!isLoginForm ? "Zaloguj się !" : "Zarejestruj się !"}
        </h2>
      </div>
      {<RegisterForm />}
      <p className="mt-10 text-center text-sm text-gray-500">
        <button
          onClick={() => {
            setIsLoginForm(!isLoginForm);
          }}
          type="submit"
          className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
        >
          {isLoginForm ? "Zaloguj się !" : "Zarejestruj się !"}
        </button>
      </p>
    </div>
  );
};

export default Login;
