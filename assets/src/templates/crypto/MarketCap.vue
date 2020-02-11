<template>
	<div>
		<page-title-bar></page-title-bar>
		<crypto-slider></crypto-slider>
		<div class="row align-items-stretch">
			<template v-for="(dataItem, key) in cardData">
				<div class="col-half-lg-block col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 grid-b-space" :key="key">
					<wallet-stats-card :name="dataItem.name" :trade="dataItem.trade" :icon="dataItem.icon"
						:bgColor="dataItem.color" :viewers="dataItem.viewers" :progress="dataItem.progress"
						>
					</wallet-stats-card>
				</div>
			</template>
		</div>
		<div class="mktcap-wrapper">
			<div class="mktcap-resp-scroll">
				<div class="row">
					<div class="col-full-lg-block col-sm-12 col-md-12 col-lg-12 grid-b-space">
						<app-card>
							<div class="mktcap-wrap">
								<div class="mktcap-title">S.No.</div>
								<div class="mktcap-title">Currency</div>
								<div class="mktcap-title">Market Cap</div>
								<div class="mktcap-title">Price</div>
								<div class="mktcap-title">Volume</div>
								<div class="mktcap-title">Change(24hr)</div>
								<div class="mktcap-title">More</div>
							</div>
						</app-card>
					</div>
				</div>
				<div class="row">
					<div class="col-full-lg-block col-sm-12 col-md-12 col-lg-12 grid-b-space">
						<expandable></expandable>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import WalletStatsCard from "Components/Widgets/WalletStatsCard";
	import Expandable from "Components/Widgets/Expandable";

	export default {
		components: {
			WalletStatsCard,
			Expandable
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