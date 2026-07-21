import "../styles/ProductCard.css"
import { useState } from 'react'

function ProductCard({ product }) {
  const [isExpanded, setIsExpanded] = useState(false)


  return (
    <article className="product-card">
      <div className="product-card__image">
        <img src={product.image} alt={product.name} />
        <div className="product-card__content">
          <h2 className="product-card__name">{product.name}</h2>
          <p className="product-card__meta">
            {product.material} · {product.finish}
          </p>
          <button
            className="product-card__button"
            type="button" onClick={() => setIsExpanded(!isExpanded)}aria-expanded={isExpanded}
          >
            {isExpanded ? 'Cerrar detalles' : 'Ver detalles'}
          </button>

          {isExpanded && (
  <div className="product-modal">
    <div className="product-modal__content">
      <button
        className="product-modal__close"
        type="button"
        onClick={() => setIsExpanded(false)}
      >
        X
      </button>

      <img
        className="product-modal__image"
        src={product.image}
        alt={product.name}
      />

      <div className="product-modal__info">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Espacio: {product.space}</p>
        <p>Tipo: {product.type}</p>
        <p>Material: {product.material}</p>
        <p>Acabado: {product.finish}</p>
      </div>
    </div>
  </div>
)}
        </div>
      </div>
    </article>
  )
}

export default ProductCard
