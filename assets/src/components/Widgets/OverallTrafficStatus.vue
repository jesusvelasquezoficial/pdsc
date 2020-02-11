<template>
	<app-card appCardClass="h-100" headingMenu="true" customClasses="traffic-status-widget  grid-b-space"
		:heading="$t('message.overallTrafficStatus')"
		contentCustomClass="d-flex justify-content-between flex-column h-90 overflow-hide" blockTitleClass="mb-3">
		<div class="d-flex status-wrap mb-30">
			<div class="status-content" v-for="status in trafficStatus" :key="status.title">
				<span class="mb-1 d-block font-sm text-muted">{{status.title}}</span>
				<div class="d-flex justify-content-between align-items-bottom">
					<h4 class="mb-0 fw-bold">{{status.count}}</h4>
					<i class="zmdi font-lg" :class="[status.icon, status.color]"></i>
				</div>
			</div>
		</div>
		<overall-traffic-chart :width="400" :height="130"></overall-traffic-chart>
	</app-card>
</template>

<script>
	import OverallTrafficChart from "Components/Charts/OverallTrafficChart";

	export default {
		components: {
			OverallTrafficChart
		},
		data() {
			return {
				trafficStatus: [
					{
						title: "Online Sources",
						count: "3500",
						icon: "zmdi-long-arrow-up",
						color: "text-primary"
					},
					{
						title: "Today",
						count: "170,20",
						icon: "zmdi-long-arrow-up",
						color: "text-primary"
					},
					{
						title: "Last Month%",
						count: "20.30%",
						icon: "zmdi-long-arrow-down",
						color: "text-danger"
					}
				]
			}
		}
	};
</script>