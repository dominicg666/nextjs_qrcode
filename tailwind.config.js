/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      primary_color: '#2F9D5B',
      white: '#FFFFFF',
      
    },
    extend: {
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      boxShadow: {
        'white_shadow': '0px 10px 18px rgba(35, 35, 35, 0.05)'
      },
      gridTemplateColumns: {
        '18': 'repeat(18, minmax(0, 1fr))'
      },
      zIndex: {
        '-10': '-10',
        '100': '100',
        '900': '900',
        '999': '999'
      },
      screens: {
        xl: { max: "1536px" },
        // => @media (max-width: 1536px) { ... }
  
        lg: { max: "1200px" },
        // => @media (max-width: 1200px) { ... }
  
        md: { max: "900px" },
        // => @media (max-width: 900px) { ... }
  
        sm: { max: "600px" },
        // => @media (max-width: 600px) { ... }
      }
    }
  },
  plugins: []
}
