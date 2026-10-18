export type Curso = {
  slug: string;
  nombre: string;
  oficio: string;
  resumen: string;
  duracion_semanas: number;
  carga_horaria: number;
  modalidad: 'Presencial' | 'Híbrido' | 'Online en vivo';
  dias_horarios: string;
  proxima_fecha_inicio: string; // ISO
  cupo: number;
  lugares_disponibles: number;
  dirigido_a: string;
  programa: string[];
  modulo_ia: string;
  requisitos: string;
  certificacion: string;
  docente_nombre: string;
  docente_bio: string;
  arancel_referencia: string;
};

const CERT = 'Certificado de finalización de OficIA';
const ARANCEL = 'Consultá aranceles al inscribirte';

export const OFICIOS = [
  'Electricidad',
  'Plomería y gas',
  'Soldadura',
  'Carpintería',
  'Refrigeración',
  'Construcción',
  'Gestión con IA',
];

export const CURSOS: Curso[] = [
  {
    slug: 'electricidad-domiciliaria',
    nombre: 'Electricidad domiciliaria',
    oficio: 'Electricidad',
    resumen: 'Aprendé a leer planos simples, armar tableros e instalar circuitos domiciliarios con seguridad.',
    duracion_semanas: 12,
    carga_horaria: 96,
    modalidad: 'Presencial',
    dias_horarios: 'Martes y jueves, 18 a 21 h',
    proxima_fecha_inicio: '2027-03-09',
    cupo: 20,
    lugares_disponibles: 8,
    dirigido_a: 'Personas sin experiencia que quieren trabajar en instalaciones domiciliarias, y ayudantes que quieren formalizar lo que hacen.',
    programa: [
      'Módulo 1, seguridad e higiene eléctrica y herramientas.',
      'Módulo 2, conceptos básicos de electricidad y medición.',
      'Módulo 3, circuitos de iluminación y tomacorrientes.',
      'Módulo 4, tableros, protecciones y puesta a tierra.',
      'Módulo 5, diagnóstico de fallas frecuentes.',
      'Módulo 6, práctica integradora en un circuito completo.',
    ],
    modulo_ia: 'Cómo armar un presupuesto de instalación a partir de un relevamiento, redactar una propuesta clara para el cliente y preparar un listado de materiales con apoyo de un asistente, verificando siempre los datos técnicos.',
    requisitos: 'Mayor de 16 años. No se necesita experiencia previa. Calzado de seguridad y anteojos de protección propios.',
    certificacion: CERT,
    docente_nombre: 'Ing. Roberto Pizarro',
    docente_bio: 'Electricista matriculado con 25 años en obra e instalaciones residenciales y comerciales. Dicta clases desde hace diez años.',
    arancel_referencia: ARANCEL,
  },
  {
    slug: 'plomeria-y-gas',
    nombre: 'Plomería y gas',
    oficio: 'Plomería y gas',
    resumen: 'Instalaciones de agua y nociones de gas, con práctica sobre maquetas de taller y criterios de seguridad.',
    duracion_semanas: 14,
    carga_horaria: 112,
    modalidad: 'Presencial',
    dias_horarios: 'Lunes y miércoles, 18 a 21 h',
    proxima_fecha_inicio: '2027-03-08',
    cupo: 20,
    lugares_disponibles: 12,
    dirigido_a: 'Personas que quieren iniciarse en instalaciones sanitarias y de gas, y trabajadores de mantenimiento que buscan formación ordenada.',
    programa: [
      'Módulo 1, seguridad y herramientas.',
      'Módulo 2, materiales y uniones de cañerías.',
      'Módulo 3, instalaciones de agua fría y caliente.',
      'Módulo 4, desagües y ventilaciones.',
      'Módulo 5, nociones de instalaciones de gas y criterios de seguridad.',
      'Módulo 6, detección y reparación de pérdidas.',
      'Módulo 7, práctica integradora.',
    ],
    modulo_ia: 'Cómo estimar tiempos y materiales, comunicar al cliente un diagnóstico en lenguaje simple y armar un registro fotográfico de cada trabajo.',
    requisitos: 'Mayor de 16 años. Sin experiencia previa. Aclaración: el curso no habilita por sí mismo para realizar instalaciones de gas; consultá los requisitos de matriculación vigentes.',
    certificacion: CERT,
    docente_nombre: 'Marcela Ibáñez',
    docente_bio: 'Plomera e instaladora con 18 años de experiencia en obras residenciales y mantenimiento de edificios.',
    arancel_referencia: ARANCEL,
  },
  {
    slug: 'soldadura',
    nombre: 'Soldadura',
    oficio: 'Soldadura',
    resumen: 'Soldadura eléctrica con electrodo revestido, con práctica en chapa y perfiles desde el primer día.',
    duracion_semanas: 12,
    carga_horaria: 96,
    modalidad: 'Presencial',
    dias_horarios: 'Martes y jueves, 14 a 17 h',
    proxima_fecha_inicio: '2027-03-16',
    cupo: 20,
    lugares_disponibles: 5,
    dirigido_a: 'Personas que buscan una salida laboral en herrería, metalmecánica o mantenimiento, y emprendedores que quieren fabricar sus propias piezas.',
    programa: [
      'Módulo 1, seguridad y protección personal.',
      'Módulo 2, equipos, electrodos y regulación.',
      'Módulo 3, cordones en posición plana.',
      'Módulo 4, uniones a tope y en ángulo.',
      'Módulo 5, soldadura en otras posiciones.',
      'Módulo 6, lectura de planos simples y trabajos integradores.',
    ],
    modulo_ia: 'Cómo cotizar un trabajo de herrería considerando material, horas y desperdicio, y cómo presentar tus trabajos en redes con fotos y descripciones claras.',
    requisitos: 'Mayor de 18 años. Sin experiencia previa. Ropa de algodón o cuero y calzado de seguridad.',
    certificacion: CERT,
    docente_nombre: 'Hugo Benítez',
    docente_bio: 'Soldador calificado con experiencia en talleres de metalmecánica y docencia técnica.',
    arancel_referencia: ARANCEL,
  },
  {
    slug: 'carpinteria',
    nombre: 'Carpintería',
    oficio: 'Carpintería',
    resumen: 'De la lectura de un plano al mueble terminado: cortes, uniones, ensambles y acabados.',
    duracion_semanas: 12,
    carga_horaria: 84,
    modalidad: 'Presencial',
    dias_horarios: 'Sábados, 9 a 16 h',
    proxima_fecha_inicio: '2027-03-13',
    cupo: 20,
    lugares_disponibles: 4,
    dirigido_a: 'Aficionados que quieren profesionalizarse, y personas que buscan emprender con muebles a medida.',
    programa: [
      'Módulo 1, seguridad y herramientas manuales.',
      'Módulo 2, maderas y tableros.',
      'Módulo 3, mediciones, cortes y uniones.',
      'Módulo 4, ensambles.',
      'Módulo 5, lijado y acabados.',
      'Módulo 6, proyecto final: un mueble completo.',
    ],
    modulo_ia: 'Cómo calcular costos de un mueble, redactar una propuesta con fotos de referencia y contestar consultas de clientes con respuestas modelo.',
    requisitos: 'Mayor de 16 años. Sin experiencia previa.',
    certificacion: CERT,
    docente_nombre: 'Claudia Ferreyra',
    docente_bio: 'Carpintera y diseñadora de muebles con taller propio y trabajos a medida para obras residenciales.',
    arancel_referencia: ARANCEL,
  },
  {
    slug: 'refrigeracion-y-aire-acondicionado',
    nombre: 'Refrigeración y aire acondicionado',
    oficio: 'Refrigeración',
    resumen: 'Funcionamiento, instalación y mantenimiento de equipos de aire acondicionado y refrigeración doméstica.',
    duracion_semanas: 14,
    carga_horaria: 112,
    modalidad: 'Presencial',
    dias_horarios: 'Lunes y miércoles, 14 a 17 h',
    proxima_fecha_inicio: '2027-03-15',
    cupo: 20,
    lugares_disponibles: 9,
    dirigido_a: 'Personas que quieren trabajar en instalación y service de equipos, y técnicos que buscan actualizarse.',
    programa: [
      'Módulo 1, seguridad y manejo de gases refrigerantes.',
      'Módulo 2, el ciclo de refrigeración.',
      'Módulo 3, instalación de equipos split.',
      'Módulo 4, mantenimiento preventivo.',
      'Módulo 5, diagnóstico de fallas.',
      'Módulo 6, práctica integradora.',
    ],
    modulo_ia: 'Cómo armar un plan de mantenimiento para clientes, generar recordatorios y explicar al usuario el trabajo realizado de forma clara.',
    requisitos: 'Mayor de 18 años. Nociones básicas de electricidad recomendables, no excluyentes. Consultá la normativa vigente sobre manejo de refrigerantes.',
    certificacion: CERT,
    docente_nombre: 'Néstor Domínguez',
    docente_bio: 'Técnico en refrigeración con más de 20 años de experiencia en instalación y service.',
    arancel_referencia: ARANCEL,
  },
  {
    slug: 'albanileria-y-construccion-en-seco',
    nombre: 'Albañilería y construcción en seco',
    oficio: 'Construcción',
    resumen: 'Tareas de obra húmeda y en seco: mampostería, revoques, terminaciones y colocación de placas.',
    duracion_semanas: 14,
    carga_horaria: 112,
    modalidad: 'Presencial',
    dias_horarios: 'Martes y jueves, 18 a 21 h',
    proxima_fecha_inicio: '2027-03-09',
    cupo: 20,
    lugares_disponibles: 11,
    dirigido_a: 'Ayudantes de obra que quieren subir de categoría y personas que buscan emprender en remodelaciones.',
    programa: [
      'Módulo 1, seguridad en obra.',
      'Módulo 2, materiales y mezclas.',
      'Módulo 3, mampostería y replanteo.',
      'Módulo 4, revoques y terminaciones.',
      'Módulo 5, construcción en seco con placas.',
      'Módulo 6, lectura de planos y cómputo de materiales.',
      'Módulo 7, práctica integradora.',
    ],
    modulo_ia: 'Cómo hacer un cómputo y presupuesto de remodelación, organizar un cronograma simple de obra y comunicar avances al cliente.',
    requisitos: 'Mayor de 18 años. Calzado de seguridad y casco propios.',
    certificacion: CERT,
    docente_nombre: 'Alejandro Vera',
    docente_bio: 'Maestro mayor de obras con más de 20 años dirigiendo remodelaciones y obras chicas.',
    arancel_referencia: ARANCEL,
  },
  {
    slug: 'ia-para-presupuestar-y-conseguir-clientes',
    nombre: 'IA para presupuestar y conseguir clientes',
    oficio: 'Gestión con IA',
    resumen: 'Un curso corto y práctico para cualquier oficio: presupuestos claros, comunicación con clientes y organización del trabajo con herramientas de IA.',
    duracion_semanas: 4,
    carga_horaria: 16,
    modalidad: 'Online en vivo',
    dias_horarios: 'Miércoles, 19 a 21 h',
    proxima_fecha_inicio: '2027-03-17',
    cupo: 20,
    lugares_disponibles: 7,
    dirigido_a: 'Oficiales y emprendedores de cualquier rubro que quieren ordenar su forma de cotizar, responder y organizar su agenda.',
    programa: [
      'Clase 1, qué puede y qué no puede hacer la IA en un oficio, y cómo escribirle instrucciones claras.',
      'Clase 2, armar una plantilla de presupuesto y redactar propuestas.',
      'Clase 3, responder consultas y hacer seguimiento de clientes.',
      'Clase 4, organizar tu agenda, tus materiales y tu presencia en redes; cierre con un presupuesto propio completo.',
    ],
    modulo_ia: 'Es el curso entero. Todo el trabajo se hace con casos de tu propio oficio.',
    requisitos: 'Computadora o celular con conexión a internet. No se necesitan conocimientos previos.',
    certificacion: CERT,
    docente_nombre: 'Valeria Yashan',
    docente_bio: 'Consultora en gestión de proyectos, PMP, docente universitaria y autora de libros sobre gestión de proyectos e IA.',
    arancel_referencia: ARANCEL,
  },
];

export const FAQ_CURSOS = [
  { q: '¿Qué pasa si falto a una clase?', a: 'Podés recuperar la práctica en un horario alternativo, sujeto a disponibilidad.' },
  { q: '¿Entregan material?', a: 'Sí, material de estudio digital.' },
  { q: '¿Hay descuentos?', a: 'Consultá por planes de pago y descuentos por inscripción anticipada.' },
];

export const fechaLarga = (iso: string) =>
  new Date(iso + 'T12:00:00').toLocaleDateString('es-AR', { day: 'numeric', month: 'long', year: 'numeric' });
export const fechaCorta = (iso: string) =>
  new Date(iso + 'T12:00:00').toLocaleDateString('es-AR', { day: 'numeric', month: 'short', year: 'numeric' });
