function ContactPage() {

    return(
         <main>
            <h1 className="contact-page__header">Contacto</h1>
            <p>Cuéntanos sobre el mueble o espacio que tienes en mente.
            Nos pondremos en contacto contigo para conocer más detalles.</p>
            <section className="contact-page__content">
                <form action="">
                    <label htmlFor="name" id="name" name="name">Nombre</label>
                    <input type="text" />
                    <label htmlFor="watsapp" id="watsapp" name="watsapp">Numero de WatsApp</label>
                    <input type="" />
                </form>
            </section>
         </main>
    )
}

export default ContactPage