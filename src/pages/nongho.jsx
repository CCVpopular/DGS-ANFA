import React, { useEffect, useState } from 'react';
import { Page, Text, Box, Avatar } from "zmp-ui";
import { getUserInfo } from 'zmp-sdk/apis';

const NongHo = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const result = await getUserInfo({
          success: (data) => {
            console.log('Success:', data);
            return data;
          },
          fail: (error) => {
            console.error('Failed:', error);
            setError(error.message);
          }
        });
        
        console.log('User data received:', result);
        setUserData(result);
      } catch (err) {
        console.error('Error fetching user data:', err);
        setError(err.message);
      }
    };

    fetchUserData();
  }, []);

  if (error) {
    return (
      <Page className="page">
        <Box p={4} style={{ color: 'red' }}>
          <Text>Lỗi: {error}</Text>
        </Box>
      </Page>
    );
  }

  return (
    <Page className="page">
      <div className="section-container">
        <h1>Thông tin người dùng</h1>
        
        {userData ? (
          <Box className="user-info" p={4} mb={3} style={{ background: '#f5f5f5', borderRadius: '8px' }}>
            <Text.Title size="large">Thông tin cơ bản</Text.Title>
            {userData.avatar && <Avatar src={userData.avatar} size={80} />}
            <Box mt={2}>
              <Text.Title size="small">ID: {userData.id || 'N/A'}</Text.Title>
              <Text>Tên: {userData.name || 'N/A'}</Text>
              <Text>Giới tính: {userData.gender === 1 ? 'Nam' : userData.gender === 2 ? 'Nữ' : 'N/A'}</Text>
              <Text>Ngày sinh: {userData.birthday || 'N/A'}</Text>
            </Box>
          </Box>
        ) : (
          <Box p={4}>
            <Text>Đang tải thông tin...</Text>
          </Box>
        )}
      </div>
    </Page>
  );
};

export default NongHo;