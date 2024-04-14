import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ children, url, props }) => {
  return (
    <NavLink
      to={url}
      className={({ isActive }) =>
        isActive
          ? "text-blue-500 p-5  w-full border-l-[10px] border-blue-500 bg-slate-200"
          : "p-5 hover:text-blue-500  transition-all w-full"
      }
      {...props}
    >
      {children}
    </NavLink>
  );
};

export default NavItem;
