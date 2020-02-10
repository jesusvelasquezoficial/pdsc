// Import App Component
import Vue from 'vue';
import Axios from 'axios';
import VueAxios from 'vue-axios';
import BootstrapVue from 'bootstrap-vue';
import MaterialIcons from 'material-design-icons/iconfont/material-icons.css';
import FontAwesome from '@fortawesome/fontawesome-free/css/all.min.css';
import FastClick from 'fastclick';
// import AppStyles from './assets/sass/main.scss'
import app from './main.vue';
import messages from "./lang";
import VueSweetAlert from "vue-sweetalert";
import Nprogress from "nprogress";
import wysiwyg from "vue-wysiwyg";
import Notifications from "vue-notification";
import velocity from "velocity-animate";
import VueBreadcrumbs from "vue2-breadcrumbs";
import VueQuillEditor from "vue-quill-editor";
import { Vue2Dragula } from "vue2-dragula";
import VueVideoPlayer from "vue-video-player";
import fullscreen from "vue-fullscreen";
import Croppa from "vue-croppa";
import VueTour from 'vue-tour';
import VueI18n from "vue-i18n";
import Vuelidate from "vuelidate";
import VuePaginate from 'vue-paginate';
import VCalendar from 'v-calendar/lib/components/calendar.umd';
// import * as VueGoogleMaps from "vue2-google-maps";
// Scripts Template
import "./lib/adminifyScripts";
import "./lib/adminifycss";
// Import Vuex Storage
import { store } from "./store/store";
// import store from './assets/vuex/storage.js';
import router from "./router";
//global components
import GlobalComponents from "./globalComponents";
// navigation guards before each
router.beforeEach((to, from, next) => {
	Nprogress.start();
  	if (to.matched.some(record => record.meta.requiresAuth)) {
      // this route requires auth, check if logged in
      // if not, redirect to login page.
      if (localStorage.getItem('user') === null) {
        next({
          path: "/session/login",
          query: { redirect: to.fullPath }
        })
      } else {
        next()
      }
    } else {
      next() // make sure to always call next()!
   }
});
// navigation guard after each
router.afterEach((to, from) => {
  Nprogress.done();
  setTimeout(() => {
    const contentWrapper = document.querySelector(".base-container");
    if (contentWrapper !== null) {
      contentWrapper.scrollTop = 0;
    }
  }, 200);
});
Vue.use(BootstrapVue);
Vue.use(Axios, VueAxios);
Vue.use(VueSweetAlert);
Vue.use(wysiwyg, {});
Vue.use(Notifications, { velocity });
Vue.use(VueBreadcrumbs);
Vue.use(VueQuillEditor);
Vue.use(Vue2Dragula);
Vue.use(VuePaginate);
Vue.use(VueVideoPlayer);
Vue.use(Croppa);
Vue.use(VueTour);
Vue.use(VueI18n);
Vue.use(fullscreen);
Vue.use(Vuelidate);
Vue.use(MaterialIcons);
Vue.use(FontAwesome);
Vue.use(GlobalComponents);
Vue.use(VCalendar, {
  screens: {
    tablet: '576px',
    laptop: '992px',
    desktop: '1200px',
  }                // ...other defaults
});
// Vue.use(VueGoogleMaps, {
//   load: {
//     key: 'AIzaSyBtdO5k6CRntAMJCF-H5uZjTCoSGX95cdk'
//   }
// });
// Create VueI18n instance with options
const i18n = new VueI18n({
	locale: store.getters.selectedLocale.locale, // set locale
  messages // set locale messages
})
// Init Vue App
export default new Vue({
  // Root Element
  el: '#app',
  store,
  i18n,
	router,
  render: h => h('app'),
  components: {
    app
  },
  // mounted() {
  //   window.addEventListener('load', () => {
  //     // run after everything is in-place
  //     FastClick.attach(document.body);
  //   });
  // }
}).$mount('#app');
