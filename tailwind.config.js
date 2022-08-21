/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bung: "Bungee Shade",
      },
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
        "logo-f": {
          from: {
            display:"hidden",
            opacity: "0",
            transform: "translateY(10px)",
          },
          to: {
            opacity: "0.1",
            transform: "translateY(0px)",
            display:"block",

            
          },
        },
        "box-grow": {
          "0%": {
            height: "0",
            width: "0",
            opacity: "0",

            display: "none",
            transform: "translateY(150%,-100px)",
          },
          "5%": {
            display: "block",
            opacity: "1",
            height: "50px",
            width: "50px",
            transform: "translate(500%,0px)",
          },
          "25%": {
            display: "block",
            opacity: "1",
            height: "20px",
            width: "100px",
            transform: "translate(300%,0)",
            backgroundColor: "#0a9396",
          },
          "50%": {
            backgroundColor: "#0a9396",
            left: "20%",
            height: "50px",
            width: "100vw",
            transform: "translate(0,0)",
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
          },
          "75%": {
            backgroundColor: "#0a9396",
            left: "0%",
            height: "50px",
            width: "400px",
            transform: "translate(500px,0px)",
          },
          "100%": {
            backgroundColor: "#0a9396",
            minWidth: "100%",
            minHeight:'50px',
            transform: "translate(0,0)",
          },
        },
        'rev': {
          '0%': {
            opacity: "0",

          },
          '99%': {
            opacity: "0",
          },
          
          '100%': {
            opacity: "1",

         
          },
        }
      },
      animation: {
        "fade-in-down": "fade-in-down 0.5s ease-out",
        "fade-out-down": "fade-out-down 0.5s ease-out",
        "fade-in-up": "fade-in-up 0.5s ease-out",
        "fade-out-up": "fade-out-up 0.5s ease-out",
        fd: "fade-out-up 4s ease-in-out 2s",
        log: "logo-f 2.5s linear",
        "box-grow": "box-grow 1.5s linear 0.8s forwards",
        "rev": "rev 3s linear forwards"
      },
    },
  },
  plugins: [],
};
