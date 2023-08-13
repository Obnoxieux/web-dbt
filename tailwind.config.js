/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        swift: '#3B82F6',
        kotlin: '#34d399',
        typescript: '#ea580c',
        php: '#f59e0b',
      }
    },
  },
  daisyui: {
    themes: false
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
}
