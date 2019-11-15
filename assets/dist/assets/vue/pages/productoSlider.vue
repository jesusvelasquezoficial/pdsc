<template>
  <f7-swiper navigation :params="params">
    <f7-swiper-slide v-for="res in data" :key="res.id">
      <f7-link :href="url(res.id)" :animate="false" :ignore-cache="true" style="display:block" color="black">
        <f7-card-content :padding="false">
          <img :src="urlImage(res.id)" alt="" width="100%">
        </f7-card-content>
        <div class="margin">
          <h3 class="no-margin">{{res.nombre}}</h3>
          <p>{{res.descripcion.substring(0,100)}}...</p>
        </div>
      </f7-link>
    </f7-swiper-slide>
  </f7-swiper>
</template>
<script>
export default {
  props: ['data'],
  data(){
    return {
      params: {
        speed:500, 
        slidesPerView: 4,
        spaceBetween: 10,
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
      },
    }
  },
  methods: {
    url:(id)=>{
     return'/mostrar-producto/'+id+"/"
    },
    urlImage: (id)=>{
      // return 'https://cdn.framework7.io/placeholder/nature-1000x700-'+id+'.jpg'
      return 'images/'+id+'.png'
    }
  },
 
}
</script>
<style scope>
    
</style>