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
      const { white } = ChartConfig.color;
      this.renderChart(
         {
            labels: ['Men', 'Women', 'Children', 'Old Age', 'Men2', 'Women2'],
            datasets: [
               {
                  pointBackgroundColor: white,
                  borderColor: white,
                  fill: false,
                  pointBorderWidth: 0,
                  label: 'Data One',
                  data: [20, 10, 35, 20, 50, 60]
               }
            ]
         },
         this.options
      )
   }
}