<template>
  <div id='indicadores'>
		<div class="col-md-12">
			<div class="row grid-b-space">
				<div class="col-12 col-md-4 col-lg-3 grid-b-space-indicadores">
					<app-card>
						<div class="d-flex align-items-center justify-content-between">
							<div class="d-block">
								<div class="layout justify-content-between">
									<div class="align-items-center d-flex mb-1">
										<!-- <div class="crypto-icon-wrap inline-block mr-3 font-2x">
											<i :class="icon" title="BCN"></i>
										</div> -->
										<div class="inline-block">
											<router-link to="/materia-prima/petroleo" class="mb-0" style="color:#0081f2; font-size:.7em;" ><b>Petroleo</b></router-link>
										</div>
									</div>
								</div>
								<slot class=""><h5 class="m-0 p-0" style="font-size:.7em;"><b>$ {{precioPetroleo}}</b></h5></slot>
								<div class="chart-info d-flex align-items-center justify-content-between pt-1">
									<div :class="pctjPetroleo[2]" style="font-size:.57em;">
										<i :class="[pctjPetroleo[1], 'mr-1']"></i>{{pctjPetroleo[0]}}%
									</div>
									<!-- <div class="fs-14 bg-grey rounded p-1 px-2 d-inline-block">last 4 days</div> -->
								</div>
							</div>
							<div class="d-inline-block">
								<mini-chart :dataSet="dataMiniChartPetroleo" :labels="fechaMinMapPetroleo" :height="33"
								:style="{height: '65px', width:'100px', position: 'relative'}"></mini-chart>
								<!-- <line-chart-shadow :dataSet="minMapPetroleo" :lineTension="0.4" :dataLabels="fechaMinMapPetroleo"
									:style="{height: '25px', width:'70px', position: 'relative'}" :borderWidth=3 :enableGradient="false"
									:enableShadow="true" :borderColor="ChartConfig.color.dark" :shadowColor="ChartConfig.shadowColor">
								</line-chart-shadow> -->
							</div>
						</div>
					</app-card>
				</div>
				<div class="col-12 col-md-4 col-lg-3 grid-b-space-indicadores">
					<app-card>
						<div class="d-flex align-items-center justify-content-between">
							<div class="d-block">
								<div class="layout justify-content-between">
									<div class="align-items-center d-flex mb-1">
										<!-- <div class="crypto-icon-wrap inline-block mr-3 font-2x">
											<i :class="icon" title="BCN"></i>
										</div> -->
										<div class="inline-block">
											<router-link to="/criptomonedas/bitcoin" class="mb-0" style="color:#0081f2; font-size:.7em;" ><b>Bitcoin</b></router-link>
										</div>
									</div>
								</div>
								<slot><h5 class="m-0 p-0"  style="font-size:.7em;"><b>$ {{precioBitcoin}}</b></h5></slot>
								<div class="chart-info d-flex align-items-center justify-content-between pt-1">
									<div :class="pctjBtc[2]" style="font-size:.57em;">
										<i :class="[pctjBtc[1], 'mr-1']"></i>{{pctjBtc[0]}}%
									</div>
									<!-- <div class="fs-14 bg-grey rounded p-1 px-2 d-inline-block">last 4 days</div> -->
								</div>
							</div>
							<div class="d-inline-block">
								<mini-chart :dataSet="dataMiniChartBitcoin" :labels="fechaMinMapBitcoin" :height="33"
								:style="{height: '65px', width:'100px', position: 'relative'}"></mini-chart>
							</div>
						</div>
					</app-card>
				</div>
				<!-- ////////////////////////////////////////////// -->
				<div class="col-12 col-md-4 col-lg-3 grid-b-space-indicadores">
					<app-card>
						<div class="d-flex align-items-center justify-content-between">
						<div class="d-block"> 
							<div class="layout justify-content-between">
								<div class="d-flex align-items-center mb-1">
									<!-- <div class="crypto-icon-wrap inline-block mr-3 font-2x">
										<i :class="icon" title="BCN"></i>
									</div> -->
									<div class="inline-block">
										<router-link to="/forex/eur-usd" class="mb-0" style="color:#0081f2; font-size:.7em;" ><b>EUR/USD</b></router-link>
									</div>
								</div>
							</div>
							<slot><h6 class="m-0 p-0"  style="font-size:.7em;"><b>En construcción</b></h6></slot>
							<!-- <slot><h5 class="m-0 p-0"  style="font-size:.7em;"><b>$ {{nasdaq}}</b></h5></slot> -->
							<div class="chart-info d-flex align-items-center justify-content-between pt-1">
								<div class="text-success" style="font-size:22px;">
									<i class="zmdi">&nbsp;</i>
									<!-- <i class="zmdi zmdi-long-arrow-up mr-2"></i>0.0% -->
								</div>
								<!-- <div class="fs-14 bg-grey rounded p-1 px-2 d-inline-block">last 4 days</div> -->
							</div>
						</div>
						<div class="d-inline-block">
								<img src="Static/img/mantenimiento.png" width="60" height="60" alt="user" class="img-fluid rounded-circle mb-10"/> 
								<!-- <line-chart-shadow :dataSet="[1,30,10,42,3]" :lineTension="0.4" :dataLabels="['a','b','c','d','e']"
									:style="{height: '25px',width:'70px', position: 'relative'}" :borderWidth=3 :enableGradient="false"
									:enableShadow="true" :borderColor="ChartConfig.color.dark" :shadowColor="ChartConfig.shadowColor">
								</line-chart-shadow> -->
							</div>
						</div>
					</app-card>
				</div>
				<!-- ////////////////////////////////////////////// -->
				<div class="col-12 col-md-4 col-lg-3 grid-b-space-indicadores">
					<app-card>
						<div class="d-flex align-items-center justify-content-between">
						<div class="d-block">
							<div class="layout justify-content-between">
								<div class="align-items-center d-flex mb-1">
									<!-- <div class="crypto-icon-wrap inline-block mr-3 font-2x">
										<i :class="icon" title="BCN"></i>
									</div> -->
									<div class="inline-block">
										<router-link to="/bolsas-valores/sp500" class="mb-0" style="color:#0081f2; font-size:.7em;" ><b>S&P 500</b></router-link>
									</div>
								</div>
							</div>
							<slot><h6 class="m-0 p-0"  style="font-size:.7em;"><b>En construcción</b></h6></slot>
							<!-- <slot><h4 class="m-0 p-0"  style="font-size:.7em;"><b>$ {{sp500}}</b></h4></slot> -->
							<div class="chart-info d-flex align-items-center justify-content-between pt-1">
								<div class="text-danger" style="font-size:22px;">
									<i class="zmdi">&nbsp;</i>
									<!-- <i class="zmdi zmdi-long-arrow-up mr-2"></i>0.0% -->
								</div>
								<!-- <div class="fs-14 bg-grey rounded p-1 px-2 d-inline-block">last 4 days</div> -->
							</div>
						</div>
						<div class="d-inline-block">
								<img src="Static/img/mantenimiento.png" width="60" height="60" alt="user" class="img-fluid rounded-circle mb-10"/> 
								<!-- <line-chart-shadow :dataSet="[1,30,10,42,3]" :lineTension="0.4" :dataLabels="['a','b','c','d','e']"
									:style="{height: '25px',width:'70px', position: 'relative'}" :borderWidth=3 :enableGradient="false"
									:enableShadow="true" :borderColor="ChartConfig.color.dark" :shadowColor="ChartConfig.shadowColor">
								</line-chart-shadow> -->
							</div>
						</div>
					</app-card>
				</div>
				<div class="col-12 col-md-4 col-lg-3 grid-b-space-indicadores">
					<app-card>
						<div class="d-flex align-items-center justify-content-between">
							<div class="d-block">
								<div class="layout justify-content-between">
									<div class="align-items-center d-flex mb-1">
										<!-- <div class="crypto-icon-wrap inline-block mr-3 font-2x">
											<i :class="icon" title="BCN"></i>
										</div> -->
										<div class="inline-block">
											<router-link to="/materia-prima/oro" class="mb-0" style="color:#0081f2; font-size:.7em;" ><b>Oro</b></router-link>
											<!-- <p class="mb-0" style="color:#0081f2; font-size:.7em;" >Oro</p> -->
										</div>
									</div>
								</div>
								<slot><h5 class="m-0 p-0"  style="font-size:.7em;"><b>$ {{precioOro}}</b></h5></slot>
								<div class="chart-info d-flex align-items-center justify-content-between pt-1">
									<div :class="pctjOro[2]" style="font-size:.57em;">
										<i :class="[pctjOro[1], 'mr-1']"></i>{{pctjOro[0]}}%
										<!-- <i class="zmdi zmdi-long-arrow-up mr-2"></i>0.0% -->
									</div>
									<!-- <div class="fs-14 bg-grey rounded p-1 px-2 d-inline-block">last 4 days</div> -->
								</div>
							</div>
							<div class="d-inline-block">
								<mini-chart :dataSet="dataMiniChartOro" :labels="fechaMinMapOro" :height="74"
								:style="{height: '65px', width:'100px', position: 'relative'}"></mini-chart>
							</div>
						</div>
					</app-card>
				</div>
				<div class="col-12 col-md-4 col-lg-3 grid-b-space-indicadores">
					<app-card>
						<div class="d-flex align-items-center justify-content-between">
							<div class="d-block">
								<div class="layout justify-content-between">
									<div class="align-items-center d-flex mb-1">
										<!-- <div class="crypto-icon-wrap inline-block mr-3 font-2x">
											<i :class="icon" title="BCN"></i>
										</div> -->
										<div class="inline-block">
											<router-link to="/criptomonedas/petro" class="mb-0" style="color:#0081f2; font-size:.7em;" ><b>Petro</b></router-link>
										</div>
									</div>
								</div>
								<slot><h5 class="m-0 p-0 d-sm-block d-lg-none" style="font-size:.7em;"><b>Bs {{precioPetro}}</b></h5></slot>
								<slot><h5 class="m-0 p-0 d-none d-lg-block" style="font-size:.7em;"><b>Bs {{precioPetro}}</b></h5></slot>
								<div class="chart-info d-flex align-items-center justify-content-between pt-1">
									<div :class="pctjPtr[2]" style="font-size:.57em;">
										<i :class="[pctjPtr[1], 'mr-1']"></i>{{pctjPtr[0]}}%
									</div>
									<!-- <div class="fs-14 bg-grey rounded p-1 px-2 d-inline-block">last 4 days</div> -->
								</div>
							</div>
							<div class="d-inline-block">
								<mini-chart :dataSet="dataMiniChartPetro" :labels="fechaMinMapPetro" :height="33"
								:style="{height: '65px', width:'100px', position: 'relative'}"></mini-chart>
							</div>
						</div>
					</app-card>
				</div>
				<!-- ////////////////////////////////////////////// -->
				<div class="col-12 col-md-4 col-lg-3 grid-b-space-indicadores">
					<app-card>
						<div class="d-flex align-items-center justify-content-between">
						<div class="d-block"> 
							<div class="layout justify-content-between">
								<div class="align-items-center d-flex mb-1">
									<!-- <div class="crypto-icon-wrap inline-block mr-3 font-2x">
										<i :class="icon" title="BCN"></i>
									</div> -->
									<div class="inline-block">
										<router-link to="/forex/usd-jpy" class="mb-0" style="color:#0081f2; font-size:.7em;" ><b>USD/JPY</b></router-link>
									</div>
								</div>
							</div>
							<slot><h6 class="m-0 p-0"  style="font-size:.7em;"><b>En construcción</b></h6></slot>
							<!-- <slot><h5 class="m-0 p-0"  style="font-size:.7em;"><b>$ {{nasdaq}}</b></h5></slot> -->
							<div class="chart-info d-flex align-items-center justify-content-between pt-1">
								<div class="text-success" style="font-size:22px;">
									<i class="zmdi">&nbsp;</i>
									<!-- <i class="zmdi zmdi-long-arrow-up mr-2"></i>0.0% -->
								</div>
								<!-- <div class="fs-14 bg-grey rounded p-1 px-2 d-inline-block">last 4 days</div> -->
							</div>
						</div>
						<div class="d-inline-block">
								<img src="Static/img/mantenimiento.png" width="60" height="60" alt="user" class="img-fluid rounded-circle mb-10"/> 
								<!-- <line-chart-shadow :dataSet="[1,30,10,42,3]" :lineTension="0.4" :dataLabels="['a','b','c','d','e']"
									:style="{height: '25px',width:'70px', position: 'relative'}" :borderWidth=3 :enableGradient="false"
									:enableShadow="true" :borderColor="ChartConfig.color.dark" :shadowColor="ChartConfig.shadowColor">
								</line-chart-shadow> -->
							</div>
						</div>
					</app-card>
				</div>
				<!-- ////////////////////////////////////////////// -->
				<div class="col-12 col-md-4 col-lg-3 grid-b-space-indicadores">
					<app-card>
						<div class="d-flex align-items-center justify-content-between">
						<div class="d-block"> 
							<div class="layout justify-content-between">
								<div class="align-items-center d-flex mb-1">
									<!-- <div class="crypto-icon-wrap inline-block mr-3 font-2x">
										<i :class="icon" title="BCN"></i>
									</div> -->
									<div class="inline-block">
										<router-link to="/bolsas-valores/nasdaq" class="mb-0" style="color:#0081f2; font-size:.7em;" ><b>Nasdaq</b></router-link>
									</div>
								</div>
							</div>
							<slot><h6 class="m-0 p-0"  style="font-size:.7em;"><b>En construcción</b></h6></slot>
							<!-- <slot><h5 class="m-0 p-0"  style="font-size:.7em;"><b>$ {{nasdaq}}</b></h5></slot> -->
							<div class="chart-info d-flex align-items-center justify-content-between pt-1">
								<div class="text-success" style="font-size:22px;">
									<i class="zmdi">&nbsp;</i>
									<!-- <i class="zmdi zmdi-long-arrow-up mr-2"></i>0.0% -->
								</div>
								<!-- <div class="fs-14 bg-grey rounded p-1 px-2 d-inline-block">last 4 days</div> -->
							</div>
						</div>
						<div class="d-inline-block">
								<img src="Static/img/mantenimiento.png" width="60" height="60" alt="user" class="img-fluid rounded-circle mb-10"/> 
								<!-- <line-chart-shadow :dataSet="[1,30,10,42,3]" :lineTension="0.4" :dataLabels="['a','b','c','d','e']"
									:style="{height: '25px',width:'70px', position: 'relative'}" :borderWidth=3 :enableGradient="false"
									:enableShadow="true" :borderColor="ChartConfig.color.dark" :shadowColor="ChartConfig.shadowColor">
								</line-chart-shadow> -->
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

	function sube0baja(params) {
		var flag = Math.sign(params);
		if (flag > 0) {
			return ['zmdi zmdi-long-arrow-up', 'text-up'];
		} else if (flag < 0) {
			return ['zmdi zmdi-long-arrow-down', 'text-down'];
		} else {
			return ['fas fa-equals font-sm', 'text-white'];
		}
	}

  export default {
		components: {
			StatsCardV7,
			LineChartShadow,
			MiniChart
		},
    data() {
      return {
				ChartConfig,
				pctjPetroleo: [],
				pctjOro: [],
				pctjBtc: [],
				pctjPtr: [],
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
				'precioPetroleo',
				'precioOro',
				'petroFecha',
				'dataPetro',
				'precioPetro',
				'bitcoinFecha',
				'dataBitcoin',
				'precioBitcoin',
				'sp500',
				'nasdaq'
			]),
			minMapPetroleo(){
				if (this.dataPetroleo.length != 0) {
					var precios = this.dataPetroleo + '';
					var array = precios.split(',');
					array = array.map(Number);
					var data = array.slice(array.length - 21, array.length);
					return data;
				}
			},
			dataMiniChartPetroleo(){
				var data = [];
				var precios = this.dataPetroleo + '';
				var array = precios.split(',');
				// console.log("datos:", array);
				var indexBase = array.length - 21;
				// console.log("Indice base:",indexBase);
				var precioBase = array[indexBase];
				// console.log("Precio base:",precioBase);
				for (let index = indexBase; index < array.length; index++) {
					const precio = array[index];
					// console.log(precio + " - " + precioBase + " / " + precioBase + " * " + "100");
					var v = ((precio - precioBase) / precioBase) * 100;
					// console.log(v.toFixed(2));
					data.push(Number(v.toFixed(2)))
				}
				var result = sube0baja(data[20]);
				result.unshift(data[20]);
				this.pctjPetroleo = result;
				// console.log("Mini data:", data);
				return data;
			},
			dataMiniChartOro(){
				var data = [];
				var precios = this.dataOro + '';
				var array = precios.split(',');
				// console.log("datos:", array);
				var indexBase = array.length - 21;
				// console.log("Indice base:",indexBase);
				var precioBase = array[indexBase];
				// console.log("Precio base:",precioBase);
				for (let index = indexBase; index < array.length; index++) {
					const precio = array[index];
					// console.log(precio + " - " + precioBase + " / " + precioBase + " * " + "100");
					var v = ((precio - precioBase) / precioBase) * 100;
					// console.log(v.toFixed(2));
					data.push(Number(v.toFixed(2)))
				}
					var result = sube0baja(data[20]);
					result.unshift(data[20]);
					this.pctjOro = result;
				// console.log("Mini data:", data);
				return data;
			},
			fechaMinMapPetroleo(){
				if (this.petroleoFecha != null || this.petroleoFecha != undefined) {
					var fech = this.petroleoFecha + '';
					var array = fech.split(',')
					var fecha = array.slice(array.length - 21, array.length);
					return fecha;
				}
			},
			fechaMinMapOro(){
				if (this.oroFecha != null || this.oroFecha != undefined) {
					var fech = this.oroFecha + '';
					var array = fech.split(',')
					var fecha = array.slice(array.length - 21, array.length);
					return fecha;
				}
			},
			dataMiniChartPetro(){
				var data = [];
				var precios = this.dataPetro + '';
				var array = precios.split(',');
				// console.log("datos:", array);
				var indexBase = array.length - 21;
				// console.log("Indice base:",indexBase);
				var precioBase = array[indexBase];
				// console.log("Precio base:",precioBase);
				for (let index = indexBase; index < array.length; index++) {
					const precio = array[index];
					// console.log(precio + " - " + precioBase + " / " + precioBase + " * " + "100");
					var v = ((precio - precioBase) / precioBase) * 100;
					// console.log(v.toFixed(2));
					data.push(Number(v.toFixed(2)))
				}
					var result = sube0baja(data[20]);
					result.unshift(data[20]);
					this.pctjPtr = result;

				// console.log("Mini data:", data);
				return data;
			},
			fechaMinMapPetro(){
				if (this.petroFecha != null || this.petroFecha != undefined) {
					var fech = this.petroFecha + '';
					var array = fech.split(',')
					var fecha = array.slice(array.length - 21, array.length);
					return fecha;
				}
			},
			dataMiniChartBitcoin(){
				var data = [];
				var precios = this.dataBitcoin + '';
				var array = precios.split(',');
				// console.log("datos:", array);
				var indexBase = array.length - 21;
				// console.log("Indice base:",indexBase);
				var precioBase = array[indexBase];
				// console.log("Precio base:",precioBase);
				for (let index = indexBase; index < array.length; index++) {
					const precio = array[index];
					// console.log(precio + " - " + precioBase + " / " + precioBase + " * " + "100");
					var v = ((precio - precioBase) / precioBase) * 100;
					// console.log(v.toFixed(2));
					data.push(Number(v.toFixed(2)))
				}
					var result = sube0baja(data[20]);
					result.unshift(data[20]);
					this.pctjBtc = result;
				// console.log("Mini data:", data);
				return data;
			},
			fechaMinMapBitcoin(){
				if (this.bitcoinFecha != null || this.bitcoinFecha != undefined) {
					var fech = this.bitcoinFecha + '';
					var array = fech.split(',')
					var fecha = array.slice(array.length - 21, array.length);
					return fecha;
				}
			},
		},
  }
</script>
<style>
	.idb-block-content{
		padding: .70rem !important;
	}
	.col-12{
		padding: .5rem !important;
	}
	.grid-b-space-indicadores{
	}
</style>