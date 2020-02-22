<template>
  <div id='indicadores'>
		<div class="col-md-12">
			<div class="row">
				<div class="col-12 col-md-6 col-lg-4 grid-b-space">
					<app-card>
						<div class="d-flex align-items-center justify-content-between">
							<div class="d-block">
								<div class="layout justify-content-between">
									<div class="align-items-center d-flex mb-1">
										<!-- <div class="crypto-icon-wrap inline-block mr-3 font-2x">
											<i :class="icon" title="BCN"></i>
										</div> -->
										<div class="inline-block">
											<p class="mb-0">Petroleo</p>
										</div>
									</div>
								</div>
								<slot class=""><h4 class="m-0 p-0"><b>$ {{precioOil}}</b></h4></slot>
								<div class="chart-info d-flex align-items-center justify-content-between pt-1">
									<div :class="petroleoColor">
										<i :class="[petroleoUpOrDown, 'mr-1']"></i>{{petroleoVariacion}}%
									</div>
									<!-- <div class="fs-14 bg-grey rounded p-1 px-2 d-inline-block">last 4 days</div> -->
								</div>
							</div>
							<div class="d-inline-block">
								<mini-chart :dataSet="dataMiniChartPetroleo" :labels="fechaMinMapPetroleo" :height="55"
								:style="{height: '55px', width:'70px', position: 'relative'}"></mini-chart>
								<!-- <line-chart-shadow :dataSet="minMapPetroleo" :lineTension="0.4" :dataLabels="fechaMinMapPetroleo"
									:style="{height: '25px', width:'70px', position: 'relative'}" :borderWidth=3 :enableGradient="false"
									:enableShadow="true" :borderColor="ChartConfig.color.dark" :shadowColor="ChartConfig.shadowColor">
								</line-chart-shadow> -->
							</div>
						</div>
					</app-card>
				</div>
				<div class="col-12 col-md-6 col-lg-4 grid-b-space">
					<app-card>
						<div class="d-flex align-items-center justify-content-between">
							<div class="d-block">
								<div class="layout justify-content-between">
									<div class="align-items-center d-flex mb-1">
										<!-- <div class="crypto-icon-wrap inline-block mr-3 font-2x">
											<i :class="icon" title="BCN"></i>
										</div> -->
										<div class="inline-block">
											<p class="mb-0">Bitcoin</p>
										</div>
									</div>
								</div>
								<slot><h4 class="m-0 p-0"><b>$ {{bitcoin}}</b></h4></slot>
								<div class="chart-info d-flex align-items-center justify-content-between pt-1">
									<div class="text-success">
										<i class="zmdi">&nbsp;</i>
										<!-- <i class="zmdi zmdi-long-arrow-up mr-2"></i>0.0% -->
									</div>
									<!-- <div class="fs-14 bg-grey rounded p-1 px-2 d-inline-block">last 4 days</div> -->
								</div>
							</div>
							<div class="d-inline-block">
								<line-chart-shadow :dataSet="[3.25,-1.25,5.12,-2.17,-0.6]" :lineTension="0.4" :dataLabels="['a','b','c','d','e']"
									:style="{height: '25px',width:'70px', position: 'relative'}" :borderWidth=3 :enableGradient="false"
									:enableShadow="true" :borderColor="ChartConfig.color.dark" :shadowColor="ChartConfig.shadowColor">
								</line-chart-shadow>
							</div>
						</div>
					</app-card>
				</div>
				<div class="col-12 col-md-6 col-lg-4 grid-b-space">
					<app-card>
						<div class="d-flex align-items-center justify-content-between">
						<div class="d-block">
							<div class="layout justify-content-between">
								<div class="align-items-center d-flex mb-1">
									<!-- <div class="crypto-icon-wrap inline-block mr-3 font-2x">
										<i :class="icon" title="BCN"></i>
									</div> -->
									<div class="inline-block">
										<p class="mb-0">S&P 500</p>
									</div>
								</div>
							</div>
							<slot><h4 class="m-0 p-0"><b>$ {{sp500}}</b></h4></slot>
							<div class="chart-info d-flex align-items-center justify-content-between pt-1">
								<div class="text-danger">
									<i class="zmdi">&nbsp;</i>
									<!-- <i class="zmdi zmdi-long-arrow-up mr-2"></i>0.0% -->
								</div>
								<!-- <div class="fs-14 bg-grey rounded p-1 px-2 d-inline-block">last 4 days</div> -->
							</div>
						</div>
						<div class="d-inline-block">
								<line-chart-shadow :dataSet="[1,30,10,42,3]" :lineTension="0.4" :dataLabels="['a','b','c','d','e']"
									:style="{height: '25px',width:'70px', position: 'relative'}" :borderWidth=3 :enableGradient="false"
									:enableShadow="true" :borderColor="ChartConfig.color.dark" :shadowColor="ChartConfig.shadowColor">
								</line-chart-shadow>
							</div>
						</div>
					</app-card>
				</div>
				<div class="col-12 col-md-6 col-lg-4 grid-b-space">
					<app-card>
						<div class="d-flex align-items-center justify-content-between">
							<div class="d-block">
								<div class="layout justify-content-between">
									<div class="align-items-center d-flex mb-1">
										<!-- <div class="crypto-icon-wrap inline-block mr-3 font-2x">
											<i :class="icon" title="BCN"></i>
										</div> -->
										<div class="inline-block">
											<p class="mb-0">Oro</p>
										</div>
									</div>
								</div>
								<slot><h4 class="m-0 p-0"><b>$ {{oro}}</b></h4></slot>
								<div class="chart-info d-flex align-items-center justify-content-between pt-1">
									<div class="text-success">
										<i class="zmdi">&nbsp;</i>
										<!-- <i class="zmdi zmdi-long-arrow-up mr-2"></i>0.0% -->
									</div>
									<!-- <div class="fs-14 bg-grey rounded p-1 px-2 d-inline-block">last 4 days</div> -->
								</div>
							</div>
							<div class="d-inline-block">
								<mini-chart :dataSet="dataMiniChartOro" :labels="fechaMinMapOro" :height="28"
								:style="{height: '55px', width:'70px', position: 'relative'}"></mini-chart>
							</div>
						</div>
					</app-card>
				</div>
				<div class="col-12 col-md-6 col-lg-4 grid-b-space">
					<app-card>
						<div class="d-flex align-items-center justify-content-between">
							<div class="d-block">
								<div class="layout justify-content-between">
									<div class="align-items-center d-flex mb-1">
										<!-- <div class="crypto-icon-wrap inline-block mr-3 font-2x">
											<i :class="icon" title="BCN"></i>
										</div> -->
										<div class="inline-block">
											<p class="mb-0">Petro</p>
										</div>
									</div>
								</div>
								<slot><h4 class="m-0 p-0"><b>BsS {{petro}}</b></h4></slot>
								<div class="chart-info d-flex align-items-center justify-content-between pt-1">
									<div class="text-danger">
										<i class="zmdi">&nbsp;</i>
										<!-- <i class="zmdi zmdi-long-arrow-up mr-2"></i>0.0% -->
									</div>
									<!-- <div class="fs-14 bg-grey rounded p-1 px-2 d-inline-block">last 4 days</div> -->
								</div>
							</div>
							<div class="d-inline-block hidden-md-up">
								<line-chart-shadow :dataSet="[1,30,10,42,3]" :lineTension="0.4" :dataLabels="['a','b','c','d','e']"
									:style="{height: '25px',width:'70px', position: 'relative'}" :borderWidth=3 :enableGradient="false"
									:enableShadow="true" :borderColor="ChartConfig.color.dark" :shadowColor="ChartConfig.shadowColor">
								</line-chart-shadow>
							</div>
						</div>
					</app-card>
				</div>
				<div class="col-12 col-md-6 col-lg-4 grid-b-space">
					<app-card>
						<div class="d-flex align-items-center justify-content-between">
						<div class="d-block"> 
							<div class="layout justify-content-between">
								<div class="align-items-center d-flex mb-1">
									<!-- <div class="crypto-icon-wrap inline-block mr-3 font-2x">
										<i :class="icon" title="BCN"></i>
									</div> -->
									<div class="inline-block">
										<p class="mb-0">Nasdaq</p>
									</div>
								</div>
							</div>
							<slot><h4 class="m-0 p-0"><b>$ {{nasdaq}}</b></h4></slot>
							<div class="chart-info d-flex align-items-center justify-content-between pt-1">
								<div class="text-success">
									<i class="zmdi">&nbsp;</i>
									<!-- <i class="zmdi zmdi-long-arrow-up mr-2"></i>0.0% -->
								</div>
								<!-- <div class="fs-14 bg-grey rounded p-1 px-2 d-inline-block">last 4 days</div> -->
							</div>
						</div>
						<div class="d-inline-block">
								<line-chart-shadow :dataSet="[1,30,10,42,3]" :lineTension="0.4" :dataLabels="['a','b','c','d','e']"
									:style="{height: '25px',width:'70px', position: 'relative'}" :borderWidth=3 :enableGradient="false"
									:enableShadow="true" :borderColor="ChartConfig.color.dark" :shadowColor="ChartConfig.shadowColor">
								</line-chart-shadow>
							</div>
						</div>
					</app-card>
				</div>
			</div>
				<!-- <fade-loader :loading="!indicadoresLoaded" color="DarkOrange" size="32px"></fade-loader> -->
		</div>
  </div>
