<template>
  <f7-page>
    <!-- Barra de navegacion -->
    <f7-navbar>
      <f7-nav-title>Registro Exitoso</f7-nav-title>
    </f7-navbar>
    <!-- bloque de contenido -->
    <f7-block>
      <br>
      <!-- Default back icon -->
      <f7-link href="/" icon="icon-back" :animate="false">
        <h3>{{ bienvenida }}</h3>
      </f7-link>
    </f7-block>
  </f7-page>
  <!-- <h1>{{ error }}</h1> -->
  <!-- <h1 v-for="data in json">{{ data }}</h1> -->
</template>

<script>
// OJO CON ESTO, DEBERIAS CAMBIAR EL NOMBRE
// import api from '../api'

export default {
  data () {
    return {
      bienvenida: 'Bienvenido su registro fue realizado con EXITO',

      // json: [],
      // error: ""
    }
  },
  mounted() {
    
  }
}
</script>

<style scoped>

</style>
