<template>
		<app-card v-if="true" class="ticker-slider grid-b-space" >
      <infinite-slide-bar :paused="true">
        <div class="items">
          <div class="ticker-item-wrap" v-for="(item,index) in getData" :key="index">
            <div class="d-flex align-items-center justify-content-between pl-3 mr-4">
              <div class="price-content">
                <span class="d-inline-block">
                  <router-link :to="item.url"><b style="color:#0081f2;">{{ item.coin1 }}</b></router-link>
                </span>
                <span class="d-inline-block">{{ item.coin2 }}</span>
                <div class="fw-bold mt-1">
                  {{ item.price }}
                </div>
                <span>{{ item.volume }}</span>
              </div>
              <div>
                <span :class="item.color" class="fw-bold d-flex align-items-center">
                  <i :class="[item.icon, item.color]" class="mr-2 font-lg"></i>{{ item.market_cap }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </infinite-slide-bar>
		</app-card>
		<div v-else class="d-flex justify-content-center py-5 mb-5">
			<fade-loader :loading="!true" color="DarkOrange" size="32px"></fade-loader>
		</div>
</template>
<script>
	import { mapState, mapGetters, mapActions } from 'vuex';
	export default {
		components: {
			
		},
		data() {
			return {
        pausa: false,
        coins:[
          {
            key: 1,
            name: "Nombre",
            price: '$ 1.120,12',
            change: 1.53
          },
          {
            key: 2,
            name: "Nombre",
            price: '$ 1.120,12',
            change: 1.53
          },
          {
            key: 3,
            name: "Nombre",
            price: '$ 1.120,12',
            change: 1.53
          },
        ]
			};
		},
    computed: {
      ...mapGetters('tasas', ['getData']),
    },
		methods: {
      ...mapActions('tasas', ['loadTasasSlider']),
      pausar(){
        this.pausa  = !this.pausa;  
      }
    },
    mounted() {
      this.loadTasasSlider();
    },
		created() {

    },
	};
</script>
<style>
 .items { 
   display: flex; 
   justify-content: space-around; 
   border-left: 2px solid rgba(228,231,239,0.4);
   }
</style>