import { Lesson, QuizQuestion, DownloadResource } from '../types';

export const ASSETS = {
  earthHero: '/src/assets/images/ecovisual_earth_hero_1791827431315.jpg',
  studentBins: '/src/assets/images/ecovisual_student_bins_1791827440045.jpg',
  greenFoliage: '/src/assets/images/ecovisual_green_foliage_1791827453186.jpg',
  infographicPreview: '/src/assets/images/ecovisual_infographic_preview_1791827463666.jpg',
};

export const LESSONS: Lesson[] = [
  {
    id: 'l1',
    number: 1,
    title: '¿Qué es el reciclaje?',
    duration: '10 min',
    summary: 'Aprende los principios fundamentales de la regla de las 3R (Reducir, Reutilizar y Reciclar) y el ciclo de vida de los materiales.',
    content: [
      'El reciclaje es un proceso físico-químico o mecánico que consiste en someter a una materia o un producto ya utilizado a un ciclo de tratamiento total o parcial para obtener una materia prima o un nuevo producto.',
      'A través del reciclaje, evitamos el desecho de materiales potencialmente útiles, reducimos el consumo de nueva materia prima virgen y mitigamos las emisiones de gases de efecto invernadero.',
      'En Colombia y Latinoamérica, el código de colores unificado nos permite identificar rápidamente qué va en cada caneca o contenedor.'
    ],
    keyFact: 'Reciclar 1 tonelada de papel salva aproximadamente 17 árboles adultos y ahorra 26.000 litros de agua.'
  },
  {
    id: 'l2',
    number: 2,
    title: 'Tipos de residuos',
    duration: '12 min',
    summary: 'Identifica la diferencia entre residuos aprovechables, orgánicos y no aprovechables según la normativa vigente.',
    content: [
      'Los residuos se clasifican principalmente en tres grandes categorías para su correcta separación en la fuente:',
      '1. Residuos Orgánicos: Restos de comida fresca, cáscaras de frutas, verduras, hojas secas y poda de jardines. Son biodegradables y aptos para compostaje.',
      '2. Residuos Aprovechables (Plástico, Papel, Cartón, Vidrio, Metal): Materiales limpios y secos que pueden transformarse en nuevos productos industriales.',
      '3. Residuos No Aprovechables: Papel higiénico, servilletas usadas, papeles metalizados o sucios con grasa, y pañales.'
    ],
    keyFact: 'El plástico puede tardar entre 100 y 500 años en descomponerse si termina en un relleno sanitario o en los océanos.'
  },
  {
    id: 'l3',
    number: 3,
    title: '¿Cómo reciclar en casa y en la escuela?',
    duration: '15 min',
    summary: 'Estrategias prácticas para crear puntos ecológicos eficientes en el hogar y las aulas de clase.',
    content: [
      'Establecer una rutina de separación ecológica es muy fácil si sigues estos pasos prácticos:',
      '• Limpia y seca: Antes de depositar envases plásticos o latas, enjuágalos rápidamente para evitar malos olores y plagas.',
      '• Compacta: Aplasta botellas y cajas de cartón para maximizar el espacio en el contenedor.',
      '• Dignifica el oficio: Al separar adecuadamente, facilitas el trabajo de los recicladores de oficio que son el pilar de la economía circular.'
    ],
    keyFact: 'Más de 60.000 familias en Colombia viven dignamente gracias a las asociaciones de reciclaje y recuperación ambiental.'
  },
  {
    id: 'l4',
    number: 4,
    title: 'Beneficios del reciclaje',
    duration: '8 min',
    summary: 'Descubre el impacto positivo directo en el aire, agua, biodiversidad y la economía circular.',
    content: [
      'El impacto de reciclar va mucho más allá de evitar la basura en las calles:',
      '• Disminución de la huella de carbono y menor demanda de energía eléctrica en procesos fabriles.',
      '• Preservación de hábitats naturales y disminución de la deforestación.',
      '• Generación de empleo verde y dinamización de modelos de economía circular comunitaria.'
    ],
    keyFact: 'Por cada botella de vidrio reciclada, se ahorra la energía necesaria para encender una bombilla LED durante casi 4 horas.'
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1',
    question: '¿En cuál contenedor se debe depositar una botella de plástico?',
    itemName: 'Botella de plástico (PET)',
    itemType: 'plastic',
    correctContainer: 'plastic',
    explanation: '¡Correcto! Las botellas plásticas limpias y secas se depositan en el contenedor de Plásticos (amarillo/blanco según norma) para ser trituradas y transformadas en nuevas fibras textiles o botellas.'
  },
  {
    id: 'q2',
    question: '¿En cuál contenedor debes depositar las cáscaras de plátano y manzana?',
    itemName: 'Cáscaras de fruta fresca',
    itemType: 'organic',
    correctContainer: 'organic',
    explanation: '¡Excelente! Los residuos orgánicos biodegradables van al contenedor verde para producir compost y abono orgánico para la agricultura.'
  },
  {
    id: 'q3',
    question: '¿En cuál contenedor van las cajas de cartón y hojas de cuaderno limpias?',
    itemName: 'Caja de cartón plegada',
    itemType: 'paper',
    correctContainer: 'paper',
    explanation: '¡Muy bien! El papel y cartón limpios y secos van al contenedor azul/blanco para ser reciclados en nuevas hojas y cajas.'
  },
  {
    id: 'q4',
    question: '¿En cuál contenedor se debe depositar un envase de yogur previamente enjuagado?',
    itemName: 'Vaso de yogur limpio',
    itemType: 'plastic',
    correctContainer: 'plastic',
    explanation: '¡Exacto! Al estar limpio y seco, los envases plásticos de polipropileno se reciclan en el contenedor de Plásticos.'
  }
];

