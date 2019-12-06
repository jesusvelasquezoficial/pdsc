import Vue from 'vue';
import app from './main.vue';
import BootstrapVue from  'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap-grid.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
export default new Vue({
  el: '#app',
  components: {
    app
  }
})