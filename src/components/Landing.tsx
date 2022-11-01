import Hero from './Hero'
import FeaturedPost from './FeaturedPost'
import Creations from './Creations'
// import useFetch from '../hooks/useFetch'
import { Posts } from '../types'
import { styled } from '../../stitches.config'
import dbData from '../../db.json'

const Main = styled('main', {
  width: '100vw'
})
const Landing = () => {
  // const { data: landingData } = useFetch('http://localhost:3000/landing')
  const landingData = dbData.landing
  // const { data: postsData } = useFetch('http://localhost:3000/posts')
  const postsData = dbData.posts
  // const { data: creationsData } = useFetch('http://localhost:3000/creations')
  const creationsData = dbData.creations
  const { heroPostId, featuredPostId } = landingData ?? {}
  const heroPost = postsData?.filter((p: Posts) => p.id === heroPostId) ?? {}
  const featuredPost = postsData?.filter((p: Posts) => p.id === featuredPostId) ?? {}
  // console.log(landingData?.heroPostId)
  // console.log(heroPostId, featuredPostId, featuredPost)
  console.log('ddddkw', dbData)
  return (
    <Main>
      <Hero post={heroPost} />
      <FeaturedPost post={featuredPost} />
      <Creations posts={creationsData} />
    </Main>
  )
}

export default Landing
