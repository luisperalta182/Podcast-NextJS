/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx}',
    './pages/**/*.{js,ts,jsx}',
    './components/**/*.{js,ts,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        gradient:
          'linear-gradient(225deg, #FBFBFB 0%, #FCFCFC 21%, #FCFCFC 33%, #F6F7F9 45%, #F6F6F6 56%, #F6F7F8 70%, #F6F6F7 100%);',
      },
      colors: {
        primary: '#F13C45',
        secondary: '#0B2342',
        third: '#777777',
        textColor: '#222222',
        softText: '#555555',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1170px',
    },
  },
  plugins: [],
}
