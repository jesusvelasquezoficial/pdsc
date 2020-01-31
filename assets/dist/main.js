// Import Vue
import Vue from 'vue';

// Import Axios (Json)
import Axios from 'axios';
import VueAxios from 'vue-axios';

// Import Framework7
import Framework7 from 'framework7/framework7.esm.bundle';

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js';

// Import F7 Style
import Framework7CSS from 'framework7/css/framework7.bundle.min.css';

// Import F7 iOS Icons
import Framework7Icons from 'framework7-icons/css/framework7-icons.css';

// Import Material Icons
import MaterialIcons from 'material-design-icons/iconfont/material-icons.css';

// Import Fontawesome Theme Styles
import FontAwesome from '@fortawesome/fontawesome-free/css/all.min.css';

// Import fastClick
import FastClick from 'fastclick';

// Import App Custom Styles
// import AppStyles from './assets/sass/main.scss'

// Import App Component
import app from './main.vue';
import VueSweetAlert from "vue-sweetalert";
import Nprogress from "nprogress";
import wysiwyg from "vue-wysiwyg";
import Notifications from "vue-notification";
import velocity from "velocity-animate";
import VueBreadcrumbs from "vue2-breadcrumbs";
import VueQuillEditor from "vue-quill-editor";
import { Vue2Dragula } from "vue2-dragula";
// import * as VueGoogleMaps from "vue2-google-maps";
import VueVideoPlayer from "vue-video-player";
import fullscreen from "vue-fullscreen";
import Croppa from "vue-croppa";
import VueTour from 'vue-tour';
import VueI18n from "vue-i18n";
import Vuelidate from "vuelidate";
import messages from "./lang";
import VCalendar from 'v-calendar/lib/components/calendar.umd';
import VuePaginate from 'vue-paginate';
import "./lib/adminifyScripts";
import "./lib/adminifycss";

//global components
import GlobalComponents from "./globalComponents";

// Import Vuex Storage
import store from './assets/vuex/storage.js';

import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap-grid.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// Different F7-Vue plugin initialization with f7 v3.0
Vue.use(BootstrapVue);
Framework7.use(Framework7Vue);
Vue.use(VueAxios, Axios);
Vue.use(VueSweetAlert);
Vue.use(BootstrapVue);
Vue.use(wysiwyg, {});
Vue.use(Notifications, { velocity });
Vue.use(VueBreadcrumbs);
Vue.use(VueQuillEditor);
Vue.use(Vue2Dragula);
Vue.use(VueVideoPlayer);
Vue.use(Croppa);
Vue.use(VueTour);
Vue.use(VueI18n);
Vue.use(fullscreen);
Vue.use(Vuelidate);
Vue.use(VCalendar, {
  screens: {
    tablet: '576px',
    laptop: '992px',
    desktop: '1200px',
  }                // ...other defaults
});
Vue.use(VuePaginate);

// Vue.use(VueGoogleMaps, {
//   load: {
//     key: 'AIzaSyBtdO5k6CRntAMJCF-H5uZjTCoSGX95cdk'
//   }
// });
Vue.use(GlobalComponents);

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'es-VE', // set locale
  messages // set locale messages
})

// Init Vue App
export default new Vue({
  // Root Element
  el: '#app',
  store,
  i18n,
  render: c => c('app'),
  components: {
    app
  },
  mounted() {
    window.addEventListener('load', () => {
      // run after everything is in-place
      FastClick.attach(document.body);
    });
  }
});
