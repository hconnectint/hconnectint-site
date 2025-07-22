import React from "react";

const Button = ({ text, href }) => {
  // Provide default props and basic validation

  return (
    <a href={href}>
      <button className="p-[1.6px] relative ml-[-2px]">
        <div className="absolute inset-0 bg-white rounded-lg" />
        <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent hover:text-[#0000e3]">
          {text}
        </div>
      </button>
    </a>
  );
};

export default Button;
