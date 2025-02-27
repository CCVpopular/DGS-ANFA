import React, { useState } from 'react';

const CauHoi = ({ onConfirm }) => {
  const [content, setContent] = useState('');

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = () => {
    onConfirm(content);
  };

  return (
    <div>
      <h1>Câu Hỏi</h1>
      <textarea value={content} onChange={handleChange} placeholder="Nhập nội dung câu hỏi...." />
      <button onClick={handleSubmit}>Xác nhận</button>
    </div>
  );
};

export default CauHoi;
