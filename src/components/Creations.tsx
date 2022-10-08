import { styled } from '../../stitches.config'
import { Posts } from '../types'
import '@fontsource/josefin-sans/300.css'
import Button from './ui/Button'

const PostList = styled('section', {
  marginBlockStart: 'calc($2 * 4)',
  '.post-grid': {
    paddingInline: '$2',
    display: 'flex',
    flexDirection: 'column',
    gap: '$2',
  },
  '.post-grid article': {
    backgroundColor: 'pink',
    display: 'grid',
    gridTemplateColumns: '100%',
    gridTemplateRows: 'auto',
    position: 'relative',
    'img, h3': {
      gridArea: '1 / 1 / 1 / 1',
    },
    'h3': {
      textTransform: 'uppercase',
      marginBlockStart: 'auto',
      marginInlineStart: '$2',
      fontWeight: '300',
      fontSize: '1.5rem',
      width: '125px',
      zIndex: '2',
      lineHeight: '1',
    },
    ['&::after']: {
      content: '',
      width: '100%',
      height: '100%',
      backgroundColor: '$black',
      position: 'absolute',
      top: '0',
      left: '0',
      opacity: '.4',
    }
  },
  [`& ${Button}`]: {
    display: 'block',
    marginInline: 'auto',
    marginBlockStart: '$2',
    marginBlockEnd: 'calc($2 * 2)',
  }
})
const Creations = ({ posts }: { posts: Posts[] }) => {
  console.log('posts creat', posts)
  return (
      <PostList>
        <h2>our Creations</h2>
        <div className='post-grid'>
          { posts && posts.map((post) => (
          <article key={post.title}>
            <img src={`./images/${post.images.mobile}`}
              srcSet={ `./images/${post.images.mobile} 650w,
              ./images/${post.images.desktop} 1280w`}
              alt={post.title}/>
            <h3>{post.title}</h3>
          </article>
          ))}
        </div>

        <Button>See all</Button>

      </PostList>
  )
}

export default Creations
