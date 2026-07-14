import '../styles/Footer.css'
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa'

function Footer() {
    return (
      <footer className="footer">
        <div className="footer__brand">
          <h2 className="footer__logo"></h2>
          <p className="footer__description">Muebles a medida</p>
        </div>
  
        <div className="footer__contact">
          <h3 className="footer__title">Contacto</h3>
          <p className="footer__whats">WhatsApp: (55) 1234 5678</p>
          <p className="footer__mail">Correo: contacto@hero.com</p>
          <a href="https://www.instagram.com/tu_usuario" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/tu_usuario" target="_blank" rel="noreferrer">
            <FaFacebookF/>
          </a>
        </div>
      </footer>
    )
  }
  
  export default Footer