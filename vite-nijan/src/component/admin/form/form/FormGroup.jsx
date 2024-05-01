import React from "react";
import Input from "../input/Input";

const FormGroup = ({
  name,
  value,
  control,
  handleChangeUser,
  children,
  props,
  type = "text",
}) => {
  return (
    <div className="relative w-full form-group">
      <label className="text-[11px] tracking-[2px] text-blue-500 absolute top-1 left-4">
        {children}
      </label>
      <Input
        name={name}
        id={name}
        control={control}
        type={type}
        className="w-full pt-5 pb-3 text-blue-700 border-none bg-slate-700 focus:border-none"
        value={value}
        onChange={handleChangeUser}
      />
    </div>
  );
};

export default FormGroup;
