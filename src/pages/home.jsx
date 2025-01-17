import React, { useState } from 'react';
import { BottomNavigation, Icon, Page } from 'zmp-ui';
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
        style={{ position: 'fixed', bottom: 0, width: '100%' }}
      >
        <BottomNavigation.Item
          key="danhmuc"
          label={<span className="text-icon-green">Danh Mục</span>}
          icon={<box-icon name='tag' rotate='90' color='#03ac47' ></box-icon>}
        />
        <BottomNavigation.Item
          key="thietbi"
          label={<span className="text-icon-green">Thiết Bị</span>}
          icon={<box-icon name='slider-alt' rotate='90' color='#03ac47' ></box-icon>}
        />
        <BottomNavigation.Item
          key="muavu"
          label={<span className="text-icon-green">Mùa vụ</span>}
          icon={<box-icon name='calendar' color='#03ac47' ></box-icon>}
        />
        <BottomNavigation.Item
          key="cuahang"
          label={<span className="text-icon-green">Cửa Hàng</span>}
          icon={<box-icon name='store' color='#03ac47' ></box-icon>}
        />
        <BottomNavigation.Item
          key="nongho"
          label={<span className="text-icon-green">Nông Hộ</span>}
          icon={<box-icon name='user' color='#03ac47' ></box-icon>}
        />
      </BottomNavigation>
    </Page>
  );
};

export default HomePage;