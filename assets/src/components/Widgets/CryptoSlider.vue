<template>
	<div>
		<app-card v-if="loadedTasasSlider" class="ticker-slider grid-b-space" style="height:78;">
			<slick :options="slickOptions">
				<div class="ticker-item-wrap px-3" v-for="(item,index) in getData" :key="index">
					<div class="d-flex align-items-center justify-content-between">
						<div class="price-content">
							<span class="d-inline-block">{{ item.coin1 }}</span>
							<!-- <span class="d-inline-block ml-1 mr-1">/</span> -->
							<span class="d-inline-block">{{ item.coin2 }}</span>
							<div class="fw-bold mt-2">
								{{ item.price }}
							</div>
							<span>{{ item.volume }}</span>
						</div>
						<div>
							<span :class="item.color" class="fw-bold d-flex align-items-center">
								<i :class="item.icon" class="mr-2 font-lg"></i>{{ item.market_cap }}
							</span>
						</div>
					</div>
				</div>
			</slick>
		</app-card>
		<div v-else class="d-flex justify-content-center py-5 mb-5">
			<fade-loader :loading="!loadedTasasSlider" color="DarkOrange" size="32px"></fade-loader>
		</div>
	</div>
</template>

<script>
	import Slick from "vue-slick";
  import Auth from "@/assets/auth";
	import { mapState, mapGetters, mapActions } from 'vuex';
	export default {
		components: {
			Slick,
		},
		data() {
			return {
				slickOptions: {
					speed: 5000,
					autoplay: true,
					autoplaySpeed: 0,
					arrows: false,
					cssEase: 'linear',
					slidesToShow: 1,
					slidesToScroll: 1,
					variableWidth: true,
        },
				cryptoSliderData: [
					{
						"coin1": "BTC",
						"coin2": "USD",
						"price": "$ 3,884.95",
						"market_cap": "12.3%",
						"icon": "zmdi zmdi-long-arrow-up",
						"color": "text-green"
					},
					{
						"coin1": "BTC",
						"coin2": "ETH",
						"price": "Ξ 29.33",
						"market_cap": "3.3%",
						"icon": "zmdi zmdi-long-arrow-down",
						"color": "text-danger"
					},
					{
						"coin1": "BTC",
						"coin2": "EUR",
						"price": "€ 3,409.48",
						"market_cap": "14.3%",
						"icon": "zmdi zmdi-long-arrow-up",
						"color": "text-green"
					},
					{
						"coin1": "ETH",
						"coin2": "EUR",
						"price": "€ 111.61",
						"market_cap": "7.3%",
						"icon": "zmdi zmdi-long-arrow-down",
						"color": "text-danger"
					},
					{
						"coin1": "ETH",
						"coin2": "USD",
						"price": "$ 133.02",
						"market_cap": "1.43%",
						"icon": "zmdi zmdi-long-arrow-down",
						"color": "text-danger"
					},
					{
						"coin2": "GBP",
						"coin1": "LTC",
						"price": "£ 23141.85",
						"market_cap": "14.3%",
						"icon": "zmdi zmdi-long-arrow-down",
						"color": "text-green"
					},
					{
						"coin1": "EOS",
						"coin2": "USD",
						"price": "$ 1383.65",
						"market_cap": "6.3%",
						"icon": "zmdi zmdi-long-arrow-down",
						"color": "text-danger"
					},
					{
						"coin1": "BTC",
						"coin2": "GBP",
						"price": "£ 2,918.94",
						"market_cap": "13.3%",
						"icon": "zmdi zmdi-long-arrow-up",
						"color": "text-green"
					},
					{
						"coin1": "ETH",
						"coin2": "GBP",
						"price": "£ 99123.67",
						"market_cap": "21.2%",
						"icon": "zmdi zmdi-long-arrow-up",
						"color": "text-green"
					},
					{
						"coin1": "EUR",
						"coin2": "GBP",
						"price": "£ 218.94",
						"market_cap": "1.23%",
						"icon": "zmdi zmdi-long-arrow-down",
						"color": "text-danger"
					},
					{
						"coin1": "BTC",
						"coin2": "USDT",
						"price": "₮ 3,869.09",
						"market_cap": "10.3%",
						"icon": "zmdi zmdi-long-arrow-down",
						"color": "text-green"
					},
					{
						"coin1": "ETH",
						"coin2": "USDT",
						"price": "₮ 131.89",
						"market_cap": "3.43%",
						"icon": "zmdi zmdi-long-arrow-down",
						"color": "text-danger"
					}
				]
			};
		},
    computed: {
			...mapState('tasas',['loadedTasasSlider']),
			...mapGetters('tasas', ['getData'])
		},
		methods: {
			...mapActions('tasas', ['loadTasasSlider'])
		},
		created() {
			this.loadTasasSlider();
		},
	};
</script>
<style scoped>
</style>