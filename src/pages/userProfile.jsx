import React from 'react';
import { Page } from 'zmp-ui';
import { useNavigate } from 'react-router-dom';
import Button from '../components/button/Button';
import InputBox from '../components/InputBox/InputBox';

const UserProfile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Xử lý đăng xuất
    console.log('Đăng xuất thành công!');
    navigate('/login'); // Điều hướng về trang đăng nhập
  };

  const handleBack = () => {
    navigate('/'); // Điều hướng về trang danh mục
  };

  return (
    <Page className="page">
      {/* Nút Back */}
      <div className="p-4 bg-gray-100">
        <div className="flex items-center justify-between w-full">
          <button
            onClick={handleBack}
            className="text-blue-500 font-medium hover:underline flex items-center"
          >
            <box-icon name="arrow-back" color="#03ac47" size="25px"></box-icon>
          </button>
          <div className="flex items-center space-x-4">
              <div className="relative">
                <box-icon name="bell" color="#03ac47" size="25px"></box-icon>
                <div className="absolute top-0.5 right-0.5 bg-red-500 rounded-full w-2 h-2"></div>
              </div>
          </div>
        </div>
      </div>

      {/* Nội dung chính */}
      <div className="flex flex-col justify-center items-center p-4">  
        {/* Avatar */}
        <div className="w-32 h-32 rounded-full overflow-hidden mb-1">
          <img
            src="https://t3.ftcdn.net/jpg/09/02/05/58/360_F_902055832_IHaZOB2KTiHJZCv2EN8GM26s8qbtq3Np.jpg"
            alt="Avatar"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Thông tin người dùng */}
        <div className="text-center mb-6">
          <h2 className="font-bold text-2xl my-1">Phạm Văn</h2>
          <InputBox
            value="Nguyễn Văn"
            icon={<box-icon name="user" color="#03ac47" size="20px" />}
            iconPosition="left"
          />
          <InputBox
            value="AFTI Farm"
            icon={<box-icon name="user" color="#03ac47" size="20px" />}
            iconPosition="left"
          />
          <InputBox
            value="21/01/1975"
            icon={<box-icon name="calendar-check" color="#03ac47" size="20px" />}
            iconPosition="left"
          />
          <InputBox
            value="Chợ Mới, Gò Công, TG"
            icon={<box-icon name="map" color="#03ac47" size="20px" />}
            iconPosition="left"
          />
          <InputBox
            value="0906 17 9979"
            icon={<box-icon name="phone" color="#03ac47" size="20px" />}
            iconPosition="left"
          />
          <InputBox
            value="aftiglobal@gmail.com"
            icon={<box-icon name="mail-send" color="#03ac47" size="20px" />}
            iconPosition="left"
          />
        </div>

        {/* Nút đăng xuất */}
        <Button
            onClick={handleLogout}
        >
            Đăng xuất
        </Button>
      </div>
    </Page>
  );
};

export default UserProfile;
