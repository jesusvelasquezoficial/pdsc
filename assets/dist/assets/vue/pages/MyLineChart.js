import { Line, mixins } from 'vue-chartjs';

export default {
  extends: Line,  
  mixins: [mixins.reactiveProp],
  // props: ['chartData', 'options'],
  props:{
    chartData: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: null
    }
  },
  mounted() {
    this.renderChart(this.chartData, this.options);
  },
  watch: {
    chartData() {
      console.log('OCURRIO UN CAMBIO EN EL CHARTDATA');
      this.renderChart(this.chartData, this.options);
    },
    options() {
      console.log('OCURRIO UN CAMBIO EN LAS OPCIONES');
      this.renderChart(this.chartData, this.options);
    }
  }
}