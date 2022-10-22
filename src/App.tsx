import { normalize } from 'stitches-normalize-css'
import '@fontsource/josefin-sans'
import '@fontsource/alata'
import '@fontsource/josefin-sans/300.css'
import type * as Stitches from '@stitches/react'
import { globalCss, theme, styled } from '../stitches.config'
import Header from './components/Header'
import Landing from './components/Landing'
import Footer from './components/Footer'

const CustomGlobalStyles: Record<string, Stitches.CSS> = {
  '*, *:before, *:after': {
    boxSizing: 'border-box'
  },
  // '*': { outline: '1px solid blue'},
  body: {
    backgroundColor: theme.colors.white.value,
    fontFamily: '$josefin',
    fontSize: '$rs'
  },
  img: {
    width: '100%'
  },
  'button:hover': {
    borderColor: 'none'
  },
  'button:focus, button:focusVisible': {
    outline: 'none'
  },
  'h2': {
    color: '$black',
    textTransform: 'uppercase',
    fontSize: '2rem',
    lineHeight: '1.25',
    fontWeight: '300',
    textAlign: 'center'
  }
}

const globalStyles = globalCss(...normalize, CustomGlobalStyles)

function App() {
  globalStyles()
  return (
    <div className="App">
      <Header />
      <Landing />
      <Footer />
    </div>
  )
}

export default App
