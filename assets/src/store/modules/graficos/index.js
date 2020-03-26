import Axios from 'axios';
import moment from "moment";

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

const state = {
  loaded: false,
  fechas: [],
  datos: [],
  datosPctj: [],
  escala: {
    x:{
      min: '',
      max: ''
    },
    y:{
      min: 0,
      max: 110
    }
  },
};

const getters = {
  data(state){
    return {
      type: "line",
      labels: state.fechas,
      datasets: [
        {
          label: 'Petroleo',
          borderColor: "black",
          borderWidth: 2,
          hoverBorderWidth: 3,
          backgroundColor: "rgba(0, 0, 0, 0)",
          pointBorderColor: "black",
          pointBackgroundColor: "black",
          pointHoverBorderColor: "black",
          pointHoverBackgroundColor: "black",
          pointRadius: 1,
          data: state.datosPctj[0]
        }
      ] 
    };
  },
  options(state){
    return {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [
          {
            ticks: {
              min: state.escala.x.min,
              max: state.escala.x.max,
            }
          }
        ],
        yAxes: [
          {
            ticks: {
              min: state.escala.y.min,
              max: state.escala.y.max,
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
  indicadores(state){

  }
};

const actions = {
  async cargarDatos(context){
    await Axios.get('http://pdsc.phoenixplus.net:4000/api/oil').then(async res => {
      let data = res.data.data;
      let fechas = [];
      let precios = [];
      let preciosPctj = [];
      await data.forEach((datos, index) => {
        let fecha = moment(datos.fecha).format("L");
        fechas[index] = fecha;
        let precio = parseFloat(datos.dolar.replace(".", "").replace(",", "."));
        precios[index] = precio;
        let porcentajeDolar = pctjDolar(data,datos,index);
        preciosPctj[index] = parseFloat(porcentajeDolar[0]);
      });
      context.commit('setFechas', fechas);
      context.commit('setData', precios);
      context.commit('setDataPctj', preciosPctj);
      context.commit('setEscalaX', fechas);
      context.commit('setEscalaY', preciosPctj);
    }).catch(err => {
      console.log(err);
    });
    await context.commit('setLoaded');
  },
  cargarIndicador(context){
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
};

const mutations = {
  setLoaded(state){
    state.loaded = true;
  },
  setFechas(state, fechas){ 
    state.fechas = fechas;
    // localStorage.setItem('fechas', valor);
  },
  setData(state, precios){
    state.datos = precios;
    // localStorage.setItem('datos', valor);
  },
  setDataPctj(state, preciosPctj){
    state.datosPctj = preciosPctj;
    // localStorage.setItem('datosPctj', valor);
  },
  setEscalaX(state, fechas){
    state.escala.x.min = moment(fechas[0]).format('L');
    state.escala.x.max = moment(fechas[fechas.length]).format('L');
  },
  setEscalaY(state, precios){
    state.escala.y.min = (Math.min(...precios) * 103) / 100;
    state.escala.y.max = (Math.max(...precios) * 103) / 100;
  },
  setIndicador(state, valor){
    
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};