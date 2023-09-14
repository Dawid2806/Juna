import React from "react";

type InputFieldProps = {
  label: string;
  id: string;
  type: string;
  registerFunction: any;
  autoComplete?: string;
  errorMessage?: string;
};

export const CustomInput = ({
  id,
  label,
  registerFunction,
  type,
  autoComplete,
  errorMessage,
}: InputFieldProps) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <label
          htmlFor={id}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label}
        </label>
      </div>
      <div className="mt-2">
        <input
          id={id}
          type={type}
          {...registerFunction}
          autoComplete={autoComplete}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
      <p>{errorMessage}</p>
    </div>
  );
};
