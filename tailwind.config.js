/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    },
    extend: {
      colors:{
        Background: 'hsl(210, 100%, 95%)',
        Primary:' hsl(340, 70%, 80%)',
        Accent: 'hsl(120, 50%, 80%)',
        Text: 'hsl(220, 20%, 40%)',
        Teal: 'hsl(180, 70%, 50%)',
        Purple: 'hsl(300, 70%, 50%)',
        Yellow: 'hsl(60, 70%, 50%)',
        LightGray: 'hsl(0, 0%, 96%)',
        SilverGray:' hsl(0, 0%, 88%)',
        AshGray: 'hsl(0, 0%, 80%)',
        CharcoalGray: 'hsl(0, 0%, 40%)'


      }
    },
  },
  plugins: [],
}

