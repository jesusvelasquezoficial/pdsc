// import Vue from 'vue';
import Axios from 'axios';
// import Nprogress from 'nprogress';
// import router from '../../../router';
import moment from "moment";
function sube0baja(params) {
  var flag = Math.sign(params);
  if (flag > 0) {
    return ['zmdi zmdi-long-arrow-up', 'text-green'];
  } else if (flag < 0) {
    return ['zmdi zmdi-long-arrow-down', 'text-danger'];
  } else {
    return ['fas fa-equals font-sm', 'text-white'];
  }
}

const state = {
  loadedTasasSlider: false,
  loadedGraphMercadoOficial: false,
  loadedGraphMercadoParalelo: false,
  loadedGraphPetroleo: false,
  loadedTablaDolar: false,
  loadedTablaEuro: false,
  dolarOficial: localStorage.getItem('dolarOficial') || "cargando...",
  dolarParalelo: localStorage.getItem('dolarParalelo') || "cargando...",
  monitorDolar: localStorage.getItem('monitorDolar') || "cargando...",
  euroOficial: localStorage.getItem('euroOficial') || "cargando...",
  euroParalelo: localStorage.getItem('euroParalelo') || "cargando...",

  dolarOficialVariacion: localStorage.getItem('dolarOficialVariacion') || "0.0",
  dolarOficialUpOrDown: localStorage.getItem('dolarOficialUpOrDown') || "",
  dolarOficialColor: localStorage.getItem('dolarOficialColor') || "",

  dolarParaleloVariacion: localStorage.getItem('dolarParaleloVariacion') || "0.0",
  dolarParaleloUpOrDown: localStorage.getItem('dolarParaleloUpOrDown') || "",
  dolarParaleloColor: localStorage.getItem('dolarParaleloColor') || "",

  monitorDolarVariacion: localStorage.getItem('monitorDolarVariacion') || "0.0",
  monitorDolarUpOrDown: localStorage.getItem('monitorDolarUpOrDown') || "",
  monitorDolarColor: localStorage.getItem('monitorDolarColor') || "",

  euroOficialVariacion: localStorage.getItem('euroOficialVariacion') || "0.0",
  euroOficialUpOrDown: localStorage.getItem('euroOficialUpOrDown') || "",
  euroOficialColor: localStorage.getItem('euroOficialColor') || "",

  euroParaleloVariacion: localStorage.getItem('euroParaleloVariacion') || "0.0",
  euroParaleloUpOrDown: localStorage.getItem('euroParaleloUpOrDown') || "",
  euroParaleloColor: localStorage.getItem('euroParaleloColor') || "",

  petroleoVariacion: localStorage.getItem('petroleoVariacion') || "0.0",
  petroleoUpOrDown: localStorage.getItem('petroleoUpOrDown') || "",
  petroleoColor: localStorage.getItem('petroleoColor') || "",

  oroVariacion: localStorage.getItem('oroVariacion') || "0.0",
  oroUpOrDown: localStorage.getItem('oroUpOrDown') || "",
  oroColor: localStorage.getItem('oroColor') || "",

  petroVariacion: localStorage.getItem('petroVariacion') || "0.0",
  petroUpOrDown: localStorage.getItem('petroUpOrDown') || "",
  petroColor: localStorage.getItem('petroColor') || "",

  bitcoinVariacion: localStorage.getItem('bitcoinVariacion') || "0.0",
  bitcoinUpOrDown: localStorage.getItem('bitcoinUpOrDown') || "",
  bitcoinColor: localStorage.getItem('bitcoinColor') || "",

  sp500Variacion: localStorage.getItem('sp500Variacion') || "0.0",
  sp500UpOrDown: localStorage.getItem('sp500UpOrDown') || "",
  sp500Color: localStorage.getItem('sp500Color') || "",

  nasdaqVariacion: localStorage.getItem('nasdaqVariacion') || "0.0",
  nasdaqUpOrDown: localStorage.getItem('nasdaqUpOrDown') || "",
  nasdaqColor: localStorage.getItem('nasdaqColor') || "",


  petroleo: localStorage.getItem('petroleo') || "cargando...",
  oro: localStorage.getItem('oro') || "cargando...",
  petro: localStorage.getItem('petro') || "cargando...",
  bitcoin: localStorage.getItem('bitcoin') || "cargando...",
  sp500: localStorage.getItem('sp500') || "cargando...",
  nasdaq: localStorage.getItem('nasdaq') || "cargando...",

  precioDolarBCV: localStorage.getItem('precioDolarBCV') || "cargando...",
  precioDolarToday: localStorage.getItem('precioDolarToday') || 'cargando...',
  precioDolarMonitor: localStorage.getItem('precioDolarMonitor') || 'cargando...',
  precioEuroOficial: localStorage.getItem('precioEuroOficial') || "cargando...",
  precioEuroParalelo: localStorage.getItem('precioEuroParalelo') || 'cargando...',
  precioOil: localStorage.getItem('precioOil') || 'cargando...',

  dataDolarOficial: localStorage.getItem('dataDolarOficial') || "cargando...",
  dataDolarToday: localStorage.getItem('dataDolarToday') || 'cargando...',
  dataDolarMonitor: localStorage.getItem('dataDolarMonitor') || 'cargando...',
  dataEuroOficial: localStorage.getItem('dataEuroOficial') || "cargando...",
  dataEuroParalelo: localStorage.getItem('dataEuroParalelo') || 'cargando...',
  dataPetroleo: localStorage.getItem('dataPetroleo') || [],

  tablaDolar: localStorage.getItem('tablaDolar') || [],
  tablaEuro: localStorage.getItem('tablaEuro') || [],
  paginacionEuroTotal: localStorage.getItem('pagEuroTotal') || 0,
  paginacionEuroPaginas: localStorage.getItem('pagEuroPaginas') || 0,
  paginacionEuroPorPagina: 7,
  paginacionEuroPagina: localStorage.getItem('pagEuroPagina') || 1,
  paginacionDolarTotal: localStorage.getItem('pagDolarTotal') || 0,
  paginacionDolarPaginas: localStorage.getItem('pagDolarPaginas') || 0,
  paginacionDolarPorPagina: 7,
  paginacionDolarPagina: localStorage.getItem('pagDolarPagina') || 1,

  f7D: localStorage.getItem('f7D') || 'cargando...',
  f2S: localStorage.getItem('f2S') || 'cargando...',
  f30D: localStorage.getItem('f30D') || 'cargando...',

  minPE7D: localStorage.getItem('minPE7D') || 'cargando...',
  minPE2S: localStorage.getItem('minPE2S') || 'cargando...',
  minPE30D: localStorage.getItem('minPE30D') || 'cargando...',

  minPD7D: localStorage.getItem('minPD7D') || 'cargando...',
  minPD2S: localStorage.getItem('minPD2S') || 'cargando...',
  minPD30D: localStorage.getItem('minPD30D') || 'cargando...',
  
  minPP7D: localStorage.getItem('minPP7D') || 'cargando...',
  minPP2S: localStorage.getItem('minPP2S') || 'cargando...',
  minPP30D: localStorage.getItem('minPP30D') || 'cargando...',

  fecha: localStorage.getItem('fecha') || [],
  euroFecha: localStorage.getItem('euroFecha') || [],
  dolarFecha: localStorage.getItem('dolarFecha') || [],
  petroleoFecha: localStorage.getItem('dolarFecha') || [],

  minEuroX: localStorage.getItem('minEuroX') || 0,
  maxEuroX: localStorage.getItem('maxEuroX') || 0,
  minEuroY: localStorage.getItem('minEuroY') || 0,
  maxEuroY: localStorage.getItem('maxEuroY') || 0,

  minDolarX: localStorage.getItem('minDolarX') || 0,
  maxDolarX: localStorage.getItem('maxDolarX') || 0,
  minDolarY: localStorage.getItem('minDolarY') || 0,
  maxDolarY: localStorage.getItem('maxDolarY') || 0,
  
  minPetroleoX: localStorage.getItem('minPetroleoX') || 0,
  maxPetroleoX: localStorage.getItem('maxPetroleoX') || 0,
  minPetroleoY: localStorage.getItem('minPetroleoY') || 0,
  maxPetroleoY: localStorage.getItem('maxPetroleoY') || 0,

  baseMinEuroX: localStorage.getItem('baseMinEuroX') || 0,
  baseMinEuroY: localStorage.getItem('baseMinEuroY') || 0,

  baseMinDolarX: localStorage.getItem('baseMinDolarX') || 0,
  baseMinDolarY: localStorage.getItem('baseMinDolarY') || 0,

  baseMinPetroleoX: localStorage.getItem('baseMinPetroleoX') || 0,
  baseMinPetroleoY: localStorage.getItem('baseMinPetroleoY') || 0,

};

