# OficIA — sitio de demostración (Astro + Cloudflare Pages)

Sitio estático de OficIA, instituto de oficios con IA aplicada. Todos los datos, docentes y testimonios son ficticios.
Páginas: Inicio, Cursos (con filtros), ficha de cada curso (7), Nosotros, Novedades (6 notas), Contacto, Privacidad y 404.

## Dónde se edita cada cosa

- Textos de cursos, fechas, cupos y docentes: `src/data/cursos.ts`
- Notas de Novedades: `src/data/notas.ts`
- WhatsApp, dirección, horarios, aviso del pie y si Google puede indexar el sitio: `src/data/site.ts`
- Colores y tipografía: `src/styles/global.css` (variables al principio del archivo)
- Textos de Inicio, Nosotros y Contacto: `src/pages/`

## Probarlo en tu computadora (opcional)

Necesitás Node 20 o superior. En la carpeta del proyecto:

    npm install
    npm run dev

Se abre en http://localhost:4321.

## Publicarlo en Cloudflare Pages

1. Creá un repositorio nuevo en GitHub (por ejemplo `oficia`) y subí todo el contenido de esta carpeta, sin `node_modules` ni `dist` (el `.gitignore` ya los excluye).
2. En Cloudflare, entrá a Workers y Pages, Crear, pestaña Pages, Conectar con Git, y elegí el repositorio.
3. Configuración de compilación:
   - Framework preset: Astro
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Variable de entorno `NODE_VERSION` con valor `22`
4. Guardá y desplegá. Cloudflare te da una dirección `*.pages.dev` para ver el sitio.
5. Subdominio propio: en el proyecto de Pages, Custom domains, Set up a custom domain, escribí `oficia.valeriayashan.com.ar` y aceptá el registro DNS que propone Cloudflare (tu dominio ya está en Cloudflare).

## Formulario de inscripción

El formulario usa Web3Forms, gratuito, que envía cada consulta a tu correo.

1. Entrá a https://web3forms.com, pedí tu clave (Access Key) con tu correo y copiala.
2. En Cloudflare Pages, Settings, Variables and Secrets, agregá `PUBLIC_WEB3FORMS_KEY` con esa clave, y volvé a desplegar.
3. Probá el envío real desde el sitio publicado.

Mientras la clave no esté configurada, el formulario avisa que todavía no está conectado y deriva a WhatsApp.

## Antes de mostrarlo

- Reemplazá el número de WhatsApp de ejemplo en `src/data/site.ts`.
- Por defecto el sitio no se indexa en Google (etiqueta noindex y `public/robots.txt` bloqueando). Si querés indexar la demo, poné `indexar: true` en `src/data/site.ts` y reemplazá `public/robots.txt` por `User-agent: *` con `Allow: /` y la línea `Sitemap: https://oficia.valeriayashan.com.ar/sitemap-index.xml`.
- Reemplazá los íconos de los cursos por fotos reales o de banco libre si querés más realismo (`src/components/CursoCard.astro`).
- La política de privacidad es de demostración. Con un cliente real, adaptala a la Ley 25.326 con asesoramiento legal.
