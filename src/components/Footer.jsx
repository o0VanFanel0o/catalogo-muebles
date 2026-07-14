import '../styles/Footer.css'
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa'

function Footer() {
    return (
      <footer className="footer">
        <div className="footer__brand">
          <h2 className="footer__logo">Catalogo Muebles</h2>
          <p className="footer__description">Muebles a medida</p>
        </div>

        <div className="footer__contact">
          <h3 className="footer__title">Contacto</h3>
          <p className="footer__whats"><FaWhatsapp /> (55) 1234 5678</p>
          <p className="footer__mail">contacto@hero.com</p>
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
