// ARTICULOS DE BLOG ENERO 2025 //

const plantillaarticulos = Vue.createApp({
  data() {
    return {
      articles: [
        {
          image: 'blog/img/Del-jardin-a-la-tela-Descubriendo-el-magico-mundo-del-Tatakizome.webp',
          title: 'Tela con flores del jardín',
          description: 'Del jardín a la tela: Descubriendo el mágico mundo del Tatakizome',
          url: 'blog/Del-jardin-a-la-tela-descubriendo-el-magico-mundo-del-Tatakizome'
        },
        {
          image: 'blog/img/Experiencias-escondidas-y-paraisos-rurales-en-santa-marta-un-viaje-al-corazon-de-la-sierra-nevada.webp',
          title: 'Paisaje con objetos',
          description: '4 Experiencias Escondidas y Paraísos Rurales en Santa Marta: Un Viaje al Corazón de la Sierra Nevada',
          url: 'blog/Experiencias-escondidas-y-paraisos-rurales-en-santa-marta-un-viaje-al-corazon-de-la-sierra-nevada'
        },
        {
          image: 'blog/img/Sembrar-bienestar-como-la-jardineria-cultiva-nuestra-salud-mental.webp',
          title: 'Mano regando plantas',
          description: 'Sembrar bienestar: Cómo la jardinería cultiva nuestra salud mental',
          url: 'blog/Sembrar-bienestar-como-la-jardineria-cultiva-nuestra-salud-mental'
        },
        {
          image: 'blog/img/Tu-botiquin-Verde-7-plantas-medicinales-para-cultivar-en-la-costa-caribe.webp',
          title: 'Fotografía de Plantas medicinales',
          description: 'Tu Botiquín Verde: 7 Plantas Medicinales para Cultivar en la Costa Caribe',
          url: 'blog/Tu-botiquin-verde-7-plantas-medicinales-para-cultivar-en-la-costa-caribe'
        },
      ]
    };
  },
  methods: {
    readMore(url) {
      window.location.href = url;
    }
  }
});

plantillaarticulos.mount('#plantilla-articulos');