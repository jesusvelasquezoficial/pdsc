<template>
  <f7-page>
    <f7-navbar title="Tasas del Mercado" back-link="Back">
      <f7-nav-right>
        <small>{{horaDF}}</small>
        <f7-link icon="fas fa-user" panel-open="right"></f7-link>
      </f7-nav-right>
    </f7-navbar>
    <f7-block class="mt-0">
      <!-- GRAFICOS DEL MERCADO -->
      <b-row>
        <b-col sm="12" md="6">
          <f7-block-title class="mt-2">
            <h1 class="pl-5">
              Dolar
              <small style="color: #999; fontSize:18px">Oficial y Paralelo</small>
            </h1>
          </f7-block-title>
          <f7-block class="mt-0" v-if="dataDolarLoaded">
            <!-- Botones Escala de Tiempo -->
            <div class="mb-1 pl-2 ml-5 d-flex justify-content-start align-items-center">
              <!-- <b-col class="p-0 m-0 mr-auto"> -->
              <span style="color:#666666;">Zoom</span>
              <!-- </b-col> -->
              <div class="col-sm-8 col-md-10 col-lg-8">
                <f7-segmented>
                  <f7-button @click="resertScaleDolar" small outline color="gray" class="p-0">1d</f7-button>
                  <f7-button @click="sD7D" small outline color="gray" class="p-0">7d</f7-button>
                  <f7-button @click="sD30D" small outline color="gray" class="p-0">1m</f7-button>
                  <f7-button @click="resertScaleDolar" small outline color="gray" class="p-0">3m</f7-button>
                  <f7-button @click="resertScaleDolar" small outline color="gray" class="p-0">1y</f7-button>
                  <f7-button @click="resertScaleDolar" small outline color="gray" class="p-0">YTD</f7-button>
                  <f7-button @click="resertScaleDolar" small outline color="gray" class="p-0">ALL</f7-button>
                </f7-segmented>
              </div>
            </div>
            <!-- Graficos de linea -->
            <line-chart
              style="position: relative; height:500px;"
              id="mercadoDolar"
              ref="mercadoDolar"
              :chartData="dataDolar"
              :options="optionsDolar"
              :styles="styles"
            ></line-chart>
          </f7-block>
          <f7-block class="d-flex justify-content-center align-items-center" v-else>
            <sync-loader :loading="!dataDolarLoaded" color="darkorange" size="24px"></sync-loader>
          </f7-block>
        </b-col>
        <b-col sm="12" md="6">
          <f7-block-title class="mt-2">
            <h1 class="pl-5">
              Euro
              <small style="color: #999; fontSize:18px">Oficial y Paralelo</small>
            </h1>
          </f7-block-title>
          <f7-block v-if="dataEuroLoaded">
            <!-- Botones Escala de Tiempo -->
            <div class="mb-1 pl-2 ml-5 d-flex justify-content-start align-items-center">
              <!-- <b-col class="p-0 m-0 mr-auto"> -->
              <span class="pr-2" style="color:#666666;">Zoom</span>
              <!-- </b-col> -->
              <div class="col-sm-8 col-md-10 col-lg-8">
                <f7-segmented>
                  <f7-button @click="resertScaleEuro" small outline color="gray" class="p-0">1d</f7-button>
                  <f7-button @click="sE7D" small outline color="gray" class="p-0">7d</f7-button>
                  <f7-button @click="sE30D" small outline color="gray" class="p-0">1m</f7-button>
                  <f7-button @click="resertScaleEuro" small outline color="gray" class="p-0">3m</f7-button>
                  <f7-button @click="resertScaleEuro" small outline color="gray" class="p-0">1y</f7-button>
                  <f7-button @click="resertScaleEuro" small outline color="gray" class="p-0">YTD</f7-button>
                  <f7-button @click="resertScaleEuro" small outline color="gray" class="p-0">ALL</f7-button>
                </f7-segmented>
              </div>
            </div>
            <!-- Graficos de linea -->
            <line-chart
              style="position: relative; height:500px;"
              id="mercadoEuro"
              ref="mercadoEuro"
              :chartData="dataEuro"
              :options="optionsEuro"
              :styles="styles"
            ></line-chart>
          </f7-block>
          <f7-block class="d-flex justify-content-center align-items-center" v-else>
            <sync-loader :loading="!dataEuroLoaded" color="darkorange" size="24px"></sync-loader>
          </f7-block>
        </b-col>
      </b-row>
      <!-- TABLAS HISTORICAS -->
      <b-row>
        <b-col sm="12" md="6">
          <f7-block-title class="mt-0">
            <h1>Dolar</h1>Información Diaria
          </f7-block-title>
          <f7-block>
            <table class="data-table">
              <thead>
                <tr>
                  <th class="fecha" style="min-width:100%">Fecha</th>
                  <th class="euro">Dolar Oficial BCV</th>
                  <th class="dolar">Dolar Today</th>
                  <th class="dolar">Monitor Dolar</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, i) in tablaDolar" :key="i">
                  <td class="fecha">{{ item.fecha }}</td>
                  <td class="euro">{{ item.dolarOficial }}</td>
                  <td class="dolar">{{ item.dolarToday }}</td>
                  <td class="dolar">{{ item.dolarMonitor }}</td>
                </tr>
              </tbody>
            </table>
          </f7-block>
        </b-col>
        <b-col sm="12" md="6">
          <f7-block-title class="mt-0">
            <h1>Euro</h1>Información Diaria
          </f7-block-title>
          <f7-block>
            <table class="data-table">
              <thead>
                <tr>
                  <th class="fecha" style="min-width:100%">Fecha</th>
                  <th class="euro">Euro Oficial</th>
                  <th class="dolar">Euro Paralelo</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, i) in tablaEuro" :key="i">
                  <td class="fecha">{{ item.fecha }}</td>
                  <td class="euro">{{ item.euroOficial }}</td>
                  <td class="dolar">{{ item.euroParalelo }}</td>
                </tr>
              </tbody>
            </table>
          </f7-block>
        </b-col>
      </b-row>
    </f7-block>
  </f7-page>
