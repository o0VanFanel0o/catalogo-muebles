import { spaces } from '../data/spaces'

function SpaceCategories() {
  return (
    <section className="spaces">
      <h2 className='spaces__title'>Explora por espacio</h2>

      <div className="spaces__list">
        {spaces.map((space) => (
          <article className="spaces__card" key={space.id} style={{ backgroundImage: `url(${space.image})` }}>
            <span>{space.name}</span>
      </article>
    ))}
  </div>
</section>
);
}

export default SpaceCategories;