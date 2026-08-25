import "../styles/ContactPage.css"
import { useState } from 'react'

function ContactPage() {
    const [enviado, setEnviado] = useState(false)
    const [enviando, setEnviando] = useState(false)
    const [error, setError] = useState(null)

    const handleSubmit = async (event) => {
        event.preventDefault()

        const form = event.target
        const formData = new FormData(form)

        const datos = {
            nombre: formData.get('name'),
            whatsapp: formData.get('whatsapp'),
            email: formData.get('email'),
            espacio: formData.get('space'),
            mensaje: formData.get('message'),
        }

        setEnviando(true)
        setEnviado(false)
        setError(null)

        try {
            const response = await fetch('https://homelab.tailab986e.ts.net/api/contacto', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(datos),
            })

            if (response.ok) {
                setEnviado(true)
                form.reset()
            } else {
                setError('Error al enviar mensaje')
            }
        } catch (err) {
            setError('Error de red al enviar el mensaje')
        } finally {
            setEnviando(false)
        }
    }

    return (
        <main>
            <h1 className="contact-page__header">Contacto</h1>
            <p>Cuéntanos sobre el mueble o espacio que tienes en mente.
            Nos pondremos en contacto contigo para conocer más detalles.</p>
            <section className="contact-page__content">
                <form onSubmit={handleSubmit}>
                    <div className="contact-page__field">
                        <label htmlFor="name">Nombre</label>
                        <input type="text" id="name" name="name" autoComplete="name" required />
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
                    {error && <p role="alert">{error}</p>}
                    {enviado && <p>Mensaje enviado correctamente.</p>}
                    <button type="submit" className="contact-page__btn" disabled={enviando}>
                        {enviando ? 'Enviando...' : 'Enviar'}
                    </button>
                </form>
            </section>
        </main>
    )
}

export default ContactPage