export const RESOURCES: DownloadResource[] = [
  {
    id: 'res-1',
    title: 'Guía: recicla en 5 pasos',
    type: 'Guía PDF',
    pages: '4 páginas',
    fileSize: '2.4 MB',
    description: 'Manual paso a paso ilustrado para implementar la separación de residuos en el hogar y centros educativos.',
    tags: ['Hogar', 'Colegios', 'Paso a paso'],
    imageSrc: ASSETS.infographicPreview
  },
  {
    id: 'res-2',
    title: 'Infografía: ciclo del reciclaje',
    type: 'Infografía HD',
    pages: '1 lámina',
    fileSize: '3.8 MB',
    description: 'Diagrama visual de alta resolución que ilustra la cadena de valor: recolección, clasificación, procesamiento y nuevos productos.',
    tags: ['Visual', 'Economía Circular', 'Educativo'],
    imageSrc: ASSETS.infographicPreview
  },
  {
    id: 'res-3',
    title: 'Cartel: separa y recicla',
    type: 'Cartel para imprimir',
    pages: 'Afiche A3',
    fileSize: '4.1 MB',
    description: 'Póster de señalización listo para imprimir y colgar junto a los contenedores ecológicos en tu escuela o empresa.',
    tags: ['Imprimible', 'Punto Ecológico', 'Aulas'],
    imageSrc: ASSETS.studentBins
  }
];

export const BLOG_POSTS = [
  {
    id: 'b1',
    title: '5 hábitos simples para reducir el plástico de un solo uso',
    date: '10 de Octubre, 2026',
    category: 'Sostenibilidad',
    readTime: '4 min de lectura',
    excerpt: 'Llevar tu propia bolsa de tela y termo reutilizable ahorra cientos de residuos al año.',
  },
  {
    id: 'b2',
    title: 'Cómo crear una huerta escolar o casera con compostaje',
    date: '28 de Septiembre, 2026',
    category: 'Huertas y Compost',
    readTime: '6 min de lectura',
    excerpt: 'Aprende a transformar las cáscaras de frutas en tierra fértil para cultivar plantas aromáticas y hortalizas.',
  },
  {
    id: 'b3',
    title: 'El impacto de los recicladores de oficio en Medellín y Colombia',
    date: '15 de Septiembre, 2026',
    category: 'Comunidad',
    readTime: '5 min de lectura',
    excerpt: 'Héroes invisibles que recuperan toneladas de materiales cada día promoviendo la economía circular.',
  }
];
