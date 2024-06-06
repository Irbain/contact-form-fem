import React from "react";

interface props {
  label: string;
  required: boolean;
  className: string;
}

const Input = ({ label, required, className }: props) => {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={label}
        className="text-[16px] text-gray-500 cursor-pointer"
      >
        {label}{" "}
        <div className="text-green-600 inline-block">
          {required ? "*" : null}
        </div>
      </label>
      <input
        id={label}
        className={`${className} w-full border-gray-500 
        border-[0.9px] rounded-md pl-[10px]
        focus:outline-none focus:ring-0 focus:border-green-600 `}
      />
    </div>
  );
};

export default Input;
