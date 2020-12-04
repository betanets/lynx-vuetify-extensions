import Vue from 'vue';
import Dev from './serve.vue';
import vuetify from './plugins/vuetify' // path to vuetify export

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: (h) => h(Dev),
}).$mount('#app');
