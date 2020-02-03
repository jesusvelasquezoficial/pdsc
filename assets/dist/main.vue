<template>
  <!-- App -->
  <f7-app :params="f7params">
    <f7-statusbar></f7-statusbar>
    <f7-panel color-theme='deeporange' left reveal style="background:rgba(46, 51, 68,.9);">
      <f7-view url="/menu-left/" links-view=".view-main" />
    </f7-panel>
    <f7-view color-theme='deeporange' url="/" :main="true" class="ios-edges"></f7-view>
    <f7-panel color-theme='deeporange' right cover>
      <f7-view url="/menu-diestro/" links-view=".view-main" />
    </f7-panel>
  </f7-app>
</template>
<script>
// Import Routes...
import { f7App, f7Panel, f7View, f7Statusbar } from 'framework7-vue';
import routes from './routes.js';
let theme = 'auto';
if (document.location.search.indexOf('theme=') >= 0) {
  theme = document.location.search.split('theme=')[1].split('&')[0];
}

export default {
  components: {
    f7App,
    f7Panel,
    f7View,
    f7Statusbar,
  },
  data() {
    return {
      dtd:{
        fecha: '',
        euro: '',
        dolar: ''
      },
      f7params: {
        theme,
        routes,
        id: 'io.framework7.testapp',
      }
    }
  }
}
</script>

<style>
.page-content {
  background: #eee;
}
@media (min-width: 1400px) {
  body {
    width: 1360px !important;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>