import React, { useEffect, useState } from 'react';
import { Page, Text, Box, Avatar } from "zmp-ui";
import { getUserInfo } from 'zmp-sdk/apis';

const NongHo = () => {
  const [error, setError] = useState(null);
  const [userAnswers, setUserAnswers] = useState(null);

  useEffect(() => {
    // Lấy thông tin từ localStorage
    const storedAnswers = localStorage.getItem('userAnswers');
    if (storedAnswers) {
      setUserAnswers(JSON.parse(storedAnswers));
    }
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

        {userAnswers && (
          <Box className="user-answers" p={4} mb={3} style={{ background: '#f5f5f5', borderRadius: '8px' }}>
            <Text.Title size="large">Câu trả lời của bạn</Text.Title>
            {Object.keys(userAnswers).map((key) => (
              <Box key={key} mt={2}>
                <Text>{`Câu hỏi ${parseInt(key) + 1}: ${userAnswers[key]}`}</Text>
              </Box>
            ))}
          </Box>
        )}
      </div>
    </Page>
  );
};

export default NongHo;