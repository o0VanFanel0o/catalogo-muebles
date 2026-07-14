import '../styles/Footer.css'

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
        </div>
      </footer>
    )
  }
  
  export default Footer