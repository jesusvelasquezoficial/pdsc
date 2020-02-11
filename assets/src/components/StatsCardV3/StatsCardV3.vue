<template>
	<app-card customClasses="magazine-stats-card">
		<div>
			<div class="stats-card-title">
				<h3 class="font-weight-normal mb-3">
					<i :class="icon"></i>
					{{ title }}
				</h3>
			</div>
			<slot></slot>
			<div class="stats-card-chart d-flex justify-content-between align-items-center">
				<p class="mb-0">{{ viewer }}</p>
				<p class="mb-0">Trade: {{ trade }} %</p>
			</div>
		</div>
	</app-card>
</template>

<script>
	import LineChart from "Components/Charts/LineChart";
	export default {
		props: ["title", "viewer", "trade", "dataSet", "icon", "color", "labels", "extraClass"],
		components: {
			LineChart
		}
	};
</script>