import React, { useState, useEffect } from 'react';

// Replace with your own API key from OpenWeatherMap or any other weather API service

const WeatherForm = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Function to fetch weather data based on latitude and longitude
  const fetchWeather = async (latitude, longitude) => {
    setLoading(true);
    try {
      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=API-KEY-O-DAY&units=metric`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }
  
      const data = await response.json();
      setWeatherData(data);
      setError('');  // Clear any previous error messages
    } catch (err) {
      console.error(err); // Log the error for debugging purposes
  
      // Show an appropriate error message
      setError('Không thể kết nối đến máy chủ thời tiết. Vui lòng thử lại sau.');
  
      setWeatherData(null);  // Reset the weather data in case of error
    } finally {
      setLoading(false);
    }
  };
  
  
  

  // Function to get the user's current location using Geolocation API
  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeather(latitude, longitude);
        },
        (err) => {
          setError('Location permission denied or error');
        }
      );
    } else {
      setError('Geolocation is not supported by this browser');
    }
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Thông Tin Thời Tiết Hiện Tại</h1>
      {loading && <p>Đang tải thông tin...</p>}

      {error && <p style={styles.error}>{error}</p>}

      {weatherData && (
        <div style={styles.weatherInfo}>
          <h2>Thời tiết tại {weatherData.name}</h2>
          <p><strong>Nhiệt độ:</strong> {weatherData.main.temp}°C</p>
          <p><strong>Độ ẩm:</strong> {weatherData.main.humidity}%</p>
          <p><strong>Điều kiện thời tiết:</strong> {weatherData.weather[0].description}</p>
          <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} alt={weatherData.weather[0].description} />
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '600px',
    margin: 'auto',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  },
  header: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  weatherInfo: {
    marginTop: '20px',
    textAlign: 'left',
    backgroundColor: '#e0f7fa',
    borderRadius: '8px',
    padding: '15px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  error: {
    color: 'red',
    margin: '15px 0',
  },
};

export default WeatherForm;
