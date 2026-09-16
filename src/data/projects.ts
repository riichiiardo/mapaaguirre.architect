export interface Project {
  slug: string;
  title: string;
  category: string;
  location: string;
  year: string;
  area: string;
  description: string;
  shortDescription: string;
  coverImage: string;
  gallery: string[];
  services: string[];
  features: string[];
}

export const projects: Project[] = [
  {
    slug: "residencia-campestre",
    title: "Residencia Campestre",
    category: "Diseño de Interiores",
    location: "Villa de Leyva, Boyacá",
    year: "2024",
    area: "280 m²",
    description:
      "Una residencia de campo que dialoga con el paisaje natural de Boyacá. El proyecto integra materiales locales como piedra y madera en tonalidades cálidas que reflejan la esencia del territorio. Cada estancia fue concebida para maximizar la luz natural y las vistas panorámicas hacia los cerros, creando una experiencia habitacional que conecta lo interior con el exterior.",
    shortDescription:
      "Armonía entre arquitectura y paisaje en el altiplano boyacense.",
    coverImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80",
    ],
    services: [
      "Diseño de Interiores",
      "Selección de Materiales",
      "Diseño de Mobiliario",
      "Asesoría de Paleta Cromática",
    ],
    features: [
      "Paisajismo integrado",
      "Materiales naturales locales",
      "Ventanas de piso a techo",
      "Diseño bioclimático",
    ],
  },
  {
    slug: "loft-urbano",
    title: "Loft Urbano",
    category: "Remodelación",
    location: "Chapinero, Bogotá",
    year: "2024",
    area: "120 m²",
    description:
      "La transformación de un espacio industrial en un loft contemporáneo que equilibra funcionalidad y estética. El proyecto conservó elementos estructurales originales como vigas de acero y ladrillo visto, incorporando paletas neutras con acentos en tonos terracota. La distribución abierta potencia la sensación de amplitud mientras zonas de celosías definen espacios flexibles.",
    shortDescription:
      "Espacio industrial reimaginado para la vida contemporánea.",
    coverImage:
      "https://images.unsplash.com/photo-1600607687644-c7f34b5e4e8e?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600607687644-c7f34b5e4e8e?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?w=1200&q=80",
      "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
    ],
    services: [
      "Diseño de Interiores",
      "Remodelación Integral",
      "Diseño de Iluminación",
      "Planificación Espacial",
    ],
    features: [
      "Estructura industrial preservada",
      "Iluminación escénica LED",
      "Almacenamiento integrado",
      "Sistema de domótica",
    ],
  },
  {
    slug: "boutique-hotel",
    title: "Boutique Hotel",
    category: "Proyecto Comercial",
    location: "La Candelaria, Bogotá",
    year: "2023",
    area: "650 m²",
    description:
      "Un boutique hotel que fusiona la herencia colonial de La Candelaria con una estética contemporánea minimalista. El diseño reinterpreta elementos tradicionales como arcos, patios y azulejos a través de un lenguaje visual moderno. La paleta cromática en tonos arena y blanco crea una atmósfera serena, mientras las texturas de la piedra y la madera aportan calidez a los espacios comunes.",
    shortDescription:
      "Hospitalidad contemporánea en el corazón colonial de Bogotá.",
    coverImage:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d023b480e?w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200&q=80",
    ],
    services: [
      "Diseño de Interiores",
      "Diseño de Branding Espacial",
      "Selección de Mobiliario",
      "Consultoría de Experiencia del Huésped",
    ],
    features: [
      "14 habitaciones con diseño único",
      "Patio central restaurado",
      "Terraza-mirador con bar",
      "Galería de arte local",
    ],
  },
  {
    slug: "oficina-sostenible",
    title: "Oficina Sostenible",
    category: "Oficina Corporativa",
    location: "Zona T, Bogotá",
    year: "2023",
    area: "320 m²",
    description:
      "Diseño de oficinas corporativas que priorizan el bienestar del empleado a través de principios de biophilic design. El proyecto incorpora jardines verticales, materiales certificados FSC, sistemas de luz natural controlada y estaciones de trabajo ergonómicas. La paleta en verdes suaves y maderas claras fomenta la productividad y reduce el estrés.",
    shortDescription:
      "Espacio de trabajo que inspira a través del diseño consciente.",
    coverImage:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&q=80",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80",
    ],
    services: [
      "Diseño de Interiores",
      "Consultoría Sostenible",
      "Diseño de Iluminación",
      "Señalética y Wayfinding",
    ],
    features: [
      "Biophilic design integral",
      "Certificación LEED",
      "Jardín vertical de 12m",
      "Estaciones de trabajo flexibles",
    ],
  },
  {
    slug: "vivienda-unifamiliar",
    title: "Vivienda Unifamiliar",
    category: "Diseño Residencial",
    location: "Niza, Medellín",
    year: "2024",
    area: "380 m²",
    description:
      "Una casa unifamiliar que responde al clima cálido de Medellín con estrategias pasivas de ventilación y sombreamiento. El diseño contemporáneo se articula en tres volúmenes escalonados que generan terrazas jardín en cada nivel. La paleta en tonos tierra contrasta con el verde exuberante del paisajismo, creando un refugio urbano de paz y privacidad.",
    shortDescription:
      "Refugio urbano de tres niveles con terrazas jardín.",
    coverImage:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb3?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7c5a38?w=1200&q=80",
    ],
    services: [
      "Diseño de Interiores",
      "Diseño Paisajístico",
      "Mobiliario a Medida",
      "Diseño de Jardines",
    ],
    features: [
      "Ventilación cruzada natural",
      "Terrazas jardín en cada nivel",
      "Piscina infinity",
      "Domótica completa",
    ],
  },
  {
    slug: "espacio-gastro",
    title: "Espacio Gastronómico",
    category: "Proyecto Comercial",
    location: "Parque 93, Bogotá",
    year: "2023",
    area: "180 m²",
    description:
      "Diseño integral para un restaurante de alta cocina que traduce la filosofía culinaria del chef en una experiencia espacial envolvente. Los materiales —mármol negro, latón cepillado y madera oscura— crean una atmósfera íntima y sofisticada. La iluminación cenital en lámparas artesanales define micro-ambientes sin barreras físicas, respetando la fluidez del espacio.",
    shortDescription:
      "Donde la gastronomía se convierte en experiencia espacial.",
    coverImage:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80",
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1200&q=80",
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=1200&q=80",
      "https://images.unsplash.com/photo-1614154535429-c07c0e32bdce?w=1200&q=80",
    ],
    services: [
      "Diseño de Interiores",
      "Diseño de Mobiliario",
      "Iluminación Escénica",
      "Selección de Materiales",
    ],
    features: [
      "48 plazas con zonas diferenciadas",
      "Barra deChef visible",
      "Materiales certificados",
      "Sistema acústico optimizado",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
