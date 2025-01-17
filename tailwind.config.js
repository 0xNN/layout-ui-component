/** @type {import('tailwindcss').Config} */  
module.exports = {  
  content: [  
    "./src/**/*.{js,jsx,ts,tsx}",  
  ],  
  theme: {  
    extend: {
      fontFamily: {
        sans: ['InterVariable', 'sans-serif'],
      },
      colors: {  
        'custom-blue': '#2E308A', // Menambahkan warna kustom  
      },
    },  
  },  
  plugins: [],  
}  
