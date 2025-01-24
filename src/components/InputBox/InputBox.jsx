import React from 'react';

const InputBox = ({ 
  value, 
  onChange, 
  placeholder = '', 
  icon = null, 
  iconPosition = 'left', 
  className = '', 
  ...props 
}) => {
  return (
    <div 
      className={`flex items-center bg-white text-black border border-black rounded-[20px] py-2 px-4 my-2 w-full ${className}`}
    >
      {/* Icon bên trái */}
      {icon && iconPosition === 'left' && (
        <div className="mr-2 flex items-center">
          {icon}
        </div>
      )}

      {/* Input */}
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="flex-1 bg-transparent text-black outline-none"
        {...props}
      />

      {/* Icon bên phải */}
      {icon && iconPosition === 'right' && (
        <div className="ml-2 flex items-center">
          {icon}
        </div>
      )}
    </div>
  );
};

export default InputBox;
