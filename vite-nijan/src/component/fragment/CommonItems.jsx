import React from "react";

const CommonItems = ({ className, children, title, props }) => {
  return (
    <div className={className}>
      <h3 className="text-2xl font-bold leading-5 tracking-[4px] uppercase text-amber-600">
        {title}
      </h3>
      {children}
    </div>
  );
};

export default CommonItems;
