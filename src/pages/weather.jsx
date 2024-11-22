import React from 'react';
import WeatherForm from '../components/WeatherForm';

const WeatherPage = () => {
  return (
    <div style={pageStyles.container}>
      <h1 style={pageStyles.header}>Tìm Thông Tin Thời Tiết</h1>
      <WeatherForm />
    </div>
  );
};

const pageStyles = {
  container: {
    padding: '20px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#e0f7fa',
    color: '#333',
  },
  header: {
    fontSize: '28px',
    marginBottom: '20px',
  },
};

export default WeatherPage;
