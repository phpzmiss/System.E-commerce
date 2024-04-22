import React from "react";

const ElementTask = ({ className, children, props }) => {
  return (
    <div class="flex items-start justify-start gap-x-3 gap-y-3 " className={className} {...props}>
      {children}
    </div>
  );
};

export default ElementTask;
