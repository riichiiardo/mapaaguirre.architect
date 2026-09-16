export interface Project {
  slug: string;
  title: string;
  category: string;
  location: string;
  year: string;
  area: string;
  client: string;
  description: string;
  shortDescription: string;
  coverImage: string;
  gallery: string[];
  services: string[];
  challenges: string;
  designConcept: string;
  results: string;
}

export const projects: Project[] = [
  {
    slug: "oficinas-liberty",
    title: "Oficinas Liberty Seguros",
    category: "Oficina Corporativa",
    location: "Bogotá, Colombia",
    year: "2020",
    area: "800 m²",
    client: "Liberty Seguros",
    description:
      "Remodelación integral de las oficinas de Liberty Seguros con el objetivo de optimizar el uso de los espacios, crear ambientes más acogedores y mejorar la experiencia de los empleados. La cafetería fue reestructurada y se crearon nuevas áreas de trabajo colaborativas, junto con la reconfiguración del área del Call Center.",
    shortDescription:
      "Transformación de oficinas corporativas hacia espacios más dinámicos y productivos.",
    coverImage: "/images/oficinas-liberty.png",
    gallery: [
      "/images/oficinas-liberty/gallery-1.png",
      "/images/oficinas-liberty/gallery-2.png",
      "/images/oficinas-liberty/gallery-3.png",
    ],
    services: [
      "Diseño de Interiores Corporativos",
      "Remodelación Integral",
      "Optimización Espacial",
      "Diseño de Iluminación",
    ],
    challenges:
      "La principal dificultad fue transformar espacios que no se usaban de manera eficiente. Se desmanteló la antigua cafetería, creando un espacio más luminoso, funcional y acogedor. El área del Call Center fue aislada acústicamente para mejorar la comunicación y reducir el estrés por ruido.",
    designConcept:
      "Se priorizó la flexibilidad en los nuevos espacios de trabajo, creando ambientes que favorecieran la colaboración. En la cafetería, se implementaron espacios más amplios y cómodos, con un diseño que invitaba a los empleados a relajarse y desconectar durante sus descansos.",
    results:
      "El proyecto transformó las oficinas en un lugar más dinámico y productivo, con espacios que favorecen tanto el trabajo colaborativo como el descanso. Los empleados ahora cuentan con áreas de trabajo más cómodas y funcionales, lo que ha mejorado la eficiencia y el bienestar dentro de la oficina.",
  },
  {
    slug: "clinica-servisalud",
    title: "Clínica Servisalud Compas",
    category: "Salud",
    location: "Bogotá, Colombia",
    year: "2022",
    area: "350 m²",
    client: "Centro de Salud Integral especializado en atención médica y quirúrgica",
    description:
      "Diseño integral de un centro de salud, donde se debía cumplir con la norma de sanidad hospitalaria mientras se integraban los colores y la identidad de la marca del cliente en todos los espacios. Se diseñaron zonas de consulta, hospitalización, cirugía y una nueva área de espera.",
    shortDescription:
      "Centro de salud que equilibra normatividad sanitaria con una atmósfera acogedora y personalizada.",
    coverImage: "/images/servisalud-compas.png",
    gallery: [
      "/images/servisalud-compas/gallery-1.png",
      "/images/servisalud-compas/gallery-2.png",
      "/images/servisalud-compas/gallery-3.png",
    ],
    services: [
      "Diseño de Interiores Hospitalarios",
      "Diseño de Identidad de Marca Espacial",
      "Selección de Materiales Sanitarios",
      "Cumplimiento Normativo",
    ],
    challenges:
      "El principal reto fue encontrar un equilibrio entre el cumplimiento normativo y una atmósfera más acogedora y personalizada. Se optó por integrar los colores corporativos de la marca en los elementos decorativos y el mobiliario, mientras que se garantizaba el cumplimiento de las normativas sanitarias.",
    designConcept:
      "El área de espera se diseñó con muebles orgánicos en los colores corporativos azul y naranja, creando un espacio moderno y funcional. Además, se incorporaron zonas privadas para consultas y hospitalización, con el uso de materiales de fácil limpieza y alta resistencia.",
    results:
      "El diseño final logró un centro de salud eficiente y agradable, donde los pacientes se sintieron cómodos y bien atendidos, sin que la funcionalidad y la estética estuvieran en conflicto.",
  },
  {
    slug: "apartamento-pipe",
    title: "Apartaestudio Multifuncional",
    category: "Residencial",
    location: "Bogotá, Colombia",
    year: "2022",
    area: "38 m²",
    client: "Profesional de 30 años, soltero, apasionado por el café y el diseño contemporáneo",
    description:
      "Rediseño completo de un apartaestudio de 40 m², pensado para un cliente joven, amante del café y con un estilo de vida minimalista. El reto fue optimizar el espacio sin perder funcionalidad, a través del diseño de muebles multifuncionales.",
    shortDescription:
      "Pequeño gran espacio: minimalismo, multifuncionalidad y diseño a medida.",
    coverImage: "/images/apartamento-pipe.png",
    gallery: [
      "/images/apartamento-pipe/gallery-1.png",
      "/images/apartamento-pipe/gallery-2.png",
      "/images/apartamento-pipe/gallery-3.png",
    ],
    services: [
      "Diseño de Interiores Residenciales",
      "Diseño de Mobiliario a Medida",
      "Optimización de Espacios Pequeños",
      "Selección de Materiales",
    ],
    challenges:
      "El principal desafío fue maximizar cada metro cuadrado del apartamento, lo que se logró mediante la creación de muebles a medida. Se diseñó una cama integrada que también funciona como escritorio y espacio de almacenamiento. Además, se incorporó una barra de café que se convierte en un punto central de encuentro dentro del espacio reducido.",
    designConcept:
      "El diseño se basó en tonos neutros, madera clara y detalles en metal negro, creando una atmósfera moderna y acogedora. El espacio refleja la personalidad del cliente sin sacrificar funcionalidad.",
    results:
      "El proyecto logró transformar un pequeño apartaestudio en un lugar cómodo y eficiente, donde el cliente puede disfrutar de su espacio personal y tener un ambiente propicio para trabajar y relajarse.",
  },
  {
    slug: "oficina-juridica",
    title: "Oficina Jurídica & Aseguradora",
    category: "Oficina Corporativa",
    location: "Bogotá, Colombia",
    year: "2019",
    area: "120 m² (dos plantas)",
    client: "Firma especializada en servicios legales y seguros",
    description:
      "Remodelación de una oficina de seguros y abogados, con el objetivo de mejorar la organización de los archivos físicos y optimizar el espacio de trabajo, además de crear un ambiente acogedor para los clientes. La oficina debía incorporar una estética profesional sin perder la comodidad.",
    shortDescription:
      "Espacio profesional que fusiona funcionalidad jurídica con calidez y sofisticación.",
    coverImage: "/images/carrasco-rodriguez.png",
    gallery: [
      "/images/carrasco-rodriguez/gallery-1.png",
      "/images/carrasco-rodriguez/gallery-2.png",
      "/images/carrasco-rodriguez/gallery-3.png",
    ],
    services: [
      "Diseño de Interiores Corporativos",
      "Diseño Modular de Almacenamiento",
      "Planificación Espacial",
      "Selección de Mobiliario",
    ],
    challenges:
      "El desafío principal fue integrar de forma eficiente las necesidades funcionales (como la organización de archivos) con la estética del espacio. Se optó por crear un espacio de coworking para los empleados, facilitando la comunicación y colaboración entre los diferentes equipos. Se rediseñó el segundo piso, destinado a la oficina del gerente, de manera que también pudiera servir como un espacio de reuniones.",
    designConcept:
      "El diseño se basó en un estilo minimalista y profesional, utilizando madera clara y acabados en tonos neutros para dar una sensación de calidez y sofisticación. Los muebles fueron elegidos para facilitar la movilidad, y se incorporaron elementos de diseño modular para organizar mejor los archivos y documentos.",
    results:
      "La nueva oficina se convirtió en un espacio más funcional y agradable tanto para los empleados como para los clientes. La zona de espera fue diseñada con muebles cómodos, creando un ambiente de recepción que no se sintiera como una oficina tradicional, sino como un lugar donde los clientes se sienten atendidos con profesionalismo y calidez.",
  },
  {
    slug: "consultorio-estetico",
    title: "Consultorio Estético Femenino",
    category: "Salud / Belleza",
    location: "Bogotá, Colombia",
    year: "2021",
    area: "65 m²",
    client: "Médico esteticista, especializada en tratamientos faciales y corporales femeninos",
    description:
      "Remodelación de un consultorio estético para una médica estética. El principal objetivo era crear un ambiente lujoso, acogedor y que reflejara la identidad de la marca.",
    shortDescription:
      "Elegancia y protocolo médico fusionados en un espacio de lujo relajante.",
    coverImage: "/images/consultorio-360.png",
    gallery: [
      "/images/consultorio-360/gallery-1.png",
      "/images/consultorio-360/gallery-2.png",
      "/images/consultorio-360/gallery-3.png",
    ],
    services: [
      "Diseño de Interiores Médicos",
      "Diseño de Identidad de Marca",
      "Iluminación Decorativa",
      "Selección de Acabados Premium",
    ],
    challenges:
      "Se necesitaba cumplir con estrictos protocolos médicos mientras se ofrecía un entorno relajante. Se diseñó un área de lavado con un espejo retroiluminado y parales metálicos en oro rosa, y una nueva sala de espera que simulaba un espacio más cercano a un lounge de café que a un consultorio tradicional.",
    designConcept:
      "La paleta de colores fue cuidadosamente seleccionada, con predominancia de tonos suaves y detalles en oro rosa, para crear una atmósfera relajante y elegante.",
    results:
      "El nuevo diseño no solo cumplió con los estándares médicos, sino que proporcionó a las pacientes una experiencia visual y emocional de lujo, reflejando la identidad del negocio.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
