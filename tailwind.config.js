/** @type {import('tailwindcss').Config} */
export default {
  // Configure files Tailwind should scan for classes
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust if your file structure is different
  ],

  theme: {
    extend: {
      // Custom color palette extension
      colors: {
        nord: {
          0: '#2E3440',   // Polar Night - Darkest gray
          1: '#3B4252',   // Polar Night - Dark gray
          2: '#434C5E',   // Polar Night - Medium gray
          3: '#4C566A',   // Polar Night - Light gray
          4: '#D8DEE9',   // Snow Storm - Lightest gray (text)
          5: '#E5E9F0',   // Snow Storm - Off white
          6: '#ECEFF4',   // Snow Storm - Snow white
          7: '#8FBCBB',   // Frost - Teal
          8: '#88C0D0',   // Frost - Light teal
          9: '#81A1C1',   // Frost - Blue
          10: '#5E81AC',  // Frost - Dark blue
          11: '#BF616A',  // Aurora - Red
          12: '#D08770',  // Aurora - Orange
          13: '#EBCB8B',  // Aurora - Yellow
          14: '#A3BE8C',  // Aurora - Green
          15: '#B48EAD',  // Aurora - Purple
        },
      },

      // Custom font family extension
      fontFamily: {
        // Sets "Inter" as the default sans-serif font
        sans: ['"Inter"', "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", '"Segoe UI"', "Roboto", '"Helvetica Neue"', "Arial", '"Noto Sans"', "sans-serif", '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'], 
      },

      // Custom CSS keyframe animations
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)', opacity: '1' },
          '50%': { transform: 'translateY(-20px) rotate(3deg)', opacity: '0.8' },
        },
        floatSlight: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)', opacity: '0.9' },
          '50%': { transform: 'translateY(-15px) rotate(-2deg)', opacity: '1' },
        },
      },

      // Registering custom animations to use as utilities (e.g., animate-float)
      animation: {
        float: 'float 15s ease-in-out infinite',
        floatSlight: 'floatSlight 18s ease-in-out infinite',
      }
    },
  },

  // Tailwind plugins (if any)
  plugins: [
    // require('@tailwindcss/forms'), // Example plugin
  ],
}