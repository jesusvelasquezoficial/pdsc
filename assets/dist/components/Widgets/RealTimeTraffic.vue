<template>
	<app-card appCardClass="h-100 d-flex flex-column justify-content-between" :heading="$t('message.realTimeTraffic')"
		:headingMenu="true" customClasses="real-traffic-widget overflow-hide h-100" footerClasses="p-0"
		:enableFooter="true">
		<real-time-traffic-chart :width="350" :height="100"></real-time-traffic-chart>
		<ul slot="footer" class="footer-border border-0">
			<li class="w-33" v-for="(data, index) in trafficData" :key="index">
				<h5 class="font-weight-bold mb text-center">{{data.request}}</h5>
				<span class="font-xs">{{data.message}}</span>
			</li>
		</ul>
	</app-card>
</template>

<script>

	import RealTimeTrafficChart from "Components/Charts/RealTimeTrafficChart";

	export default {
		data() {
			return {
				trafficData: [
					{
						request: "5100",
						message: "Minimum Incoming Request"
					},
					{
						request: "5100",
						message: "Highest Incoming Request"
					},
					{
						request: "41%",
						message: "Avg. Per Hour"
					}
				]
			}
		},
		components: {
			RealTimeTrafficChart
		}
	}
</script>