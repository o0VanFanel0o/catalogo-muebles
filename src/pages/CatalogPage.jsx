import { products } from '../data/products'
import { useState } from 'react'
import ProductCard from '../components/ProductCard'

function CatalogPage() {
  
  const [activeSpace, setActiveSpace] = useState('all')

  let filteredProducts 
    if (activeSpace === 'all') {
      filteredProducts = products
    } else {
      filteredProducts = products.filter(
        (product) => product.space === activeSpace
      )
    }

    return (
      <main className="catalog">
        <header className="catalog__header">
          <h1>Catálogo</h1>
          <p>Explora muebles a medida por espacio, material o tipo.</p>
        </header>
  
        <section className="catalog__products">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
            ))
          } 
        </section>
        
        <section className="catalog__filters">
          <button type='button' onClick={() => setActiveSpace ('all')}>Todos</button>
          <button type='button' onClick={() => setActiveSpace ('recamara')}>Recamara</button>
        </section>
      </main>
    )
  }
  
  export default CatalogPage