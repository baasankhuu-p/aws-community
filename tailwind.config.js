/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      colors:{
        // 'primary':'rgb(233,73,61)',
        'primary':'#FF9900',
        // 'primarydark':'rgb(239 0 0)',
        'primarydark':'#ff8000',
        'pink':'#ff007a',
        'orange':'rgb(255, 153, 0)',
        'defbggray':'#232F3E'
      },
      fontFamily: {
        'Fugaz': ['"Fugaz One"','sans-serif']
      }
    },
  },
  plugins: [],
}
