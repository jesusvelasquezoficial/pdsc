<template>
  <div id='graph'>
    <b-row>
      <b-col sm="12" md="6" class="mb-4">
      <app-card heading="Dolar Oficial y Paralelo">
        <!-- Precios del dia -->
        <div class="mb-3 ml-4 d-flex justify-content-between align-items-center">
          <div class="col-md-4" style="border-left: solid 5px #252F5D;">
            <p class="p-0 m-0" style="font-size:.7rem">Dolar Oficial</p>
            <h3 class="p-0 m-0" style="font-size:1.2rem">{{precioDolarBCV}}</h3>
          </div>
          <div class="col-md-4" style="border-left: solid 5px Green;">
            <p class="p-0 m-0" style="font-size:.7rem">Dolar Today</p>
            <h3 class="p-0 m-0" style="font-size:1.2rem">{{precioDolarToday}}</h3>
          </div>
          <div class="col-md-4" style="border-left: solid 5px DarkOrange;">
            <p class="p-0 m-0" style="font-size:.7rem">Dolar Monitor</p>
            <h3 class="p-0 m-0" style="font-size:1.2rem">{{precioDolarMonitor}}</h3>
          </div>
        </div>
        <!-- Botones Escala de Tiempo -->
        <div class="mb-1 ml-4 d-flex justify-content-start align-items-center">
          <span style="color:#666666;">Zoom</span>
          <div class="col-sm-8 col-md-10 col-lg-7">
            <b-input-group>
              <b-button @click="sD7D" small outline color="gray" class="p-0">7d</b-button>
              <b-button @click="sD2S" small outline color="gray" class="p-0">2s</b-button>
              <b-button @click="sD30D" small outline color="gray" class="p-0">1m</b-button>
              <b-button @click="resertScaleDolar" small outline color="gray" class="p-0">3m</b-button>
              <b-button @click="resertScaleDolar" small outline color="gray" class="p-0">1y</b-button>
              <!-- <b-button @click="resertScaleDolar" small outline color="gray" class="p-0">YTD</b-button> -->
              <b-button @click="resertScaleDolar" small outline color="gray" class="p-0">ALL</b-button>
            </b-input-group>
          </div>
        </div>
        <!-- Graficos de linea -->
        <line-chart
          id="mercadoDolar"
          ref="mercadoDolar"
          :chartData="dataDolar"
          :options="optionsDolar"
          :styles="styles"
        ></line-chart>
      </app-card>
    </b-col>
    <b-col sm="12" md="6" class="mb-4">
      <app-card heading="Euro Oficial y Paralelo">
        <!-- Precio del Dia -->
        <div class="mb-3 ml-4 d-flex justify-content-start align-items-center">
          <div class="col-4 col-sm-5 col-md-4" style="border-left: solid 5px Red;">
            <p class="p-0 m-0" style="font-size:.7rem">Euro Oficial</p>
            <h3 class="p-0 m-0" style="font-size:1.2rem">{{precioEuroOficial}}</h3>
          </div>
          <div class="col-4 col-sm-5 col-md-4" style="border-left: solid 5px Darkred;">
            <p class="p-0 m-0" style="font-size:.7rem">Euro Paralelo</p>
            <h3 class="p-0 m-0" style="font-size:1.2rem">{{precioEuroParalelo}}</h3>
          </div>
        </div>
        <!-- Botones Escala de Tiempo -->
        <div class="mb-1 ml-4 d-flex justify-content-start align-items-center">
          <!-- <b-col class="p-0 m-0 mr-auto"> -->
          <span class="pr-2" style="color:#666666;">Zoom</span>
          <!-- </b-col> -->
          <div class="col-sm-8 col-md-10 col-lg-7">
            <b-input-group>
              <b-button @click="sE7D" small outline color="gray" class="p-0">7d</b-button>
              <b-button @click="sE2S" small outline color="gray" class="p-0">2s</b-button>
              <b-button @click="sE30D" small outline color="gray" class="p-0">1m</b-button>
              <b-button @click="resertScaleEuro" small outline color="gray" class="p-0">3m</b-button>
              <b-button @click="resertScaleEuro" small outline color="gray" class="p-0">1y</b-button>
              <!-- <f7-button @click="resertScaleEuro" small outline color="gray" class="p-0">YTD</f7-button> -->
              <b-button @click="resertScaleEuro" small outline color="gray" class="p-0">ALL</b-button>
            </b-input-group>
          </div>
        </div>
        <!-- Graficos de linea -->
        <line-chart
          id="mercadoEuro"
          ref="mercadoEuro"
          :chartData="dataEuro"
          :options="optionsEuro"
          :styles="styles"
        ></line-chart>
      </app-card>
    </b-col>
    </b-row>
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
      horaDF: null,
      width: 100,
      height: 500,
      
    }
  },
  computed: {
    ...mapState('tasas',[
      'precioDolarBCV',
      'precioDolarToday',
      'precioDolarMonitor',
      'precioEuroParalelo',
      'precioEuroOficial'
    ]),
    ...mapGetters('tasas', [
      'dataDolar',
      'dataEuro',
      'optionsEuro'
    ]),
    styles() {
      return {
        width: `${this.width}%`,
        height: `${this.height}px`,
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
          mode: "index", //point, nearest, dataset, x, y, interpolate
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
      'loadDataParalelo',
      'loadDataDolarMonitor',
      'sE7D',
      'sE2S',
      'sE30D',
      'sD7D',
      'sD2S',
      'sD30D',
      'resertScaleDolar',
      'resertScaleEuro',
    ])
  },
  mounted() {
    this.loadDataOficial();
    this.loadDataParalelo();
    this.loadDataDolarMonitor();
  },
}
</script>