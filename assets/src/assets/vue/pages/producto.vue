<template>
  <f7-link :href="url" :animate="false" :ignore-cache="true" color="black">
    <f7-card>
      <f7-card-header>
        <!-- <img :src="urlImage" width="100%"/> -->
        <img :src="urlImage" width="100%" height="250px"/>
      </f7-card-header>
      <f7-card-content>
        <h3 class="mt-0">{{data.nombre}}</h3>
        <div style="min-height:60px">
          <p>{{data.descripcion.substring(0,100)}}...</p>
        </div>
      </f7-card-content>
    </f7-card>
  </f7-link>
</template>
<script>
export default {
  props: ['data'],
  data(){
    return {
      url: '/mostrar-producto/'+this.data.id+"/", 
      // urlImage: 'https://cdn.framework7.io/placeholder/nature-1000x700-'+ this.data.id +'.jpg'
      urlImage:'images/'+this.data.id+'.png'
    }
  },
}
</script>
<style scoped>
  /* .card-header:after {
    content: none !important;
  } */
</style>