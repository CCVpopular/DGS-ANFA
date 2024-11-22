import React from 'react';
import { Route } from 'react-router-dom';
import { App, ZMPRouter, AnimationRoutes, SnackbarProvider } from 'zmp-ui';
import { RecoilRoot } from 'recoil';
import HomePage from '../pages';
import About from '../pages/about';
import Form from '../pages/form';
import User from '../pages/user';
import TimerPage from '../pages/timer';
import WeatherPage from '../pages/weather';

const MyApp = () => {
  return (
    <RecoilRoot>
      <App>
        <SnackbarProvider>
          <ZMPRouter>
            <AnimationRoutes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/form" element={<Form />} />
              <Route path="/user" element={<User />} />
              <Route path="/timer" element={<TimerPage />} />
              <Route path="/weather" element={<WeatherPage />} />
            </AnimationRoutes>
          </ZMPRouter>
        </SnackbarProvider>
      </App>
    </RecoilRoot>
  );
};

export default MyApp;
