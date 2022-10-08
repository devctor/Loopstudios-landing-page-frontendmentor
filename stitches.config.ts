import { createStitches } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = createStitches({
  theme: {
    colors: {
      white: 'hsl(0, 0%, 100%)',
      black: 'hsl(0, 0%, 0%)',
      darkGray: 'hsl(0, 0%, 55%)',
      veryDarkgray: 'hsl(0, 0%, 41%)'
    },
    space: {
      2: '20px'
    },
    fontSizes: {
      rs: '15px'
    },
    fonts: {
      alata: 'Alata, sans-serif',
      josefin: 'Josefin Sans, sans-serif'
    },
    sizes: {
      hero: '90vh'
    }
  },
  media: {
    bp1: '(min-width: 480px)'
  }
})
