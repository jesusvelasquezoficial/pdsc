<template>
	<div>
		<page-title-bar></page-title-bar>
		<crypto-slider></crypto-slider>
		<div>
			<div class="currencies-available mb-30">
				<h4 class="mb-3">Currencies Available</h4>
				<div class="button-wrap">
					<button class="crypto-btn mr-3"><span class="cc BTC text-primary"></span></button>
					<button class="crypto-btn mr-3"><span class="cc ETC-alt text-success"></span></button>
					<button class="crypto-btn mr-3"><span class="cc LTC text-info"></span></button>
					<button class="crypto-btn"><span class="cc ZEC-alt text-danger"></span></button>
				</div>
			</div>
		</div>
		<div class="row">
			<div class=" col-sm-12 col-md-12 col-lg-7 col-xl-6 ">
				<ExpandableWallet></ExpandableWallet>
			</div>
			<div class=" col-sm-12 col-md-12 col-lg-5 col-xl-6 ">
				<div class="row align-items-stretch">
					<template v-for="(dataItem, key) in cardData">
						<div class="col-md-6 col-lg-12 col-xl-6 mb-4" :key="key">
							<wallet-stats-card :name="dataItem.name" :trade="dataItem.trade"	:icon="dataItem.icon" :bgColor="dataItem.color" :viewers="dataItem.viewers" :progress="dataItem.progress"
							>
							</wallet-stats-card>
						</div>
					</template>
				</div>
				<BankDetail></BankDetail>
			</div>
		</div>
	</div>
</template>
<script>
	import WalletStatsCard from "Components/Widgets/WalletStatsCard";
	import ExpandableWallet from "Components/Widgets/ExpandableWallet";
	import BankDetail from "Components/Widgets/BankDetail";

	export default {
		components: {
			WalletStatsCard,
			ExpandableWallet,
			BankDetail
		},
		data() {
			return {
				cardData: [
					{
						name: "Bitcoin",
						viewers: "41",
						trade: 30,
						icon: "cc BTC-alt",
						color: "bg-primary",
						progress: 30
					},
					{
						name: "Ethereum",
						viewers: "4381",
						trade: 60,
						icon: "cc ETC",
						color: "bg-success",
						progress: 60
					},
					{
						name: "Litecoin",
						viewers: "2611",
						trade: 80,
						icon: "cc LTC-alt",
						color: "bg-info",
						progress: 80
					},
					{
						name: "Zcash",
						viewers: "611",
						trade: "40",
						icon: "cc ZEC-alt",
						color: "bg-danger",
						progress: 40
					}
				]
			}
		}
	}
</script>