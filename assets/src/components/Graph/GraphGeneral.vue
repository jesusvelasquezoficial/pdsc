<template>
  <app-card v-if="loaded" :heading="cardTitulo" :headingMenu="cardMenu">
    <!-- Indicadores -->
    <div class="container-fluid">
      <div class="row mb-2">
        <!-- Indicador -->
        <div class="col-4 col-sm-3 col-md-2 p-2" v-for="(indicador, index) in indicadores" :key="index">
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
          <div :class="indicador.variacion.color" class="d-flex align-items-center" style="font-size:.7em;">
            <i :class="[indicador.variacion.color, indicador.variacion.icono, 'mr-1']"></i>
            {{indicador.variacion.porcentaje}}%
          </div>
        </div>
      </div>
      <!-- Barra de Escala -->
      <div class="row mb-2">
        <div class="d-flex align-items-center">
          <small style="color: #666;">Zoom</small>
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
    <line-chart v-if="loaded" ref="referencia" :chartData="data" :options="options" :styles="styles"></line-chart>
  </app-card>
  <!-- loader -->
  <div v-else class="d-flex justify-content-center py-5 mb-5">
    <fade-loader :loading="!loaded" color="DarkOrange" size="32px"></fade-loader>
  </div>
</template>
<script>
import Axios from 'axios';
import moment from "moment";
import LineChart from "Components/Charts/MyLineChart.js";
// Funcion que devuelve un Array con 
// 1- Color, 2- Icon
function sube0baja(numero) {
  var flag = Math.sign(numero);
  if (flag > 0) {
    return ['text-up', 'zmdi zmdi-long-arrow-up'];
  } else if (flag < 0) {
    return ['text-down', 'zmdi zmdi-long-arrow-down'];
  } else {
    return ['text-white', 'fas fa-equals font-sm'];
  }
}
// Funcion que Calcula el Porcentaje del Dolar
// Devuelve un Array
function pctjDolar(data, datos, index) {
  var precio = datos.dolar;
  var precioAnterior = data[index - 1] == undefined ? data[index].dolar : data[index - 1].dolar;
  precio = precio.split('.').join('').replace(',', '.');
  precioAnterior = precioAnterior.split('.').join('').replace(',', '.');
  console.log(precio);
  console.log(precioAnterior);
  var pctj = ((precio - precioAnterior) / precioAnterior) * 100;
  pctj = pctj.toFixed(2);
  console.log(pctj);
  var result = sube0baja(pctj);
  result.unshift(pctj);
  // console.log(a);
  // console.log(b);
  // console.log(datos.id, pctj);
  // console.log(result);
  return result;
}
export default {
  components:{
    LineChart,
  },
  data() {
    return {
      loaded: false,
      cardMenu: true,
      cardTitulo:'Grafico General del Dolar',
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
        }
      ],
      variacion: [
        {
          color: '',
          icono: '',
          porcentaje: '',
        },
      ],
      base:{
        fechas:[],
        datos:[]
      },
      datos: [10,30,100,60,20,40,30,70,60,90],
      datosPctj: [],
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
            data: this.datosPctj
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
                min: this.escala.x.min,
                max: this.escala.x.max,
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                min: this.escala.y.min,
                max: this.escala.y.max,
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
    async cargarDatos(){
      await Axios.get('http://pdsc.phoenixplus.net:4000/api/oil').then(res => {
        let data = res.data.data;
        let fechas = [];
        let precios = [];
        let preciosPctj = [];
        data.forEach((datos, index) => {
          let fecha = moment(datos.fecha).format("L");
          fechas[index] = fecha;
          let precio = parseFloat(datos.dolar.replace(".", "").replace(",", "."));
          precios[index] = precio;
          let porcentajeDolar = pctjDolar(data,datos,index);
          preciosPctj[index] = parseFloat(porcentajeDolar[0]);
        });
        // indicador
        this.cargarIndicador('Petroleo', precios);
        // this.escalarMinMax(fechas, precios);
        this.escalarMinMax(fechas, preciosPctj);
        this.base.fechas = fechas;
        this.base.datos = preciosPctj;
        this.escalarDatos(-31);
        this.fechas = fechas;
        this.datos = precios;
        this.datosPctj = preciosPctj;
        this.loaded = true;
      }).catch(err => {
        console.log(err);
      })
    },
    cargarIndicador(nombre, precios){
       let indicador = {
          color: 'Black', 
          nombre: 'Nombre',
          precio: '12.345,67',
          url: '/forex/dolar',
          variacion: {
            color: '',
            icono: 'fas fa-equals font-sm',
            porcentaje: '0.00',
          },
        };
        let precio = precios[precios.length - 1];
        let precioAnterio = precios[precios.length - 2];
        let porcentaje = (((precio - precioAnterio) / precioAnterio) * 100).toFixed(2);
        let colorIcon = sube0baja(porcentaje);
        indicador.nombre = nombre;
        indicador.precio = precio.toLocaleString("de-DE");
        indicador.variacion.porcentaje = porcentaje;
        indicador.variacion.color = colorIcon[0];
        indicador.variacion.icono = colorIcon[1];
        this.indicadores.pop();
        this.indicadores.push(indicador);
    },
    escalarMinMax(fechas, precios){
      this.escala.x.min = moment(fechas[0]).format('L');
      this.escala.x.max = moment(fechas[fechas.length]).format('L');
      this.escala.y.min = (Math.min(...precios) * 103) / 100;
      this.escala.y.max = (Math.max(...precios) * 103) / 100;
    },
    escalarDatos(nEscala){
        this.fechas = this.base.fechas.slice(nEscala);
        this.datosPctj = this.base.datos.slice(nEscala);
        this.escalarMinMax(this.fechas, this.datosPctj);  
    },
  },
  created() {
    this.cargarDatos();
  },
}
</script>