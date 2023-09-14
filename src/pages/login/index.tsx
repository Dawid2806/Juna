import { LoginForm } from "@/Components/Organisms/LoginForm/LoginForm";
import { RegisterForm } from "@/Components/Organisms/RegisterForm/Register";
import React, { useState } from "react";
const Login = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  return (
    <div className="flex min-h-full flex-col justify-center px-6  lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          {isLoginForm ? "Zaloguj się !" : "Zarejestruj się !"}
        </h2>
      </div>
      {isLoginForm ? <LoginForm /> : <RegisterForm />}
      <span className="text-center mt-8">LUB</span>
      <p className="mt-10 text-center text-sm text-gray-500">
        <button
          onClick={() => {
            setIsLoginForm(!isLoginForm);
          }}
          type="submit"
          className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
        >
          {isLoginForm ? "Zarejestruj się !" : "Zaloguj się !"}
        </button>
      </p>
    </div>
  );
};

export default Login;
