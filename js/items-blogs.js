// TALLERES DISPONIBLES //
const { reactive, computed } = Vue;

const talleres = Vue.createApp({
  setup() {
    const state = reactive({
      searchString: "",
      articles: [
        {
          title: "TALLERES DE TEJIDOS EN CROCHET",
          url: "/taller-tejido-en-crochet",
          image: "/recursos/galeria/portada-otros-talleres/taller-de-crochet-para-principiantes.webp",
        },
        {
          title: "TALLERES DE TINTES NATURALES",
          url: "/taller-de-tatakizome",
          image: "/recursos/galeria/portada-otros-talleres/taller-de-martillar-flores.webp",
        },
        {
          title: "TALLER DE GERMINAR, SEMBRAR Y COSECHAR",
          url: "/taller-germinar-sembrar-cosechar",
          image: "/recursos/galeria/portada-otros-talleres/germinar-sembrar-cosechar.webp",
        },
        {
          title: "TOUR DE PERMACULTURA",
          url: "/tour-de-permacultura-sierra-nevada-santa-marta-tayrona",
          image: "/recursos/galeria/portada-otros-talleres/permacultura.webp",
        },
      ],
    });

    const filteredArticles = computed(() => {
      if (!state.searchString) {
        return state.articles;
      }

      const searchString = state.searchString.trim().toLowerCase();
      return state.articles.filter((item) =>
        item.title.toLowerCase().includes(searchString)
      );
    });

    return {
      state,
      filteredArticles,
    };
  },
});

talleres.mount("#talleresdisponibles");



// lOGO -ENCABEZADO //
const logo = Vue.createApp({
  setup() {
    const state = reactive({
      searchString: "",
      articles: [
        {
          title: "Finca Natural Mystic",
          url: "",
          image: "../recursos/natural-mystic.webp",
        },
      ],
    });

    const filteredArticles = computed(() => {
      if (!state.searchString) {
        return state.articles;
      }

      const searchString = state.searchString.trim().toLowerCase();
      return state.articles.filter((item) =>
        item.title.toLowerCase().includes(searchString)
      );
    });

    return {
      state,
      filteredArticles,
    };
  },
});

logo.mount("#logo");

// ENCABEZADO - ITEMS MENU //
const items = Vue.createApp({
  setup() {
    const state = reactive({
      searchString: "",
      articles: [
        {
          title: "Talleres",
          url: "/talleres",
        },
        {
          title: "Alojamientos",
          url: "/alojamientos",
        },
        {
          title: "Tours y Lugares Cercanos",
          url: "/tours-sierra-nevada-santa-marta",
        },
        {
          title: "Blog",
          url: "/blog",
        },
        {
          title: "Nosotros",
          url: "/nosotros",
        },
      ],
    });

    const filteredArticles = computed(() => {
      if (!state.searchString) {
        return state.articles;
      }

      const searchString = state.searchString.trim().toLowerCase();
      return state.articles.filter((item) =>
        item.title.toLowerCase().includes(searchString)
      );
    });

    return {
      state,
      filteredArticles,
    };
  },
});

items.mount("#menu-blog");

// ENCABEZADO - BOTON DE RESERVA - PC //
const botondereservapc = Vue.createApp({
  setup() {
    const state = reactive({
      searchString: "",
      articles: [
        {
          title: "RESERVAR AHORA",
          url: "https://wa.me/573027453839",
        },
      ],
    });

    const filteredArticles = computed(() => {
      if (!state.searchString) {
        return state.articles;
      }

      const searchString = state.searchString.trim().toLowerCase();
      return state.articles.filter((item) =>
        item.title.toLowerCase().includes(searchString)
      );
    });

    return {
      state,
      filteredArticles,
    };
  },
});
botondereservapc.mount("#boton-de-reserva-pc");

// ENCABEZADO - BOTON DE RESERVA - MOVIL  //
const botondereservamovil = Vue.createApp({
  setup() {
    const state = reactive({
      searchString: "",
      articles: [
        {
          title: "RESERVAR AHORA",
          url: "https://wa.me/573027453839",
        },
      ],
    });

    const filteredArticles = computed(() => {
      if (!state.searchString) {
        return state.articles;
      }

      const searchString = state.searchString.trim().toLowerCase();
      return state.articles.filter((item) =>
        item.title.toLowerCase().includes(searchString)
      );
    });

    return {
      state,
      filteredArticles,
    };
  },
});
botondereservamovil.mount("#boton-de-reserva-movil");

// TEXTO DE UBICACION DE PIE DE PAGINA //
const direccionUbicacion = Vue.createApp({
  setup() {
    const state = reactive({
      location: {
        address: "Sierra Nevada de Santa Marta\nKm 32 Vereda San Martin, Troncal del Caribe, Santa Marta, Magdalena, Colombia"
      }
    });

    return {
      state
    };
  }
});

direccionUbicacion.mount("#direccion-ubicacion");

// NUMERO DE CONTACTO PIE DE PAGINA //
const numerodecontacto = Vue.createApp({
  setup() {
    const state = reactive({
      searchString: "",
      articles: [
        {
          title: "Contacto Directo para Reservas : +57 302 7453839",
          url: "tel:+573027453839",
        },
      ],
    });

    const filteredArticles = computed(() => {
      if (!state.searchString) {
        return state.articles;
      }

      const searchString = state.searchString.trim().toLowerCase();
      return state.articles.filter((item) =>
        item.title.toLowerCase().includes(searchString)
      );
    });

    return {
      state,
      filteredArticles,
    };
  },
});
numerodecontacto.mount("#numero-de-contacto");

