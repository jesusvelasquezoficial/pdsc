<template>
  <f7-page>
    <f7-navbar title="Tasas del Mercado" back-link="Back">
      <f7-nav-right>
        <small>{{ dfhora }}</small>
        <f7-link icon="fas fa-user" panel-open="right"></f7-link>
      </f7-nav-right>
    </f7-navbar>
    <f7-block class="mt-0">
      <b-row>
        <b-col sm="12" md="6">
          <f7-block-title class="mt-2">
            <h1 class="pl-5">
              Euro
              <small style="color: #999; fontSize:18px">Oficial y Paralelo</small>
            </h1>
          </f7-block-title>
          <!-- <datepicker placeholder="Start Date" v-model="periodStart" name="start-date"></datepicker> -->
          <!-- <datepicker placeholder="End Date" v-model="periodEnd" name="end-date"></datepicker> -->
          <!-- <button @click="increase()">Increase height</button> -->
          <f7-block>
            <!-- Graficos de linea -->
            <line-chart
              id="mercadoEuro"
              :chartData="dataEuro"
              :options="options"
              :styles="myStyles"
            ></line-chart>
          </f7-block>
        </b-col>
        <b-col sm="12" md="6">
          <f7-block-title class="mt-2">
            <h1 class="pl-5">
              Dolar
              <small style="color: #999; fontSize:18px">Oficial y Paralelo</small>
            </h1>
          </f7-block-title>
          <f7-block class="mt-0">
            <!-- Graficos de linea -->
            <line-chart
              id="mercadoDolar"
              :chartData="dataDolar"
              :options="options"
              :styles="myStyles"
            ></line-chart>
          </f7-block>
        </b-col>
      </b-row>
      <b-row>
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
                <tr v-for="(item, i) in tablaE" :key="i">
                  <td class="fecha">{{ item.fecha }}</td>
                  <td class="euro">{{ item.euroOficial }}</td>
                  <td class="dolar">{{ item.euroParalelo }}</td>
                </tr>
              </tbody>
            </table>
          </f7-block>
        </b-col>
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
                <tr v-for="(item, i) in tablaD" :key="i">
                  <td class="fecha">{{ item.fecha }}</td>
                  <td class="euro">{{ item.dolarOficial }}</td>
                  <td class="dolar">{{ item.dolarToday }}</td>
                  <td class="dolar">{{ item.monitorDolar }}</td>
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
import moment from "moment";
// import "chartjs-plugin-crosshair";
// import "chartjs-plugin-zoom";
import ChartDataLabels from "chartjs-plugin-datalabels";
import Datepicker from "vuejs-datepicker";
//Componentes
import LineChart from "./LineChart.js";
import { f7Row } from "framework7-vue";

