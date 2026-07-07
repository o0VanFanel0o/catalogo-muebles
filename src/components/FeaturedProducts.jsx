import { featuredProducts } from '../data/featuredProducts'

function FeaturedProducts() {
  return (
    <section className="featured">
      <h2>Destacados</h2>

      <div className="featured__list">
        {featuredProducts.map((product) => (
          <article className="featured__card" key={product.id}>
            <div className="featured__image">Imagen</div>

            <div className="featured__info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default FeaturedProducts
