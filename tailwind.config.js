module.exports = {
  content : ["./src/**/*.{html,js}"],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
    },

    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      Monts: ['Montserrat', 'sans-serif']
    },
    extend: {
      colors: {
        whiteish: '#f9f9f9',
        choco: '#ad976a',
        grayish: '#767676',
        blackish: '#484848',
        chocohover: '#c0b090',
        textcolor: '#2d2626',
        textcolortwo: '#5b7789',
        paracolor: '#d5bde4',
        paracolortwo: '#8599af',
        blogbg: '#f8f9fa',
        blogtext: '#212529'
      },

      backgroundImage: {
        'hero-pattern-1': "url('/assets/One-rode-rodecaster-pro-II-home-page-1920x700-rgb -1.jpg')",
        'hero-pattern-2': "url('./assets/two-rode-nth100-lifestyle-insitu-female-looking-down-grey-1920x700-rgb-2.jpg')",
        'hero-pattern-3': "url('./assets/Three-rode-nt-usb-webheader-v7-1920x700-rgb.jpg')",
        'hero-pattern-4': "url('./assets/Four-rode-podmic-webheader-1920x700-rgb (2).jpg')",
        'hero-pattern-5': "url('./assets/Five-WIGOII-WEBHEADER-02.jpg')",
        'hero-pattern-6': "url('./assets/Six-rode-nt-usb-mini-webheader-1920x700-rgb (2).jpg')"
      },

      spacing: {
        '700': '44rem',
        '600': '38rem'
      },

      maxWidth: {
        '960': '60rem',
        '540': '33.75rem'
      },

      margin: {
        '1/2': '50%',
        '1/3': '33.33%'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
