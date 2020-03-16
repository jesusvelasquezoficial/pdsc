<template>
  <app-card v-if="loadedGraphMercadoParalelo" heading="Euro Oficial y Paralelo" :headingMenu="true">
    <!-- Precio del Dia -->
    <div class="mb-3 ml-4 d-flex justify-content-start align-items-center">
      <div class="col-4 col-sm-5 col-md-4" style="border-left: solid 5px Red;">
        <router-link to="/forex/euro"  class="p-0 m-0" style="font-size:.7rem; color:#0081f2;"><b style="color:#0081f2;">Euro Oficial</b></router-link>
        <h6 class="p-0 m-0"><b>$ {{precioEuroOficial}}</b></h6>
        <div :class="euroOficialColor == 'text-white' ? 'text-black' : euroOficialColor" style="font-size:10px;">
          <i :class="[euroOficialUpOrDown, euroOficialColor == 'text-white' ? 'text-black' : euroOficialColor, 'mr-1']"></i>{{euroOficialVariacion}}%
        </div>
      </div>
      <div class="col-4 col-sm-5 col-md-4" style="border-left: solid 5px #4E0003;">
        <router-link to="/forex/euro"  class="p-0 m-0" style="font-size:.7rem; color:#0081f2;"><b style="color:#0081f2;">Euro Paralelo</b></router-link>
        <h6 class="p-0 m-0"><b>$ {{precioEuroParalelo}}</b></h6>
          <div :class="euroParaleloColor == 'text-white' ? 'text-black' : euroParaleloColor" style="font-size:10px;">
          <i :class="[euroParaleloUpOrDown, euroParaleloColor == 'text-white' ? 'text-black' : euroParaleloColor, 'mr-1']"></i>{{euroParaleloVariacion}}%
        </div>
      </div>
    </div>
    <!-- Botones Escala de Tiempo -->
    <div class="mb-1 ml-4 d-flex justify-content-start align-items-center">
      <!-- <b-col class="p-0 m-0 mr-auto"> -->
      <span class="pr-2" style="color:#666666;"><small>Zoom</small></span>
      <!-- </b-col> -->
      <div class="col-sm-8 col-md-10 col-lg-7">
        <b-button @click="sE7D" size="sm" variant="outline-dark"><small>7d</small></b-button>
        <b-button @click="sE2S" size="sm" variant="outline-dark"><small>2s</small></b-button>
        <b-button @click="sE30D" size="sm" variant="outline-dark"><small>1m</small></b-button>
        <b-button @click="resertScaleEuro" size="sm" variant="outline-dark"><small>3m</small></b-button>
        <b-button @click="resertScaleEuro" size="sm" variant="outline-dark"><small>1y</small></b-button>
        <!-- <f7-button @click="resertScaleEuro" size="sm" variant="outline-dark">YTD</f7-button> -->
        <b-button @click="resertScaleEuro" size="sm" variant="outline-dark"><small>ALL</small></b-button>
      </div>
    </div>
    <!-- Graficos de linea -->
    <line-chart
      v-if="loadedGraphMercadoParalelo" 
      ref="mercadoEuro"
      :chartData="dataEuro"
      :options="optionsEuro"
      :styles="styles"
    ></line-chart>
  </app-card>
  <div v-else class="d-flex justify-content-center py-5 mb-5">
    <fade-loader :loading="!loadedGraphMercadoParalelo" color="DarkOrange" size="32px"></fade-loader>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from 'vuex';
import LineChart from "Components/Charts/MyLineChart.js";
export default {
  components:{
    LineChart,
  },
  data() {
    return {
      width: 100,
      height: 75,
    }
  },
  computed: {
    ...mapState('tasas',[
      'loadedGraphMercadoParalelo',
      'minEuroX',
      'maxEuroX',
      'minEuroY',
      'maxEuroY',
      'precioEuroParalelo',
      'precioEuroOficial',
      'euroOficialVariacion',
      'euroOficialUpOrDown',
      'euroOficialColor',
      'euroParaleloVariacion',
      'euroParaleloUpOrDown',
      'euroParaleloColor',
    ]),
    ...mapGetters('tasas', [
      'dataEuro'
    ]),
    styles() {
      return {
        width: `${this.width}%`,
        height: `${this.height}vh`,
        position: "relative"
      };
    },
    optionsEuro() {
      return {
        // showLines: false, // disable for all datasets
        responsive: true,
        maintainAspectRatio: false,
        // aspectRatio: 2,
        // plugins: [ChartDataLabels],
        scales: {
          xAxes: [
            {
              ticks: {
                fontColor: "#CCC",
                min: this.minEuroX,
                max: this.maxEuroX
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                fontColor: "#CCC",
                min: this.minEuroY,
                max: this.maxEuroY
                // stepSize: 20000
                // callback: function(value, index, values) {
                //   // return "BsS " + value;
                //   return value;
                // }
              }
            }
          ]
        },
        legend: {
          display: true,
          position: "bottom",
          align: "center",
          labels: {
            boxWidth: 10,
            fontSize: 12,
            fontStyle: "normal",
            fontColor: "#666",
            usePointStyle: true
          }
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        },
        animation: {
          duration: 0 // general animation time
        },
        tooltips: {
          mode: "point", //index, nearest, dataset, x, y, interpolate
          intersect: false,
          // titleFontFamily
          // titleFontColor: '#fff',
          titleFontSize: 12,
          titleAlign: "center",
          titleSpacing: 2,
          titleMarginBottom: 6,
          // bodyFontFamily
          //footerFontFamily
          xPadding: 6,
          yPadding: 6,
          caretPadding: 2,
          caretSize: 5,
          cornerRadius: 6,
          // multiKeyBackground: '#fff',
          borderColor: "rgba(0, 0, 0, 1)",
          borderWidth: 0,
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          position: "nearest"
          // axis: 'y'
        }
      }
    },
  },
  methods: {
    ...mapActions('tasas', [
      'loadDataOficial',
      'loadDataParalelo',
      'sE7D',
      'sE2S',
      'sE30D',
      'resertScaleEuro',
    ])
  },
  created() {
    this.loadDataOficial();
    this.loadDataParalelo();
  },
}
</script>