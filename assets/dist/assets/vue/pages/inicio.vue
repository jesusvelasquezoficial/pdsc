<template>
  <f7-page>
    <!-- Menu superior -->
    <f7-navbar>
      <f7-nav-left>
        <f7-link panel-open="left" icon="fas fa-bars"></f7-link>
      </f7-nav-left>
      <f7-nav-title>Pagina de Inicio</f7-nav-title>
      <f7-nav-right>
        <small>{{user.name +' '+ user.ape}}</small>
        <f7-link icon="fas fa-user" panel-open="right"></f7-link>
      </f7-nav-right>
    </f7-navbar>
    <!-- Body -->
    <f7-block-title>Productos</f7-block-title>
    <!-- Slider de Productos -->
    <f7-block>
      <f7-swiper navigation :params="paramSlider">
        <f7-swiper-slide v-for="data in productosSlider" :key="data.id">
          <producto :data="data"></producto>
        </f7-swiper-slide>
      </f7-swiper>
    </f7-block>
    <!-- Productos -->
    <f7-block>
      <b-container fluid>
        <b-row>
          <b-col v-for="data in productos" :key="data.id" class="px-0" xs="12" sm="6" md="4" lg="3">
            <producto :data="data"></producto>
          </b-col>
        </b-row>
      </b-container>
    </f7-block>
  </f7-page>
</template>
<script>
import Auth from '../../auth'
import Producto from './producto.vue'
export default {
  components:{
    Producto
  },
  data(){
    return {
      user: localStorage.getItem('user') != null ? JSON.parse(localStorage.getItem('user')) : '',
      productos: [],
      productosSlider: [],
      paramSlider: {
          speed:500, 
          slidesPerView: 4,
          breakpoints: {
            // when window width is >= 640px
            900: {
              slidesPerView: 3,
            },
            700: {
              slidesPerView: 2,
            },
            500: {
              slidesPerView: 1,
            }
          }
        }
    }
  },
  methods:{
    cargarDatosProductos: function(){
      this.axios.get(Auth.URL+'/api/productos').then(res => {
        this.productos = res.data.data
        this.productosSlider = res.data.data
      })
    }
  },
  created(){
    console.log(localStorage.getItem('user'));
    this.cargarDatosProductos()
  },
  beforeMount() {
    this.cargarDatosProductos()
  },
};
</script>
<style>
.swiper-container{
  height: auto !important;
}
.swiper-container-android .swiper-slide, .swiper-wrapper{
  height: auto !important;
}
.swiper-wrapper{
  height: auto !important;
}
</style>