/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        /* Brand */
        primary: '#2563EB',      // blue-600  (links & accents)
        accent:  '#7C3AED',      // violet-600 (optional second accent)

        /* Light surfaces */
        surface:      '#FFFFFF', // cards, hero text
        surfaceAlt:   '#F8FAFC', // section background (gray-50)
        /* Dark surfaces */
        surfaceDark:      '#0F172A', // slate-900
        surfaceAltDark:   '#1E293B', // slate-800

        /* Text */
        text:      '#0F172A',    // slate-900
        textDark:  '#F8FAFC',    // slate-50
      },
    },
  },
  plugins: [],
};
