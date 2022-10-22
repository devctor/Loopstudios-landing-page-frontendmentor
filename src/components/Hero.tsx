import { styled } from '../../stitches.config'
import '@fontsource/josefin-sans/300.css'
import { Posts } from '../types'
import { useEffect, useState } from 'react'

const HeroCont = styled('div', {
  backgroundRepeat: 'noRepeat',
  backgroundSize: 'cover',
  color: '$white',
  height: '$hero',
  placeItems: 'center',
  textAlign: 'center',
  textTransform: 'uppercase',
  // position: 'absolute',
  // top: '0',
  zIndex: '1',
  display: 'grid',
  // gridTemplateColumns: '100%',
  // gridTemplateRows: '$hero',
  placeContent: 'center',
  '& h1': {
    // fontSize: '40px',
    fontSize: 'clamp(2rem, 9.5vw, 4.5rem)',
    fontWeight: '300',
    border: '1px solid $white',
    padding: '$2',
    marginInline: '$2',
    textAlign: 'left',
    wordSpacing: '152px',
    gridColumn: '1/1',
    gridRow: '1/1',
    zIndex: '1'
  },
  'img': {
    gridColumn: '1/1',
    gridRow: '1/1',
    height: '$hero',
    objectFit: 'cover'
  },
  '@hero': {
    'h1': {
      wordSpacing: 'normal',
      maxWidth: '700px'
    }
  },
  '@bp1': {
    gridTemplateColumns: '1fr 2fr 1fr',
    placeItems: 'start',
    'h1': {
      // width: '50%',
      marginBlock: 'auto',
      gridArea: '1 / 1 / 1 / 4',
      // fontSize: '80px',
    },
    'img': {
      gridArea: '1 / 4 / 1 / 1'
    }
  },
  '@bp2': {
    gridTemplateColumns: '1fr 1280px 1fr',
    'h1':{
      gridArea: '1 / 2 / 1 / 4',
    }
  },
})

const Hero = ({ post }: { post: Posts }) => {

  return (
    <HeroCont>
      <h1>{post[0]?.title}</h1>
      {/* <img src={`./images/${mobile}`} srcSet={`./images/${mobile} 650w, ./images/${desktop} 1280w`} /> */}
      <img src={`./images/${post[0]?.images.mobile}`}
        srcSet={`./images/${post[0]?.images.mobile} 650w,
          ./images/${post[0]?.images.desktop} 1280w`}
        alt={post[0]?.title} />
    </HeroCont>
  )
}

export default Hero
