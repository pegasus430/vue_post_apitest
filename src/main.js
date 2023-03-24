import Vue from 'vue';
import App from './App.vue';
import { router } from './router';
import store from './store';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import VeeValidate from 'vee-validate';
import Vuex from 'vuex';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import SmartTable from 'vuejs-smart-table';
import {
  faHome,
} from '@fortawesome/free-solid-svg-icons';

library.add(faHome);

Vue.config.productionTip = false;

Vue.use(VeeValidate,{
  errorBagName: 'vErrors'
});
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(Vuex);
Vue.use(SmartTable)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
