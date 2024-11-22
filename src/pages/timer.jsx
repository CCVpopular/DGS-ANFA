import React from 'react';
import TimerForm from '../components/TimerForm';

const TimerPage = () => {
  return (
    <div style={styles.page}>
      <h1>Hẹn Giờ</h1>
      <TimerForm />
    </div>
  );
};

const styles = {
  page: {
    padding: '20px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
};

export default TimerPage;
