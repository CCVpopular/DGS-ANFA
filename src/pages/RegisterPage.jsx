import React from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate('/login'); // Quay lại trang Đăng nhập
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Đăng ký</h1>
      <input
        type="text"
        placeholder="Tên đầy đủ"
        className="border rounded-lg px-4 py-2 mb-4 w-80"
      />
      <input
        type="email"
        placeholder="Email"
        className="border rounded-lg px-4 py-2 mb-4 w-80"
      />
      <input
        type="password"
        placeholder="Mật khẩu"
        className="border rounded-lg px-4 py-2 mb-4 w-80"
      />
      <button
        className="bg-[#03ac47] text-white py-2 px-4 rounded-lg w-80 hover:bg-[#028c3a]"
      >
        Đăng ký
      </button>
      <button
        onClick={handleLoginRedirect}
        className="text-[#03ac47] mt-4 hover:underline"
      >
        Đã có tài khoản? Đăng nhập
      </button>
    </div>
  );
};

export default RegisterPage;
