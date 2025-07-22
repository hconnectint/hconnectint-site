import React from "react";

const Button = ({ text, href, ariaLabel }) => {
  // Provide default props and basic validation
  if (!text) {
    console.warn("Button component requires a text prop");
    return null;
  }

  return (
    <a href={href} aria-label={ariaLabel || text}>
      <button className="p-[1.5px] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2e2e53] to-[#0000ff] rounded-lg" />
        <div className="px-8 py-2 bg-white rounded-[6px] relative group transition duration-200 text-[#0000e3] hover:bg-transparent hover:text-white">
          {text}
        </div>
      </button>
    </a>
  );
};

export default Button;
