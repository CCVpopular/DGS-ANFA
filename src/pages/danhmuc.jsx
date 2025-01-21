import React from 'react';
import { Page, Text } from 'zmp-ui';

const DanhMuc = () => {
  return (
    <Page className="page">
      {/* AppBar */}
      <div className="p-4 bg-gray-100">
        {/* Avatar, Tên người dùng, và Icon tìm kiếm, thông báo */}
        <div className="flex items-center justify-between w-full">
          {/* Avatar và Tên người dùng */}
          <div className="flex items-center">
            {/* Avatar */}
            <div className="w-14 h-14 rounded-full mr-2 overflow-hidden">
              <img
                src="https://t3.ftcdn.net/jpg/09/02/05/58/360_F_902055832_IHaZOB2KTiHJZCv2EN8GM26s8qbtq3Np.jpg"
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-bold text-lg">Phạm Văn</span>
          </div>

          {/* Các icon (Tìm kiếm và Thông báo) */}
          <div className="flex items-center space-x-4">
            {/* Icon tìm kiếm */}
            <box-icon name="search" color="#03ac47" size="25px"></box-icon>

            {/* Icon chuông với chấm đỏ thông báo */}
            <div className="relative">
              <box-icon name="bell" color="#03ac47" size="25px"></box-icon>
              {/* Chấm đỏ thông báo */}
              <div className="absolute top-0.5 right-0.5 bg-red-500 rounded-full w-2 h-2"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Nội dung Danh Mục */}
      <div className="section-container p-4">
        <h1>Danh mục</h1>
        <p>Nội dung trang danh mục sẽ được hiển thị ở đây</p>
      </div>
    </Page>
  );
};

export default DanhMuc;
