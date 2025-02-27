import React from 'react';

const Select = ({ value, onChange, options, required }) => {
  return (
    <select value={value} onChange={onChange} required={required}>
      <option value="" disabled hidden>Chọn một tùy chọn</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;