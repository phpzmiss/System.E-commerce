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
    <div className="form-group w-full relative">
      <label className="text-[11px] tracking-[2px] text-blue-500 absolute top-1 left-4">
        {children}
      </label>
      <Input
        name={name}
        id={name}
        control={control}
        type={type}
        className="text-white bg-slate-700 focus:border-none border-none w-full pt-5 pb-3"
        value={value}
        onChange={handleChangeUser}
      />
    </div>
  );
};

export default FormGroup;
