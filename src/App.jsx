import './App.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SpaceCategories from './components/SpaceCategories'
import FeaturedProducts from './components/FeaturedProducts'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <SpaceCategories />
        <FeaturedProducts />
      </main>

      <Footer />
    </>
  )
}

export default App