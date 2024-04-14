import React from "react";
import Input from "./Input";

const InputProduct = ({
  name,
  label,
  className = "",
  handleChangeProduct,
  control,
  value,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-3 mb-5">
      <label htmlFor={name} className="cursor-pointer">
        {label}
      </label>
      <Input
        name={name}
        placeholder={`Enter your ${name}`}
        id={name}
        control={control}
        type="text"
        className={`text-black w-full text-black shadow-lg ${className}`}
        value={value}
        onChange={handleChangeProduct}
        {...props}
      ></Input>
    </div>
  );
};

export default InputProduct;
