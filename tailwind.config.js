/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        blackish: '#111',
        lightBlack: '#2a2a2a',
        titleBlack: '#3a3a3a',
        whitish: '#eee',
        lightWhite: '#e1e1e1',
        grayish: '#aaa',
        lightGrayish: '#ddd',
      },
    },
    fontFamily: {
      sans: ['ui-sans-serif', 'system-ui'],
      serif: ['ui-serif', 'Georgia'],
      mono: ['ui-monospace', 'SFMono-Regular'],
      display: ['Oswald', 'sans-serif'],
      body: ['"OpenSans"'],
      poppins: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
}
