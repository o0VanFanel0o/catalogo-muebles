import '../styles/Footer.css'
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa'

function Footer() {
    return (
      <footer className="footer">
        <div className="footer__brand">
          <img src='public\logo\prodima.png' className="footer__logo"/>
          <p className="footer__description">Muebles a medida para cada espacio de su hogar.</p>
        </div>
        <div className="footer__social">
            <a href="https://www.instagram.com/tu_usuario" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/tu_usuario" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
          </div>
        
      </footer>
    )
  }

  export default Footer
