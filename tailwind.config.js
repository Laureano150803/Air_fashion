/** @type {import('tailwindcss').Config} */
export default {
  mode:'jit',
  purge:['./src/**/*.{js,jsx,ts,tsx}'],
  content: [],
  theme: {
    screens:{
      'xsm': {'min': '320px', 'max': '427px'},
      'xxsm':{'min': '427px', 'max': '886px'},
      'md': {'min': '886px', 'max': '4000px'}
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

