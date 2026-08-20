import { useState, useEffect } from 'react'
import '../styles/FeaturedProducts.css'

function FeaturedProducts() {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetch('https://homelab.tailab986e.ts.net/api/productos?featured=true')
      .then((response) => response.json())
      .then((data) => {
        setProductos(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error al cargar productos:', error)
        setLoading(false)
      })
  }, [])
  return (
    loading ? (
      <p>Cargando...</p>
    ) : (
    <section className="featured">
      <h2 className="featured__title">Destacados</h2>

      <div className="featured__list">
        {productos.slice(0, 3).map((product) => (
          <article className="featured__card" key={product.id}>
            <div className="featured__image">
              <img src={product.images?.[0]?.url} alt={product.name} />
              <div className="featured__content">
                <h3 className="featured__name">{product.name}</h3>
                <p className="featured__description">{product.description}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
)}


export default FeaturedProducts
