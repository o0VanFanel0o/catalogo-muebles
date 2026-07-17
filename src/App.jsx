import {Routes, Route} from 'react-router-dom'

import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import Footer from './components/Footer'
import CatalogPage from './pages/CatalogPage'

import './App.css'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalogo" element={<CatalogPage />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App
