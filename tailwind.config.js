/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      colors: {
        background: '#0F172A',
        card: '#1E293B',

        primary: '#F59E0B',

        success: '#22C55E',
        warning: '#FACC15',
        danger: '#EF4444',

        sidebar: '#111827',
      },
    },
  },

  plugins: [],
}