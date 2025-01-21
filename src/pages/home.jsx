import React, { useState } from 'react';
import { BottomNavigation, Page } from 'zmp-ui';
import ThietBi from './thietbi';
import MuaVu from './muavu';
import CuaHang from './cuahang';
import NongHo from './nongho';
import DanhMuc from './danhmuc';
import 'boxicons';

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('danhmuc');

  const renderContent = () => {
    switch (activeTab) {
      case 'danhmuc':
        return <DanhMuc />;
      case 'thietbi':
        return <ThietBi />;
      case 'muavu':
        return <MuaVu />;
      case 'cuahang':
        return <CuaHang />;
      case 'nongho':
        return <NongHo />;
      default:
        return <DanhMuc />;
    }
  };

  return (
    <Page className="page">
      <div className="content-container" style={{ paddingBottom: '56px' }}>
        {renderContent()}
      </div>

      <BottomNavigation
        activeKey={activeTab}
        onChange={(key) => setActiveTab(key)}
        style={{
          position: 'fixed',
          bottom: 0,
          width: '100%',
          padding: '5px 0', 
        }}
      >
        <BottomNavigation.Item
          key="danhmuc"
          label={<span className={`text-sm ${activeTab === 'danhmuc' ? 'text-green-500' : 'text-gray-500'}`}>Danh Mục</span>}
          icon={<box-icon name='tag' rotate='90' color={activeTab === 'danhmuc' ? '#03ac47' : '#B0B0B0'} size="20px" />}
        />
        <BottomNavigation.Item
          key="thietbi"
          label={<span className={`text-sm ${activeTab === 'thietbi' ? 'text-green-500' : 'text-gray-500'}`}>Thiết Bị</span>}
          icon={<box-icon name='slider-alt' rotate='90' color={activeTab === 'thietbi' ? '#03ac47' : '#B0B0B0'} size="20px" />}
        />
        <BottomNavigation.Item
          key="muavu"
          label={<span className={`text-sm ${activeTab === 'muavu' ? 'text-green-500' : 'text-gray-500'}`}>Mùa vụ</span>}
          icon={<box-icon name='calendar' color={activeTab === 'muavu' ? '#03ac47' : '#B0B0B0'} size="20px" />}
        />
        <BottomNavigation.Item
          key="cuahang"
          label={<span className={`text-sm ${activeTab === 'cuahang' ? 'text-green-500' : 'text-gray-500'}`}>Cửa Hàng</span>}
          icon={<box-icon name='store' color={activeTab === 'cuahang' ? '#03ac47' : '#B0B0B0'} size="20px" />}
        />
        <BottomNavigation.Item
          key="nongho"
          label={<span className={`text-sm ${activeTab === 'nongho' ? 'text-green-500' : 'text-gray-500'}`}>Nông Hộ</span>}
          icon={<box-icon name='user' color={activeTab === 'nongho' ? '#03ac47' : '#B0B0B0'} size="20px" />}
        />
      </BottomNavigation>
    </Page>
  );
};

export default HomePage;