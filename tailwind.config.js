/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xl' : {'max' : '1200px'},
      'lg' : {'max' : '991px'},
      'md' : {'max' : '767px'},
      'sm' : {'max' : '550px'},
      'xsm' : {'max' : '425px'}
    }
  },
  plugins: [],
}