const getters = {
  getData: (state) => {
    return [
      {
        "coin1": "Dolar Oficial",
        "coin2": "",
        "price": `$ ${state.dolarOficial}`,
        "market_cap": `${state.dolarOficialVariacion}%`,
        "icon": `${state.dolarOficialUpOrDown}`,
        "color": `${state.dolarOficialColor}`,
      },
      {
        "coin1": "Dolar Today",
        "coin2": "",
        "price": `$ ${state.dolarParalelo}`,
        "market_cap": `${state.dolarParaleloVariacion}%`,
        "icon": `${state.dolarParaleloUpOrDown}`,
        "color": `${state.dolarParaleloColor}`,
      },
      {
        "coin1": "Monitor Dolar",
        "coin2": "",
        "price": `$ ${state.monitorDolar}`,
        "market_cap": `${state.monitorDolarVariacion}%`,
        "icon": `${state.monitorDolarUpOrDown}`,
        "color": `${state.monitorDolarColor}`,
      },
      {
        "coin1": "Euro Oficial",
        "coin2": "",
        "price": `€ ${state.euroOficial}`,
        "market_cap": `${state.euroOficialVariacion}%`,
        "icon": `${state.euroOficialUpOrDown}`,
        "color": `${state.euroOficialColor}`,
      },
      {
        "coin1": "Euro Paralelo",
        "coin2": "",
        "price": `€ ${state.euroParalelo}`,
        "market_cap": `${state.euroParaleloVariacion}%`,
        "icon": `${state.euroParaleloUpOrDown}`,
        "color": `${state.euroParaleloColor}`,
      },
      {
        "coin1": "Petroleo",
        "coin2": "",
        "price": `$ ${state.precioOil}`,
        "market_cap": `${state.petroleoVariacion}%`,
        "icon": `${state.petroleoUpOrDown}`,
        "color": `${state.petroleoColor}`,
      },
      {
        "coin1": "Oro",
        "coin2": "",
        "price": `$ ${state.oro}`,
        "market_cap": `${state.oroVariacion}%`,
        "icon": `${state.oroUpOrDown}`,
        "color": `${state.oroColor}`,
      },
      {
        "coin1": "Petro",
        "coin2": "",
        "price": `BsS ${state.petro}`,
        "market_cap": `${state.petroVariacion}%`,
        "icon": `${state.petroUpOrDown}`,
        "color": `${state.petroColor}`,
      },
      {
        "coin1": "Bitcoin",
        "coin2": "",
        "price": `$ ${state.bitcoin}`,
        "market_cap": `${state.bitcoinVariacion}%`,
        "icon": `${state.bitcoinUpOrDown}`,
        "color": `${state.bitcoinColor}`,
      },
      {
        "coin1": "S&P 500",
        "coin2": "",
        "price": `$ ${state.sp500}`,
        "market_cap": `${state.sp500Variacion}%`,
        "icon": `${state.sp500UpOrDown}`,
        "color": `${state.sp500Color}`,
      },
      {
        "coin1": "Nasdaq",
        "coin2": "",
        "price": `$ ${state.nasdaq}`,
        "market_cap": `${state.nasdaqVariacion}%`,
        "icon": `${state.nasdaqUpOrDown}`,
        "color": `${state.nasdaqColor}`,
      }
    ];
  },
  dataDolar: (state) => {
    return {
      type: "line",
      labels: state.dolarFecha,
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
          data: state.dataDolarOficial
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
          data: state.dataDolarToday
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
          data: state.dataDolarMonitor
        }
      ]
    };
  },
  dataEuro: (state) => {
    return {
      type: "line",
      labels: state.euroFecha,
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
          data: state.dataEuroOficial
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
          data: state.dataEuroParalelo
        }
      ]
    };
  },
  dataPetroleo: (state) => {
    return {
      type: "line",
      labels: state.petroleoFecha,
      datasets: [
        {
          // showLine: false, // disable for a single dataset
          label: "Petroleo",
          borderWidth: 2, //3
          hoverBorderWidth: 3, //3
          borderColor: "Black",
          backgroundColor: "rgba(0, 0, 0, 0)",
          pointBorderColor: "Black",
          pointBackgroundColor: "Black",
          pointHoverBorderColor: "Black",
          pointHoverBackgroundColor: "Black",
          pointRadius: 1,
          data: state.dataPetroleo
        },
      ]
    };
  },
  dataTablaDolar: (state) => {
    return JSON.parse(state.tablaDolar);
  },
  dataTablaEuro: (state) => {
    return JSON.parse(state.tablaEuro);
  },
  optionsDolar: (state) => {
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
              min: state.minDolarX,
              max: state.maxDolarX
            }
          }
        ],
        yAxes: [
          {
            ticks: {
              min: state.minDolarY,
              max: state.maxDolarY
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
  paginacionEuroTotal: (state) => {
    return state.paginacionEuroTotal;
  },
  paginacionEuroPorPagina: (state) => {
    return state.paginacionEuroPorPagina;
  },
  paginacionEuroPagina: (state) => {
    return state.paginacionEuroPagina;
  },
  paginacionDolarTotal: (state) => {
    return state.paginacionDolarTotal;
  },
  paginacionDolarPorPagina: (state) => {
    return state.paginacionDolarPorPagina;
  },
  paginacionDolarPagina: (state) => {
    return state.paginacionDolarPagina;
  },
};

const actions = {
  async loadTasasSlider(context) {
    Axios.get('http://pdsc.phoenixplus.net:8000/getTasasBCV').then(res => {
      let data = res.data;
       context.commit('setDolarOficial', data.Dolar[0]);
       context.commit('setEuroOficial', data.Euro[0]);
    }).catch(err => console.log(err));
     Axios.get('http://pdsc.phoenixplus.net:8000/getTasasDTD').then(res => {
      let data = res.data;
       context.commit('setDolarParalelo', data.dolar[0]);
       context.commit('setEuroParalelo', data.euro[0]);
    }).catch(err => console.log(err));
     Axios.get('http://pdsc.phoenixplus.net:8000/getTasasDM').then(res => {
      let data = res.data;
      // console.log(data);
       context.commit('setMonitorDolar', data.dolar[0]);
    }).catch(err => console.log(err));
     Axios.get('http://pdsc.phoenixplus.net:8000/getTasasOIL').then(res => {
      let data = res.data;
       context.commit('setOil', data.petroleo[0]);
    }).catch(err => console.log(err));
     Axios.get('http://pdsc.phoenixplus.net:8000/getTasasORO').then(res => {
      let data = res.data;
       context.commit('setOro', data.oro[0]);
    }).catch(err => console.log(err));
     Axios.get('http://pdsc.phoenixplus.net:8000/getTasasPTR').then(res => {
      let data = res.data;
       context.commit('setPetro', data.bolivar[0]);
    }).catch(err => console.log(err));
     Axios.get('http://pdsc.phoenixplus.net:8000/getTasasBTC').then(res => {
      let data = res.data;
       context.commit('setBitcoin', data.bitcoin[0]);
    }).catch(err => console.log(err));
     Axios.get('http://pdsc.phoenixplus.net:8000/getTasasSP500').then(res => {
      let data = res.data;
       context.commit('setSp500', data.sp500[0]);
    }).catch(err => console.log(err));
     Axios.get('http://pdsc.phoenixplus.net:8000/getTasasNASDAQ').then(res => {
      let data = res.data;
       context.commit('setNasdaq', data.nasdaq[0]);
    }).catch(err => console.log(err));
    await context.commit('loadedTasasSlider');
  },
  async loadDataOficial(context) {
    await Axios.get('http://pdsc.phoenixplus.net:4000/api/bcv').then(async res => {
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
      context.commit('setDataEuroOficial', euro);
      var a = euro[euro.length - 2];
      var b = euro[euro.length - 1];
      var v = ((b - a) / a) * 100;
      var c = sube0baja(v);
      c.unshift(v.toFixed(2));
      context.commit('setEuroOficialVariacion', c);
      context.commit('setDataDolarOficial', dolar);
      var a2 = dolar[dolar.length - 2];
      var b2 = dolar[dolar.length - 1];
      var v2 = ((b2 - a2) / a2) * 100;
      var c2 = sube0baja(v2);
      c2.unshift(v2.toFixed(2));
      context.commit('setDolarOficialVariacion', c2);
      context.commit('setPrecioDolarBCV', dolar[dolar.length - 1]);
      context.commit('setPrecioEuroOficial', euro[euro.length - 1]);
    });
    await Axios.get('http://pdsc.phoenixplus.net:4000/api/dm').then(async res => {
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
      context.commit('setDataDolarMonitor', dolarM);
      var a = dolarM[dolarM.length - 2];
      var b = dolarM[dolarM.length - 1];
      var v = ((b - a) / a) * 100;
      var c = sube0baja(v);
      c.unshift(v.toFixed(2));
      context.commit('setDolarMonitorVariacion', c);
      context.commit('setPrecioDolarMonitor', dolarM[dolarM.length - 1]);
    });
    await context.commit('loadedGraphMercadoOficial');
  },
  async loadDataParalelo(context) {
    await Axios.get('http://pdsc.phoenixplus.net:4000/api/dtd').then(async res => {
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
      context.commit('f7D', fechaDtd[fechaDtd.length - 7]);
      context.commit('f2S', fechaDtd[fechaDtd.length - 15]);
      context.commit('f30D', fechaDtd[fechaDtd.length - 30]);
      context.commit('minPE7D', parseFloat(dtd[dtd.length - 7].euro.replace(".", "").replace(",", ".")) - (parseFloat(dtd[dtd.length - 7].euro.replace(".", "").replace(",", ".")) * 18) / 100);
      context.commit('minPE2S', parseFloat(dtd[dtd.length - 15].euro.replace(".", "").replace(",", ".")) - (parseFloat(dtd[dtd.length - 15].euro.replace(".", "").replace(",", ".")) * 20) / 100);
      context.commit('minPE30D', parseFloat(dtd[dtd.length - 30].euro.replace(".", "").replace(",", ".")) - (parseFloat(dtd[dtd.length - 30].euro.replace(".", "").replace(",", ".")) * 20) / 100);
      context.commit('minPD7D', parseFloat(dtd[dtd.length - 7].euro.replace(".", "").replace(",", ".")) - (parseFloat(dtd[dtd.length - 7].euro.replace(".", "").replace(",", ".")) * 25) / 100);
      context.commit('minPD2S', parseFloat(dtd[dtd.length - 15].euro.replace(".", "").replace(",", ".")) - (parseFloat(dtd[dtd.length - 15].euro.replace(".", "").replace(",", ".")) * 25) / 100);
      context.commit('minPD30D', parseFloat(dtd[dtd.length - 30].euro.replace(".", "").replace(",", ".")) - (parseFloat(dtd[dtd.length - 30].euro.replace(".", "").replace(",", ".")) * 28) / 100);
      context.commit('fecha', fechaDtd);
      context.commit('euroFecha', fechaDtd);
      context.commit('dolarFecha', fechaDtd);
      // Valor de la Tasa
      context.commit('dataEuroParalelo', euroDtd);
      var a = euroDtd[euroDtd.length - 2];
      var b = euroDtd[euroDtd.length - 1];
      var v = ((b - a) / a) * 100;
      var c = sube0baja(v);
      c.unshift(v.toFixed(2));
      context.commit('setEuroParaleloVariacion', c);
      context.commit('dataDolarToday', dolarDtd);
      var a2 = dolarDtd[dolarDtd.length - 2];
      var b2 = dolarDtd[dolarDtd.length - 1];
      var v2 = ((b2 - a2) / a2) * 100;
      var c2 = sube0baja(v2);
      c2.unshift(v2.toFixed(2));
      context.commit('setDolarParaleloVariacion', c2);
      // Escala del Euro (x, y)
      // this.minEuroX = moment(dtd[0].fecha).format("L");
      context.commit('baseMinEuroX', moment(dtd[0].fecha).format("L")); // this.minEuroX;
      context.commit('minEuroX', fechaDtd[fechaDtd.length - 7]);
      context.commit('maxEuroX', moment(dtd[dtd.length - 1].fecha).format("L"));

      context.commit('baseMinEuroY', Math.min(...euroDtd) - (Math.min(...euroDtd) * 10) / 100);// this.minDolarX;
      context.commit('minEuroY', parseFloat(dtd[dtd.length - 7].euro.replace(".", "").replace(",", ".")) - (parseFloat(dtd[dtd.length - 7].euro.replace(".", "").replace(",", ".")) * 18) / 100);
      context.commit('maxEuroY', Math.max(...euroDtd) + (Math.max(...euroDtd) * 5) / 100);

      // Escala del Dolar (x, y)
      // this.minDolarX = moment(dtd[0].fecha).format("L");
      context.commit('baseMinDolarX', moment(dtd[0].fecha).format("L")); // this.minDolarX;
      context.commit('minDolarX', fechaDtd[fechaDtd.length - 7]);
      context.commit('maxDolarX', moment(dtd[dtd.length - 1].fecha).format("L"));

      context.commit('baseMinDolarY', Math.min(...dolarDtd) - (Math.min(...dolarDtd) * 25) / 100);// this.minDolarY;
      context.commit('minDolarY', parseFloat(dtd[dtd.length - 7].euro.replace(".", "").replace(",", ".")) - (parseFloat(dtd[dtd.length - 7].euro.replace(".", "").replace(",", ".")) * 25) / 100);
      context.commit('maxDolarY', Math.max(...dolarDtd) + (Math.max(...dolarDtd) * 4) / 100);

      context.commit('precioDolarToday', dolarDtd[dolarDtd.length - 1]);
      context.commit('precioEuroParalelo', euroDtd[euroDtd.length - 1]);
    });
    await context.commit('loadedGraphMercadoParalelo');
  },
  async loadDataPetroleo(context){
    await Axios.get("http://pdsc.phoenixplus.net:4000/api/oil").then(async res => {
      let oil = res.data.data;
      var fechaOil = [];
      var dolarOil = [];
      await oil.forEach((e, i) => {
        var f = moment(e.fecha).format("L");
        fechaOil[i] = f;
        var o = e.dolar.replace(".", "");
        dolarOil[i] = parseFloat(o.replace(",", "."));
        // var oil_params = {
        //   fecha: e.fecha,
        //   dolar: e.dolar
        // }
        // Axios.post("http://pdsc.phoenixplus.net:4000/api/oil", {oil: oil_params}).then(res => {
        //   console.log(res.data.data);
        // }).catch(err => console.log(err));
      });
      context.commit('setDataPetroleo', dolarOil);
      var a = dolarOil[dolarOil.length - 2];
      var b = dolarOil[dolarOil.length - 1];
      var v = ((b - a) / a) * 100;
      var c = sube0baja(v);
      c.unshift(v.toFixed(2));
      context.commit('setPetroleoVariacion', c);
      context.commit('setPrecioOil', dolarOil[dolarOil.length - 1]);
      context.commit('minPP7D', parseFloat(oil[oil.length - 7].dolar.replace(".", "").replace(",", ".")) - (parseFloat(oil[oil.length - 7].dolar.replace(".", "").replace(",", ".")) * 18) / 100);
      context.commit('minPP2S', parseFloat(oil[oil.length - 15].dolar.replace(".", "").replace(",", ".")) - (parseFloat(oil[oil.length - 15].dolar.replace(".", "").replace(",", ".")) * 20) / 100);
      context.commit('minPP30D', parseFloat(oil[oil.length - 30].dolar.replace(".", "").replace(",", ".")) - (parseFloat(oil[oil.length - 30].dolar.replace(".", "").replace(",", ".")) * 20) / 100);
      context.commit('petroleoFecha', fechaOil);
      context.commit('baseMinPetroleoX', moment(oil[0].fecha).format("L")); // this.minDolarX;
      context.commit('minPetroleoX', fechaOil[fechaOil.length - 7]);
      context.commit('maxPetroleoX', moment(oil[oil.length - 1].fecha).format("L"));
      context.commit('baseMinPetroleoY', Math.min(...dolarOil) - (Math.min(...dolarOil) * 25) / 100);// this.minDolarY;
      context.commit('minPetroleoY', parseFloat(oil[oil.length - 7].dolar.replace(".", "").replace(",", ".")) - (parseFloat(oil[oil.length - 7].dolar.replace(".", "").replace(",", ".")) * 25) / 100);
      context.commit('maxPetroleoY', Math.max(...dolarOil) + (Math.max(...dolarOil) * 4) / 100);

    });
    await context.commit('loadedGraphPetroleo');
  },
  async loadDataTablaDolar(context) {
    await Axios.get("http://pdsc.phoenixplus.net:4000/api/bcvDesc").then(async res => {
      var data = res.data.data;
      var tabla = [];
      await data.forEach((valor, index) => {
        tabla[index] = {
          fecha: moment(valor.fecha).format("L"),
          dolarOficial: valor.dolar,
          dolarToday: [],
          dolarMonitor: []
        };
      });
      await Axios.get("http://pdsc.phoenixplus.net:4000/api/dtdDesc").then(async res2 => {
        var data = res2.data.data;
        await data.forEach((valor, index) => {
          if (tabla[index] != undefined) {
            tabla[index].dolarToday = valor.dolar;
          }
        });
        Axios.get("http://pdsc.phoenixplus.net:4000/api/dmDesc").then(async res3 => {
          var data = res3.data.data;
          await data.forEach((valor, index) => {
            if (tabla[index] != undefined) {
              tabla[index].dolarMonitor = valor.dolar;
            }
            context.commit('setTablaDolar', JSON.stringify(tabla));
          });
        });
      });
      var totalPag = Object.keys(tabla).length;
      context.commit('setPagDolarTotal', totalPag);
      var pages = Math.ceil(Object.keys(tabla).length / state.paginacionDolarPorPagina);
      context.commit('setPagDolarPaginas', pages);
    });
    await context.commit('loadedTablaDolar');
  },
  async loadDataTablaEuro(context) {
    await Axios.get("http://pdsc.phoenixplus.net:4000/api/bcvDesc").then(async res => {
      var data = res.data.data;
      var tabla = [];
      await data.forEach((valor, index) => {
        tabla[index] = {
          fecha: moment(valor.fecha).format("L"),
          euroOficial: valor.euro,
          euroParalelo: null
        };
      });
      return tabla;
    })
      .then(async tabla => {
        await Axios.get("http://pdsc.phoenixplus.net:4000/api/dtdDesc").then(async res => {
          var data = res.data.data;
          await data.forEach((valor, index) => {
            if (tabla[index] != undefined) {
              tabla[index].euroParalelo = valor.euro;
            }
            context.commit('setTablaEuro', JSON.stringify(tabla));
          });
        });
        var totalPag = Object.keys(tabla).length;
        context.commit('setPagEuroTotal', totalPag);
        var pages = Math.ceil(Object.keys(tabla).length / state.paginacionEuroPorPagina);
        context.commit('setPagEuroPaginas', pages);
      });
    await context.commit('loadedTablaEuro');
  },
  paginacionDolarPagina(context, payload) {
    context.commit('setPagDolarPagina', payload);
  },
  paginacionEuroPagina(context, payload) {
    context.commit('setPagEuroPagina', payload);
  },
  sE7D(context) {
    context.commit('minEuroX', state.f7D);
    context.commit('minEuroY', state.minPE7D);
  },
  sE2S(context) {
    context.commit('minEuroX', state.f2S);
    context.commit('minEuroY', state.minPE2S);
  },
  sE30D(context) {
    context.commit('minEuroX', state.f30D);
    context.commit('minEuroY', state.minPE30D);
  },
  sD7D(context) {
    context.commit('minDolarX', state.f7D);
    context.commit('minDolarY', state.minPD7D);
  },
  sD2S(context) {
    context.commit('minDolarX', state.f2S);
    context.commit('minDolarY', state.minPD2S);
  },
  sD30D(context) {
    context.commit('minDolarX', state.f30D);
    context.commit('minDolarY', state.minPD30D);
  },
  sP7D(context) {
    context.commit('minPetroleoX', state.f7D);
    context.commit('minPetroleoY', state.minPP7D);
  },
  sP2S(context) {
    context.commit('minPetroleoX', state.f2S);
    context.commit('minPetroleoY', state.minPP2S);
  },
  sP30D(context) {
    context.commit('minPetroleoX', state.f30D);
    context.commit('minPetroleoY', state.minPP30D);
  },
  resertScaleDolar(context) {
    context.commit('minDolarX', state.baseMinDolarX);
    context.commit('minDolarY', state.baseMinDolarY);
  },
  resertScaleEuro(context) {
    context.commit('minEuroX', state.baseMinEuroX);
    context.commit('minEuroY', state.baseMinEuroY);
  },
  resertScalePetroleo(context) {
    context.commit('minPetroleoX', state.baseMinPetroleoX);
    context.commit('minPetroleoY', state.baseMinPetroleoY);
  },
};

const mutations = {
  setDolarOficial(state, valor) {
    state.dolarOficial = valor;
    localStorage.setItem('dolarOficial', valor);
  },
  setEuroOficial(state, valor) {
    state.euroOficial = valor;
    localStorage.setItem('euroOficial', valor);
  },
  setDolarParalelo(state, valor) {
    state.dolarParalelo = valor;
    localStorage.setItem('dolarParalelo', valor);
  },
  setEuroParalelo(state, valor) {
    state.euroParalelo = valor;
    localStorage.setItem('euroParalelo', valor);
  },
  setMonitorDolar(state, valor) {
    state.monitorDolar = valor;
    localStorage.setItem('monitorDolar', valor);
  },
  setTablaDolar(state, valor) {
    state.tablaDolar = valor;
    localStorage.setItem('tablaDolar', valor);
  },
  setTablaEuro(state, valor) {
    state.tablaEuro = valor;
    localStorage.setItem('tablaEuro', valor);
  },
  setPagDolarTotal(state, valor) {
    state.paginacionDolarTotal = valor;
    localStorage.setItem('pagDolarTotal', valor);
  },
  setPagDolarPaginas(state, valor) {
    state.paginacionDolarPaginas = valor;
    localStorage.setItem('pagDolarPaginas', valor);
  },
  setPagDolarPagina(state, valor) {
    state.paginacionDolarPagina = valor;
    localStorage.setItem('pagDolarPagina', valor);
  },
  setPagEuroPagina(state, valor) {
    state.paginacionEuroPagina = valor;
    localStorage.setItem('pagEuroPagina', valor);
  },
  setPagEuroTotal(state, valor) {
    state.paginacionEuroTotal = valor;
    localStorage.setItem('pagEuroTotal', valor);
  },
  setPagEuroPaginas(state, valor) {
    state.paginacionEuroPaginas = valor;
    localStorage.setItem('pagEuroPaginas', valor);
  },
  setOil(state, valor) {
    state.petroleo = valor;
    localStorage.setItem('petroleo', valor);
  },
  setOro(state, valor) {
    state.oro = valor;
    localStorage.setItem('oro', valor);
  },
  setPetro(state, valor) {
    state.petro = valor;
    localStorage.setItem('petro', valor);
  },
  setBitcoin(state, valor) {
    state.bitcoin = valor;
    localStorage.setItem('bitcoin', valor);
  },
  setSp500(state, valor) {
    state.sp500 = valor;
    localStorage.setItem('sp500', valor);
  },
  setNasdaq(state, valor) {
    state.nasdaq = valor;
    localStorage.setItem('nasdaq', valor);
  },
  loadedTasasSlider(state) {
    state.loadedTasasSlider = true;
  },
  setDataDolarOficial(state, valor) {
    state.dataDolarOficial = valor;
    localStorage.setItem('dataDolarOficial', valor);
  },
  setDataEuroOficial(state, valor) {
    state.dataEuroOficial = valor;
    localStorage.setItem('dataEuroOficial', valor);
  },
  setPrecioDolarBCV(state, valor) {
    state.precioDolarBCV = valor;
    localStorage.setItem('precioDolarBCV', valor);
  },
  setPrecioEuroOficial(state, valor) {
    state.precioEuroOficial = valor;
    localStorage.setItem('precioEuroOficial', valor);
  },
  f7D(state, valor) {
    state.f7D = valor;
    localStorage.setItem('f7D', valor);
  },
  f2S(state, valor) {
    state.f2S = valor;
    localStorage.setItem('f2S', valor);
  },
  f30D(state, valor) {
    state.f30D = valor;
    localStorage.setItem('f30D', valor);
  },
  minPE7D(state, valor) {
    state.minPE7D = valor;
    localStorage.setItem('minPE7D', valor);
  },
  minPE2S(state, valor) {
    state.minPE2S = valor;
    localStorage.setItem('minPE2S', valor);
  },
  minPE30D(state, valor) {
    state.minPE30D = valor;
    localStorage.setItem('minPE30D', valor);
  },
  minPD7D(state, valor) {
    state.minPD7D = valor;
    localStorage.setItem('minPD7D', valor);
  },
  minPD2S(state, valor) {
    state.minPD2S = valor;
    localStorage.setItem('minPD2S', valor);
  },
  minPD30D(state, valor) {
    state.minPD30D = valor;
    localStorage.setItem('minPD30D', valor);
  },
  fecha(state, valor) {
    state.fecha = valor;
    localStorage.setItem('fecha', valor);
  },
  euroFecha(state, valor) {
    state.euroFecha = valor;
    localStorage.setItem('euroFecha', valor);
  },
  dolarFecha(state, valor) {
    state.dolarFecha = valor;
    localStorage.setItem('dolarFecha', valor);
  },
  dataEuroParalelo(state, valor) {
    state.dataEuroParalelo = valor;
    localStorage.setItem('dataEuroParalelo', valor);
  },
  dataDolarToday(state, valor) {
    state.dataDolarToday = valor;
    localStorage.setItem('dataDolarToday', valor);
  },
  minEuroX(state, valor) {
    state.minEuroX = valor;
    localStorage.setItem('minEuroX', valor);
  },
  maxEuroX(state, valor) {
    state.maxEuroX = valor;
    localStorage.setItem('maxEuroX', valor);
  },
  minEuroY(state, valor) {
    state.minEuroY = valor;
    localStorage.setItem('minEuroY', valor);
  },
  maxEuroY(state, valor) {
    state.maxEuroY = valor;
    localStorage.setItem('maxEuroY', valor);
  },
  minDolarX(state, valor) {
    state.minDolarX = valor;
    localStorage.setItem('minDolarX', valor);
  },
  maxDolarX(state, valor) {
    state.maxDolarX = valor;
    localStorage.setItem('maxDolarX', valor);
  },
  minDolarY(state, valor) {
    state.minDolarY = valor;
    localStorage.setItem('minDolarY', valor);
  },
  maxDolarY(state, valor) {
    state.maxDolarY = valor;
    localStorage.setItem('maxDolarY', valor);
  },
  baseMinEuroX(state, valor) {
    state.baseMinEuroX = valor;
    localStorage.setItem('baseMinEuroX', valor);
  },
  baseMinDolarX(state, valor) {
    state.baseMinDolarX = valor;
    localStorage.setItem('baseMinDolarX', valor);
  },
  baseMinEuroY(state, valor) {
    state.baseMinEuroY = valor;
    localStorage.setItem('baseMinEuroY', valor);
  },
  baseMinDolarY(state, valor) {
    state.baseMinDolarY = valor;
    localStorage.setItem('baseMinDolarY', valor);
  },
  precioDolarToday(state, valor) {
    state.precioDolarToday = valor;
    localStorage.setItem('precioDolarToday', valor);
  },
  precioEuroParalelo(state, valor) {
    state.precioEuroParalelo = valor;
    localStorage.setItem('precioEuroParalelo', valor);
  },
  setDataDolarMonitor(state, valor) {
    state.dataDolarMonitor = valor;
    localStorage.setItem('dataDolarMonitor', valor);
  },
  setPrecioDolarMonitor(state, valor) {
    state.precioDolarMonitor = valor;
    localStorage.setItem('precioDolarMonitor', valor);
  },
  setDolarOficialVariacion(state, valor) {
    state.dolarOficialVariacion = valor[0];
    state.dolarOficialUpOrDown = valor[1];
    state.dolarOficialColor = valor[2];
    localStorage.setItem('dolarOficialVariacion', valor[0]);
    localStorage.setItem('dolarOficialUpOrDown', valor[1]);
    localStorage.setItem('dolarOficialColor', valor[2]);
  },
  setEuroOficialVariacion(state, valor) {
    state.euroOficialVariacion = valor[0];
    state.euroOficialUpOrDown = valor[1];
    state.euroOficialColor = valor[2];
    localStorage.setItem('euroOficialVariacion', valor[0]);
    localStorage.setItem('euroOficialUpOrDown', valor[1]);
    localStorage.setItem('euroOficialColor', valor[2]);
  },
  setDolarParaleloVariacion(state, valor) {
    state.dolarParaleloVariacion = valor[0];
    state.dolarParaleloUpOrDown = valor[1];
    state.dolarParaleloColor = valor[2];
    localStorage.setItem('dolarParaleloVariacion', valor[0]);
    localStorage.setItem('dolarParaleloUpOrDown', valor[1]);
    localStorage.setItem('dolarParaleloColor', valor[2]);
  },
  setEuroParaleloVariacion(state, valor) {
    state.euroParaleloVariacion = valor[0];
    state.euroParaleloUpOrDown = valor[1];
    state.euroParaleloColor = valor[2];
    localStorage.setItem('euroParaleloVariacion', valor[0]);
    localStorage.setItem('euroParaleloUpOrDown', valor[1]);
    localStorage.setItem('euroParaleloColor', valor[2]);
  },
  setDolarMonitorVariacion(state, valor) {
    state.monitorDolarVariacion = valor[0];
    state.monitorDolarUpOrDown = valor[1];
    state.monitorDolarColor = valor[2];
    localStorage.setItem('monitorDolarVariacion', valor[0]);
    localStorage.setItem('monitorDolarUpOrDown', valor[1]);
    localStorage.setItem('monitorDolarColor', valor[2]);
  },
  setDataPetroleo(state, valor){
    state.dataPetroleo = valor;
    localStorage.setItem('dataPetroleo', valor);
  },
  setPetroleoVariacion(state, valor){
    state.petroleoVariacion = valor[0];
    state.petroleoUpOrDown = valor[1];
    state.petroleoColor = valor[2];
    localStorage.setItem('petroleoVariacion', valor[0]);
    localStorage.setItem('petroleoUpOrDown', valor[1]);
    localStorage.setItem('petroleoColor', valor[2]);
  },
  setPrecioOil(state, valor){
    state.precioOil = valor;
    localStorage.setItem('precioOil', valor);
  },
  minPP7D(state, valor){
    state.minPP7D = valor;
    localStorage.setItem('minPP7D', valor);
  },
  minPP2S(state, valor){
    state.minPP2S = valor;
    localStorage.setItem('minPP2S', valor);
  },
  minPP30D(state, valor){
    state.minPP30D = valor;
    localStorage.setItem('minPP30D', valor);
  },
  petroleoFecha(state, valor){
    state.petroleoFecha = valor;
    localStorage.setItem('petroleoFecha', valor);
  },
  baseMinPetroleoX(state, valor){
    state.baseMinPetroleoX = valor;
    localStorage.setItem('baseMinPetroleoX', valor);
  },
  minPetroleoX(state, valor){
    state.minPetroleoX = valor;
    localStorage.setItem('minPetroleoX', valor);
  },
  maxPetroleoX(state, valor){
    state.maxPetroleoX = valor;
    localStorage.setItem('maxPetroleoX', valor);
  },
  baseMinPetroleoY(state, valor){
    state.baseMinPetroleoY = valor;
    localStorage.setItem('baseMinPetroleoY', valor);
  },
  minPetroleoY(state, valor){
    state.minPetroleoY = valor;
    localStorage.setItem('minPetroleoY', valor);
  },
  maxPetroleoY(state, valor){
    state.maxPetroleoY = valor;
    localStorage.setItem('maxPetroleoY', valor);
  },
  loadedGraphPetroleo(state){
    state.loadedGraphPetroleo = true;
  },
  loadedGraphMercadoOficial(state){
    state.loadedGraphMercadoOficial = true;
  },
  loadedGraphMercadoParalelo(state){
    state.loadedGraphMercadoParalelo = true;
  },
  loadedTablaDolar(state){
    state.loadedTablaDolar = true;
  },
  loadedTablaEuro(state){
    state.loadedTablaEuro = true;
  },
  
  
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};