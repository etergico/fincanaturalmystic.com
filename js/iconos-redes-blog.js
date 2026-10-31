// PC- ENCABEZADO - ICONOS REDES SOCIALES  //
const redespc = Vue.createApp({
  data() {
    return {
      socialLinks: [
        {
          name: 'Instagram',
          url: 'https://instagram.com/fincanaturalmystic/',
          icon: 'fa fa-instagram'
        },
        {
          name: 'WhatsApp',
          url: 'https://wa.me/573027453839',
          icon: 'fa fa-whatsapp'
        }
      ]
    };
  }
});

redespc.mount('#iconos-fa-redes-pc');

//MOVIL- ENCABEZADO - ICONOS REDES SOCIALES  //
const redesmovil = Vue.createApp({
  data() {
    return {
      socialLinks: [
        {
          name: 'Instagram',
          url: 'https://instagram.com/fincanaturalmystic/',
          icon: 'fa fa-instagram'
        },
        {
          name: 'WhatsApp',
          url: 'https://wa.me/573027453839',
          icon: 'fa fa-whatsapp'
        }
      ]
    };
  }
});

redesmovil.mount('#iconos-fa-redes-movil');


//ENCABEZADO - ICONOS REDES SOCIALES - PIE DE PAGINA  //
const redespiedepagina = Vue.createApp({
  data() {
    return {
      socialLinks: [
        {
          name: 'Instagram',
          url: 'https://instagram.com/fincanaturalmystic/',
          icon: 'fa fa-instagram'
        },
        {
          name: 'WhatsApp',
          url: 'https://wa.me/573027453839',
          icon: 'fa fa-whatsapp'
        }
      ]
    };
  }
});

redespiedepagina.mount('#iconos-fa-redes-pie-de-pagina');

