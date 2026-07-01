export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        mint: '#00E5A8',
        ink: '#060606',
        pearl: '#F8FAF8',
        mist: '#E8F3EF',
        graphite: '#1F2422',
        skyglass: '#D8F5FF',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        premium: '0 24px 80px rgba(0, 0, 0, 0.08)',
        glow: '0 0 34px rgba(0, 229, 168, 0.35)',
      },
    },
  },
  plugins: [],
};
