import { Line, mixins } from 'vue-chartjs';
import ChartConfig from 'Constants/ChartConfig';
import { hexToRgbA } from 'Helpers/helpers';

export default {
    extends: Line,
    mixins: [mixins.reactiveProp],
    props: {
        chartdata: {
            type: Object,
            default: null
        },
        options: {
            type: Object,
            default: {
                scales: {
                    yAxes: [{
                        gridLines: {
                            display: true,
                            drawBorder: false,
                            backgroundColor: 'red',
                        },
                        ticks: {
                            display: true
                        }
                    }],
                    xAxes: [{
                        gridLines: {
                            display: false,
                            drawBorder: false,
                        },
                        ticks: {
                            display: true,
                            beginAtZero: 20
                        },
                        minorTicks: {
                            fontColor: 'red',
                        }
                    }]
                },
                legend: {
                    display: false
                },
                responsive: true,
                maintainAspectRatio: false
            }
        },
    },
    mounted() {

        let colorFondo = this.$refs.canvas.getContext('2d').createLinearGradient(0, this.$refs.canvas.height, 0, 0);
        let colorLinea = this.$refs.canvas.getContext('2d').createLinearGradient(0, this.$refs.canvas.height, 0, 0);
        colorFondo.addColorStop(0, hexToRgbA(ChartConfig.color.down, 0.3));
        colorFondo.addColorStop(1, hexToRgbA(ChartConfig.color.up, 0.3));
        colorLinea.addColorStop(0, hexToRgbA(ChartConfig.color.down, 0.3));
        colorLinea.addColorStop(1, hexToRgbA(ChartConfig.color.up, 0.3));
        console.log(this.$refs.canvas.height);
        if (true) {
            this.renderChart({
                labels: ['2020-01-01', '2020-01-02', '2020-01-03', '2020-01-04', '2020-01-05'],
                datasets: [{
                    label: 'Data',
                    fill: true,
                    borderWidth: 1,
                    pointRadius: 0,
                    backgroundColor: colorFondo,
                    borderColor: colorLinea,
                    data: [0, 2.21, -1.24, 1.53, 0]
                }]
            }, this.options);
        }
    }
}