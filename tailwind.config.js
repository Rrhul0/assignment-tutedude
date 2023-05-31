/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                primary: '#800080',
                gradient: 'linear-gradient(270deg, #800080 0%, #FF864C 100%)',
            },
            textColor: {
                primary: '#800080',
                secondry: '#EEAEAE',
                dark: '#4D4D4D',
            },
        },
    },
    plugins: [],
}
