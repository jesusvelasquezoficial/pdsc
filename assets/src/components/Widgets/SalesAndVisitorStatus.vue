<template>
	<div class="sales-visitors-wrap">
		<sales-and-visitor-chart :width="300" :height="130"></sales-and-visitor-chart>
	</div>
</template>

<script>
	import SalesAndVisitorChart from "Components/Charts/SalesAndVisitorChart";

	export default {
		components: {
			SalesAndVisitorChart
		}
	}
</script>