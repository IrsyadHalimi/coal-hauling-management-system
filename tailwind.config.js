/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      colors: {
        background:
          'var(--color-background)',

        sidebar:
          'var(--color-sidebar)',

        card:
          'var(--color-card)',

        primary:
          'var(--color-primary)',

        success:
          'var(--color-success)',

        warning:
          'var(--color-warning)',

        danger:
          'var(--color-danger)',

        border:
          'var(--color-border)',

        textPrimary:
          'var(--color-text-primary)',

        textSecondary:
          'var(--color-text-secondary)',

        textMuted:
          'var(--color-text-muted)',
      },
    },
  },

  plugins: [],
}