import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import '../styles/NavBar.css'

function Navbar() {
    const navbarRef = useRef(null)

    useEffect(() => {
      let animationFrame

      const updateNavbarPosition = () => {
        const navbar = navbarRef.current
        const footer = document.querySelector('.footer')

        if (!navbar || !footer) return

        const gap = 16
        const footerTop = footer.getBoundingClientRect().top
        const footerOverlap = Math.max(0, window.innerHeight - footerTop)

        navbar.style.setProperty('--navbar-bottom', `${gap + footerOverlap}px`)
      }

      const requestUpdate = () => {
        cancelAnimationFrame(animationFrame)
        animationFrame = requestAnimationFrame(updateNavbarPosition)
      }

      updateNavbarPosition()
      window.addEventListener('scroll', requestUpdate, { passive: true })
      window.addEventListener('resize', requestUpdate)

      return () => {
        cancelAnimationFrame(animationFrame)
        window.removeEventListener('scroll', requestUpdate)
        window.removeEventListener('resize', requestUpdate)
      }
    }, [])

    return (
      <header className="navbar" ref={navbarRef}>
        <Link to="/" className="navbar__logo">Logo
        </Link>
  
        <nav className="navbar__nav">
          <ul className="navbar__list">
            <li className="navbar__item">
              <Link to="/catalogo" className="navbar__link">Catálogo</Link>
            </li>
  
            <li className="navbar__item">
              <a href="#" className="navbar__link">Materiales</a>
            </li>
  
            <li className="navbar__item">
              <a href="#" className="navbar__link">Contacto</a>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
  
  export default Navbar
