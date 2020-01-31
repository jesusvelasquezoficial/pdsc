<template>
	<div>
		<page-title-bar></page-title-bar>
		<crypto-slider></crypto-slider>
		<div class="row">
			<div class="col-half-lg-block col-md-6 col-lg-6 col-xl-3 grid-b-space">
				<stats-card-v7 :heading="bitcoin.name" :icon="bitcoin.icon" :color="bitcoin.color">
					<line-chart-shadow :dataSet="bitcoin.data" :lineTension="0.4" :dataLabels="bitcoin.chartLabel"
						:style="{height: '80px',width:'100%', position: 'relative'}" :borderWidth=3 :enableGradient="false"
						:enableShadow="true" :borderColor="bitcoin.chartBorderColor" :shadowColor="bitcoin.chartBorderColor">
					</line-chart-shadow>
				</stats-card-v7>
			</div>
			<div class="col-half-lg-block col-md-6 col-lg-6 col-xl-3 grid-b-space">
				<stats-card-v7 :heading="ethereum.name" :icon="ethereum.icon" :color="ethereum.color">
					<line-chart-shadow :dataSet="ethereum.data" :lineTension="0.4" :dataLabels="ethereum.chartLabel"
						:style="{height: '80px',width:'100%', position: 'relative'}" :borderWidth=3 :enableGradient="false"
						:enableShadow="true" :borderColor="ethereum.chartBorderColor"
						:shadowColor="ethereum.chartBorderColor">
					</line-chart-shadow>
				</stats-card-v7>
			</div>
			<div class="col-half-lg-block col-md-6 col-lg-6 col-xl-3 grid-b-space">
				<stats-card-v7 :heading="litecoin.name" :icon="litecoin.icon" :color="litecoin.color">
					<line-chart-shadow :dataSet="litecoin.data" :lineTension="0.4" :dataLabels="litecoin.chartLabel"
						:style="{height: '80px',width:'100%', position: 'relative'}" :borderWidth=3 :enableGradient="false"
						:enableShadow="true" :borderColor="litecoin.chartBorderColor"
						:shadowColor="litecoin.chartBorderColor">
					</line-chart-shadow>
				</stats-card-v7>
			</div>
			<div class="col-half-lg-block col-md-6 col-lg-6 col-xl-3 grid-b-space">
				<stats-card-v7 :heading="zcash.name" :icon="zcash.icon" :color="zcash.color">
					<line-chart-shadow :dataSet="zcash.data" :lineTension="0.4" :dataLabels="zcash.chartLabel"
						:style="{height: '80px',width:'100%', position: 'relative'}" :borderWidth=3 :enableGradient="false"
						:enableShadow="true" :borderColor="zcash.chartBorderColor" :shadowColor="zcash.chartBorderColor">
					</line-chart-shadow>
				</stats-card-v7>
			</div>
		</div>
		<!-- <div class="row">
			<div class="col-lg-12 grid-b-space">
				<app-card heading="BTC/USD" :headingMenu="true">
					<CandleSticks></CandleSticks>
				</app-card>
			</div>
		</div> -->
		<div class="row">
			<div class="col-lg-8">
				<div class="row">
					<div class="col-lg-12 grid-b-space">
						<app-card :heading="$t('message.tradeHistory')" headingMenu="true">
							<trade-history></trade-history>
						</app-card>
					</div>
					<div class="col-lg-6 grid-b-space">
						<app-card :heading="$t('message.exchangeStatistics')" headingMenu="true" class="mb-30">
							<ExchangeStatistics></ExchangeStatistics>
						</app-card>
						<app-card :heading="$t('message.exchangeRate')" headingMenu="true">
							<ExchangeRate></ExchangeRate>
						</app-card>
					</div>
					<div class="col-lg-6 grid-b-space">
						<app-card :heading="$t('message.quickTrade')" headingMenu="true">
							<QuickTrade></QuickTrade>
						</app-card>
					</div>
				</div>
			</div>
			<div class="col-lg-4 grid-b-space">
				<app-card :heading="$t('message.safeTrade')" :headingMenu="true" class="grid-b-space">
					<SafeTrade></SafeTrade>
				</app-card>
				<app-card :heading="$t('message.recentTrades')" :headingMenu="true">
					<RecentTrades></RecentTrades>
				</app-card>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-12 grid-b-space">
				<app-card :heading="$t('message.coinsList')" headingMenu="true">
					<coins-list></coins-list>
				</app-card>
			</div>
		</div>
	</div>
</template>
<script>

	// Widgets 
	import StatsCardV7 from "Components/StatsCardV7/StatsCardV7";
	import ChartConfig from "Constants/ChartConfig";
	import LineChartShadow from "Components/Charts/LineChartShadow";
	import TradeHistory from "Components/Widgets/TradeHistory";
	import QuickTrade from "Components/Widgets/QuickTrade";
	import RecentTrades from "Components/Widgets/RecentTrades";
	import CoinsList from "Components/Widgets/CoinsList";
	import ExchangeRate from "Components/Widgets/ExchangeRate";
	import SafeTrade from "Components/Widgets/SafeTrade";
	import ExchangeStatistics from "Components/Widgets/ExchangeStatistics";
	// import CandleSticks from "Components/Charts/CandleSticks";

	export default {
		components: {
			StatsCardV7,
			LineChartShadow,
			TradeHistory,
			QuickTrade,
			RecentTrades,
			CoinsList,
			ExchangeRate,
			SafeTrade,
			ExchangeStatistics
			// CandleSticks
		},
		data() {
			return {
				ChartConfig,
				bitcoin: {
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
		}
	}
</script>