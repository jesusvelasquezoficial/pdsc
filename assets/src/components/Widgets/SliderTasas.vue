<template>
<div id="slider-tasas">
    <!-- Carta -->
		<app-card v-if="loadedTasas" class="ticker-slider grid-b-space" >
      <!-- Slider -->
      <marquee-text :paused="paused" :duration="30">
        <!-- Items Pause -->
         <div class="items" @mouseover="paused = !paused" @mouseleave="paused = !paused" @click="pausar">
          <div class="ticker-item-wrap" v-for="(tasa, index) in sliderTasas" :key="index">
            <div class="d-flex align-items-center justify-content-between pl-3 mr-4">
              <div class="price-content">
                <!-- Titulo -->
                <span class="d-inline-block">
                  <router-link :to="tasa.url"><b style="color:#0081f2;">{{ tasa.nombre }}</b></router-link>
                </span>
                <!-- Precio -->
                <div class="fw-bold mt-1">
                  {{ tasa.precio }}
                </div>
              </div>
              <!-- Variacion -->
              <div>
                <span v-if="tasa.variacion != ''"
                :class="{
                  'text-up': tasa.variacion > 0,
                  'text-white': tasa.variacion == 0,
                  'text-down': tasa.variacion < 0}" 
                  class="fw-bold d-flex align-items-center">
                  <i :class="{
                    'zmdi zmdi-long-arrow-up text-up' : tasa.variacion > 0,
                    'fas fa-equals font-sm text-white' : tasa.variacion == 0,
                    'zmdi zmdi-long-arrow-down text-down' : tasa.variacion < 0
                    }" class="mr-2 font-lg"></i>{{ tasa.variacion }} %
                </span>
              </div>
            </div>
          </div>
        </div>
      </marquee-text>
		</app-card>
    <!-- Loaded -->
		<div v-else class="d-flex justify-content-center py-5 mb-5">
			<fade-loader :loading="!loadedTasas" color="DarkOrange" size="32px"></fade-loader>
		</div>
</div>
</template>
<script>
	import { mapState, mapGetters } from 'vuex';
	export default {
		data() {
			return {
        paused: false,
			};
    },
    computed: {
      ...mapGetters('datos', ['sliderTasas']),
      ...mapState('datos', ['loadedTasas']),
    },
		methods: {
      pausar(){
        this.paused  = !this.paused;  
      }
    },
	};
</script>
<style scoped>
 .items { 
   display: flex; 
   justify-content: space-around; 
   border-right: 1px solid rgba(228,231,239,0.4);
   }
</style>