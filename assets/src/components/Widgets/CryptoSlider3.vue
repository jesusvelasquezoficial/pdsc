<template>
		<app-card v-if="true" class="ticker-slider grid-b-space" >
		 <infinite-slide-bar>
      <div class="items">
        <div v-for="coin in coins" :key="coin.key" class="d-flex justify-content-bettwen align-items-center">
          <div class="pt-2 mr-2">
            <img :src="'Static/img/' + coin.key + '.jpg'" width="12px">
          </div>
          <div class="">
            <div class="text-bold">{{coin.name}}</div>
            <div>
              {{coin.price}}
              <span :class="{ 'text-up': coin.change > 0, 'text-down': coin.change < 0 }">({{coin.change}}%)</span>
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

    },
		methods: {

    },
    mounted() {
     
    },
		created() {

    },
	};
</script>
<style>
 .items { display: flex; justify-content: space-around; } 
.marquee {
  
  width: 100%;
  max-width: 100%;
  height: 100%;
  margin: 0 auto;
  white-space: nowrap;
  overflow: hidden;
  /* border: 1px solid #F00; */
  /* background: GhostWhite; */
  color: #fff;
  font-size: 20px;
}

.marquee span {
  position: relative;
  display: inline-block;
  padding-left: 100%;
  animation: marquee 5s linear infinite;
  cursor: pointer;
}

.marquee span:hover {
  -moz-animation-play-state: paused;
  -webkit-animation-play-state: paused;
  animation-play-state: paused;
}


/* Make it move */

@keyframes marquee {
  0% {
    transform: translate(0, 0)
  }
  100% {
    transform: translate(-100%, 0)
  }
}
</style>