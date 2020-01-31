<template>
	<div>
		<line-chart-v2 :width="650" :height="400" :dataSet="data" :labels="labels" :labelX="labelX" :labelY="labelY"
			:borderColor="ChartConfig.color.primary" :label="label">
		</line-chart-v2>
	</div>
</template>

<script>
	import LineChartV2 from "Components/Charts/LineChartV2";
	import ChartConfig from "Constants/ChartConfig";

	export default {
		props: ['data', 'labels', 'label', 'labelX', 'labelY'],
		components: {
			LineChartV2
		},
		data() {
			return {
				ChartConfig
			};
		}
	};
</script>