import React, { useId } from "react";

const Input = ({ lable, type = "text", className = "", ...props }, ref) => {
  const id = useId();
  return (
    <div className="w-full">
      {lable && (
        <label className="inline-block mb-1 pl-1" htmlFor={id}>
          {lable}
        </label>
      )}
      <input
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        type={type}
        id={id}
        ref={ref}
        {...props}
      />
    </div>
  );
};

export default React.forwardRef(Input);
