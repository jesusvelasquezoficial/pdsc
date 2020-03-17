<template>
  <app-card v-if="true" :heading="cardTitulo" :headingMenu="cardMenu">
    <!-- Indicadores -->
    <div class="container-fluid">
      <div class="row mb-2">
        <!-- Indicador -->
        <div class="col-4 col-sm-3 col-md-2 p-2" v-for="(indicador, index) in indicadores" :key="index">
          <!-- Color -->
          <div class="float-left h-100 mr-2" :style="`border: solid 3px ${indicador.color}`"></div>
          <!-- Nombre y Url -->
          <router-link :to="indicador.url" style="font-size:.8em;">
            <b style="color:#0081f2;">{{indicador.nombre}}</b>
          </router-link>
          <!-- Precio -->
          <h6 class="p-0 m-0">
            <b>$ {{indicador.precio}}</b>
          </h6>
          <!-- Variacion -->
          <div :class="indicador.variacion.color" class="d-flex align-items-center" style="font-size:.7em;">
            <i :class="[indicador.variacion.icono, 'mr-1']"></i>
            {{indicador.variacion.porcentaje}}%
          </div>
        </div>
      </div>
      <!-- Barra de Escala -->
      <div class="row mb-2">
        <div class="d-flex align-items-center">
          <small style="color: #666;">Zoom</small>
          <div class="col p-2">
            <b-button size="sm" variant="outline"><small>7d</small></b-button>
            <b-button size="sm" variant="outline"><small>2s</small></b-button>
            <b-button size="sm" variant="outline"><small>1m</small></b-button>
            <b-button size="sm" variant="outline"><small>3m</small></b-button>
            <b-button size="sm" variant="outline"><small>1y</small></b-button>
            <b-button size="sm" variant="outline"><small>ALL</small></b-button>
          </div>
        </div>
      </div>
    </div>
    <!-- Grafico -->
    <line-chart v-if="true" ref="referencia" :chartData="data" :options="options" :styles="styles"></line-chart>
  </app-card>
  <!-- loader -->
  <div v-else class="d-flex justify-content-center py-5 mb-5">
    <fade-loader :loading="!true" color="DarkOrange" size="32px"></fade-loader>
  </div>
</template>
<script>
import LineChart from "Components/Charts/MyLineChart.js";
export default {
  components:{
    LineChart,
  },
  data() {
    return {
      cardMenu: true,
      cardTitulo:'Card Titulo',
      indicadores: [
        {
          color: '#252F5D', 
          precio: '12.345,67',
          nombre: 'Nombre',
          url: '/forex/dolar',
          variacion: {
            color: '',
            icono: 'fas fa-equals font-sm',
            porcentaje: '0.00',
          },
        },
        {
          color: 'Green', 
          precio: '34.567,89',
          nombre: 'Nombre2',
          url: '',
          variacion: {
            color: '',
            icono: 'fas fa-equals font-sm',
            porcentaje: '0.00',
          },
        },
      ],
      variacion: [
        {
          porcentaje: '',
          color: '',
          icono: '',
        },
      ],
      datos: [10,30,100,60,20,40,30,70,60,90],
      datos2: [15,20,50,70,40,20,70,30,40,80],
      fechas: [
        '2020-03-01',
        '2020-03-02',
        '2020-03-03',
        '2020-03-04',
        '2020-03-05',
        '2020-03-06',
        '2020-03-07',
        '2020-03-08',
        '2020-03-09',
        '2020-03-10'
      ],
      width: 100,
      height: 75,
    }
  },
  computed: {
    data(){
      return {
        type: "line",
        labels: this.fechas,
        datasets: [
          {
            label: this.indicadores[0].nombre,
            borderColor: "black",
            borderWidth: 2,
            hoverBorderWidth: 3,
            backgroundColor: "rgba(0, 0, 0, 0)",
            pointBorderColor: "black",
            pointBackgroundColor: "black",
            pointHoverBorderColor: "black",
            pointHoverBackgroundColor: "black",
            pointRadius: 1,
            data: this.datos
          },
          {
            label: this.indicadores[1].nombre,
            borderColor: "black",
            borderWidth: 2,
            hoverBorderWidth: 3,
            backgroundColor: "rgba(0, 0, 0, 0)",
            pointBorderColor: "black",
            pointBackgroundColor: "black",
            pointHoverBorderColor: "black",
            pointHoverBackgroundColor: "black",
            pointRadius: 1,
            data: this.datos2
          }
        ] 
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
                min: this.fechas[0],
                max: this.fechas[this.fechas.length],
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                min: this.datos[0],
                max: this.datos[this.datos.length],
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
}
</script>