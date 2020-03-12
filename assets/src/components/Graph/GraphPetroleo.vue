<template>
  <app-card v-if="loadedGraphPetroleo" heading="Petroleo de Venezuela" :headingMenu="true">
    <!-- Precios del dia -->
    <div class="mb-3 ml-4 d-flex justify-content-between align-items-center">
      <div class="col-md-4" style="border-left: solid 5px #000;">
        <router-link to="/materia-prima/petroleo"  class="p-0 m-0" style="font-size:.7rem; color:#0081f2;"><b>Petroleo</b></router-link>
        <h5 class="p-0 m-0" style="font-size:1.2rem"><b>$ {{precioPetroleo}}</b></h5>
        <div :class="petroleoColor == 'text-white' ? 'text-black' : petroleoColor" style="font-size:10px;">
          <i :class="[petroleoUpOrDown, petroleoColor == 'text-white' ? 'text-black' : petroleoColor, 'mr-1']"></i>{{petroleoVariacion}}%
        </div>
      </div>
    </div>
    <!-- Botones Escala de Tiempo -->
    <div class="mb-1 ml-4 d-flex justify-content-start align-items-center">
      <span style="color:#666666;"><small>Zoom</small></span>
      <div class="col-sm-8 col-md-10 col-lg-7">
        <b-button @click="sP7D" size="sm" variant="outline-ligth"><small>7d</small></b-button>
        <b-button @click="sP2S" size="sm" variant="outline-ligth"><small>2s</small></b-button>
        <b-button @click="sP30D" size="sm" variant="outline-ligth"><small>1m</small></b-button>
        <b-button @click="resertScalePetroleo" size="sm" variant="outline-ligth"><small>3m</small></b-button>
        <b-button @click="resertScalePetroleo" size="sm" variant="outline-ligth"><small>1y</small></b-button>
        <!-- <b-button @click="resertScalePetroleo" size="sm" variant="outline-ligth">YTD</b-button> -->
        <b-button @click="resertScalePetroleo" size="sm" variant="outline-ligth"><small>ALL</small></b-button>
      </div>
    </div>
    <!-- Graficos de linea -->
    <line-chart
      id="monedaPetroleo"
      ref="monedaPetroleo"
      :chartData="dataPetroleo"
      :options="optionsPetroleo"
      :styles="styles"
    ></line-chart>
  </app-card>
  <div v-else class="d-flex justify-content-center py-5 mb-5">
    <fade-loader :loading="!loadedGraphPetroleo" color="DarkOrange" size="32px"></fade-loader>
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
      height: 75,
    }
  },
  computed: {
    ...mapState('tasas',[
      'loadedGraphPetroleo',
      'precioPetroleo',
      'petroleoVariacion',
      'petroleoUpOrDown',
      'petroleoColor',
    ]),
    ...mapGetters('tasas', [
      'dataPetroleo',
    ]),
    styles() {
      return {
        width: `${this.width}%`,
        height: `${this.height}vh`,
        position: "relative"
      };
    },
    optionsPetroleo() {
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
                min: this.$store.state.tasas.minPetroleoX,
                max: this.$store.state.tasas.maxPetroleoX,
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                min: this.$store.state.tasas.minPetroleoY,
                max: this.$store.state.tasas.maxPetroleoY,
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
      'loadDataPetroleo',
      'sP7D',
      'sP2S',
      'sP30D',
      'resertScalePetroleo',
    ])
  },
  created() {
    this.loadDataPetroleo();
  },
}
</script>