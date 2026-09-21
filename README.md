# Landing inmobiliaria

Landing page minimalista de una página para recibir solicitudes por **WhatsApp**.
HTML, CSS y JavaScript puros: sin dependencias, sin build, sin servidor.

## Puesta en marcha (2 minutos)

1. Abre `script.js` y cambia el número de WhatsApp:

   ```js
   const WHATSAPP_NUMERO = "5215512345678"; // código de país + número, solo dígitos
   const NEGOCIO = "Altura Inmobiliaria";
   ```

   Formato internacional, **sin** `+`, espacios ni guiones.
   Ejemplos: México `5215512345678` · España `34612345678` · Argentina `5491123456789`.

2. En `index.html` reemplaza los textos de ejemplo:
   - nombre del negocio (`Altura Inmobiliaria`) y el `<title>` / `<meta name="description">`
   - las 3 propiedades destacadas (título, metros, precio y el `data-wa-text` de cada tarjeta)
   - dirección, horario y correo de la sección de contacto

3. Para las fotos: la carpeta `fotos/` trae ilustraciones vectoriales (`.svg`) como
   imágenes de arranque. Para poner fotos reales basta con cambiar el `src` en
   `index.html`, sin tocar el CSS:

   ```html
   <img class="card-img" src="fotos/casa-1.jpg" alt="Describe la propiedad">
   ```

   Las tarjetas recortan a 4:3 con `object-fit: cover`, así que cualquier proporción
   encaja sin deformarse. Conviene subir las fotos a ~1200 px de ancho para que pesen poco,
   y escribir un `alt` que describa la propiedad (ayuda al buscador y a los lectores de pantalla).

## Cómo funciona el contacto

- Todos los botones marcados con `data-wa` abren `wa.me` con un mensaje ya escrito.
- El formulario no envía nada a ningún servidor: arma el mensaje con los datos
  (nombre, operación, tipo, zona, presupuesto y comentario) y abre WhatsApp para
  que la persona solo pulse enviar. Por eso no hace falta backend ni base de datos.

## Imágenes

| Archivo                          | Dónde se usa                                  |
| -------------------------------- | --------------------------------------------- |
| `fotos/hero-casa-moderna.svg`    | Imagen grande junto al titular                |
| `fotos/casa-los-robles.svg`      | Tarjeta 1                                     |
| `fotos/departamento-centro.svg`  | Tarjeta 2                                     |
| `fotos/terreno-vista-norte.svg`  | Tarjeta 3                                     |
| `fotos/og-portada.png`           | Vista previa al compartir el enlace           |

Los `.svg` son ilustraciones vectoriales: pesan unos 4 KB cada una, se ven nítidas en
cualquier pantalla y no necesitan versiones @2x. Están pensadas para sustituirse por
fotos reales cuando las tengas.

`og-portada.png` (1200×630) es la imagen que se ve cuando alguien pega el enlace en
WhatsApp, Facebook o LinkedIn. Su dirección está fija en el `<meta property="og:image">`
de `index.html`, apuntando a GitHub Pages: si publicas en tu propio dominio, cambia esa
URL o la vista previa seguirá leyendo la imagen desde Pages. Tiene que ser una URL
absoluta y un formato de mapa de bits — los `.svg` no se muestran en las vistas previas.

## Publicar

Al ser estático, sirve cualquier hosting:

- **GitHub Pages**: Settings → Pages → Branch `main` (carpeta `/root`).
- **Netlify / Vercel / Cloudflare Pages**: arrastra la carpeta, sin comandos de build.

Para probarlo en local basta con abrir `index.html` en el navegador, o:

```bash
python3 -m http.server 8000
```

## Archivos

| Archivo      | Contenido                                      |
| ------------ | ---------------------------------------------- |
| `index.html` | Estructura y textos                            |
| `styles.css` | Estilos, variables de color y modo oscuro      |
| `script.js`  | Configuración del número y lógica del formulario |
| `fotos/`     | Imágenes del hero, de las tarjetas y la portada para compartir |

## Publicación automática

El workflow `.github/workflows/pages.yml` activa GitHub Pages y publica el sitio
en cada push a la rama por defecto. La web queda en:

<https://bittsuarez.github.io/mi-landing/>

## Publicar también en Vercel

El repo ya trae `vercel.json` y no necesita compilación. En
<https://vercel.com/new>: *Import Git Repository* → `bittsuarez/mi-landing`
→ *Deploy*. Framework Preset: **Other**, sin *Build Command* y con *Output
Directory* en la raíz (Vercel lo detecta solo).

La rama de producción es la rama por defecto del repo
(`claude/vibrant-mayer-c59i6i`). Cada push la vuelve a desplegar.
