import React from "react";

const NavIcons = ({ title, children, props }) => {
  return (
    <span className="flex items-center justify-start gap-x-3" {...props}>
      {children} {title}
    </span>
  );
};

export default NavIcons;
