import { useState } from 'react'
import '../styles/ProductCard.css'

function ProductCard({ product }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <article className="product-card">
      <button
        className="product-card__button"
        type="button"
        onClick={() => setIsExpanded(true)}
      >
        <img src={product.image} alt={product.name} />
        <div className="product-card__content">
          <h2 className="product-card__name">{product.name}</h2>
          <p className="product-card__meta">
            {product.material} · {product.finish}
          </p>
        </div>
      </button>

      {isExpanded && (
        <div className="product-modal" role="presentation">
          <div
            className="product-modal__content"
            role="dialog"
            aria-modal="true"
            aria-labelledby={`product-title-${product.id}`}
          >
            <button
              className="product-modal__close"
              type="button"
              onClick={() => setIsExpanded(false)}
              aria-label="Cerrar detalles"
            >
              ×
            </button>

            <img
              className="product-modal__image"
              src={product.image}
              alt={product.name}
            />

            <div className="product-modal__info">
              <h2 id={`product-title-${product.id}`}>{product.name}</h2>
              <p>{product.description}</p>
              <p>Espacio: {product.space}</p>
              <p>Tipo: {product.type}</p>
              <p>Material: {product.material}</p>
              <p>Acabado: {product.finish}</p>
            </div>
          </div>
        </div>
      )}
    </article>
  )
}

export default ProductCard
