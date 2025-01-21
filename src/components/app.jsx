import React from 'react';
import { Route } from 'react-router-dom';
import { App, ZMPRouter, AnimationRoutes, SnackbarProvider } from 'zmp-ui';
import { RecoilRoot } from 'recoil';
import Profile from '../pages';
import About from '../pages/about';
import Form from '../pages/form';
import User from '../pages/user';
import TimerPage from '../pages/timer';
import WeatherPage from '../pages/weather';
import HomePage from '../pages/home'; // Import the new blank page
import ThietBi from '../pages/thietbi';
import MuaVu from '../pages/muavu';
import CuaHang from '../pages/cuahang';
import NongHo from '../pages/nongho';
import DanhMuc from '../pages/danhmuc';

const MyApp = () => {
  return (
    <RecoilRoot>
      <App>
        <SnackbarProvider>
          <ZMPRouter>
            <AnimationRoutes>
              <Route path="/" element={<HomePage />} /> 
              <Route path="/profile" element={<Profile />} /> 
              <Route path="/about" element={<About />} />
              <Route path="/form" element={<Form />} />
              <Route path="/user" element={<User />} />
              <Route path="/timer" element={<TimerPage />} />
              <Route path="/weather" element={<WeatherPage />} />
              <Route path="/thietbi" element={<ThietBi />} />
              <Route path="/muavu" element={<MuaVu />} />
              <Route path="/cuahang" element={<CuaHang />} />
              <Route path="/nongho" element={<NongHo />} />
              <Route path="/danhmuc" element={<DanhMuc />} />
            </AnimationRoutes>
          </ZMPRouter>
        </SnackbarProvider>
      </App>
    </RecoilRoot>
  );
};

export default MyApp;
