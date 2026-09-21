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

3. Para las fotos: cada tarjeta usa un degradado de relleno. Sustitúyelo por una imagen real
   añadiendo en `styles.css`:

   ```css
   .card-media[data-img="1"] { background: url("fotos/casa-1.jpg") center/cover; }
   ```

## Cómo funciona el contacto

- Todos los botones marcados con `data-wa` abren `wa.me` con un mensaje ya escrito.
- El formulario no envía nada a ningún servidor: arma el mensaje con los datos
  (nombre, operación, tipo, zona, presupuesto y comentario) y abre WhatsApp para
  que la persona solo pulse enviar. Por eso no hace falta backend ni base de datos.

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
