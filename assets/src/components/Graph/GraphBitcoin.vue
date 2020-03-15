<template>
  <div>
    <app-card heading="Bitcoin" :headingMenu="true" v-if="loadedGraphBitcoin">
      <!-- Precios del dia -->
      <div class="mb-3 ml-4 d-flex justify-content-between align-items-center">
        <div class="col-md-4" style="border-left: solid 5px Orange;">
          <router-link to="/criptomonedas/bitcoin"  class="p-0 m-0" style="font-size:.7rem; color:#0081f2;"><b>Bitcoin</b></router-link>
          <h5 class="p-0 m-0" style="font-size:1.2rem"><b>$ {{precioBitcoin}}</b></h5>
          <div :class="bitcoinColor == 'text-white' ? 'text-black' : bitcoinColor" style="font-size:10px;">
            <i :class="[bitcoinUpOrDown, bitcoinColor == 'text-white' ? 'text-black' : bitcoinColor, 'mr-1']"></i>{{bitcoinVariacion}}%
          </div>
        </div>
      </div>
      <!-- Botones Escala de Tiempo -->
      <div class="mb-1 ml-4 d-flex justify-content-start align-items-center">
        <span style="color:#666666;"><small>Zoom</small></span>
        <div class="col-sm-8 col-md-10 col-lg-7">
          <b-button @click="sBtc7D" size="sm" variant="outline-dark"><small>7d</small></b-button>
          <b-button @click="sBtc2S" size="sm" variant="outline-dark"><small>2s</small></b-button>
          <b-button @click="sBtc30D" size="sm" variant="outline-dark"><small>1m</small></b-button>
          <b-button @click="resertScaleBitcoin" size="sm" variant="outline-dark"><small>3m</small></b-button>
          <b-button @click="resertScaleBitcoin" size="sm" variant="outline-dark"><small>1y</small></b-button>
          <!-- <b-button @click="resertScaleBitcoin" size="sm" variant="outline-dark">YTD</b-button> -->
          <b-button @click="resertScaleBitcoin" size="sm" variant="outline-dark"><small>ALL</small></b-button>
        </div>
      </div>
      <!-- Graficos de linea -->
      <line-chart
        id="monedaBitcoin"
        ref="monedaBitcoin"
        :chartData="dataBitcoin"
        :options="optionsBitcoin"
        :styles="styles"
      ></line-chart>
    </app-card>
    <div v-else class="d-flex justify-content-center py-5 mb-5">
      <fade-loader :loading="!loadedGraphBitcoin" color="DarkOrange" size="32px"></fade-loader>
    </div>
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
      'loadedGraphBitcoin',
      'precioBitcoin',
      'bitcoinVariacion',
      'bitcoinUpOrDown',
      'bitcoinColor',
    ]),
    ...mapGetters('tasas', [
      'dataBitcoin',
    ]),
    styles() {
      return {
        width: `${this.width}%`,
        height: `${this.height}vh`,
        position: "relative"
      };
    },
    optionsBitcoin() {
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
                min: this.$store.state.tasas.minBitcoinX,
                max: this.$store.state.tasas.maxBitcoinX,
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                min: this.$store.state.tasas.minBitcoinY,
                max: this.$store.state.tasas.maxBitcoinY,
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
      'loadDataBitcoin',
      'sBtc7D',
      'sBtc2S',
      'sBtc30D',
      'resertScaleBitcoin',
    ])
  },
  created() {
    this.loadDataBitcoin();
  },
}
</script>