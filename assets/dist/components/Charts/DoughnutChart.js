import { Doughnut } from 'vue-chartjs'
import ChartConfig from "Constants/ChartConfig";

export default {
	extends: Doughnut,
	data() {
		return {
			options: {
				responsive: true,
            maintainAspectRatio: true,
				legend: {
					position: 'bottom',
					labels: {
						fontSize: 12,
						usePointStyle: true
					}
				},
				cutoutPercentage: 65,
				padding: 20,
			}
		}
	},
	mounted() {
		const { color } = ChartConfig;
		this.renderChart({
			labels: ['Men', 'Women', 'Kids'],
			datasets: [{
				data: [250, 100, 70],
				backgroundColor: [
					color.primary,
					color.danger,
					color.warning
				],
				borderWidth: [3, 3, 3],
				hoverBackgroundColor: [
					color.primary,
					color.danger,
					color.warning
				]
			}]
		}, this.options)
	}
}