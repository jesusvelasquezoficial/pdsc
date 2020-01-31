<template>
	<div>
		<vue-perfect-scrollbar :settings="settings" style="height:390px">
			<b-list-group>
				<b-list-group-item v-for="(trending, index) in trendingData" :key="index"
					class="overflow-hide d-flex align-items-center py-15 px-20">
					<h6 class="mb-0 title w-50">{{trending.title}}</h6>
					<span class="d-inline-block count font-xs fw-bold w-25">{{trending.sales}}</span>
					<div class="chart overflow-hide w-25">
						<tiny-bar-chart :width="100" :height="30" :data="trending.tinyBarChartData" :color="trending.color">
						</tiny-bar-chart>
					</div>
				</b-list-group-item>
			</b-list-group>
		</vue-perfect-scrollbar>
		<div class="py-3 px-4 view-more-wrap">
			<b-button variant="primary" class="btn-sm text-capitalize">view all</b-button>
		</div>
	</div>
</template>

<script>
	import TinyBarChart from "Components/Charts/TinyBarChart";
	import ChartConfig from "Constants/ChartConfig";

	export default {
		components: {
			TinyBarChart
		},
		data() {
			return {
				trendingData: [
					{
						title: "Reactify Reactjs Admin Theme",
						sales: "1,35,400",
						tinyBarChartData: [300, 500, 700, 600, 420, 750, 600],
						color: ChartConfig.color.success,
					},
					{
						title: "Mali Gardening Theme",
						sales: "4,15,450",
						tinyBarChartData: [100, 250, 350, 400, 700, 600, 400],
						color: ChartConfig.color.primary
					},
					{
						title: "Saral Construction Theme",
						sales: "2,15,120",
						tinyBarChartData: [120, 450, 550, 320, 240, 650, 700],
						color: ChartConfig.color.warning
					},
					{
						title: "Aadi Construction Theme",
						sales: "5,25,220",
						tinyBarChartData: [300, 500, 700, 600, 420, 750, 600],
						color: ChartConfig.color.danger
					},
					{
						title: "Angel’s Fashion Blog",
						sales: "15,400",
						tinyBarChartData: [500, 150, 350, 400, 150, 200, 100],
						color: ChartConfig.color.info
					},
					{
						title: "Chankya Admin Theme",
						sales: "6,18,201",
						tinyBarChartData: [300, 500, 700, 600, 420, 750, 600],
						color: ChartConfig.color.danger
					},
					{
						title: "Photography Wordpress Theme",
						sales: "2,80,800",
						tinyBarChartData: [300, 500, 700, 600, 420, 750, 600],
						color: ChartConfig.color.success
					},
					{
						title: "Law Firm Wordpress Theme",
						sales: "5,40,620",
						tinyBarChartData: [450, 350, 600, 750, 560, 250, 450],
						color: ChartConfig.color.primary
					}
				],
				settings: {
					maxScrollbarLength: 100
				}
			};
		}
	};
</script>