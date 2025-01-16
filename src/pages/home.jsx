import React, { useState } from 'react';
import { BottomNavigation, Icon, Page } from 'zmp-ui';
import ThietBi from './thietbi';
import MuaVu from './muavu';
import CuaHang from './cuahang';
import NongHo from './nongho';
import DanhMuc from './danhmuc';

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
        return <div>Danh Mục</div>;
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
        style={{ position: 'fixed', bottom: 0, width: '100%' }}
      >
        <BottomNavigation.Item
          key="danhmuc"
          label="Danh Mục"
          icon={<Icon icon="zi-home" />}
        />
        <BottomNavigation.Item
          key="thietbi"
          label="Thiết Bị"
          icon={<Icon icon="zi-devices" />}
        />
        <BottomNavigation.Item
          key="muavu"
          label="Mùa vụ"
          icon={<Icon icon="zi-calendar" />}
        />
        <BottomNavigation.Item
          key="cuahang"
          label="Cửa Hàng"
          icon={<Icon icon="zi-store" />}
        />
        <BottomNavigation.Item
          key="nongho"
          label="Nông Hộ"
          icon={<Icon icon="zi-user-circle" />}
        />
      </BottomNavigation>
    </Page>
  );
};

export default HomePage;