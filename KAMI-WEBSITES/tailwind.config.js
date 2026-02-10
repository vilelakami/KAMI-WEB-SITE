/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Vamos preparar o terreno para a identidade da Kami Websites
        'kami-blue': '#007bff', 
        'kami-dark': '#1a1a1a',
      },
    },
  },
  plugins: [],
}