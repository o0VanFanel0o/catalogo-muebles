function ProductCard({ product }) {
    return (
      <article className="product-card">
        <img src={product.image} alt={product.name} className="product-card__img"/> 
        <h2 className="produc-card__name">{product.name}</h2>
        <p className="product-card__meta">{product.material} · {product.finish}</p>
        <p className="product-card__description">{product.description}</p>         
      </article>
    )
  }
  
  export default ProductCard