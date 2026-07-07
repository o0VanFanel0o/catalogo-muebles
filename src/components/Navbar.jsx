function Navbar() {
    return (
      <header className="navbar">
        <a href="#" className="navbar__logo">
        </a>
  
        <nav className="navbar__nav">
          <ul className="navbar__list">
            <li className="navbar__item">
              <a href="#" className="navbar__link">Catálogo</a>
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