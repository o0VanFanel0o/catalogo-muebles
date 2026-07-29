import { products } from '../data/products'
import { useState } from 'react'
import ProductCard from '../components/ProductCard'

const spaceFilters = [
  {label:'Todos', value: 'all'},
  {label:'Baño', value: 'bano'},
  {label:'Cocina', value: 'cocina'},
  {label:'Recámara', value: 'recamara'},
  {label:'Comedor', value: 'comedor'},
  {label:'Sala', value: 'sala'},
]

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
          {spaceFilters.map((filter) => (
            <button
              key={filter.value}
              type="button"
              onClick={() => setActiveSpace(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </section>
      </main>
    )
  }
  
  export default CatalogPage