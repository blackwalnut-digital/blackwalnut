/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  purge: ['./src/**/*.{html,ts}'],
  theme: {
    colors: {
      'nav-brown': '#181919',
      'body-beige': '#beb2a1'
    },
    extend: {
      "spacing": {
        "1vw":"1vw",
        "1.5vw":"1.5vw",
        "2vw":"2vw",
        "5vw":"5vw",
        "10vw":"10vw",
        "15vw":"15vw",
        "20vw":"20vw",
        "50vw":"50vw",
        "70vw":"70vw",
        "100vw":"100vw",
        "1vh":"1vh",
        "2vh":"2vh",
        "3vh":"3vh",
        "5vh":"5vh",
        "10vh":"10vh",
        "15vh":"15vh",
        "20vh":"20vh",
        "50vh":"50vh",
        "70vh":"70vh",
        "80vh":"80vh",
        "90vh":"90vh",
        "100vh":"100vh",
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
        "1.5rem":"1.5rem",
        "2rem":"2rem"
      },
      "maxWidth": {
        "half":"50vw"
      },
      "backgroundImage": {
        "hero": "url('/img/web_agency_grows_business_banner.jpg')"
      },
      "fontFamily": {
        lora: ['Lora', 'serif'],
        lato: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

