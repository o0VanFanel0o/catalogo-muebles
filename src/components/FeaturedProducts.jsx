import { featuredProducts } from '../data/featuredProducts'
import '../styles/FeaturedProducts.css'

function FeaturedProducts() {
  return (
    <section className="featured">
      <h2 className="featured__title">Destacados</h2>

      <div className="featured__list">
        {featuredProducts.map((product) => (
          <article className="featured__card" key={product.id}>
            <div className="featured__image">Imagen</div>

            <div className="featured__content">
              <h3 className="featured__name">{product.name}</h3>
              <p className="featured__description">{product.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default FeaturedProducts