</template>
<script>
  import StatsCardV7 from "Components/StatsCardV7/StatsCardV7";
  import LineChartShadow from "Components/Charts/LineChartShadow";
  import MiniChart from "Components/Charts/MiniChart";
	import ChartConfig from "Constants/ChartConfig";
	import { mapState } from 'vuex'
  export default {
		components: {
			StatsCardV7,
			LineChartShadow,
			MiniChart
		},
    data() {
      return {
        ChartConfig,
				bitcoin2: {
					icon: "cc BTC text-primary",
					name: "Bitcoin",
					color: "fw-semi-bold text-primary",
					duration: "last 4 days",
					market_cap: "2.3",
					market_cap_icon: "fa-arrow-up",
					market_cap_color: "success-text",
					chartLabel: ["A", "B", "C", "D", "E"],
					data: [1, 26, 8, 22, 1],
					chartBorderColor: ChartConfig.color.primary,
				},
				ethereum: {
					icon: "cc ETH text-green",
					name: "Ethereum",
					color: "fw-semi-bold text-green",
					duration: "last 4 days",
					market_cap: "2.3",
					market_cap_icon: "fa-arrow-up",
					market_cap_color: "success-text",
					chartLabel: ["A", "B", "C", "D", "E"],
					data: [29, 5, 26, 10, 21],
					chartBorderColor: ChartConfig.color.success,
				},
				litecoin: {
					icon: "cc LTC text-danger",
					name: "Litecoin",
					color: "fw-semi-bold text-danger",
					duration: "last 4 days",
					market_cap: "2.3",
					market_cap_icon: "fa-arrow-up",
					market_cap_color: "success-text",
					chartLabel: ["A", "B", "C", "D", "E"],
					data: [1, 26, 8, 22, 1],
					chartBorderColor: ChartConfig.color.danger,

				},
				zcash: {
					icon: "cc ZEC-alt text-info",
					name: "Zcash",
					color: "fw-semi-bold text-info",
					duration: "last 4 days",
					market_cap: "2.3",
					market_cap_icon: "fa-arrow-up",
					market_cap_color: "success-text",
					chartLabel: ["A", "B", "C", "D", "E"],
					data: [29, 5, 26, 10, 21],
					chartBorderColor: ChartConfig.color.info,

				}
      }
		},
		computed: {
			...mapState('tasas', [
				'dataPetroleo',
				'petroleoFecha',
				'dataOro',
				'oroFecha',
				'precioOil',
				'petroleoVariacion',
				'petroleoUpOrDown',
				'petroleoColor',
				'oro',
				'petro',
				'bitcoin',
				'sp500',
				'nasdaq'
			]),
			minMapPetroleo(){
				if (this.dataPetroleo.length != 0) {
					var precios = this.dataPetroleo + '';
					var array = precios.split(',');
					array = array.map(Number);
					var data = array.slice(array.length - 7, array.length);
					return data;
				}
			},
			dataMiniChartPetroleo(){
				var data = [];
				var precios = this.dataPetroleo + '';
				var array = precios.split(',');
				console.log("datos:", array);
				var indexBase = array.length - 7;
				console.log("Indice base:",indexBase);
				var precioBase = array[indexBase];
				console.log("Precio base:",precioBase);
				for (let index = indexBase; index < array.length; index++) {
					const precio = array[index];
					console.log(precio + " - " + precioBase + " / " + precioBase + " * " + "100");
					var v = ((precio - precioBase) / precioBase) * 100;
					console.log(v.toFixed(2));
					data.push(Number(v.toFixed(2)))
				}
				console.log("Mini data:", data);
				return data;
			},
			dataMiniChartOro(){
				var data = [];
				var precios = this.dataOro + '';
				var array = precios.split(',');
				console.log("datos:", array);
				var indexBase = array.length - 7;
				console.log("Indice base:",indexBase);
				var precioBase = array[indexBase];
				console.log("Precio base:",precioBase);
				for (let index = indexBase; index < array.length; index++) {
					const precio = array[index];
					console.log(precio + " - " + precioBase + " / " + precioBase + " * " + "100");
					var v = ((precio - precioBase) / precioBase) * 100;
					console.log(v.toFixed(2));
					data.push(Number(v.toFixed(2)))
				}
				console.log("Mini data:", data);
				return data;
			},
			fechaMinMapPetroleo(){
				if (this.petroleoFecha != null || this.petroleoFecha != undefined) {
					var fech = this.petroleoFecha + '';
					var array = fech.split(',')
					var fecha = array.slice(array.length - 7, array.length);
					return fecha;
				}
			},
			fechaMinMapOro(){
				if (this.oroFecha != null || this.oroFecha != undefined) {
					var fech = this.oroFecha + '';
					var array = fech.split(',')
					var fecha = array.slice(array.length - 7, array.length);
					return fecha;
				}
			}
		},
  }
</script>
