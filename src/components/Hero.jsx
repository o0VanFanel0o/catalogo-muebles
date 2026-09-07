function Hero() {
    return (
      <section className="hero">
        <div className="hero__image" style={{ 
          backgroundImage: "url('/catalogo-muebles/BD-1/separador-001/img-1.jpg')" }}>
            <div className="hero__content">
                <h1 className="hero__brand">Prodima</h1>
                <h2>Muebles a medida para cada espacio de su hogar</h2>
                <p>Diseñamos y fabricamos piezas personalizadas según sus necesidades.</p>
            </div>
        </div>
      </section>
    )
  }
  
  export default Hero