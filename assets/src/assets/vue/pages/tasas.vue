<template>
  <f7-page style="background:#EEE;">
    <f7-navbar title="Tasas del Mercado" back-link="Back">
      <f7-nav-right>
        <small>{{horaDF}}</small>
        <f7-link icon="fas fa-user" panel-open="right"></f7-link>
      </f7-nav-right>
    </f7-navbar>
    <f7-block class="mb-0">
      <crypto-slider></crypto-slider>
      <div class="row">
        <div class="col-8">
          <div class="row">
            <div class="col-4 grid-b-space">
              <stats-card-v7 heading="Petroleo" color="text-danger"></stats-card-v7>
            </div>
            <div class="col-4 grid-b-space">
              <stats-card-v7 heading="Oro" color="text-success"></stats-card-v7>
            </div>
            <div class="col-4 grid-b-space">
              <stats-card-v7 heading="Petro" color="text-danger"></stats-card-v7>
            </div>
            <div class="col-4 grid-b-space">
              <stats-card-v7 heading="Bitcoin" color="text-success"></stats-card-v7>
            </div>
            <div class="col-4 grid-b-space">
              <stats-card-v7 heading="S&P 500" color="text-danger"></stats-card-v7>
            </div>
            <div class="col-4 grid-b-space">
              <stats-card-v7 heading="Nasdaq" :color="bitcoin.color"></stats-card-v7>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="row">
            <div class="col-md-6">CALENDARIO</div>
            <div class="col-md-6">CALENDARIO</div>
          </div>
        </div>
      </div>
    </f7-block>
    <f7-block class="mt-0">
      <!-- GRAFICOS DEL MERCADO -->
      <app-card>
        <b-row>
          <!-- DOLAR -->
          <b-col sm="12" md="6">
            <!-- TITULO -->
            <f7-block-title class="mt-2">
              <h1 class="pl-3">
                Dolar
                <small style="color: #999; fontSize:18px">Oficial y Paralelo</small>
              </h1>
            </f7-block-title>
            <!-- LAYOUT -->
            <f7-block class="mt-0" v-if="dataDolarLoaded">
              <!-- Precios del dia -->
              <div class="mb-3 pl-sm-2 ml-5 d-flex justify-content-between align-items-center">
                <div class="col-md-4" style="border-left: solid 5px #252F5D;">
                  <p class="p-0 m-0">Dolar Oficial</p>
                  <h3 class="p-0 m-0">{{precioDolarBCV}}</h3>
                </div>
                <div class="col-md-4" style="border-left: solid 5px Green;">
                  <p class="p-0 m-0">Dolar Today</p>
                  <h3 class="p-0 m-0">{{precioDolarToday}}</h3>
                </div>
                <div class="col-md-4" style="border-left: solid 5px DarkOrange;">
                  <p class="p-0 m-0">Dolar Monitor</p>
                  <h3 class="p-0 m-0">{{precioDolarMonitor}}</h3>
                </div>
              </div>
              <!-- Botones Escala de Tiempo -->
              <div class="mb-1 pl-2 ml-5 d-flex justify-content-start align-items-center">
                <span style="color:#666666;">Zoom</span>
                <div class="col-sm-8 col-md-10 col-lg-7">
                  <f7-segmented>
                    <f7-button @click="sD7D" small outline color="gray" class="p-0">7d</f7-button>
                    <f7-button @click="sD15D" small outline color="gray" class="p-0">15d</f7-button>
                    <f7-button @click="sD30D" small outline color="gray" class="p-0">1m</f7-button>
                    <f7-button @click="resertScaleDolar" small outline color="gray" class="p-0">3m</f7-button>
                    <f7-button @click="resertScaleDolar" small outline color="gray" class="p-0">1y</f7-button>
                    <!-- <f7-button @click="resertScaleDolar" small outline color="gray" class="p-0">YTD</f7-button> -->
                    <f7-button @click="resertScaleDolar" small outline color="gray" class="p-0">ALL</f7-button>
                  </f7-segmented>
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
            </f7-block>
            <!-- SPINNER -->
            <f7-block class="py-5 my-5 d-flex justify-content-center align-items-center" v-else>
              <fade-loader :loading="!dataDolarLoaded" color="DarkOrange" size="32px"></fade-loader>
            </f7-block>
          </b-col>
          <!-- EURO -->
          <b-col sm="12" md="6">
            <!-- TITULOS -->
            <f7-block-title class="mt-2">
              <h1 class="pl-3">
                Euro
                <small style="color: #999; fontSize:18px">Oficial y Paralelo</small>
              </h1>
            </f7-block-title>
            <!-- LAYOUT -->
            <f7-block class="mt-0" v-if="dataEuroLoaded">
              <!-- Precio del Dia -->
              <div class="mb-3 pl-2 ml-5 d-flex justify-content-start align-items-center">
                <div class="col-4 col-sm-5 col-md-4" style="border-left: solid 5px Red;">
                  <p class="p-0 m-0">Euro Oficial</p>
                  <h3 class="p-0 m-0">{{precioEuroOficial}}</h3>
                </div>
                <div class="col-4 col-sm-5 col-md-4" style="border-left: solid 5px Darkred;">
                  <p class="p-0 m-0">Euro Paralelo</p>
                  <h3 class="p-0 m-0">{{precioEuroParalelo}}</h3>
                </div>
              </div>
              <!-- Botones Escala de Tiempo -->
              <div class="mb-1 pl-2 ml-5 d-flex justify-content-start align-items-center">
                <!-- <b-col class="p-0 m-0 mr-auto"> -->
                <span class="pr-2" style="color:#666666;">Zoom</span>
                <!-- </b-col> -->
                <div class="col-sm-8 col-md-10 col-lg-7">
                  <f7-segmented>
                    <f7-button @click="sE7D" small outline color="gray" class="p-0">7d</f7-button>
                    <f7-button @click="sE15D" small outline color="gray" class="p-0">15d</f7-button>
                    <f7-button @click="sE30D" small outline color="gray" class="p-0">1m</f7-button>
                    <f7-button @click="resertScaleEuro" small outline color="gray" class="p-0">3m</f7-button>
                    <f7-button @click="resertScaleEuro" small outline color="gray" class="p-0">1y</f7-button>
                    <!-- <f7-button @click="resertScaleEuro" small outline color="gray" class="p-0">YTD</f7-button> -->
                    <f7-button @click="resertScaleEuro" small outline color="gray" class="p-0">ALL</f7-button>
                  </f7-segmented>
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
            </f7-block>
            <!-- SPINNER -->
            <f7-block class="py-5 my-5 d-flex justify-content-center align-items-center" v-else>
              <fade-loader :loading="!dataEuroLoaded" color="DarkOrange" size="32px"></fade-loader>
            </f7-block>
          </b-col>
        </b-row>
      </app-card>
    </f7-block>
    <f7-block>
      <!-- TABLAS HISTORICAS -->
      <b-row>
        <!-- DOLAR -->
        <b-col sm="12" md="6">
          <app-card customClasses="grid-b-space" heading="Dolar Informacion Diaria">
            <div class="table-responsive">
              <div class="unseen">
                <table class="table table-hover table-bordered table-striped">
                  <thead>
                    <tr class="bg-primary">
                      <th class="fecha" style="min-width:100%">Fecha</th>
                      <th class="numeric euro">Dolar Oficial</th>
                      <th class="numeric dolar">Dolar Today</th>
                      <th class="numeric dolar">Monitor Dolar</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, i) in tablaDolar" :key="i">
                      <td class="fecha">{{ item.fecha }}</td>
                      <td class="numeric euro">{{ item.dolarOficial }}</td>
                      <td class="numeric dolar">{{ item.dolarToday }}</td>
                      <td class="numeric dolar">{{ item.dolarMonitor }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <!-- table responsive closed -->
          </app-card>
        </b-col>
        <!-- EURO -->
        <b-col sm="12" md="6">
          <app-card customClasses="grid-b-space" heading="Euro Informacion Diaria">
            <div class="table-responsive">
              <div class="unseen">
                <table class="table table-hover table-bordered table-striped">
                  <thead>
                    <tr class="bg-primary">
                      <th class="fecha" style="min-width:100%">Fecha</th>
                      <th class="numeric euro">Euro Oficial</th>
                      <th class="numeric dolar">Euro Paralelo</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, i) in tablaEuro" :key="i">
                      <td class="fecha">{{ item.fecha }}</td>
                      <td class="numeric euro">{{ item.euroOficial }}</td>
                      <td class="numeric dolar">{{ item.euroParalelo }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </app-card>
        </b-col>
      </b-row>
    </f7-block>
  </f7-page>
</template>
<script>
//Recursos
import Auth from "./../../auth";
// import ChartDataLabels from "chartjs-plugin-datalabels";
import { FadeLoader } from "vue-spinner/dist/vue-spinner.min.js";
import Datepicker from "vuejs-datepicker";
import moment from "moment";
import "regenerator-runtime/runtime";
// import "chartjs-plugin-crosshair";
// import "chartjs-plugin-zoom";
//Componentes
import LineChart from "./LineChart.js";
import { f7Row } from "framework7-vue";
import ChartConfig from "Constants/ChartConfig";
import StatsCardV7 from "Components/StatsCardV7/StatsCardV7";
import LineChartShadow from "Components/Charts/LineChartShadow";
import TraderHistory from "Components/Widgets/TradeHistory";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    LineChart,
    Datepicker,
    FadeLoader,
    StatsCardV7,
    LineChartShadow,
    TraderHistory
  },
  data() {
    return {
      // Global Parametros
      // ...mapState({
      //   minDolarX: state => state.user,
      //   minEuroX: state => state.minEuroX
      // }),
      ChartConfig,
      bitcoin: {
        icon: "cc BTC text-success",
        name: "Bitcoin",
        color: "fw-semi-bold text-success",
        duration: "last 4 days",
        market_cap: "2.3",
        market_cap_icon: "fa-arrow-up",
        market_cap_color: "success-text",
        chartLabel: ["A", "B", "C", "D", "E"],
        data: [1, 26, 8, 22, 1],
        chartBorderColor: ChartConfig.color.success
      },
      f7D: null,
      f15D: null,
      f30D: null,
      minPE7D: null,
      minPE15D: null,
      minPE30D: null,
      minPD7D: null,
      minPD15D: null,
      minPD30D: null,
      horaDF: null,
      width: 100,
      height: 500,
      precioDolarBCV: null,
      precioDolarToday: null,
      precioDolarMonitor: null,
      precioEuroOficial: null,
      precioEuroParalelo: null,
      // Pre-Carga Flag
      dataDolarLoaded: false,
      dataEuroLoaded: false,
      // Barra de escala
      scaleEuroX: null,
      scaleDolarX: null,
      scaleEuroY: null,
      scaleDolarY: null,
      // Axis Graph 2D (x, y)
      baseMinDolarX: null,
      baseMaxDolarX: null,
      minDolarX: null,
      maxDolarX: null,
      minDolarY: null,
      maxDolarY: null,
      baseMinEuroX: null,
      baseMaxEuroX: null,
      minEuroX: null,
      maxEuroX: null,
      minEuroY: null,
      maxEuroY: null,
      // dataDolar Parametros
      dolarFecha: null,
      dolarBCV: null,
      dolarToday: null,
      dolarMonitor: null,
      // dataEuro Parametros
      euroFecha: null,
      euroOficial: null,
      euroParalelo: null,
      // Tablas de Historicos
      tablaDolar: [],
      tablaEuro: []
    };
  },
  methods: {
    sE7D() {
      this.minEuroX = this.f7D;
      this.minEuroY = this.minPE7D;
    },
    sE15D() {
      this.minEuroX = this.f15D;
      this.minEuroY = this.minPE15D;
    },
    sE30D() {
      this.minEuroX = this.f30D;
      this.minEuroY = this.minPE30D;
    },
    sD7D() {
      this.minDolarX = this.f7D;
      this.minDolarY = this.minPD7D;
    },
    sD15D() {
      this.minDolarX = this.f15D;
      this.minDolarY = this.minPD15D;
    },
    sD30D() {
      this.minDolarX = this.f30D;
      this.minDolarY = this.minPD30D;
    },
    resertScaleDolar() {
      this.minDolarX = this.baseMinDolarX;
      this.minDolarY = this.baseMinDolarY;
    },
    resertScaleEuro() {
      this.minEuroX = this.baseMinEuroX;
      this.minEuroY = this.baseMinEuroY;
    },
    async getDataOficial() {
      this.axios.get(Auth.URL + "/api/bcv").then(async res => {
        let bcv = res.data.data;
        var fecha = [];
        var dolar = [];
        var euro = [];
        var dataEuro = [];
        var dataDolar = [];
        await bcv.forEach((e, i) => {
          var f = moment(e.fecha).format("L");
          fecha[i] = f;
          var eu = e.euro.replace(".", "");
          var d = e.dolar.replace(".", "");
          // euro[i] = eu.replace(",", ".");
          euro[i] = parseFloat(eu.replace(",", "."));
          // dolar[i] = d.replace(",", ".");
          dolar[i] = parseFloat(d.replace(",", "."));
          dataEuro[i] = {
            x: fecha[i],
            y: euro[i]
          };
          dataDolar[i] = {
            x: fecha[i],
            y: dolar[i]
          };
        });
        this.euroOficial = euro;
        this.dolarOficial = dolar;
        this.precioDolarBCV = dolar[dolar.length - 1];
        this.precioEuroOficial = euro[euro.length - 1];
        this.dataDolarLoaded = true;
      });
    },
    async getDataParalelo() {
      this.axios.get(Auth.URL + "/api/dtd").then(async res => {
        let dtd = res.data.data;
        var fechaDtd = [];
        var dolarDtd = [];
        var euroDtd = [];
        var dataEuroDtd = [];
        var dataDolarDtd = [];
        await dtd.forEach((e, i) => {
          var f = moment(e.fecha).format("L");
          fechaDtd[i] = f;
          var eu2 = e.euro.replace(".", "");
          var d2 = e.dolar.replace(".", "");
          // euroDtd[i] = eu2.replace(",", ".");
          euroDtd[i] = parseFloat(eu2.replace(",", "."));
          // dolarDtd[i] = d2.replace(",", ".");
          dolarDtd[i] = parseFloat(d2.replace(",", "."));
          dataEuroDtd[i] = {
            x: fechaDtd[i],
            y: euroDtd[i]
          };
          dataDolarDtd[i] = {
            x: fechaDtd[i],
            y: dolarDtd[i]
          };
        });
        //Fecha Global
        this.f7D = fechaDtd[fechaDtd.length - 7];
        this.f15D = fechaDtd[fechaDtd.length - 15];
        this.f30D = fechaDtd[fechaDtd.length - 30];
        this.minPE7D =
          parseFloat(
            dtd[dtd.length - 7].euro.replace(".", "").replace(",", ".")
          ) -
          (parseFloat(
            dtd[dtd.length - 7].euro.replace(".", "").replace(",", ".")
          ) *
            20) /
            100;
        this.minPE15D =
          parseFloat(
            dtd[dtd.length - 15].euro.replace(".", "").replace(",", ".")
          ) -
          (parseFloat(
            dtd[dtd.length - 15].euro.replace(".", "").replace(",", ".")
          ) *
            25) /
            100;
        this.minPE30D =
          parseFloat(
            dtd[dtd.length - 30].euro.replace(".", "").replace(",", ".")
          ) -
          (parseFloat(
            dtd[dtd.length - 30].euro.replace(".", "").replace(",", ".")
          ) *
            15) /
            100;
        this.minPD7D =
          parseFloat(
            dtd[dtd.length - 7].dolar.replace(".", "").replace(",", ".")
          ) -
          (parseFloat(
            dtd[dtd.length - 7].dolar.replace(".", "").replace(",", ".")
          ) *
            20) /
            100;
        this.minPD15D =
          parseFloat(
            dtd[dtd.length - 15].dolar.replace(".", "").replace(",", ".")
          ) -
          (parseFloat(
            dtd[dtd.length - 15].dolar.replace(".", "").replace(",", ".")
          ) *
            25) /
            100;
        this.minPD30D =
          parseFloat(
            dtd[dtd.length - 30].dolar.replace(".", "").replace(",", ".")
          ) -
          (parseFloat(
            dtd[dtd.length - 30].dolar.replace(".", "").replace(",", ".")
          ) *
            20) /
            100;
        this.fecha = fechaDtd;
        this.euroFecha = fechaDtd;
        this.dolarFecha = fechaDtd;
        // Valor de la Tasa
        this.euroParalelo = euroDtd;
        this.dolarToday = dolarDtd;
        // Escala del Euro (x, y)
        // this.minEuroX = moment(dtd[0].fecha).format("L");
        this.minEuroX = this.f7D;
        this.maxEuroX = moment(dtd[dtd.length - 1].fecha).format("L");
        this.minEuroY =
          // Math.min(...euroDtd) - (Math.min(...euroDtd) * 13) / 100;
          this.minPE7D;
        this.maxEuroY = Math.max(...euroDtd) + (Math.max(...euroDtd) * 5) / 100;
        // Escala del Dolar (x, y)
        // this.minDolarX = moment(dtd[0].fecha).format("L");
        this.minDolarX = this.f7D;
        this.maxDolarX = moment(dtd[dtd.length - 1].fecha).format("L");
        this.minDolarY =
          // Math.min(...dolarDtd) - (Math.min(...dolarDtd) * 23) / 100;
          this.minPD7D;
        this.maxDolarY =
          Math.max(...dolarDtd) + (Math.max(...dolarDtd) * 5) / 100;
        this.baseMinEuroX = moment(dtd[0].fecha).format("L"); // this.minEuroX;
        this.baseMinDolarX = moment(dtd[0].fecha).format("L"); // this.minDolarX;
        this.baseMinEuroY =
          Math.min(...euroDtd) - (Math.min(...euroDtd) * 13) / 100;
        // this.minEuroY;
        this.baseMinDolarY =
          Math.min(...dolarDtd) - (Math.min(...dolarDtd) * 23) / 100;
        // this.minDolarY;
        this.precioDolarToday = dolarDtd[dolarDtd.length - 1];
        this.precioEuroParalelo = euroDtd[euroDtd.length - 1];
        // Pre-Carga del Euro
        this.dataEuroLoaded = true;
      });
    },
    async getDolarMonitor() {
      this.axios.get(Auth.URL + "/api/dm").then(async res => {
        let dm = res.data.data;
        var fechaM = [];
        var dolarM = [];
        var dataDolarM = [];
        await dm.forEach((e, i) => {
          var f = moment(e.fecha).format("L");
          fechaM[i] = f;
          var d = e.dolar.replace(".", "");
          // dolarM[i] = d.replace(",", ".");
          dolarM[i] = parseFloat(d.replace(",", "."));
          dataDolarM[i] = {
            x: fechaM[i],
            y: dolarM[i]
          };
        });
        this.dolarMonitor = dolarM;
        this.precioDolarMonitor = dolarM[dolarM.length - 1];
        // this.dataDolarLoaded = true;
      });
    },
    getTablaDolar() {
      this.axios.get(Auth.URL + "/api/bcvDesc").then(res => {
        var data = res.data.data;
        var tabla = {};
        data.forEach((valor, index) => {
          tabla[index] = {
            fecha: moment(valor.fecha).format("L"),
            dolarOficial: valor.dolar,
            dolarToday: [],
            dolarMonitor: []
          };
        });
        this.axios.get(Auth.URL + "/api/dtdDesc").then(res2 => {
          var data = res2.data.data;
          data.forEach((valor, index) => {
            if (tabla[index] != undefined) {
              tabla[index].dolarToday = valor.dolar;
            }
          });
          this.axios.get(Auth.URL + "/api/dmDesc").then(res3 => {
            var data = res3.data.data;
            data.forEach((valor, index) => {
              if (tabla[index] != undefined) {
                tabla[index].dolarMonitor = valor.dolar;
              }
              this.tablaDolar = tabla;
            });
          });
        });
      });
    },
    getTablaEuro() {
      this.axios
        .get(Auth.URL + "/api/bcvDesc")
        .then(res => {
          var data = res.data.data;
          var tabla = {};
          data.forEach((valor, index) => {
            tabla[index] = {
              fecha: moment(valor.fecha).format("L"),
              euroOficial: valor.euro,
              euroParalelo: null
            };
          });
          return tabla;
        })
        .then(tabla => {
          this.axios.get(Auth.URL + "/api/dtdDesc").then(res => {
            var data = res.data.data;
            data.forEach((valor, index) => {
              if (tabla[index] != undefined) {
                tabla[index].euroParalelo = valor.euro;
              }
              this.tablaEuro = tabla;
            });
          });
        });
    },
    hora() {
      let t = new Date();
      let h = t.getHours();
      let m = t.getMinutes();
      m = setFormato(m);
      let s = t.getSeconds();
      s = setFormato(s);

      function setFormato(i) {
        if (i < 10) {
          i = "0" + i;
        }
        return i;
      }
      t = setTimeout(this.hora, 500);
      this.horaDF = h + ":" + m + ":" + s;
    }
  },
  computed: {
    dataDolar() {
      return {
        type: "line",
        labels: this.dolarFecha,
        datasets: [
          {
            label: "Dolar Oficial BCV",
            borderColor: "#252F5D",
            borderWidth: 2,
            hoverBorderWidth: 3,
            backgroundColor: "rgba(0, 0, 0, 0)",
            pointBorderColor: "#252F5D",
            pointBackgroundColor: "#252F5D",
            pointHoverBorderColor: "#252F5D",
            pointHoverBackgroundColor: "#252F5D",
            pointRadius: 1,
            data: this.dolarOficial
          },
          {
            label: "Dolar Today",
            borderColor: "Green",
            borderWidth: 2,
            hoverBorderWidth: 3,
            backgroundColor: "rgba(0, 0, 0, 0)",
            pointBorderColor: "Green",
            pointBackgroundColor: "Green",
            pointHoverBorderColor: "Green",
            pointHoverBackgroundColor: "Green",
            pointRadius: 1,
            data: this.dolarToday
          },
          {
            label: "Monitor Dolar",
            borderColor: "DarkOrange",
            borderWidth: 2,
            hoverBorderWidth: 3,
            backgroundColor: "rgba(0, 0, 0, 0)",
            pointBorderColor: "DarkOrange",
            pointBackgroundColor: "DarkOrange",
            pointHoverBorderColor: "DarkOrange",
            pointHoverBackgroundColor: "DarkOrange",
            pointRadius: 1,
            data: this.dolarMonitor
          }
        ]
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
                min: this.minDolarX,
                max: this.maxDolarX
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                min: this.minDolarY,
                max: this.maxDolarY
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
    },
    styles() {
      return {
        width: `${this.width}%`,
        height: `${this.height}px`,
        position: "relative"
      };
    },
    dataEuro() {
      return {
        type: "line",
        labels: this.euroFecha,
        datasets: [
          {
            // showLine: false, // disable for a single dataset
            label: "Euro Oficial",
            borderWidth: 2, //3
            hoverBorderWidth: 3, //3
            borderColor: "Red",
            backgroundColor: "rgba(0, 0, 0, 0)",
            pointBorderColor: "Red",
            pointBackgroundColor: "Red",
            pointHoverBorderColor: "Red",
            pointHoverBackgroundColor: "Red",
            pointRadius: 1,
            data: this.euroOficial
          },
          {
            label: "Euro Paralelo",
            borderWidth: 2,
            hoverBorderWidth: 3,
            borderColor: "Darkred",
            backgroundColor: "rgba(0, 0, 0, 0)",
            pointBorderColor: "Darkred",
            pointBackgroundColor: "Darkred",
            pointHoverBorderColor: "Darkred",
            pointHoverBackgroundColor: "Darkred",
            pointRadius: 1,
            data: this.euroParalelo
          }
        ]
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
          mode: "index", //point, nearest, dataset, x, y, interpolate
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
      };
    }
  },
  created() {
    this.dataDolarLoaded = false;
    this.dataEuroLoaded = false;
    this.getDolarMonitor();
    this.getDataOficial();
    this.getDataParalelo();
    this.getTablaEuro();
    this.getTablaDolar();
    this.hora();
  }
};
</script>