import cajoneraImg from "../assets/cajonera-featured.jpg"
import closetImg from "../assets/closet-featured.jpg"
import tocadorImg from "../assets/tocador-featured.jpg"

export const featuredProducts = [
    {
      id: 'tocador-001',
      name: 'Tocador',
      space: 'recamara',
      type: 'Tocador',
      material: 'MDF',
      finish: 'nogal',
      description: 'Mueble personalizado para recámara.',
      image: tocadorImg
    },
    {
      id: 'cajonera-001',
      name: 'Cajonera',
      space: 'estancia',
      type: 'Cajonera',
      material: 'MDF',
      finish: 'pino',
      description: 'Almacenamiento práctico con diseño a medida.',
      image: cajoneraImg
    },
    {
      id: 'closet-001',
      name: 'Clóset',
      space: 'recamara',
      type: 'Closet',
      material: 'madera',
      finish: 'nogal',
      description: 'Solución personalizada para organización.',
      image: closetImg
    },
  ]