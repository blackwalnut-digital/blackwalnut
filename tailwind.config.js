/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      'nav-brown': '#181919',
      'body-beige': '#beb2a1'
    },
    extend: {
      "spacing": {
        "1-vw":"1vw",
        "1.5vw":"1.5vw",
        "2-vw":"2vw",
        "5-vw":"5vw",
        "10-vw":"10vw",
        "15-vw":"15vw",
        "20-vw":"20vw",
        "1-vh":"1vh",
        "2-vh":"2vh",
        "3vh":"3vh",
        "5-vh":"5vh",
        "10-vh":"10vh",
        "15-vh":"15vh",
        "20-vh":"20vh"
      },
      "boxShadow": {
        "3xl": '-10px 5px 20px -2px rgba(24, 25, 25, 0.8)'
      },
      "dropShadow": {
        '3xl': '-10px 5px 20px -2px rgba(24, 25, 25, 0.8)',
      },
      "borderRadius": {
        "20":"20px",
        "rounded-tl-20": "20px 0px",
        "rounded-br-20": "20px 0px",
      },
      "fontSize": {
        "1.4":"1.4rem",
        "2rem":"2rem"
      }
    },
  },
  plugins: [],
}

