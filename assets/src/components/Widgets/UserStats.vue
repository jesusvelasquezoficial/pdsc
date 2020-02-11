<template>
	<stacked-line-chart :width="300" :height="150" onresize></stacked-line-chart>
</template>

<script>
	import StackedLineChart from "Components/Charts/StackedLineChart";

	export default {
		components: {
			StackedLineChart
		}
	};
</script>