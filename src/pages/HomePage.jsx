import Hero from '../components/Hero'
import SpaceCategories from '../components/SpaceCategories'
import FeaturedProducts from '../components/FeaturedProducts'
import AboutUs from '../components/AboutUs'

function HomePage() {
  return (
    <main>
        <Hero />
        <AboutUs />
        <FeaturedProducts />
        <SpaceCategories />
    </main>
  )
}

export default HomePage