import { products } from '../data/products'
import ProductCard from '../components/ProductCard'

function CatalogPage() {
    return (
      <main className="catalog">
        <header className="catalog__header">
          <h1>Catálogo</h1>
          <p>Explora muebles a medida por espacio, material o tipo.</p>
        </header>
  
        <section className="catalog__products">
          {products.map((product) => (
          <ProductCard key={product.id} product={product} />
          ))}
            
        </section>
        
        <section className="catalog__filters">
            <p>Filtros</p>  
        </section>
      </main>
    )
  }
  
  export default CatalogPage