import Hero from './Hero'
import FeaturedPost from './FeaturedPost'
import Creations from './Creations'
import useFetch from '../hooks/useFetch'
import { Posts } from '../types'

const Landing = () => {
  const { data: landingData } = useFetch('http://localhost:3000/landing')
  const { data: postsData } = useFetch('http://localhost:3000/posts')
  const { data: creationsData } = useFetch('http://localhost:3000/creations')
  const { heroPostId, featuredPostId } = landingData ?? {}
  const heroPost = postsData?.filter((p: Posts) => p.id === heroPostId) ?? {}
  const featuredPost = postsData?.filter((p: Posts) => p.id === featuredPostId) ?? {}
  // console.log(landingData?.heroPostId)
  // console.log(heroPostId, featuredPostId, featuredPost)
  return (
    <main>
      <Hero post={heroPost} />
      <FeaturedPost post={featuredPost} />
      <Creations posts={creationsData} />
    </main>
  )
}

export default Landing
