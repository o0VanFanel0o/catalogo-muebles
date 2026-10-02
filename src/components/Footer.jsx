import { FaInstagram, FaFacebookF } from 'react-icons/fa'
import '../styles/Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__brand">
        <img src="/logo/prodima.png" className="footer__logo" alt="Prodima" />
        <p className="footer__description">
          Muebles a medida para cada espacio de su hogar.
        </p>
      </div>

      <div className="footer__social">
        <a href="https://www.instagram.com/prodima.mx/" target="_blank" rel="noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com/prodimaoficial?locale=es_LA" target="_blank" rel="noreferrer" aria-label="Facebook">
          <FaFacebookF />
        </a>
      </div>

      <div className="footer__bottom">
        <p>© 2026 Prodima. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer