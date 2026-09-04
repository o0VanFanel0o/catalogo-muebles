import { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import '../styles/CatalogPage.css'

const spaceFilters = [
  {label:'Todos', value: 'all'},
  {label:'Baño', value: 'bano'},
  {label:'Cocina', value: 'cocina'},
  {label:'Recámara', value: 'recamara'},
  {label:'Comedor', value: 'comedor'},
  {label:'Sala', value: 'sala'},
  {label:'Puertas', value: 'puertas'},
]

function CatalogPage() {
  const [products, setProducts] = useState([])
  const [activeSpace, setActiveSpace] = useState('all')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://homelab.tailab986e.ts.net/api/productos')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error al cargar productos:', error)
        setLoading(false)
      })
  }, [])
  
  let filteredProducts 
    if (activeSpace === 'all') {
      filteredProducts = products
    } else {
      filteredProducts = products.filter(
        (product) => product.space === activeSpace
      )
    }

    return (
      loading ? (
        <p>Cargando...</p>
      ) : (
      <main className="catalog">
        <header className="catalog__header">
          <h1>Catálogo</h1>
          <p>Explora muebles a medida por espacio.</p>
        </header>

        <section className="catalog__filters">
          {spaceFilters.map((filter) => (
            <button className="catalog__filter"
            key={filter.value}
            type="button"
            onClick={() => setActiveSpace(filter.value)}
          >
            <span className="hover-underline-animation">{filter.label}</span>
          </button>
          ))}
        </section>
  
        <section className="catalog__products">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
            ))
          } 
        </section>
        
      </main>
    )
  )}
  
  export default CatalogPage