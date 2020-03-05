<template>
  <div id='graph'>
    <b-row>
      <b-col sm="12" md="6" class="mb-4">
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
    </b-col>
    <b-col sm="12" md="6" class="mb-4">
      <app-card v-if="loadedGraphMercadoParalelo" heading="Euro Oficial y Paralelo" :headingMenu="true">
        <!-- Precio del Dia -->
        <div class="mb-3 ml-4 d-flex justify-content-start align-items-center">
          <div class="col-4 col-sm-5 col-md-4" style="border-left: solid 5px Red;">
            <router-link to="/forex/euro"  class="p-0 m-0" style="font-size:.7rem; color:#0081f2;"><b>Euro Oficial</b></router-link>
            <h3 class="p-0 m-0" style="font-size:1.2rem">{{precioEuroOficial}}</h3>
            <div :class="euroOficialColor == 'text-white' ? 'text-black' : euroOficialColor" style="font-size:10px;">
              <i :class="[euroOficialUpOrDown, 'mr-1']"></i>{{euroOficialVariacion}}%
            </div>
          </div>
          <div class="col-4 col-sm-5 col-md-4" style="border-left: solid 5px #4E0003;">
            <router-link to="/forex/euro"  class="p-0 m-0" style="font-size:.7rem; color:#0081f2;"><b>Euro Paralelo</b></router-link>
            <h3 class="p-0 m-0" style="font-size:1.2rem">{{precioEuroParalelo}}</h3>
             <div :class="euroParaleloColor == 'text-white' ? 'text-black' : euroParaleloColor" style="font-size:10px;">
              <i :class="[euroParaleloUpOrDown, 'mr-1']"></i>{{euroParaleloVariacion}}%
            </div>
          </div>
        </div>
        <!-- Botones Escala de Tiempo -->
        <div class="mb-1 ml-4 d-flex justify-content-start align-items-center">
          <!-- <b-col class="p-0 m-0 mr-auto"> -->
          <span class="pr-2" style="color:#666666;">Zoom</span>
          <!-- </b-col> -->
          <div class="col-sm-8 col-md-10 col-lg-7">
            <b-button @click="sE7D" size="sm" variant="outline-ligth">7d</b-button>
            <b-button @click="sE2S" size="sm" variant="outline-ligth">2s</b-button>
            <b-button @click="sE30D" size="sm" variant="outline-ligth">1m</b-button>
            <b-button @click="resertScaleEuro" size="sm" variant="outline-ligth">3m</b-button>
            <b-button @click="resertScaleEuro" size="sm" variant="outline-ligth">1y</b-button>
            <!-- <f7-button @click="resertScaleEuro" size="sm" variant="outline-ligth">YTD</f7-button> -->
            <b-button @click="resertScaleEuro" size="sm" variant="outline-ligth">ALL</b-button>
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
      width: 100,
      height: 75,
      
    }
  },
  computed: {
    ...mapState('tasas',[
      'minEuroX',
      'maxEuroX',
      'minEuroY',
      'maxEuroY',
      'loadedGraphMercadoOficial',
      'loadedGraphMercadoParalelo',
      'precioDolarBCV',
      'precioDolarToday',
      'precioDolarMonitor',
      'precioEuroParalelo',
      'precioEuroOficial',
      'dolarOficialVariacion',
      'dolarOficialUpOrDown',
      'dolarOficialColor',
      'dolarParaleloVariacion',
      'dolarParaleloUpOrDown',
      'dolarParaleloColor',
      'monitorDolarVariacion',
      'monitorDolarUpOrDown',
      'monitorDolarColor',
      'euroOficialVariacion',
      'euroOficialUpOrDown',
      'euroOficialColor',
      'euroParaleloVariacion',
      'euroParaleloUpOrDown',
      'euroParaleloColor',
    ]),
    ...mapGetters('tasas', [
      'dataDolar',
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
                min: this.minEuroX,
                max: this.maxEuroX
              }
            }
          ],
          yAxes: [
            {
              ticks: {
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
      'loadDataParalelo',
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
  created() {
    this.loadDataOficial();
    this.loadDataParalelo();
  },
}
</script>