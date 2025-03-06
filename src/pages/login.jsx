import React, { useEffect, useState } from 'react';
import { getUserInfo, getSetting, authorize, getAccessToken, getPhoneNumber } from 'zmp-sdk/apis';
import { useNavigate } from 'react-router-dom';
import { Page, Box, Text, Button } from 'zmp-ui';

const Login = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const secretKey = import.meta.env.VITE_ZALO_MINIAPP_SECRET_KEY;
  console.log(secretKey);

  const checkPermissions = () => {
    return new Promise((resolve, reject) => {
      getSetting({
        success: (data) => {
          resolve(data.authSetting);
        },
        fail: (error) => {
          console.error('Error checking permissions:', error);
          reject(error);
        },
      });
    });
  };

  const requestPermissions = () => {
    return new Promise((resolve, reject) => {
      authorize({
        scopes: ['scope.userInfo', 'scope.userPhonenumber'],
        success: (data) => {
          resolve(data);
        },
        fail: (error) => {
          console.error('Error requesting permissions:', error);
          reject(error);
        },
      });
    });
  };

  const getPhoneNumberToken = () => {
    return new Promise((resolve, reject) => {
      getPhoneNumber({
        success: async (data) => {
          let { token } = data;
          resolve(token);
        },
        fail: (error) => {
          console.error('Error getting phone token:', error);
          reject(error);
        },
      });
    });
  };

  const fetchPhoneNumber = async (accessToken, phoneToken) => {
    try {
      const response = await fetch('https://graph.zalo.me/v2.0/me/info', {
        headers: {
          'access_token': accessToken,
          'code': phoneToken,
          'secret_key': secretKey
        }
      });
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error('Error fetching phone number:', error);
      throw error;
    }
  };

  const handleGetUserInfo = async () => {
    try {
      await requestPermissions();
      let permissions = await checkPermissions();

      if (permissions['scope.userInfo'] && permissions['scope.userPhonenumber']) {
        const { userInfo } = await getUserInfo({});
        console.log(userInfo);
        const accessToken = await getAccessToken({});
        console.log(accessToken);
        const phoneToken = await getPhoneNumberToken();
        console.log(phoneToken);
        const phoneData = await fetchPhoneNumber(accessToken, phoneToken);

        // Check if phone number exists and is valid
        if (!phoneData.data.number || phoneData.data.number.trim() === '') {
          console.error('Không thể lấy số điện thoại');
          return;
        }

        const requestBody = {
          id: userInfo.id,
          idByOA: userInfo.idByOA,
          followedOA: userInfo.followedOA,
          name: userInfo.name,
          avatar: userInfo.avatar,
          isSensitive: userInfo.isSensitive,
          phoneNumber: phoneData.data.number
        };

        console.log('Request body:', requestBody);
        const response = await fetch(`${import.meta.env.VITE_ZALO_MINIAPP_API_URL}/users/register`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestBody),
        });
        if (response.ok) {
          setIsAuthenticated(true);  
          navigate('/', { replace: true });
        }
      }
    } catch (error) {
      console.error('Error in login process:', error);
    }
  };

  return (
    <Page>
      <Box flex flexDirection="column" justifyContent="center" alignItems="center" p={4}>
        <Text size="large" className="mb-4">Vui lòng đăng ký tài khoản để tiếp tục</Text>
        <Button variant="primary" onClick={handleGetUserInfo}>
          Đăng ký với Zalo
        </Button>
      </Box>
    </Page>
  );
};

export default Login;