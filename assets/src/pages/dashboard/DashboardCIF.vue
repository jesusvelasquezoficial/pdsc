<template>
	<div id="dashboard">
		<!-- migas de pan -->
		<page-title-bar></page-title-bar>
		<!-- slider -->
		<slider-tasas></slider-tasas>
		<b-row>
			<b-col sm="12" md='9'>
				<indicadores-tasas></indicadores-tasas>
			</b-col>
			<b-col sm="12" md='3' class="m-0 p-0">
				<calendario></calendario>
			</b-col>
		</b-row>
    <b-row>
      <b-col md="6" class="grid-b-space">
        <graph-var-forex></graph-var-forex>
      </b-col>
      <b-col md="6" class="grid-b-space">
        <graph-var-materia-y-crypto></graph-var-materia-y-crypto>
      </b-col>
    </b-row>
		<graph-mercados></graph-mercados>
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
      ...mapActions('datos', ['fetchAllTasas']),
			...mapActions('tasas', [
				'loadDataOficial',
				'loadDataParalelo',
				'loadDataPetroleo',
				'loadDataOro',
				'loadDataPetro',
        'loadDataBitcoin',
        'loadDataTablaDolar',
        'loadDataTablaEuro'])
    },
		created() {
      this.loadDataOficial();
    	this.loadDataParalelo();
			this.loadDataPetroleo();
    	this.loadDataOro();
    	this.loadDataPetro();
      this.loadDataBitcoin();
      this.loadDataTablaEuro();
      this.loadDataTablaDolar();
      this.fetchAllTasas();
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