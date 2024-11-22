import React, { useState, useEffect } from 'react';

const TimerForm = () => {
  // Get current date and time
  const currentDate = new Date();
  const currentDateFormatted = currentDate.toISOString().split('T')[0]; // Format to yyyy-mm-dd
  const currentTimeFormatted = currentDate.toTimeString().slice(0, 5); // Format to hh:mm

  const [date, setDate] = useState(currentDateFormatted);
  const [startTime, setStartTime] = useState(currentTimeFormatted);
  const [endTime, setEndTime] = useState('00:00');
  const [repeat, setRepeat] = useState('Một lần');
  const [activityTime, setActivityTime] = useState('00');
  const [breakTime, setBreakTime] = useState('00');
  const [activeDays, setActiveDays] = useState({
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false
  });

  const handleDayChange = (day) => {
    setActiveDays(prevState => ({
      ...prevState,
      [day]: !prevState[day]
    }));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Cài đặt thời gian</h1>

      <div style={styles.inputContainer}>
        <label htmlFor="date">Ngày:</label>
        <input
          id="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          style={styles.input}
        />
      </div>

      <div style={styles.inputContainer}>
        <label htmlFor="startTime">Thời gian bắt đầu:</label>
        <input
          id="startTime"
          type="time"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          style={styles.input}
        />
      </div>

      <div style={styles.inputContainer}>
        <label htmlFor="endTime">Thời gian kết thúc:</label>
        <input
          id="endTime"
          type="time"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          style={styles.input}
        />
      </div>

      <div style={styles.inputContainer}>
        <label htmlFor="repeat">Lặp lại:</label>
        <select
          id="repeat"
          value={repeat}
          onChange={(e) => setRepeat(e.target.value)}
          style={styles.select}
        >
          <option value="Một lần">Một lần</option>
          <option value="Lặp lại định kỳ">Lặp lại định kỳ</option>
        </select>
      </div>

      {repeat === 'Lặp lại định kỳ' && (
        <div style={styles.weekdaysContainer}>
          <label>Ngày hoạt động:</label>
          <div style={styles.daysGrid}>
            {['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'].map(day => (
              <div key={day} style={styles.dayCheckbox}>
                <input
                  type="checkbox"
                  id={day}
                  checked={activeDays[day]}
                  onChange={() => handleDayChange(day)}
                  style={styles.checkbox}
                />
                <label htmlFor={day} style={styles.dayLabel}>
                  {day.charAt(0).toUpperCase() + day.slice(1, 3)}
                </label>
              </div>
            ))}
          </div>
        </div>
      )}

      <div style={styles.inputContainer}>
        <label htmlFor="activityTime">Thời gian hoạt động (phút):</label>
        <input
          id="activityTime"
          type="number"
          value={activityTime}
          onChange={(e) => setActivityTime(e.target.value)}
          style={styles.input}
        />
      </div>

      <div style={styles.inputContainer}>
        <label htmlFor="breakTime">Thời gian nghỉ (phút):</label>
        <input
          id="breakTime"
          type="number"
          value={breakTime}
          onChange={(e) => setBreakTime(e.target.value)}
          style={styles.input}
        />
      </div>

      <button style={styles.button}>Lưu</button>
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
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  },
  header: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  inputContainer: {
    marginBottom: '20px',
    textAlign: 'left',
  },
  input: {
    marginLeft: '10px',
    padding: '8px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    width: '100%',
  },
  select: {
    marginLeft: '10px',
    padding: '8px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    width: '100%',
  },
  weekdaysContainer: {
    marginBottom: '20px',
    textAlign: 'left',
  },
  daysGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '10px',
  },
  dayCheckbox: {
    display: 'flex',
    alignItems: 'center',
  },
  checkbox: {
    marginRight: '5px',
  },
  dayLabel: {
    fontSize: '16px',
    color: '#555',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    width: '100%',
  },
};

export default TimerForm;
