/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-out-down": {
          from: {
            opacity: "1",
            transform: "translateY(0px)",
          },
          to: {
            opacity: "0",
            transform: "translateY(10px)",
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-out-up": {
          from: {
            opacity: "1",
            transform: "translateY(0px)",
          },
          to: {
            opacity: "0",
            transform: "translateY(10px)",
          },
        },
        "box-grow": {
          "0%": {
            height: "0",
            width: "0",
            opacity: "0",
            position: "absolute",
            display: "none",
            top: "0",
            left: "0",
          },
          "25%": {
            display: "block",
            opacity: "1",
            height: "50px",
            width: "50px",
            left: "10%",
            backgroundColor: "red",
          },
          "50%": {
            backgroundColor: "blue",
            left: "20%",
            width: "200px",
          },
          "75%": {
            backgroundColor: "green",
            left: "0%",
            width: "100px",
          },
          "100%": {
            backgroundColor: "yellow",
            left: "90%",
            width: "100%",
          },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down 0.5s ease-out",
        "fade-out-down": "fade-out-down 0.5s ease-out",
        "fade-in-up": "fade-in-up 0.5s ease-out",
        "fade-out-up": "fade-out-up 0.5s ease-out",
        fd: "fade-out-up 4s ease-in-out 2s",
        "box-grow": "box-grow 2s ease-in-out 1s",
      },
    },
  },
  plugins: [],
};
