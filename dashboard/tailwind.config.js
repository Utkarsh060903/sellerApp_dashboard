// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       fontFamily: "Roboto"
//     },
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // Adjust as per your file structure
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'white-16': 'rgba(255, 255, 255, 0.16)',
        'white-6' : 'rgba(255, 255, 255, 0.6)',
        'white-8' : 'rgba(255, 255, 255, 0.08)',
        'custom-blue': 'rgba(31, 33, 74, 1)',
        'green-dark' : 'rgba(44, 196, 131, 1)',
        'red-dark' : 'rgba(255, 94, 117, 1)',
        'down-menu' : '#212529',
        'hover-color': '#696FFB3D',
        'white-bg' : '#FFFFFF29',
        'black-60' : '#00000099'
      },
      fontFamily: {
        sans: ['Roboto', 'ui-sans-serif', 'system-ui'], // Set Roboto as the default sans-serif font
      },
    },
  },
  plugins: [],
};