</template>

<script>
//Recursos
import Auth from "./../../auth";
// import ChartDataLabels from "chartjs-plugin-datalabels";
import { SyncLoader } from "vue-spinner/dist/vue-spinner.min.js";
import Datepicker from "vuejs-datepicker";
import moment from "moment";
// import "chartjs-plugin-crosshair";
// import "chartjs-plugin-zoom";
//Componentes
import LineChart from "./LineChart.js";
import { f7Row } from "framework7-vue";
import { mapState, mapActions } from "vuex";
export default {
  components: {
    LineChart,
    Datepicker,
    SyncLoader
  },
  data() {
    return {
      // Global Parametros
      // ...mapState({
      //   minDolarX: state => state.user,
      //   minEuroX: state => state.minEuroX
      // }),
      f7D: "",
      f30D: "",
      minPE7D: "",
      minPE30D: "",
      minPD7D: "",
      minPD30D: "",
      horaDF: "",
      width: 100,
      height: 480,
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
    sE30D() {
      this.minEuroX = this.f30D;
      this.minEuroY = this.minPE30D;
    },
    sD7D() {
      this.minDolarX = this.f7D;
      this.minDolarY = this.minPD7D;
    },
    sD30D() {
      this.minDolarX = this.f30D;
      this.minDolarY = this.minPD30D;
    },
    resertScaleDolar(){
      this.minDolarX = this.baseMinDolarX
      this.minDolarY = this.baseMinDolarY
    },
    resertScaleEuro(){
      this.minEuroX = this.baseMinEuroX
      this.minEuroY = this.baseMinEuroY
    },
    async getDataOficial() {
      this.axios.get(Auth.URL + "/api/bcv").then(res => {
        let bcv = res.data.data;
        var fecha = [];
        var dolar = [];
        var euro = [];
        var dataEuro = [];
        var dataDolar = [];
        bcv.forEach((e, i) => {
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
      });
    },
    async getDataParalelo() {
      this.axios.get(Auth.URL + "/api/dtd").then(res => {
        let dtd = res.data.data;
        var fechaDtd = [];
        var dolarDtd = [];
        var euroDtd = [];
        var dataEuroDtd = [];
        var dataDolarDtd = [];
        dtd.forEach((e, i) => {
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
        this.f30D = fechaDtd[fechaDtd.length - 30];
        this.minPE7D = parseFloat(dtd[dtd.length - 7].euro.replace(".", "").replace(",", ".")) - (parseFloat(dtd[dtd.length - 7].euro.replace(".", "").replace(",", ".")) * 13) / 100;
        this.minPE30D = parseFloat(dtd[dtd.length - 30].euro.replace(".", "").replace(",", ".")) - (parseFloat(dtd[dtd.length - 30].euro.replace(".", "").replace(",", ".")) * 10) / 100;
        this.minPD7D = parseFloat(dtd[dtd.length - 7].dolar.replace(".", "").replace(",", ".")) - (parseFloat(dtd[dtd.length - 7].dolar.replace(".", "").replace(",", ".")) * 15) / 100;
        this.minPD30D = parseFloat(dtd[dtd.length - 30].dolar.replace(".", "").replace(",", ".")) - (parseFloat(dtd[dtd.length - 30].dolar.replace(".", "").replace(",", ".")) * 15) / 100;
        this.fecha = fechaDtd;
        this.euroFecha = fechaDtd;
        this.dolarFecha = fechaDtd;
        // Valor de la Tasa
        this.euroParalelo = euroDtd;
        this.dolarToday = dolarDtd;
        // Escala del Euro (x, y)
        this.minEuroX = moment(dtd[0].fecha).format("L");
        this.maxEuroX = moment(dtd[dtd.length - 1].fecha).format("L");
        this.minEuroY = Math.min(...euroDtd) - (Math.min(...euroDtd) * 13) / 100;
        this.maxEuroY = Math.max(...euroDtd) + (Math.max(...euroDtd) * 5) / 100;
        // Escala del Dolar (x, y)
        this.minDolarX = moment(dtd[0].fecha).format("L");
        this.maxDolarX = moment(dtd[dtd.length - 1].fecha).format("L");
        this.minDolarY = Math.min(...dolarDtd) - (Math.min(...dolarDtd) * 23) / 100;
        this.maxDolarY = Math.max(...dolarDtd) + (Math.max(...dolarDtd) * 5) / 100;
        this.baseMinEuroX = this.minEuroX
        this.baseMinDolarX = this.minDolarX
        this.baseMinEuroY = this.minEuroY
        this.baseMinDolarY = this.minDolarY
        // Pre-Carga del Euro
        this.dataEuroLoaded = true;
      });
    },
    async getDolarMonitor() {
      this.axios.get(Auth.URL + "/api/dm").then(res => {
        let dm = res.data.data;
        var fechaM = [];
        var dolarM = [];
        var dataDolarM = [];
        dm.forEach((e, i) => {
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
        this.dataDolarLoaded = true;
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
            borderColor: "Blue",
            borderWidth: 2,
            hoverBorderWidth: 3,
            backgroundColor: "rgba(0, 0, 0, 0)",
            pointBorderColor: "Blue",
            pointBackgroundColor: "Blue",
            pointHoverBorderColor: "Blue",
            pointHoverBackgroundColor: "Blue",
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
            borderColor: "rgba(232, 126, 4, 1)",
            borderWidth: 2,
            hoverBorderWidth: 3,
            backgroundColor: "rgba(0, 0, 0, 0)",
            pointBorderColor: "rgba(232, 126, 4, 1)",
            pointBackgroundColor: "rgba(232, 126, 4, 1)",
            pointHoverBorderColor: "rgba(232, 126, 4, 1)",
            pointHoverBackgroundColor: "rgba(232, 126, 4, 1)",
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
    this.getDataOficial();
    this.getDataParalelo();
    this.getDolarMonitor();
    this.getTablaEuro();
    this.getTablaDolar();
    this.hora();
  },
  mounted() {}
};
</script>