import React, { useId } from "react";

const Select = ({ options, lable, className = "", ...props }, ref) => {
  const id = useId();
  return (
    <div className="w-full ">
      {lable && <label className="inline-block mb-1 pl-1"></label>}
      <select
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        ref={ref}
        {...props}
        id={id}
      >
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default React.forwardRef(Select);
