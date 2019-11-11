<template>
  <f7-link :href="url" :animate="false" :ignore-cache="true" style="display:block" color="black">
    <f7-card class="carta">
      <f7-card-content :padding="false">
        <!-- <img :src="urlImage" width="100%"/> -->
        <img :src="urlImage" width="100%"/>
      </f7-card-content>
      <div class="margin">
        <h3 class="no-margin">{{data.nombre}}</h3>
        <p>{{data.descripcion.substring(0,30)}}</p>
      </div>
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
      urlImage:'./images/'+this.data.id+'.png'
    }
  },
}
</script>
<style scoped>
  .card{
    float: left;
    width: 24%;
    margin: .5%;
  }
  /* Responsive columns */
  @media screen and (max-width: 600px) {
    .card {
      width: 100%;
      display: block;
      margin: 0;  
    }
  }
  @media screen and (min-width: 601px) and (max-width: 900px) {
    .card {
      width: 49%;
      display: block;
    }
  }
</style>