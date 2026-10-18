export type Nota = { slug: string; titulo: string; categoria: string; resumen: string; cuerpo: string[] };

export const CATEGORIAS_NOTAS = ['Oficios', 'Seguridad', 'Clientes y presupuestos', 'IA aplicada'];

export const NOTAS: Nota[] = [
  {
    slug: 'como-armar-un-presupuesto-claro-en-10-minutos',
    titulo: 'Cómo armar un presupuesto claro en 10 minutos',
    categoria: 'Clientes y presupuestos',
    resumen: 'Un presupuesto confuso hace perder clientes. Estas son las cuatro cosas que no pueden faltar.',
    cuerpo: [
      'Un presupuesto confuso hace perder clientes. Incluí siempre cuatro cosas: qué trabajo se hace, qué materiales entran y cuáles no, cuánto tiempo lleva y cuánto cuesta cada parte.',
      'Separá materiales de mano de obra y aclará hasta cuándo es válido el precio. Una plantilla propia, que completás en cada visita, te ahorra tiempo y te hace ver profesional.',
      'En el curso de IA para presupuestar te enseñamos a armarla y a pedirle a un asistente que redacte la propuesta a partir de tus notas de obra.',
    ],
  },
  {
    slug: 'los-cinco-elementos-de-seguridad-que-no-pueden-faltar-en-un-taller',
    titulo: 'Los cinco elementos de seguridad que no pueden faltar en un taller',
    categoria: 'Seguridad',
    resumen: 'Más allá de la lista, lo importante es el hábito de revisar antes de empezar.',
    cuerpo: [
      'Anteojos de protección, guantes adecuados a la tarea, calzado de seguridad, protección auditiva cuando hay máquinas ruidosas y un extintor revisado a mano.',
      'Más allá de la lista, lo importante es el hábito: revisar el espacio antes de empezar y no saltearse un paso por apuro. Cada curso de OficIA arranca con una clase de seguridad antes de tocar cualquier herramienta.',
    ],
  },
  {
    slug: 'que-tener-en-cuenta-antes-de-matricularte-en-un-oficio-regulado',
    titulo: 'Qué tener en cuenta antes de matricularte en un oficio regulado',
    categoria: 'Oficios',
    resumen: 'Un curso te da la formación; la habilitación tiene sus propios requisitos y trámites.',
    cuerpo: [
      'Algunos oficios, como gas o electricidad en instalaciones habilitadas, requieren matrícula o habilitación de un organismo. Un curso te da la formación, pero la habilitación tiene sus propios requisitos y trámites que cambian con el tiempo.',
      'Antes de inscribirte en cualquier formación, consultá siempre en el organismo correspondiente qué exigen hoy.',
      'Nota de demostración: no se citan requisitos puntuales para evitar información desactualizada.',
    ],
  },
  {
    slug: 'como-responder-una-consulta-de-un-cliente-sin-perder-el-trabajo',
    titulo: 'Cómo responder una consulta de un cliente sin perder el trabajo',
    categoria: 'Clientes y presupuestos',
    resumen: 'La mayoría de los clientes elige a quien responde primero y con claridad.',
    cuerpo: [
      'La mayoría de los clientes elige a quien responde primero y con claridad. Respondé dentro de las primeras horas, hacé dos o tres preguntas concretas sobre el trabajo, proponé una visita y dejá una fecha.',
      'Un mensaje corto y ordenado vale más que uno largo. Con herramientas de IA podés dejar listas respuestas modelo para las consultas más comunes y adaptarlas en segundos.',
    ],
  },
  {
    slug: 'para-que-sirve-y-para-que-no-la-ia-en-tu-oficio',
    titulo: 'Para qué sirve (y para qué no) la IA en tu oficio',
    categoria: 'IA aplicada',
    resumen: 'La IA te ayuda con todo lo que rodea al trabajo, y tiene límites que conviene conocer.',
    cuerpo: [
      'La IA no arregla una instalación ni suelda una pieza, pero sí te ayuda con todo lo que rodea al trabajo: redactar presupuestos, explicar un procedimiento a un cliente, ordenar tu agenda, preparar una lista de materiales.',
      'Y también tiene límites: no reemplaza la norma ni el criterio de un profesional matriculado, y sus respuestas técnicas hay que verificarlas siempre. En OficIA la usamos como asistente, nunca como autoridad.',
    ],
  },
  {
    slug: 'herramientas-basicas-para-empezar-en-carpinteria',
    titulo: 'Herramientas básicas para empezar en carpintería',
    categoria: 'Oficios',
    resumen: 'Con pocas herramientas manuales se hacen los primeros trabajos.',
    cuerpo: [
      'Metro y escuadra, serrucho de buena calidad, formones, martillo, lijas de varios granos y un buen par de agarraderas para sujetar piezas. Con esas herramientas se hacen los primeros trabajos.',
      'Las eléctricas llegan después, cuando ya dominás el trabajo manual. En el curso ponemos las herramientas de taller y te ayudamos a armar tu propia lista de compra por etapas, según tu presupuesto.',
    ],
  },
];
