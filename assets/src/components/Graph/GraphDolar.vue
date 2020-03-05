<template>
  <app-card v-if="loadedGraphMercadoOficial" heading="Dolar Oficial y Paralelo" :headingMenu="true">
    <!-- Precios del dia -->
    <div class="mb-3 ml-4 d-flex justify-content-between align-items-center">
      <div class="col-md-4" style="border-left: solid 5px #252F5D;">
        <router-link to="/forex/dolar"  class="p-0 m-0" style="font-size:.7rem; color:#0081f2;"><b>Dolar Oficial</b></router-link>
        <h3 class="p-0 m-0" style="font-size:1.2rem">{{precioDolarBCV}}</h3>
          <div :class="dolarOficialColor == 'text-white' ? 'text-black' : dolarOficialColor" style="font-size:10px;">
          <i :class="[dolarOficialUpOrDown, 'mr-1']"></i>{{dolarOficialVariacion}}%
        </div>
      </div>
      <div class="col-md-4" style="border-left: solid 5px Green;">
        <router-link to="/forex/dolar"  class="p-0 m-0" style="font-size:.7rem; color:#0081f2;"><b>Dolar Today</b></router-link>
        <h3 class="p-0 m-0" style="font-size:1.2rem">{{precioDolarToday}}</h3>
        <div :class="dolarParaleloColor == 'text-white' ? 'text-black' : dolarParaleloColor" style="font-size:10px;">
          <i :class="[dolarParaleloUpOrDown, 'mr-1']"></i>{{dolarParaleloVariacion}}%
        </div>
      </div>
      <div class="col-md-4" style="border-left: solid 5px DarkOrange;">
        <router-link to="/forex/dolar"  class="p-0 m-0" style="font-size:.7rem; color:#0081f2;"><b>Dolar Monitor</b></router-link>
        <!-- <p class="p-0 m-0" style="font-size:.7rem">Dolar Monitor</p> -->
        <h3 class="p-0 m-0" style="font-size:1.2rem">{{precioDolarMonitor}}</h3>
        <div :class="monitorDolarColor == 'text-white' ? 'text-black' : monitorDolarColor" style="font-size:10px;">
          <i :class="[monitorDolarUpOrDown, 'mr-1']"></i>{{monitorDolarVariacion}}%
        </div>
      </div>
    </div>
    <!-- Botones Escala de Tiempo -->
    <div class="mb-1 ml-4 d-flex justify-content-start align-items-center">
      <span style="color:#666666;">Zoom</span>
      <div class="col-sm-8 col-md-10 col-lg-7">
        <b-button @click="sD7D" size="sm" variant="outline-ligth">7d</b-button>
        <b-button @click="sD2S" size="sm" variant="outline-ligth">2s</b-button>
        <b-button @click="sD30D" size="sm" variant="outline-ligth">1m</b-button>
        <b-button @click="resertScaleDolar" size="sm" variant="outline-ligth">3m</b-button>
        <b-button @click="resertScaleDolar" size="sm" variant="outline-ligth">1y</b-button>
        <!-- <b-button @click="resertScaleDolar" size="sm" variant="outline-ligth">YTD</b-button> -->
        <b-button @click="resertScaleDolar" size="sm" variant="outline-ligth">ALL</b-button>
      </div>
    </div>
    <!-- Graficos de linea -->
    <line-chart
      v-if="loadedGraphMercadoOficial" 
      ref="mercadoDolar"
      :chartData="dataDolar"
      :options="optionsDolar"
      :styles="styles"
    ></line-chart>
  </app-card>
  <div v-else class="d-flex justify-content-center py-5 mb-5">
    <fade-loader :loading="!loadedGraphMercadoOficial" color="DarkOrange" size="32px"></fade-loader>
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
      'loadedGraphMercadoOficial',
      'precioDolarBCV',
      'precioDolarToday',
      'precioDolarMonitor',
      'dolarOficialVariacion',
      'dolarOficialUpOrDown',
      'dolarOficialColor',
      'dolarParaleloVariacion',
      'dolarParaleloUpOrDown',
      'dolarParaleloColor',
      'monitorDolarVariacion',
      'monitorDolarUpOrDown',
      'monitorDolarColor',
    ]),
    ...mapGetters('tasas', [
      'dataDolar',
    ]),
    styles() {
      return {
        width: `${this.width}%`,
        height: `${this.height}vh`,
        position: "relative"
      };
    },
    optionsDolar() {
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
                min: this.$store.state.tasas.minDolarX,
                max: this.$store.state.tasas.maxDolarX,
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                min: this.$store.state.tasas.minDolarY,
                max: this.$store.state.tasas.maxDolarY,
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
          titleFontSize: 12,
          titleAlign: "center",
          titleSpacing: 2,
          titleMarginBottom: 6,
          xPadding: 6,
          yPadding: 6,
          caretPadding: 2,
          caretSize: 5,
          cornerRadius: 6,
          borderWidth: 0,
          borderColor: "rgba(0, 0, 0, 1)",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          position: "nearest"
        }
      };
    }
  },
  methods: {
    ...mapActions('tasas', [
      'loadDataOficial',
      'sD7D',
      'sD2S',
      'sD30D',
      'resertScaleDolar',
    ])
  },
  created() {
    this.loadDataOficial();
  },
}
</script>