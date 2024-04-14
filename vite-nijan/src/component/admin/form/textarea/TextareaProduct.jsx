import React from "react";
import Textarea from "./Textarea";

const TextareaProduct = ({
  label,
  name,
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
      <Textarea
        name={name}
        placeholder={`Enter your ${label}`}
        id={name}
        control={control}
        className="w-full text-black shadow-lg"
        value={value}
        onChange={handleChangeProduct}
        {...props}
      ></Textarea>
    </div>
  );
};

export default TextareaProduct;