//LOGO PIE DE PAGINA//
const logopiedepagina = Vue.createApp({
  setup() {
    const state = reactive({
      searchString: "",
      articles: [
        {
          url: "https://fincanaturalmystic.com",
          image: "/recursos/finca-natural-mystic.webp",
        },
      ],
    });

    const filteredArticles = computed(() => {
      if (!state.searchString) {
        return state.articles;
      }

      const searchString = state.searchString.trim().toLowerCase();
      return state.articles.filter((item) =>
        item.title.toLowerCase().includes(searchString)
      );
    });

    return {
      state,
      filteredArticles,
    };
  },
});
logopiedepagina.mount("#logo-pie-de-pagina");

// TEXTO DE NEWSLLETERS ENCABEZADO //
const newsletterApp = Vue.createApp({
  setup() {
    const state = reactive({
      title: "NEWSLETTER",
      description: "Suscribete a nuestro boletín informativo para que estés al tanto de\neventos, talleres y promociones que estaremos realizando en nuestro\nespacio de Natural Mystic"
    });

    return {
      state
    };
  }
});

newsletterApp.mount("#newsletter-section");

//PIE DE PAGINA - ITEMS MENU  //
const itemspiedepagina = Vue.createApp({
  setup() {
    const state = reactive({
      searchString: "",
      articles: [
        {
          title: "Home",
          url: "https://fincanaturalmystic.com",
        },
        {
          title: "Talleres",
          url: "/talleres",
        },
        {
          title: "Alojamientos",
          url: "/alojamientos",
        },
        {
          title: "Tours y Lugares Cercanos",
          url: "/tours-sierra-nevada-santa-marta",
        },
        {
          title: "Blog",
          url: "/blog",
        },
        {
          title: "Nosotros",
          url: "/nosotros",
        },
      ],
    });

    const filteredArticles = computed(() => {
      if (!state.searchString) {
        return state.articles;
      }

      const searchString = state.searchString.trim().toLowerCase();
      return state.articles.filter((item) =>
        item.title.toLowerCase().includes(searchString)
      );
    });

    return {
      state,
      filteredArticles,
    };
  },
});

itemspiedepagina.mount("#menu-blog-pie-de-pagina");

// PIE DE PAGINA - BOTON DE RESERVA //
const botondereservapiedepagina = Vue.createApp({
  setup() {
    const state = reactive({
      searchString: "",
      articles: [
        {
          title: "RESERVAR",
          url: "https://wa.me/573027453839",
        },
      ],
    });

    const filteredArticles = computed(() => {
      if (!state.searchString) {
        return state.articles;
      }

      const searchString = state.searchString.trim().toLowerCase();
      return state.articles.filter((item) =>
        item.title.toLowerCase().includes(searchString)
      );
    });

    return {
      state,
      filteredArticles,
    };
  },
});

botondereservapiedepagina.mount("#boton-reservar-blog-pie-de-pagina");

// REGISTRO NACIONAL DE TURISMO //
const registronacionaldeturismo = Vue.createApp({
  setup() {
    const state = reactive({
      searchString: "",
      articles: [
        {
          title: "RNT No. 168119 ",
        },
      ],
    });

    const filteredArticles = computed(() => {
      if (!state.searchString) {
        return state.articles;
      }

      const searchString = state.searchString.trim().toLowerCase();
      return state.articles.filter((item) =>
        item.title.toLowerCase().includes(searchString)
      );
    });

    return {
      state,
      filteredArticles,
    };
  },
});
registronacionaldeturismo.mount("#numeroRNT");

// TEXTO DE COPYROGHT 2025//
const copyrightApp = Vue.createApp({
  setup() {
    const state = reactive({
      text: "(C) copyright 2025 FINCA NATURAL MYSTIC."
    });

    return {
      state
    };
  }
});

copyrightApp.mount("#copyright-text");

// LINK DE DISEÑADOR DE LA WEB //
const disenadorWeb = Vue.createApp({
  setup() {
    const state = reactive({
      text: "Diseñado por",
      articles: [
        {
          title: "ADC MAKER",
          url: "https://www.instagram.com/adcmaker/"
        }
      ]
    });

    const filteredArticles = computed(() => {
      return state.articles;
    });

    return {
      state,
      filteredArticles
    };
  }
});

disenadorWeb.mount("#diseñadorweb");


// BOTON FLOTANTE WHATSAPP //
const botonflotante = Vue.createApp({
  setup() {
    const state = reactive({
      searchString: "",
      articles: [
        {
          title: "WhatsApp Finca Natural Mystic",
          url: "https://wa.me/573027453839",
        },
      ],
    });

    const filteredArticles = computed(() => {
      if (!state.searchString) {
        return state.articles;
      }

      const searchString = state.searchString.trim().toLowerCase();
      return state.articles.filter((item) =>
        item.title.toLowerCase().includes(searchString)
      );
    });

    return {
      state,
      filteredArticles,
    };
  },
});
botonflotante.mount("#botonflotantewhatsapp");
