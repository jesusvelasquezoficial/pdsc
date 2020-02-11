<template>
	<div>
		<page-title-bar></page-title-bar>
		<crypto-slider></crypto-slider>
		<div class="row">
			<div class="col-lg-8">
				<div class="row">
					<div class="col-md-6 col-lg-6 mb-20">
						<app-card :heading="$t('message.walletAddress')" :headingMenu="true">
							<WalletAddress></WalletAddress>
						</app-card>
					</div>
					<div class="col-md-6 col-lg-6 mb-20">
						<app-card :heading="$t('message.buyCryptocurrency')" :headingMenu="true">
							<BuyCryptocurrency></BuyCryptocurrency>
						</app-card>
					</div>
					<div class="col-md-6 col-lg-6 mb-20">
						<app-card :heading="$t('message.sellCryptocurrency')" :headingMenu="true">
							<SellCryptocurrency></SellCryptocurrency>
						</app-card>
					</div>
					<div class="col-md-6 col-lg-6 mb-20">
						<app-card :heading="$t('message.transferCryptocurrency')" :headingMenu="true">
							<TransferCryptocurrency></TransferCryptocurrency>
						</app-card>
					</div>
					<div class="col-lg-12 mb-20">
						<app-card heading="BUY/SELL" :headingMenu="true">
							<BuyOrSell></BuyOrSell>
						</app-card>
					</div>
				</div>
			</div>
			<div class="col-md-12 col-lg-4">
				<div class="row">
					<div class="col-md-6 col-lg-12 mb-20">
						<app-card :heading="$t('message.expenditureStats')" :headingMenu="true">
							<ExpenditureStats :height="350"></ExpenditureStats>
						</app-card>
					</div>
					<div class="col-md-6 col-lg-12 mb-20">
						<app-card :heading="$t('message.exchangeRate')" :headingMenu="true">
							<ExchangeRate></ExchangeRate>
						</app-card>
					</div>
					<div class="col-lg-12 mb-20">
						<app-card :heading="$t('message.recentTrades')" :headingMenu="true">
							<RecentTrades></RecentTrades>
						</app-card>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import WalletAddress from "Components/Widgets/WalletAddress";
	import BuyCryptocurrency from "Components/Widgets/BuyCryptocurrency";
	import ExpenditureStats from 'Components/Charts/PieChartWithLegend';
	import SellCryptocurrency from "Components/Widgets/SellCryptocurrency";
	import TransferCryptocurrency from "Components/Widgets/TransferCryptocurrency";
	import ExchangeRate from "Components/Widgets/ExchangeRate";
	import RecentTrades from "Components/Widgets/RecentTrades";
	import BuyOrSell from "Components/Widgets/BuyOrSell";

	export default {
		components: {
			WalletAddress,
			BuyCryptocurrency,
			ExpenditureStats,
			SellCryptocurrency,
			TransferCryptocurrency,
			ExchangeRate,
			RecentTrades,
			BuyOrSell
		}
	}
</script>