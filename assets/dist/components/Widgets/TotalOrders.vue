<template>
	<app-card appCardClass="h-100" customClasses="gradient-purple overflow-hide h-100"
		contentCustomClass="h-100 d-flex flex-column justify-content-between chart-card">
		<h5 class="mb-20">{{$t('message.totalOrders')}}</h5>
		<div class="d-flex align-items-end">
			<div class="w-50 chart-content">
				<h2 class="card-count mb-15">
					<count-up :startVal="0" :endVal="4100" :decimals="0" :duration="10">
					</count-up>
				</h2>
				<p class="m-0 card-status">{{$t('message.newOrdersToday')}}</p>
			</div>
			<div class="w-50  app-chart overflow-hide">
				<total-orders-mini-chart :width="160" :height="100"></total-orders-mini-chart>
			</div>
		</div>
	</app-card>
</template>

<script>
	import TotalOrdersMiniChart from "Components/Charts/TotalOrdersMiniChart";

	export default {
		components: {
			TotalOrdersMiniChart
		}
	};
</script>