module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.{js,jsx,ts,tsx,vue}'],
  },
  theme: {
    extend: {
      colors: {
        'icon-green': '#03ac47', // Màu xanh của icon
      },
    },
  },
};
