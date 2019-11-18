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
    <f7-block>
      <producto-slider :data="dataProducto"></producto-slider>
    </f7-block>
    <f7-block-title>Productos incorporados al inventario</f7-block-title>
    <f7-block>
      <b-row>
        <b-col v-for="data in dataProducto" :key="data.id" class="px-0" xs="12" sm="6" md="4" lg="3">
          <producto :data="data"></producto>
        </b-col>
      </b-row>
    </f7-block>
  </f7-page>
</template>
<script>
import Auth from '../../auth'
import Producto from './producto.vue'
import ProductoSlider from './productoSlider.vue'
export default {
  components:{
        ProductoSlider,
        Producto
    },
  data(){
    return {
      user: localStorage.getItem('user') != null ? JSON.parse(localStorage.getItem('user')) : '',
      dataProducto: []
    }
  },
  methods:{
    cargarDatosProductos: function(){
      this.axios.get(Auth.URL+'/api/productos').then(res => {
        console.log(res.data.data);
        this.dataProducto = res.data.data
      })
    }
  },
  created() {
    this.cargarDatosProductos()
  },
  mounted(){
    console.log(localStorage.getItem('user'));
    this.cargarDatosProductos()
  },
  
};
</script>
<style scoped>
 
</style>