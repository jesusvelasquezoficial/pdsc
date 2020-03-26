import { Line, mixins } from 'vue-chartjs';
import ChartConfig from 'Constants/ChartConfig';
import { hexToRgbA } from 'Helpers/helpers';

export default {
    extends: Line,
    props: {
        dataSet: {
            type: Array,
            default: null
        },
        labels: {
            type: Array,
            default: null
        },
    },
    data() {
        return {
            colorFondo: null,
            colorLinea: null,
            options: {
                scales: {
                    yAxes: [{
                        gridLines: {
                            display: false,
                            drawBorder: false
                        },
                        ticks: {
                            display: false
                        }
                    }],
                    xAxes: [{
                        gridLines: {
                            display: false,
                            drawBorder: false
                        },
                        ticks: {
                            display: false,
                            beginAtZero: 20
                        }
                    }]
                },
                legend: {
                    display: false
                },
                responsive: true,
                maintainAspectRatio: false
            },
        };
    },
    mounted() {
        if (this.$refs.canvas.height != null) {
            this.colorFondo = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, this.$refs.canvas.height);
            this.colorLinea = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, this.$refs.canvas.height);
        }
        this.colorFondo.addColorStop(0, hexToRgbA(ChartConfig.color.up, 0.3));
        this.colorFondo.addColorStop(0.45, hexToRgbA(ChartConfig.color.up, 0.3));
        this.colorFondo.addColorStop(0.65, hexToRgbA(ChartConfig.color.down, 0.3));
        this.colorFondo.addColorStop(1, hexToRgbA(ChartConfig.color.down, 0.3));
        this.colorLinea.addColorStop(0, '#00FF00');
        this.colorLinea.addColorStop(0.45, '#00FF00');
        this.colorLinea.addColorStop(0.65, '#FF0000');
        this.colorLinea.addColorStop(1, '#FF0000');

        if (this.dataSet && this.labels) {
            this.renderChart({
                labels: this.labels,
                datasets: [{
                    label: 'Data',
                    fill: true,
                    borderWidth: 1,
                    pointRadius: 0,
                    backgroundColor: this.colorFondo,
                    borderColor: this.colorLinea,
                    data: this.dataSet
                }]
            }, this.options);
        }
    },
}