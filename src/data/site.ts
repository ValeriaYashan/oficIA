// Configuración general del sitio. Editá estos valores y volvé a publicar.
export const SITE = {
  nombre: 'OficIA',
  lema: 'Oficios con manos y con IA',
  descripcion: 'Instituto de oficios con práctica en taller e IA aplicada al trabajo.',
  url: 'https://oficia.valeriayashan.com.ar',
  // Poné true solo cuando quieras que Google indexe la demo.
  indexar: false,
  // Número de WhatsApp en formato internacional, sin + ni espacios. REEMPLAZAR (es un número de ejemplo).
  whatsapp: '5491100000000',
  direccion: 'Av. Ejemplo 1234, San Fernando, Buenos Aires',
  horarios: 'Lunes a viernes de 9 a 19 h, sábados de 9 a 13 h',
  aviso: 'Proyecto de demostración. Datos, docentes y testimonios ficticios. Diseño y desarrollo: Valeria Yashan.',
};

export const waLink = (texto: string) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(texto)}`;

export const MENU = [
  { href: '/', label: 'Inicio' },
  { href: '/cursos', label: 'Cursos' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/novedades', label: 'Novedades' },
  { href: '/contacto', label: 'Contacto' },
];
