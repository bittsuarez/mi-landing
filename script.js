/* =========================================================
   CONFIGURACIÓN — edita solo estas líneas
   ========================================================= */

// Número de WhatsApp en formato internacional, SOLO dígitos.
// Incluye código de país y NO uses "+", espacios ni guiones.
// Ejemplos: México "5215512345678" · España "34612345678" · Argentina "5491123456789"
const WHATSAPP_NUMERO = "5215512345678";

// Nombre del negocio (se usa en el mensaje del formulario)
const NEGOCIO = "Altura Inmobiliaria";

/* =========================================================
   A partir de aquí no necesitas cambiar nada
   ========================================================= */

const enlaceWhatsApp = (texto) =>
  `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(texto)}`;

// 1. Todos los elementos con data-wa apuntan a WhatsApp
document.querySelectorAll("[data-wa]").forEach((el) => {
  el.setAttribute("href", enlaceWhatsApp(el.dataset.waText || "Hola, quiero información."));
  el.setAttribute("target", "_blank");
  el.setAttribute("rel", "noopener");
});

// 2. Año actual en el pie de página
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

// 3. Formulario → mensaje de WhatsApp prellenado
const form = document.getElementById("lead-form");
const error = document.getElementById("form-error");

form?.addEventListener("submit", (e) => {
  e.preventDefault();

  const datos = Object.fromEntries(new FormData(form).entries());
  const nombre = datos.nombre.trim();
  const campoNombre = form.elements.nombre;

  if (!nombre) {
    error.textContent = "Escribe tu nombre para poder saludarte.";
    error.hidden = false;
    campoNombre.setAttribute("aria-invalid", "true");
    campoNombre.focus();
    return;
  }

  error.hidden = true;
  campoNombre.removeAttribute("aria-invalid");

  const lineas = [
    `Hola ${NEGOCIO}, soy ${nombre}.`,
    "",
    `• Operación: ${datos.operacion}`,
    `• Tipo: ${datos.tipo}`,
  ];

  if (datos.zona.trim()) lineas.push(`• Zona: ${datos.zona.trim()}`);
  if (datos.presupuesto.trim()) lineas.push(`• Presupuesto: ${datos.presupuesto.trim()}`);
  if (datos.mensaje.trim()) lineas.push("", datos.mensaje.trim());

  window.open(enlaceWhatsApp(lineas.join("\n")), "_blank", "noopener");
});
