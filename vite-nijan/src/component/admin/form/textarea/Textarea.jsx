import React from "react";
import { useController } from "react-hook-form";

const Textarea = ({ control, className, ...props }) => {
  const { field } = useController({
    control,
    className,
    name: props.name,
    defaultValue: "",
  });
  return (
    <textarea
      className={`p-4 transition-all bg-white border border-gray-100 rounded-md outline-none focus:border-blue-500 ${className} resize-y`}
      {...field}
      {...props}
    ></textarea>
  );
};

export default Textarea;
