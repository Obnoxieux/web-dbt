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
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          "primary": "#c2410c",
          "primary-focus": "#9a3412",
          "primary-content": "#ffffff",
          "secondary": "#047857",
          "secondary-focus": "#065f46",
          "secondary-content": "#f3f4f6",
          "accent": "#2563eb",
          "accent-focus": "#1d4ed8",
          "accent-content": "#f3f4f6",
          "warning": "#d97706",
          "warning-focus": "#b45309",
          "warning-content": "#ffffff",
        },
      },
      {
        dark: {
          ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
          "primary": "#ea580c",
          "primary-focus": "#c2410c",
          "secondary": "#34d399",
          "secondary-focus": "#10b981",
          "secondary-content": "#111827",
          "accent": "#3B82F6",
          "accent-focus": "#2563eb",
          "accent-content": "#f3f4f6",
          "warning": "#f59e0b",
          "warning-focus": "#d97706",
          "warning-content": "#111827",
        }
      }
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
}
