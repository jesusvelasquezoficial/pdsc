<template>
	<div id="dashboard">
		<page-title-bar></page-title-bar>
		<crypto-slider></crypto-slider>
		<b-row>
			<b-col sm="12" md='8' class="p-0">
				<indicadores-tasas></indicadores-tasas>
			</b-col>
			<b-col sm="12" md='4' class="p-0">
				<calendario></calendario>
			</b-col>
		</b-row>
		<graph-mercado-oficial></graph-mercado-oficial>
		<tablas-mercados></tablas-mercados>
	</div>
</template>
<script>
import { mapActions } from 'vuex';
	export default {
		name: "dashboard",
		data() {
			return {
				
			}
		},
		methods: {
			...mapActions('tasas', ['loadDataPetroleo','loadDataOficial','loadDataParalelo'])
		},
		created() {
			this.loadDataPetroleo();
			this.loadDataOficial();
    	this.loadDataParalelo();
		},
	};
</script>
<style>
.swiper-container {
  height: auto !important;
}
.swiper-container-android .swiper-slide,
.swiper-wrapper {
  height: auto !important;
}
.swiper-wrapper {
  height: auto !important;
}
</style>