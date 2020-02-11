import { Line } from 'vue-chartjs'
import ChartConfig from 'Constants/ChartConfig';

export default {
	extends: Line,
	data: function () {
		return {
			options: {
				responsive: true,
				maintainAspectRatio: true,
				legend: {
					display: false
				},
				scales: {
					yAxes: [
						{
							display: false
						}
					],
					xAxes: [
						{
							display: false
						}
					]
				}
			}
		};
	},
	mounted() {
		const { white,danger } = ChartConfig.color;
		this.renderChart(
			{
				labels: ['Men', 'Women', 'Children', 'Old Age', 'Men2','Women2'],
				datasets: [
					{
						backgroundColor: '#f87979',
						pointBackgroundColor: white,
						borderColor: white,
						lineTension: 0,
						fill: false,
						pointBorderWidth: 0,
						label: 'Data One',
						data: [10,20, 5, 40,10,60]
					}
				]
			},
			this.options
		)
	}
}