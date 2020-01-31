<template>
	<div class="idb-block border-rad-lg" :class="varient">
		<div class="idb-block-content text-center ">
			<div class="mb-4">
				<vue-easy-pie-chart :percent="percent" :size="140" :line-width="5" :bar-color="barColor">
				</vue-easy-pie-chart>
			</div>
			<h3 class="mb-0 text-white">{{title}}</h3>
		</div>
	</div>
</template>

<script>
	import VueEasyPieChart from "vue-easy-pie-chart";

	export default {
		props: ["percent", "varient", "title", "barColor"],
		components: {
			VueEasyPieChart
		}
	};
</script>