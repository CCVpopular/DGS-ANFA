import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/button/Button'; // Giả sử bạn có component Button
import InputBox from '../components/InputBox/InputBox'; // Giả sử bạn có component InputBox
import 'boxicons/css/boxicons.min.css'; // Import Boxicons CSS
import imageRegister from '../assets/images/imageRegister.png'; // Import ảnh từ thư mục src/assets

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false); // State để theo dõi trạng thái ẩn/hiện mật khẩu
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate('/login'); // Quay lại trang Đăng nhập
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState); // Chuyển trạng thái ẩn/hiện mật khẩu
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {/* Tiêu đề trang Đăng ký */}
      <h1 className="text-2xl font-bold mb-4 text-[#03ac47]">Tạo tài khoản</h1>
      {/* Hình ảnh logo */}
      <div className="mb-3">
        <img
          src={imageRegister}  // Sử dụng ảnh đã import
          alt="Logo"
          className="w-60 h-60 object-contain mb-4"  // Kích thước hình ảnh lớn, căn giữa
        />
      </div>
      {/* Input SDT */}
      <div className="mb-2 w-80">
        <label className="block text-gray-500 mb-1 font-bold pl-4">Tài khoản</label>
        <InputBox
          value={"0906 17 9979"}
          placeholder="SDT"
        />
      </div>

      {/* Input Mật khẩu */}
      <div className="mb-2 w-80">
        <label className="block text-gray-500 mb-1 font-bold pl-4">Mật khẩu</label>
        <InputBox
          type={showPassword ? 'text' : 'password'}
          value={"123456"}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Mật khẩu"
          icon={
            <box-icon
              name={showPassword ? "show" : "hide"}
              color="#03ac47"
              size="20px"
              onClick={togglePasswordVisibility}
              className="cursor-pointer"
            />
          }
          iconPosition="right"
        />
      </div>

      {/* Input Xác nhận mật khẩu */}
      <div className="mb-2 w-80">
        <label className="block text-gray-500 mb-1 font-bold pl-4">Nhập lại</label>
        <InputBox
          type={showPassword ? 'text' : 'password'}
          value={"123456"}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Xác nhận mật khẩu"
          icon={
            <box-icon
              name={showPassword ? "show" : "hide"}
              color="#03ac47"
              size="20px"
              onClick={togglePasswordVisibility}
              className="cursor-pointer"
            />
          }
          iconPosition="right"
        />
      </div>

      {/* Nút Đăng ký */}
      <Button className="font-bold">Đăng ký</Button>

      {/* Nút Chuyển đến Đăng nhập */}
      <button
        onClick={handleLoginRedirect}
        className="mt-4 hover:underline"
      >
        <span className="text-gray-600">Đã có tài khoản? </span>
        <span className="text-[#03ac47]">Đăng nhập</span>
      </button>
    </div>
  );
};

export default RegisterPage;
