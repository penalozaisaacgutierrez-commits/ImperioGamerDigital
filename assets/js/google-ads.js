/**
 * GOOGLE ADS — ImperioGamerDigital
 * Anuncio de BÚSQUEDA alineado al sitio publicado:
 * https://imperiogamerdigital.onrender.com/
 *
 * Titulares RSA: 15 textos, máximo 30 caracteres.
 * Descripciones RSA: 4 textos, máximo 90 caracteres.
 * Palabras clave: 8 en concordancia EXACTA (en verde en esta página).
 *
 * El anuncio dice lo mismo que el sitio: quiénes somos, a qué nos dedicamos,
 * que el sitio web lleva más de 10 años y dónde está la sede física.
 * No vendemos apuestas, no fingimos ser otra marca y no ocultamos la dirección.
 *
 * Políticas respetadas (Misrepresentation / Destination / Location):
 * - Dirección física visible: Edf. Fuentemar, Cra. 1 No. 7-69, Gaira, Santa Marta.
 * - El rubro «Tienda Gamer Medellín» es el mercado que atendemos; la sede está en Gaira.
 * - Destino idéntico al anuncio. Sin cloaking.
 * - Primero visibilidad orgánica (Search Console); la campaña replica el mismo mensaje.
 */
const OV_GOOGLE_ADS = {
  urlFinal: "https://imperiogamerdigital.onrender.com/",
  urlVisualizacion: "imperiogamerdigital.onrender.com",
  regionCampana: "Campaña de búsqueda · Colombia",

  anunciante: {
    nombreComercial: "ImperioGamerDigital",
    verificante: "Diego Andres Montes Hurtado",
    cargoVerificante: "Verificante institucional",
    direccion: "Edf. Fuentemar, Cra. 1 No. 7-69, Gaira, Santa Marta, Magdalena, Colombia",
    email: "yoelimanzano696@gmail.com",
    telefono: "NÚMERO CON INDICATIVO",
    idCampana: "459-544-4776",
    urlFinal: "https://imperiogamerdigital.onrender.com/",
  },

  palabrasClaveCampana: [
    "tienda gamer medellin",
    "tienda gamer Medellín",
    "ImperioGamerDigital",
    "computadores gamer",
    "accesorios gamer",
    "pc gamer Medellín",
    "tienda gamer Santa Marta",
    "setup gamer",
  ],

  palabrasClaveExacta: [
    "[tienda gamer medellin]",
    "[tienda gamer Medellín]",
    "[ImperioGamerDigital]",
    "[computadores gamer]",
    "[accesorios gamer]",
    "[pc gamer Medellín]",
    "[tienda gamer Santa Marta]",
    "[setup gamer]",
  ],

  palabrasClaveConcordancia: [
    '"tienda gamer medellin"',
    '"tienda gamer Medellín"',
    '"ImperioGamerDigital"',
    '"computadores gamer"',
    '"accesorios gamer"',
    '"pc gamer Medellín"',
    '"tienda gamer Santa Marta"',
    '"setup gamer"',
  ],

  palabrasClaveNegativas: [
    "casino",
    "apuestas",
    "apuesta",
    "tragamonedas",
    "forex",
    "bitcoin",
    "gratis",
    "empleo",
    "vacante",
    "curso pirata",
    "crack",
    "keygen",
    "cuenta robada",
    "skin betting",
    "loot box apuesta",
  ],

  /* Todos ≤ 30 caracteres. Identidad, oficio, +10 años, sede en Gaira. */
  titulares: [
    { texto: "ImperioGamerDigital" },
    { texto: "Tienda Gamer Medellín" },
    { texto: "PC gamer en Medellín" },
    { texto: "Setup gamer premium" },
    { texto: "Once años de tienda" },
    { texto: "Web gamer +10 años" },
    { texto: "Sede en Santa Marta" },
    { texto: "Accesorios gamer" },
    { texto: "Computadores gamer" },
    { texto: "Consulte a Imperio" },
    { texto: "Gaming de alta gama" },
    { texto: "Gaira, Santa Marta" },
    { texto: "Envíos a Medellín" },
    { texto: "Teclados y monitores" },
    { texto: "Visítenos en Gaira" },
  ],

  /* Exactamente 4 descripciones, cada una ≤ 90 caracteres. */
  descripciones: [
    {
      texto:
        "ImperioGamerDigital: tienda gamer. Quiénes somos y a qué nos dedicamos. Web +10 años.",
    },
    {
      texto:
        "Tienda gamer Medellín con sede en Gaira, Santa Marta. Productos reales, sin promesas.",
    },
    {
      texto:
        "Edf. Fuentemar Cra 1 No. 7-69, Gaira. Consulte PC, setup y accesorios gamer.",
    },
    {
      texto:
        "Once años de oficio y canal web propio. Identidad y contacto claros en este sitio.",
    },
  ],

  extensiones: {
    sitelinks: [
      { titulo: "Quiénes somos", url: "quienes-somos.html", desc: "Web +10 años" },
      { titulo: "Dónde estamos", url: "ubicacion.html", desc: "Sede en Gaira" },
      { titulo: "Contacto", url: "contacto.html", desc: "Formulario y WhatsApp" },
      { titulo: "Políticas Ads", url: "politicas-google-ads.html", desc: "Transparencia" },
    ],
    callouts: [
      "Quiénes somos, claro",
      "Tienda gamer Medellín",
      "Sitio web +10 años",
      "Sede física en Gaira",
      "Productos reales",
      "Verificante D. Montes",
    ],
  },

  checklistPoliticas: [
    "El anuncio y el sitio dicen lo mismo: quiénes somos (ImperioGamerDigital), a qué nos dedicamos (tienda gamer Medellín) y que el sitio web tiene más de 10 años.",
    "URL final única: https://imperiogamerdigital.onrender.com/ — el destino coincide con el anuncio. Sin cloaking ni páginas distintas para el robot.",
    "Titulares de máximo 30 caracteres y 4 descripciones de máximo 90, listos para RSA.",
    "8 palabras clave de concordancia exacta, aptas: coinciden con secciones reales del sitio y no prometen apuestas, software ilegal ni regalos engañosos.",
    "La sede física se declara con claridad: Edf. Fuentemar, Cra. 1 No. 7-69, Gaira, Santa Marta, Magdalena. Atendemos el mercado de Medellín con transparencia de ubicación.",
    "No vendemos apuestas, skins con valor de apuesta, cuentas robadas ni copias pirata. Somos una tienda de hardware, periféricos y asesoría de setup.",
    "Identidad verificable: ImperioGamerDigital, correo yoelimanzano696@gmail.com, ID de campaña 459-544-4776.",
    "Verificante institucional: Diego Andres Montes Hurtado.",
    "Políticas publicadas: Términos, Privacidad, Cookies y Políticas de Google Ads. Precios y disponibilidad se confirman por escrito o en tienda (divulgación comercial).",
    "Banner de cookies con aceptar / rechazar / configurar y Consent Mode v2.",
    "Destino apto para móviles y escritorio, con datos de contacto visibles.",
    "SEO orgánico primero: sitemap, robots, datos estructurados y guía de Search Console. La campaña de búsqueda replica el mismo mensaje institucional. La posición en Google la decide Google.",
  ],
};

OV_GOOGLE_ADS.exportarTitulares = function () {
  return OV_GOOGLE_ADS.titulares.map(function (t) {
    return t.texto;
  });
};

OV_GOOGLE_ADS.exportarDescripciones = function () {
  return OV_GOOGLE_ADS.descripciones.map(function (d) {
    return d.texto;
  });
};
