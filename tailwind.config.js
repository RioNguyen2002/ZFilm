/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      scrollbar: {
        thumb: {
          bg: '#040204', // Màu đỏ cho thumb
          borderRadius: 'full', // Thumb dạng tròn
        },
        track: {
          bg: '#0C9300', // Màu xám nhạt cho track
        },
      },
      height: {
        header: '560px',
        rate: '400px',
      },
      fontSize: {
        h1: '2.6rem',
       
      },
      screens: {
        xs: '475px',
      },
      colors: {
        main: "#040204",
        subMain: "#0C9300",
        dry: "#222831",
        star: "#EBF400",
        text: "#C7C8CC",
        border: "#607274",
        dryGray: '#F2F1EB',
      },
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
    },

  },
  plugins: [require('@tailwindcss/line-clamp')],

}

