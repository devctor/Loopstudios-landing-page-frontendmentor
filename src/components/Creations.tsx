import { styled } from '../../stitches.config'
import { Posts } from '../types'
import '@fontsource/josefin-sans/300.css'
import Button from './ui/Button'

const PostList = styled('section', {
  marginBlockStart: 'calc($2 * 4)',
  marginBlockEnd: 'calc($2 * 4)',
  '.post-grid': {
    paddingInline: '$2',
    display: 'flex',
    flexDirection: 'column',
    gap: '$2'
  },
  '.post-grid article': {
    backgroundColor: 'pink',
    display: 'grid',
    gridTemplateColumns: '100%',
    gridTemplateRows: 'auto',
    position: 'relative',
    'img, h3': {
      gridArea: '1 / 1 / 1 / 1'
    },
    'h3': {
      textTransform: 'uppercase',
      marginBlockStart: 'auto',
      marginInlineStart: '$2',
      fontWeight: '300',
      // fontSize: '1.5rem',
      fontSize: 'clamp(1em, 5vw, 2em)',
      width: '150px',
      // width: 'clamp(125px, 5vw, 600px)',
      zIndex: '1',
      lineHeight: '1'
    },
    // 'img': {
    //   height: '240px',
    //   objectFit: 'cover'
    // },
    ['&::after']: {
      content: '',
      width: '100%',
      height: '100%',
      backgroundColor: '$black',
      position: 'absolute',
      top: '0',
      left: '0',
      opacity: '.4'
    }
  },
  [`& ${Button}`]: {
    display: 'block',
    marginInline: 'auto',
    marginBlockStart: '$2',
    marginBlockEnd: 'calc($2 * 2)'
  },
  '@creationsList': {
    '.post-grid': {
      flexDirection: 'row',
      flexWrap: 'wrap',
      'article': {
        width: 'calc(33% - $2)',
        flex: '1 0'
      }
    }
  },
  '@bp1': {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: '100px 1fr',
    maxWidth: ' 1280px',
    marginInline: 'auto',
    'h2': {
      gridArea: '1 / 1 / 2 / 2',
      textAlign: 'left',
      marginInlineStart: '$2',
      fontSize: '2.5rem',
      alignSelf: 'center'
    },
    [`& ${Button}`]: {
      gridArea: '1 / 2 / 2 / 3',
      marginInlineEnd: '20px',
      marginBlockStart: ' auto',
      marginBlockEnd: ' auto',
      fontSize: '$rs',
      letterSpacing: '.2em',
      '&:hover': {
        backgroundColor: '$black',
        color: '$white'
      }
    },
    '.post-grid': {
      gridArea: ' 2 / 1 / 4 / 4',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      paddingInline: '0',
      'article': {
        flex: ' 0 0 23%',
        '&:hover:after': {
          backgroundColor: '$white',
          opacity: '.6'
        },
        '&:hover h3': {
          color: '$black'
        }
      },
      'article h3': {
        width: '200px'
      }
    }
  },
  '@bp2': {
    '.post-grid': {
      marginBlock: 'calc($2 * 3)',
      'article h3': {
        width: '180px'
      }
    },
    [`& ${Button}`]: {
      marginBlockStart: ' auto',
      marginBlockEnd: ' auto'
      // paddingInline: '0'
    }
  }
})
const Creations = ({ posts }: { posts: Posts[] }) => {
  console.log('posts creat', posts)
  return (
    <PostList>
      <h2>our Creations</h2>
      <div className='post-grid'>
        {posts && posts.map((post) => (
          <article key={post.title}>
            <img src={`./images/${post.images.mobile}`}
              srcSet={`./images/${post.images.mobile} 650w,
              ./images/${post.images.desktop} 1280w`}
              alt={post.title} />
            <h3>{post.title}</h3>
          </article>
        ))}
      </div>

      <Button>See all</Button>

    </PostList>
  )
}

export default Creations
