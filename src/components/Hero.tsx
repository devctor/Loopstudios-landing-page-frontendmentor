import { styled } from '../../stitches.config'
import '@fontsource/josefin-sans/300.css'
import { Posts } from '../types'

const HeroCont = styled('div', {
  backgroundRepeat: 'noRepeat',
  backgroundSize: 'cover',
  color: '$white',
  height: '$hero',
  placeItems: 'center',
  textAlign: 'center',
  textTransform: 'uppercase',
  zIndex: '1',
  display: 'grid',
  placeContent: 'center',
  '& h1': {
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
    minHeight: '$hero',
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
      marginBlock: 'auto',
      gridArea: '1 / 1 / 1 / 4'
    },
    'img': {
      gridArea: '1 / 4 / 1 / 1'
    }
  },
  '@bp2': {
    gridTemplateColumns: '1fr 1280px 1fr',
    'h1': {
      gridArea: '1 / 2 / 1 / 4'
    }
  }
})

const Hero = ({ post }: { post: Posts[] }) => {
  return (
    <HeroCont>
      <h1>{post[0]?.title}</h1>
      <img src={`./images/${post[0]?.images.mobile}`}
        srcSet={`./images/${post[0]?.images.mobile} 650w,
          ./images/${post[0]?.images.desktop} 1280w`}
        alt={post[0]?.title}
        sizes="(max-width: 650px) 650px,
            (max-width: 1280px) 1280px"
      />
    </HeroCont>
  )
}

export default Hero
