import { Link } from 'react-router-dom'

function Navbar() {
    return (
      <header className="navbar">
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