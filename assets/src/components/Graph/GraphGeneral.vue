<template>
  <div>
    <app-card v-if="loadedTasas" :heading="cardTitulo" :headingMenu="cardMenu">
      <!-- Indicadores -->
      <div class="container-fluid">
        <div class="row mb-2">
          <!-- Indicador -->
          <div class="col-4 col-sm-3 col-md-2 p-2" v-for="(indicador, index) in indicadoresGraficoGeneral" :key="index">
            <!-- Color -->
            <div class="float-left mr-2" :style="`height: 2.7em !important; border: solid 3px ${indicador.color}`"></div>
            <!-- Nombre y Url -->
            <router-link :to="indicador.url" style="font-size:.8em;">
              <b style="color:#0081f2;">{{indicador.nombre}}</b>
            </router-link>
            <!-- Precio -->
            <h6 class="p-0 m-0">
              <b>$ {{indicador.precio}}</b>
            </h6>
            <!-- Variacion -->
            <div :class="[indicador.variacion > 0 ? 'text-up' : '', indicador.variacion == 0 ? 'text-white' : '', indicador.variacion < 0 ? 'text-down' : '']" class="d-flex align-items-center" style="font-size:.7em;">
              <i :class="[
              indicador.variacion > 0 ? 'zmdi zmdi-long-arrow-up text-up' : '',
              indicador.variacion < 0 ? 'zmdi zmdi-long-arrow-down text-down' : '',
              indicador.variacion == 0 ? 'fas fa-equals font-sm text-white' : '',
              'mr-1'
              ]"></i>
              {{indicador.variacion}} %
            </div>
          </div>
        </div>
        <!-- Barra de Escala -->
        <div class="row mb-2">
          <div class="d-flex align-items-center">
           <span style="color:#666;"><small>Zoom</small></span>
            <div class="col p-2">
              <b-button @click="escalarDatos(-7)" size="sm" variant="outline-dark"><small>7d</small></b-button>
              <b-button @click="escalarDatos(-14)" size="sm" variant="outline-dark"><small>2s</small></b-button>
              <b-button @click="escalarDatos(-31)" size="sm" variant="outline-dark"><small>1m</small></b-button>
              <b-button @click="escalarDatos(-92)" size="sm" variant="outline-dark"><small>3m</small></b-button>
              <b-button @click="escalarDatos(-365)" size="sm" variant="outline-dark"><small>1y</small></b-button>
              <b-button @click="escalarDatos" size="sm" variant="outline-dark"><small>ALL</small></b-button>
            </div>
          </div>
        </div>
      </div>
      <!-- Grafico -->
      <line-chart v-if="loadedTasas" :chartData="dataGraficoGeneral" :options="options" :styles="styles"></line-chart>
    </app-card>
    <!-- loader -->
    <div v-else class="d-flex justify-content-center py-5 mb-5">
      <fade-loader :loading="!loadedTasas" color="DarkOrange" size="32px"></fade-loader>
    </div>
  </div>
</template>
<script>
import Axios from 'axios';
import moment from "moment";
import LineChart from "Components/Charts/MyLineChart.js";
import { mapActions, mapState, mapGetters } from 'vuex';

export default {
  components:{
    LineChart,
  },
  data() {
    return {
      cardMenu: true,
      cardTitulo:'Grafico General del Dolar',
      fechasBase: [],
      datosBase:[],
      datos: [10,30,100,60,20,40,30,70,60,90],
      fechas: ['2020-03-01','2020-03-02','2020-03-03','2020-03-04','2020-03-05','2020-03-06','2020-03-07','2020-03-08','2020-03-09','2020-03-10'],
      fechaMin: [],
      fechaMax: [],
      datosMin: [],
      datosMax: [],
      escala: {
        x:{
          min: '2020-03-01',
          max: '2020-03-10'
        },
        y:{
          min: 0,
          max: 110
        }
      },
      width: 100,
      height: 75,
    }
  },
  computed: {
    ...mapState('datos', ['loadedTasas']),
    ...mapGetters('datos', ['indicadoresGraficoGeneral']),
    dataGraficoGeneral(){
      let datos = [];
      this.indicadoresGraficoGeneral.forEach((indicador, index) => {
        datos.push({
            label: indicador.nombre,
            borderColor: indicador.color,
            borderWidth: 2,
            hoverBorderWidth: 3,
            backgroundColor: "rgba(0, 0, 0, 0)",
            pointBorderColor: indicador.color,
            pointBackgroundColor: indicador.color,
            pointHoverBorderColor: indicador.color,
            pointHoverBackgroundColor: indicador.color,
            pointRadius: 1,
            data: this.datos[index]
        });
      });
      return {
        type: "line",
        labels: this.fechas,
        datasets: datos
      }
    },
    options(){
      return {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              ticks: {
                fontColor: "#CCC",
                min: this.escala.x.min,
                max: this.escala.x.max,
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                fontColor: "#CCC",
                min: this.escala.y.min,
                max: this.escala.y.max
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
      }
    },
    styles(){
      return  {
        width: `${this.width}%`,
        height: `${this.height}vh`,
        position: "relative"
      }
    },
  },
  methods: {
    cargarDatos(){
        console.log(this.indicadoresGraficoGeneral);
        
        this.indicadoresGraficoGeneral.forEach(indicador => {
          this.fechas = indicador.fechas;
          this.datos.push(indicador.datos)
          this.fechasBase = indicador.fechas;
          this.datosBase.push(indicador.datos);
          this.fechaMin = moment(indicador.fechas[0]).format('L');
          this.fechaMax = moment(indicador.fechas[indicador.fechas.length]).format('L');
          let min = (Math.min(...indicador.datos) * 103) / 100;
          let max = (Math.max(...indicador.datos) * 103) / 100;
          this.datosMin.push(min);
          this.datosMax.push(max);
        });
        this.escalarMinMax();
        this.escalarDatos(-31);
    },
    escalarMinMax(){
      this.escala.x.min = moment(this.fechaMin).format('L');
      this.escala.x.max = moment(this.fechaMax).format('L');
      this.escala.y.min = (Math.min(...this.datosMin) * 103) / 100;
      this.escala.y.max = (Math.max(...this.datosMax) * 103) / 100;
    },
    escalarDatos(nEscala){
      let data = [];
      this.datosBase.forEach((datos) => {
        data.push(datos.slice(nEscala));
      });
      this.fechas = this.fechasBase.slice(nEscala);
      this.datos = data;
      this.escalarMinMax(this.fechas, this.datos);  
    },
  },
  created() {
  this.cargarDatos();
  this.escalarMinMax();
  this.escalarDatos(-31);

  },
}
</script>