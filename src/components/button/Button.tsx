import React from "react";

const Button = ({ text, onClick }: { text?: string; onClick?: () => void }) => {
  return (
    <button
      className="relative px-8 py-3 overflow-hidden font-semibold text-white transition-all duration-300 shadow-xl cursor-pointer group rounded-xl gold-gradient-bg"
      onClick={() => onClick && onClick()}
    >
      {text}
    </button>
  );
};

export default Button;
