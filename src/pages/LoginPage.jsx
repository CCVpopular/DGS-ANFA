import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/button/Button';
import AFTI from '../assets/images/AFTI.png'; // Import ảnh từ thư mục src/assets
import InputBox from '../components/InputBox/InputBox'; // Import InputBox
import 'boxicons/css/boxicons.min.css'; // Import Boxicons CSS

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false); // State để theo dõi trạng thái ẩn/hiện mật khẩu
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false); // State để theo dõi trạng thái checkbox "Lưu đăng nhập"
  
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/danhmuc'); // Chuyển đến trang Danh Mục
  };

  const handleRegisterRedirect = () => {
    navigate('/register'); // Chuyển đến trang Đăng Ký
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState); // Chuyển trạng thái ẩn/hiện mật khẩu
  };

  const toggleRememberMe = () => {
    setRememberMe((prevState) => !prevState); // Thay đổi trạng thái checkbox
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {/* Hình ảnh logo */}
      <div className="mb-3">
        <img
          src={AFTI}  // Sử dụng ảnh đã import
          alt="Logo"
          className="w-40 h-40 object-contain mb-4"  // Kích thước hình ảnh lớn, căn giữa
        />
      </div>

      {/* Input SDT với label */}
      <div className="mb-2 w-80"> {/* Điều chỉnh độ rộng của input */}
        <label className="block text-gray-500 mb-1 font-bold pl-4">Tài khoản</label> {/* Tăng cỡ chữ và thêm font-bold */}
        <InputBox
          value={"0906 17 9979"}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="SDT"
        />
      </div>

      {/* Input Mật khẩu với label và icon ẩn/hiện */}
      <div className="mb-2 w-80"> {/* Điều chỉnh độ rộng của input */}
        <label className="block text-gray-500 mb-1 font-bold pl-4">Mật khẩu</label> {/* Tăng cỡ chữ và thêm font-bold */}
        <InputBox
          type={showPassword ? 'text' : 'password'} // Thay đổi kiểu input khi ẩn/hiện mật khẩu
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

      {/* Lưu đăng nhập và Quên mật khẩu */}
      <div className="flex justify-between items-center w-80 mb-4">
        {/* Checkbox "Lưu đăng nhập" */}
        <label className="flex items-center text-sm cursor-pointer" onClick={toggleRememberMe}>
          <div className={`checkbox-custom ${rememberMe ? 'checked' : ''}`}></div> {/* Tùy chỉnh checkbox */}
          <span className="text-gray-600 ml-2">Lưu đăng nhập</span>
        </label>
        
        {/* Quên mật khẩu */}
        <button className="text-[#03ac47] text-sm hover:underline">
          Quên mật khẩu?
        </button>
      </div>

      {/* Nút Đăng nhập */}
      <Button onClick={handleLogin} className="font-bold">Đăng nhập</Button>

      {/* Nút Chuyển đến Đăng ký */}
      <button
        onClick={handleRegisterRedirect}
        className="mt-4 hover:underline"
      >
        <span className="text-gray-600">Chưa có tài khoản? </span>
        <span className="text-[#03ac47]">Đăng ký ngay</span>
      </button>
    </div>
  );
};

export default LoginPage;
