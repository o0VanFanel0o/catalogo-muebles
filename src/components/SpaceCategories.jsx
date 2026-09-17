import { spaces } from '../data/spaces'
import { Link } from 'react-router-dom';
import '../styles/SpaceCategories.css'

function SpaceCategories() {
  return (
    <section className="spaces">
      <h2 className="spaces__title">Explora por espacio</h2>

      <div className="spaces__list">
        {spaces.map((space) => (
          <Link 
          to={`/catalogo?space=${space.id}`} 
          className="spaces__card" 
          key={space.id} 
          style={{ backgroundImage: `url(${space.image})` }}
        >
          <span className="spaces__name">{space.name}</span>
        </Link>
        ))}
      </div>
    </section>
  );
}

export default SpaceCategories;
