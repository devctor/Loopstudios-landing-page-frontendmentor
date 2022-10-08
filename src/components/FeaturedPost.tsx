import { Posts } from '../types'
import { styled } from '../../stitches.config'

const FeaturedPostCont = styled('section', {
  color: '$darkGray',
  paddingInline: '$2',
  marginBlockStart: 'calc($2 * 4)',
  textAlign: 'center',
  'p': {
    marginInline: '$2',

  }

})
const FeaturedPost = ({ post }: { post: Posts[] }) => {
  const { title, content, images } = post[0] || {}
  // console.log('title', title, 'images', images)
  // console.log('posts herw', post)
  return (
    <FeaturedPostCont>
      <img src={`./images/${images?.mobile}`}
        srcSet={`./images/${images?.mobile} 650w,
        ./images/${images?.desktop} 1280w`}
        alt={title} />
      <h2>{title}</h2>
      <p>{content}</p>
    </FeaturedPostCont>
  )
}

export default FeaturedPost
