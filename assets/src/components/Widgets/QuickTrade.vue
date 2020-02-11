<template>
	<div class="quick-trade">
		<b-tabs>
			<b-tab active>
				<template v-slot:title>
					<i class="zmdi zmdi-shopping-cart mr-2 font-md"></i> Buy
				</template>
				<BuyCryptocurrency></BuyCryptocurrency>
			</b-tab>
			<b-tab>
				<template v-slot:title>
					<i class="zmdi zmdi-money mr-2 font-md"></i> Sell
				</template>
				<SellCryptocurrency></SellCryptocurrency>
			</b-tab>
			<b-tab>
				<template v-slot:title>
					<i class="zmdi zmdi-square-right mr-2 font-md"></i> Transfer
				</template>
				<TransferCryptocurrency></TransferCryptocurrency>
			</b-tab>
		</b-tabs>
	</div>
</template>

<script>
	
	import BuyCryptocurrency from "Components/Widgets/BuyCryptocurrency";
	import SellCryptocurrency from "Components/Widgets/SellCryptocurrency";
	import TransferCryptocurrency from "Components/Widgets/TransferCryptocurrency";
	export default{
		components: {
			BuyCryptocurrency,
			SellCryptocurrency,
			TransferCryptocurrency
		}
	}
</script>
