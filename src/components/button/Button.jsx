import React from 'react';

const Button = ({ children, onClick, className = '', ...props }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[#03ac47] text-white py-2 px-20 rounded-[20px] hover:bg-[#028c3a] ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
