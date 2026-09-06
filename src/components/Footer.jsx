import '../styles/Footer.css'
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa'

function Footer() {
    return (
      <footer className="footer">
        <div className="footer__brand">
          <img src='/logo/prodima.png' className="footer__logo"/>
          <p className="footer__description">Muebles a medida para cada espacio de su hogar.</p>
        </div>
        <div className="footer__social">
            <a href="https://www.instagram.com/prodima.mx/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/prodimaoficial?locale=es_LA" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
          </div>
        
      </footer>
    )
  }

  export default Footer
