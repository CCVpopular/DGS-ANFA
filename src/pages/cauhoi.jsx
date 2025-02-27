import React, { useState } from 'react';
import Button from '../components/button/Button';
import InputBox from '../components/InputBox/InputBox';
import Select from '../components/Select/Select'; // Giả sử bạn có component Select
import { handleNumberKeyDown, handleNumberInput } from '../utils/validation'; // Import hàm tiện ích

const CauHoi = ({ onConfirm }) => {
  const questionsPerPage = 2; // Số câu hỏi mỗi trang
  const [currentPage, setCurrentPage] = useState(0);
  const [answers, setAnswers] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const questions = [
    { question: 'Họ tên bạn ?', type: 'text', maxLength: 100 },
    { question: 'Địa chỉ ?', type: 'text', maxLength: 255 },
    { question: 'SĐT ?', type: 'phone', maxLength: 11 },
    { question: 'Trình độ của nông dân ?', type: 'select', options: ['Cơ bản', 'Trung cấp', 'Cao cấp', 'Chuyên gia'] },
    { question: 'Số lượng công nhân chăm sóc farm?', type: 'number', max: 100 },
    { question: 'Diện tích mặt nước ?', type: 'number', max: 20000 },
    { question: 'Diện tích khu vực hỗ trợ ?', type: 'number', max: 50000 },
    { question: 'Mô tả farm', type: 'text', maxLength: 2000 },
  ];

  const handleChange = (e, index) => {
    const { value, type } = e.target;
    if (type === 'number' && value > questions[index].max) {
      setAnswers({
        ...answers,
        [index]: questions[index].max,
      });
    } else {
      setAnswers({
        ...answers,
        [index]: value,
      });
    }
  };

  const handleSubmit = () => {
    localStorage.setItem('userAnswers', JSON.stringify(answers));
    onConfirm(answers);
  };

  const handleNextPage = () => {
    const startIndex = currentPage * questionsPerPage;
    const endIndex = startIndex + questionsPerPage;
    const currentAnswers = Object.values(answers).slice(startIndex, endIndex);

    if (currentAnswers.length < questionsPerPage || currentAnswers.includes('')) {
      setErrorMessage('Vui lòng điền đầy đủ thông tin trước khi chuyển trang.');
      return;
    }

    setErrorMessage('');
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    setErrorMessage('');
    setCurrentPage(currentPage - 1);
  };

  const startIndex = currentPage * questionsPerPage;
  const currentQuestions = questions.slice(startIndex, startIndex + questionsPerPage);

  return (
    <div className="center-content">
      <h1 className="p-2">Câu Hỏi</h1>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {currentQuestions.map((questionObj, index) => {
        const questionIndex = startIndex + index;
        return (
          <div key={questionIndex}>
            <p>{questionObj.question}</p>
            {questionObj.type === 'text' && (
              <InputBox
                value={answers[questionIndex] || ''}
                onChange={(e) => handleChange(e, questionIndex)}
                placeholder="Nhập câu trả lời..."
                maxLength={questionObj.maxLength}
                required
              />
            )}
            {questionObj.type === 'phone' && (
              <InputBox
                value={answers[questionIndex] || ''}
                onChange={(e) => handleChange(e, questionIndex)}
                placeholder="Nhập số điện thoại..."
                onKeyDown={handleNumberKeyDown}
                inputMode="numeric"
                maxLength={questionObj.maxLength}
                required
              />
            )}
            {questionObj.type === 'select' && (
              <Select
                value={answers[questionIndex] || ''}
                onChange={(e) => handleChange(e, questionIndex)}
                options={questionObj.options}
                required
              />
            )}
            {questionObj.type === 'number' && (
              <InputBox
                type="number"
                value={answers[questionIndex] || ''}
                onChange={(e) => handleChange(e, questionIndex)}
                placeholder="Nhập số lượng..."
                onKeyDown={handleNumberKeyDown}
                max={questionObj.max}
                required
                onInput={(e) => handleNumberInput(e, questionObj.max)}
              />
            )}
            {questionObj.type === 'area' && (
              <div>
                <InputBox
                  type="number"
                  value={answers[`${questionIndex}_value`] || ''}
                  onChange={(e) => handleChange(e, `${questionIndex}_value`)}
                  placeholder="Nhập diện tích..."
                  onKeyDown={handleNumberKeyDown}
                  max={questionObj.max}
                  required
                  onInput={(e) => handleNumberInput(e, questionObj.max)}
                />
                <Select
                  value={answers[`${questionIndex}_unit`] || ''}
                  onChange={(e) => handleChange(e, `${questionIndex}_unit`)}
                  options={['M^2', 'Ha']}
                  required
                />
              </div>
            )}
          </div>
        );
      })}
      <div className="button-container p-2">
        {currentPage > 0 && <Button className="button-left" onClick={handlePreviousPage}>Trang trước</Button>}
        {startIndex + questionsPerPage < questions.length && (
          <Button className="button-right" onClick={handleNextPage}>Trang sau</Button>
        )}
        {startIndex + questionsPerPage >= questions.length && (
          <Button className="button-right" onClick={handleSubmit}>Xác nhận</Button>
        )}
      </div>
    </div>
  );
};

export default CauHoi;
