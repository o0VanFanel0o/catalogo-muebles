import "../styles/ContactPage.css"

function ContactPage() {

    return(
         <main>
            <h1 className="contact-page__header">Contacto</h1>
            <p>Cuéntanos sobre el mueble o espacio que tienes en mente.
            Nos pondremos en contacto contigo para conocer más detalles.</p>
            <section className="contact-page__content">
                <form action="">
                    <div className="contact-page__field">
                        <label htmlFor="name">Nombre</label>
                        <input type="text" id="name" name="name" autoComplete="name"required/>
                    </div>
                    <div className="contact-page__field">
                        <label htmlFor="whatsapp">Numero de WhatsApp</label>
                        <input type="tel" id="whatsapp" name="whatsapp" autoComplete="tel" required />
                    </div>
                    <div className="contact-page__field">
                        <label htmlFor="email">Correo Electronico</label>
                        <input type="email" id="email" name="email" autoComplete="email" />
                    </div>
                    <div className="contact-page__field">
                        <label htmlFor="space">Selecciona el espacio</label>
                        <select name="space" id="space" defaultValue="" required>
                            <option value="" disabled>Espacio</option>
                            <option value="recamara">Recamara</option>
                            <option value="sala">Sala</option>
                            <option value="cocina">Cocina</option>
                            <option value="bano">Baño</option>
                            <option value="comedor">Comedor</option>
                            <option value="other">Otro</option>
                        </select>
                    </div>
                    <div className="contact-page__field">
                        <label htmlFor="message">Describe tu proyecto en detalle</label>
                        <textarea name="message" id="message" rows="5" required></textarea>
                    </div>
                    <button type="submit" className="contact-page__btn">Enviar</button>
                </form>
            </section>
        </main>
    );
}

export default ContactPage;