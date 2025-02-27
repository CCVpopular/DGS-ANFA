import React, { useEffect, useState } from 'react';
import { getUserID } from "zmp-sdk/apis";
import { Route, Navigate } from 'react-router-dom';
import { App, ZMPRouter, AnimationRoutes, SnackbarProvider } from 'zmp-ui';
import { RecoilRoot } from 'recoil';
import About from '../pages/about';
import Form from '../pages/form';
import User from '../pages/user';
import TimerPage from '../pages/timer';
import WeatherPage from '../pages/weather';
import HomePage from '../pages/home';
import ThietBi from '../pages/thietbi';
import MuaVu from '../pages/muavu';
import CuaHang from '../pages/cuahang';
import NongHo from '../pages/nongho';
import DanhMuc from '../pages/danhmuc';
import Login from '../pages/login';
import HomeAdmin from '../pages/admin/home-admin';

const MyApp = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    try {
      const userID = await getUserID({});
      console.log({userID});
      console.log(process.env.REACT_APP_API_URL);
      const response = await fetch(`${import.meta.env.ZALO_MINIAPP_API_URL}/users/check/${userID}`);
      const data = await response.json();
      setIsAuthenticated(data.exists);
      setUserRole(data.role);
    } catch (error) {
      console.error('Error checking user:', error);
      setIsAuthenticated(false);
      setUserRole(null);
    }
  };

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  return (
    <RecoilRoot>
      <App>
        <SnackbarProvider>
          <ZMPRouter>
            <AnimationRoutes>
              {!isAuthenticated ? (
                <>
                  <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
                  <Route path="*" element={<Navigate to="/login" replace />} />
                </>
              ) : userRole === 'admin' ? (
                <>
                  <Route path="/" element={<HomeAdmin />} />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </>
              ) : (
                <>
                  <Route path="/" element={<HomePage />} /> 
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
                </>
              )}
            </AnimationRoutes>
          </ZMPRouter>
        </SnackbarProvider>
      </App>
    </RecoilRoot>
  );
};

export default MyApp;
