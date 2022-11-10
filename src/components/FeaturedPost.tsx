import { Posts } from '../types'
import { styled } from '../../stitches.config'

const FeaturedPostCont = styled('section', {
  color: '$darkGray',
  paddingInline: '$2',
  marginBlockStart: 'calc($2 * 4)',
  textAlign: 'center',
  'p': {
    marginInline: '$2'
  },
  '@creationsList': {
    display: 'flex',
    'img': {
      aspectRatio: '4/4'
    }
  },
  '@hero': {
    'img': {
      aspectRatio: '16 / 9',
      objectFit: 'cover'
    }
  },
  '@bp2': {
    maxWidth: '1280px',
    marginInline: 'auto',
    display: 'grid',
    // gridTemplateColumns: '1fr repeat(3, 1fr)',
    // gridTemplateRows: '2fr repeat(2, 1fr)',
    gridTemplateColumns: '50% repeat(8, 1fr)',
    gridTemplateRows: 'repeat(3, 1fr)',
    'img': {
      gridArea: '1 / 1 / 4 / 4'
    },
    '.featured-text-content': {
      gridArea: '2 / 2 / 4 / 10',
      backgroundColor: '$white',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      '& > *': {
        textAlign: 'left',
        // paddingInlineStart: '100px',
        margin: 0,
        marginInlineStart: '20%'
      },
      'h2': {
        fontSize: '3em',
        marginBlockStart: 'auto'
      }
    }
  }

})
const FeaturedPost = ({ post }: { post: Posts[] }) => {
  const { title, content, images } = post[0] || {}
  return (
    <FeaturedPostCont>
      <img src={`./images/${images?.mobile}`}
        srcSet={`./images/${images?.mobile} 650w,
./images/${images?.desktop} 1280w`}
        alt={title}
        sizes="(max-width: 397px) 397px,
            (max-width: 1918px) 1918px"
      />
      <div className='featured-text-content'>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </FeaturedPostCont>
  )
}

export default FeaturedPost
