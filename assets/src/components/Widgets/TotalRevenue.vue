<template>
	<app-card appCardClass="h-100" customClasses="gradient-primary overflow-hide h-100"
		contentCustomClass="h-100 d-flex flex-column justify-content-between chart-card">
		<h5 class="mb-20">{{$t('message.totalRevenue')}}</h5>
		<div class="d-flex align-items-end">
			<div class="w-40 chart-content">
				<h2 class="card-count mb-15">
					<count-up :startVal="0" :endVal="256" :decimals="0" :duration="10"></count-up>
				</h2>
				<p class="mb-0 card-status">{{$t('message.revenueToday')}}</p>
			</div>
			<div class="w-60 app-chart overflow-hide">
				<revenue-mini-chart :width="100" :height="50"></revenue-mini-chart>
			</div>
		</div>
	</app-card>
</template>

<script>
	import RevenueMiniChart from "Components/Charts/RevenueMiniChart";

	export default {
		components: {
			RevenueMiniChart
		}
	};
</script>