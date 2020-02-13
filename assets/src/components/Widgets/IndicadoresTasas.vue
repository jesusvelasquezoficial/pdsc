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
								<slot class=""><h4 class="m-0 p-0"><b>$ {{petroleo}}</b></h4></slot>
								<div class="chart-info d-flex align-items-center justify-content-between pt-1">
									<div class="text-danger">
										<i class="zmdi"></i>
										<!-- <i class="zmdi zmdi-long-arrow-up mr-2"></i>0.0% -->
									</div>
									<!-- <div class="fs-14 bg-grey rounded p-1 px-2 d-inline-block">last 4 days</div> -->
								</div>
							</div>
							<div class="d-inline-block">
								<line-chart-shadow :dataSet="[1,30,10,42,3,4,1]" :lineTension="0.4" :dataLabels="['a','b','c','d','e','f','g']"
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
										<i class="zmdi"></i>
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
											<p class="mb-0">Petro</p>
										</div>
									</div>
								</div>
								<slot><h4 class="m-0 p-0"><b>BsS {{petro}}</b></h4></slot>
								<div class="chart-info d-flex align-items-center justify-content-between pt-1">
									<div class="text-danger">
										<i class="zmdi"></i>
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
											<p class="mb-0">Bitcoin</p>
										</div>
									</div>
								</div>
								<slot><h4 class="m-0 p-0"><b>$ {{bitcoin}}</b></h4></slot>
								<div class="chart-info d-flex align-items-center justify-content-between pt-1">
									<div class="text-success">
										<i class="zmdi"></i>
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
										<p class="mb-0">S&P 500</p>
									</div>
								</div>
							</div>
							<slot><h4 class="m-0 p-0"><b>$ {{sp500}}</b></h4></slot>
							<div class="chart-info d-flex align-items-center justify-content-between pt-1">
								<div class="text-danger">
									<i class="zmdi"></i>
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
										<p class="mb-0">Nasdaq</p>
									</div>
								</div>
							</div>
							<slot><h4 class="m-0 p-0"><b>$ {{nasdaq}}</b></h4></slot>
							<div class="chart-info d-flex align-items-center justify-content-between pt-1">
								<div class="text-success">
									<i class="zmdi"></i>
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
	import ChartConfig from "Constants/ChartConfig";
	import { mapState } from 'vuex'
  export default {
		components: {
			StatsCardV7,
			LineChartShadow,
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
				'petroleo',
				'oro',
				'petro',
				'bitcoin',
				'sp500',
				'nasdaq'
			])
		},
  }
</script>
