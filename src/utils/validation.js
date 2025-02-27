export const handleNumberKeyDown = (e) => {
  if (!/^[0-9]$/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Delete') {
    e.preventDefault(); // Ngăn chặn ký tự không hợp lệ
  }
};

export const handleNumberInput = (e, max) => {
  if (e.target.value > max) {
    e.target.value = max;
  }
  if (e.target.value < 1) {
    e.target.value = 1;
  }
};