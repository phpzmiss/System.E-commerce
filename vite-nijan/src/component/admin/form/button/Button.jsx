import React from "react";
// ?- Can I use this
// ! Do you think it
// todo: 
// * 

const Button = ({ children, className, ...props }) => {
  return (
    <button
      type="submit"
      className={`w-full font-semibold text-white  rounded-lg ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
