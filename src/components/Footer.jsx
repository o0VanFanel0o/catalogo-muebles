import '../styles/Footer.css'
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa'

function Footer() {
    return (
      <footer className="footer">
        <div className="footer__brand">
          <h2 className="footer__logo">Catalogo Muebles</h2>
          <p className="footer__description">Muebles a medida</p>
          <div className="footer__social">
            <a href="https://www.instagram.com/tu_usuario" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/tu_usuario" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
          </div>
        </div>
        
      </footer>
    )
  }

  export default Footer