export default {
  components: {
    LineChart,
    Datepicker
  },
  data() {
    return {
      dfhora: "",
      loaded: false,
      loaded2: false,
      fechas: null,
      fechaParalelo: null,

      width: 100,
      height: 480,

      euroOficial: null,
      dolarOficial: null,

      euroParalelo: null,
      dolarToday: null,
      fechaMonitor: null,
      monitorDolar: null,

      // periodStart: "01/01/2020",
      // periodEnd: new Date(),

      tablaE: [],
      tablaD: [],
      options: {
        plugins: [ChartDataLabels],
        scales: {
          xAxes: [
            {
              // type: "time",
              // distribution: "linear", //series
              // time: {
              // unit: "day",
              // displayFormats: {
              //   // quarter: "ll" //week
              //   quarter: "MMM YYYY" //day
              //   // quarter: "hA" //hour
              // }
              // },
              ticks: {
                // suggestedMin: "12/2/2019",
                // suggestedMax: "1/19/2020",
                // min: _startDate,
                // min: "01/01/2020",
                // max: "01/19/2020"
                // precision: 1,
                // stepSize: 0.5
              }
            }
          ],
          yAxes: [
            {
              // stacked: true,
              ticks: {
                callback: function(value, index, values) {
                  // return "BsS " + value;
                  return value;
                }
                // suggestedMin: 50000,
                // suggestedMax: 100000
                // min: 36000,
                // max: 95000,
                // precision: 1,
                // stepSize: 10000
              }
            }
          ]
        },
        title: {
          display: false,
          text: "Phoenix"
        },
        legend: {
          display: true,
          position: "bottom",
          align: "center",
          labels: {
            boxWidth: 10,
            fontSize: 12,
            fontStyle: "normal",
            // fontFamily: 'Arial',
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
        // showLines: false, // disable for all datasets
        animation: {
          duration: 0 // general animation time
        },
        responsive: true,
        // responsiveAnimationDuration: 0,
        maintainAspectRatio: false,
        // aspectRatio: 2,
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
        },
        plugins: {
          // legend: false,}
          title: false,
          datalabels: {
            display: false,
            align: context => {
              var index = context.dataIndex;
              var curr = context.dataset.data[index];
              var prev = context.dataset.data[index - 1];
              var next = context.dataset.data[index + 1];
              return prev < curr && next < curr
                ? "end"
                : prev > curr && next > curr
                ? "start"
                : "center";
            },
            backgroundColor: context => {
              return context.dataset.borderColor;
            },
            borderRadius: 4,
            color: "white",
            font: {
              size: 8,
              weight: 600
            },
            offset: 8,
            formatter: (value, context) => {
              var i = context.dataIndex;
              var prev = context.dataset.data[i - 1];
              var diff = prev !== undefined ? prev - value : 0;
              var glyph = diff < 0 ? "\u25B2" : diff > 0 ? "\u25BC" : "\u25C6";
              // return glyph + ' ' + Math.round(value);
              return glyph;
            }
          }
          // crosshair: {
          //   sync: {
          //     enabled: false
          //   },
          //   pan: {
          //     incrementer: 1 // Defaults to 5 if not included.
          //   },
          //   callbacks: {
          //     afterZoom: function(start, end) {
          //       setTimeout(function() {
          //         var mercadoEuro = document.getElementById("mercadoEuro");
          //         mercadoEuro.data.datasets[0].data = generate(start, end);
          //         mercadoEuro.update();
          //       }, 1000);
          //     }
          //   }
          // },
          // pan: {
          //   enabled: true, // Enable panning
          //   mode: "x", // Allow panning in the x direction
          //   rangeMin: {
          //     x: 4000 // Min value of the delay option
          //   },
          //   rangeMax: {
          //     x: 0 // Max value of the delay option
          //   }
          // },
          // zoom: {
          //   enabled: true, // Enable zooming
          //   mode: "x", // Allow zooming in the x direction
          //   rangeMin: {
          //     x: 2000 // Min value of the duration option
          //   },
          //   rangeMax: {
          //     x: 1000 // Max value of the duration option
          //   }
          // }
        }
      }
    };
  },
  methods: {
    increase() {
      this.height += 10;
    },
    generate(x1, x2) {
      if (moment.isMoment(x1)) {
        // translate time to x1, x2
        x1 =
          -2 -
          moment()
            .add(-2 * 86400, "seconds")
            .diff(x1, "seconds") /
            86400;
        x2 =
          2 -
          moment()
            .add(2 * 86400, "seconds")
            .diff(x2, "seconds") /
            86400;
      }

      var data = [];
      var x = x1;

      a = 0.7;
      b = 8;

      t = moment().add(x1 * 86400, "seconds");
      t2 = moment().add(x2 * 86400, "seconds");

      while (x <= x2) {
        y = 0;
        for (var n = 0; n < 10; n++) {
          y += Math.pow(a, n) * Math.cos(Math.pow(b, n) * 3.14 * x);
        }
        data.push({ x: moment().add(x * 86400, "seconds"), y: y });

        x += (x2 - x1) / 100;
      }

      return data;
    },
    hora: function() {
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
      this.dfhora = h + ":" + m + ":" + s;
    },
    getDataOficial() {
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
          euro[i] = eu.replace(",", ".");
          // euro[i] = parseFloat(eu.replace(",", "."));
          dolar[i] = d.replace(",", ".");
          // dolar[i] = parseFloat(d.replace(",", "."));
          dataEuro[i] = {
            x: fecha[i],
            y: euro[i]
          };
          dataDolar[i] = {
            x: fecha[i],
            y: dolar[i]
          };
        });

        // this.fechas = fecha;
        // this.euroOficial = dataEuro;
        // this.dolarOficial = dataDolar;
        this.euroOficial = euro;
        this.dolarOficial = dolar;
        this.loaded = true;
      });
    },
    getDataParalelo() {
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
          euroDtd[i] = eu2.replace(",", ".");
          // euro[i] = parseFloat(eu.replace(",", "."));
          dolarDtd[i] = d2.replace(",", ".");
          // dolar[i] = parseFloat(d.replace(",", "."));
          dataEuroDtd[i] = {
            x: fechaDtd[i],
            y: euroDtd[i]
          };
          dataDolarDtd[i] = {
            x: fechaDtd[i],
            y: dolarDtd[i]
          };
        });
        this.fechas = fechaDtd;
        // this.euroParalelo = dataEuroDtd;
        // this.dolarToday = dataDolarDtd;
        this.euroParalelo = euroDtd;
        this.dolarToday = dolarDtd;
        this.loaded2 = true;
      });
    },
    getDolarMonitor() {
      this.axios.get(Auth.URL + "/api/dm").then(res => {
        let dm = res.data.data;
        var fechaM = [];
        var dolarM = [];
        var dataDolarM = [];
        dm.forEach((e, i) => {
          var f = moment(e.fecha).format("L");
          fechaM[i] = f;
          var d = e.dolar.replace(".", "");
          dolarM[i] = d.replace(",", ".");
          // dolarM[i] = parseFloat(d.replace(",", "."));
          dataDolarM[i] = {
            x: fechaM[i],
            y: dolarM[i]
          };
        });
        this.monitorDolar = dolarM;
        this.loaded2 = true;
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
              fecha: valor.fecha,
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
              this.tablaE = tabla;
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
            fecha: valor.fecha,
            dolarOficial: valor.dolar,
            dolarToday: [],
            monitorDolar: []
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
                tabla[index].monitorDolar = valor.dolar;
              }
              this.tablaD = tabla;
            });
          });
        });
      });
    }
  },
  computed: {
    myStyles() {
      return {
        width: `${this.width}%`,
        height: `${this.height}px`,
        position: "relative"
      };
    },
    dataEuro() {
      return {
        type: "line",
        labels: this.fechas,
        datasets: [
          {
            // showLine: false, // disable for a single dataset
            label: "Euro Oficial",
            // lineTension: 0,
            borderWidth: 2,
            hoverBorderWidth: 3,
            borderColor: "Red",
            backgroundColor: "rgba(0, 0, 0, 0)",
            pointBorderColor: "Red",
            pointBackgroundColor: "Red",
            pointHoverBorderColor: "Red",
            pointHoverBackgroundColor: "Red",
            pointRadius: 0,
            // pointStyle: 'rectRounded',
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
            pointRadius: 0,
            // pointStyle: 'rectRounded',
            data: this.euroParalelo
          }
        ]
      };
    },
    dataDolar() {
      return {
        type: "line",
        labels: this.fechas,
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
            pointRadius: 0,
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
            pointRadius: 0,
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
            pointRadius: 0,
            data: this.monitorDolar
          }
        ]
      };
    }
  },
  mounted() {
    this.loaded = false;
    this.loaded2 = false;
    this.hora();
    this.getDataOficial();
    this.getDataParalelo();
    this.getDolarMonitor();
    this.getTablaEuro();
    this.getTablaDolar();
  }
};
</script>