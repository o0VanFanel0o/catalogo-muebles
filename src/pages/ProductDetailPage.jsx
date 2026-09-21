import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import '../styles/ProductDetailPage.css'

function ProductDetailPage() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const carouselRef = useRef(null)
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    fetch('https://homelab.tailab986e.ts.net/api/productos')
      .then((response) => response.json())
      .then((data) => {
        const found = data.find((p) => p.id === parseInt(id))
        setProduct(found)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error:', error)
        setLoading(false)
      })
  }, [id])

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return
  
    const handleScroll = () => {
      const index = Math.round(carousel.scrollLeft / carousel.clientWidth)
      setActiveImage(index)
    }
  
    carousel.addEventListener('scroll', handleScroll)
    return () => carousel.removeEventListener('scroll', handleScroll)
  }, [])

  if (loading) return <p>Cargando...</p>
  if (!product) return <p>Producto no encontrado</p>

  return (
    <main className="product-detail">
      <div className="product-detail__content">
        <button
          className="product-detail__back"
          onClick={() => window.history.back()}
        >
          ← Volver
        </button>
  
        <div className="product-detail__gallery">
          <div className="product-detail__carousel" ref={carouselRef}>
            {product.images.map((img, index) => (
              <img
                key={index}
                className="product-detail__img"
                src={img.url}
                alt={`${product.name} - ${index + 1}`}
              />
            ))}
          </div>
  
          {product.images.length > 1 && (
            <div className="product-detail__dots">
              {product.images.map((_, index) => (
                <span
                  key={index}
                  className={`product-detail__dot ${activeImage === index ? 'active' : ''}`}
                />
              ))}
            </div>
          )}
        </div>
  
        <div className="product-detail__info">
          <h1 className="product-detail__name">{product.name}</h1>
          <p className="product-detail__description">{product.description}</p>
          <ul className="product-detail__specs">
            <li><strong>Espacio:</strong> {product.space}</li>
            <li><strong>Tipo:</strong> {product.type}</li>
            <li><strong>Material:</strong> {product.material}</li>
            <li><strong>Acabado:</strong> {product.finish}</li>
            <li><strong>SKU:</strong> {product.sku}</li>
          </ul>
          <Link to="/contact" className="product-detail__cta">
            Solicitar cotización
          </Link>
        </div>
      </div>
    </main>
  )
}

export default ProductDetailPage