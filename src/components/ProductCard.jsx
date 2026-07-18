import "../styles/ProductCard.css"

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-card__image">
        <img src={product.image} alt={product.name} />
        <div className="product-card__content">
          <h2 className="product-card__name">{product.name}</h2>
          <p className="product-card__meta">
            {product.material} · {product.finish}
          </p>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
