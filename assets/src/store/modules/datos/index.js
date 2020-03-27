import Axios from 'axios';
import fun from '@/helpers/functions.js';

function pctjDolar(data, datos, index) {
    var precio = datos.dolar;
    var precioAnterior = data[index - 1] == undefined ? data[index].dolar : data[index - 1].dolar;
    precio = precio.split('.').join('').replace(',', '.');
    precioAnterior = precioAnterior.split('.').join('').replace(',', '.');
    var pctj = ((precio - precioAnterior) / precioAnterior) * 100;
    pctj = parseFloat(pctj).toFixed(2);
    return pctj;
};

function pctjEuro(data, datos, index) {
    var precio = datos.euro;
    var precioAnterior = data[index - 1] == undefined ? data[index].euro : data[index - 1].euro;
    precio = precio.split('.').join('').replace(',', '.');
    precioAnterior = precioAnterior.split('.').join('').replace(',', '.');
    var pctj = ((precio - precioAnterior) / precioAnterior) * 100;
    pctj = parseFloat(pctj).toFixed(2);
    return pctj;
};

function pctjBolivares(data, datos, index) {
    var precio = datos.bolivares;
    var precioAnterior = data[index - 1] == undefined ? data[index].bolivares : data[index - 1].bolivares;
    precio = precio.split('.').join('').replace(',', '.');
    precioAnterior = precioAnterior.split('.').join('').replace(',', '.');
    var pctj = ((precio - precioAnterior) / precioAnterior) * 100;
    pctj = parseFloat(pctj).toFixed(2);
    return pctj;
};
const API = 'http://pdsc.phoenixplus.net:4000/api/';
const STORAGE_KEY = "PHX";
export default {
    namespaced: true,
    state: {
        loadedTasas: false,
        loadedIndicadores: false,
        loaded_grafico_general: false,
        tasas: JSON.parse(localStorage.getItem(STORAGE_KEY + 'tasas')) || [],
        // indicadores: [],
        configMiniMap: [0, 0, 0, 1, 26, 1, 26], // Bcv - Dtd - dm - oil - oro - btc - ptr
    },
    mutations: {
        ADD_TASA: (state, tasa) => {
            state.tasas.push(tasa);
            localStorage.setItem(STORAGE_KEY + 'tasas', JSON.stringify(state.tasas));
        },
        SET_TASAS: (state, tasa) => {
            state.tasas.push(tasa);
        },
        SET_LOADED_TASAS: state => {
            state.loadedTasas = true;
        },
        SET_LOADED_INDICADORES: state => {
            state.loadedIndicadores = true;
        },
        SET_lOADED_GRAFICO_GENERAL: state => {
            state.loaded_grafico_general = true;
        },
    },
    actions: {
        async fetchTasas({
            commit,
            getters
        }, payload) {
            let nombre = '';
            let url = '';
            let color = '';
            if (payload == 'bcv' || payload == 'dtd') {
                if (payload == 'bcv') {
                    nombre = payload[0].toUpperCase() + payload.slice(1);
                    url = '/forex/dolar';
                    color = '#252F5D';
                } else {
                    nombre = payload[0].toUpperCase() + payload.slice(1);
                    url = '/forex/dolar';
                    color = 'green';
                }
                if (!getters.tasasNombres.includes(nombre)) {
                    await Axios.get(API + payload).then(response => {
                        // Damos formato a la data
                        let tasas = response.data.data.map(tasa => ({
                            fechas: tasa.fecha,
                            dolar: tasa.dolar,
                            euro: tasa.euro
                        }));
                        // Variables
                        let porcentajeDolar = [];
                        let porcentajeEuro = [];
                        let fechas = [];
                        let precios = {
                            dolar: [],
                            euro: [],
                        };
                        // Recorremos las tasas y cargamos las variables necesarias
                        tasas.forEach((tasa, index) => {
                            fechas.push(tasa.fechas);
                            precios.dolar.push(tasa.dolar);
                            precios.euro.push(tasa.euro);
                            porcentajeDolar.push(pctjDolar(tasas, tasa, index));
                            porcentajeEuro.push(pctjEuro(tasas, tasa, index));
                        });
                        // almacenamos los datos haciendo un commit
                        commit('ADD_TASA', {
                            nombre: nombre,
                            url: url,
                            color: color,
                            fecha: tasas[tasas.length - 1].fecha,
                            precio: {
                                dolar: tasas[tasas.length - 1].dolar,
                                euro: tasas[tasas.length - 1].euro,
                            },
                            variacion: {
                                dolar: porcentajeDolar[porcentajeDolar.length - 1],
                                euro: porcentajeEuro[porcentajeEuro.length - 1],
                            },
                            fechas: fechas,
                            precios: {
                                dolar: precios.dolar,
                                euro: precios.euro,
                            },
                            variaciones: {
                                dolar: porcentajeDolar,
                                euro: porcentajeEuro,
                            },
                        });
                    });
                }
            } else if (payload == 'ptr') {
                nombre = 'Petro';
                url = '/criptomonedas/petro';
                color = 'gray';
                if (!getters.tasasNombres.includes(nombre)) {
                    await Axios.get(API + payload).then(response => {
                        let tasas = response.data.data;
                        let porcentajeBolivares = [];
                        let fechas = [];
                        let precios = {
                            bolivares: [],
                        };
                        tasas.forEach((tasa, index) => {
                            fechas.push(tasa.fecha);
                            precios.bolivares.push(tasa.bolivares);
                            porcentajeBolivares.push(pctjBolivares(tasas, tasa, index));
                        });
                        // almacenamos los datos
                        commit('ADD_TASA', {
                            nombre: nombre,
                            url: url,
                            color: color,
                            fecha: tasas[tasas.length - 1].fecha,
                            precio: {
                                bolivares: tasas[tasas.length - 1].bolivares,
                            },
                            variacion: {
                                bolivares: porcentajeBolivares[porcentajeBolivares.length - 1],
                            },
                            fechas: fechas,
                            precios: {
                                bolivares: precios.bolivares,
                            },
                            variaciones: {
                                bolivares: porcentajeBolivares,
                            },
                        });
                    });
                }
            } else {
                if (payload == 'dm') {
                    nombre = 'Dolar Monitor';
                    url = '/forex/dolar';
                    color = 'darkorange';
                }
                if (payload == 'oil') {
                    nombre = 'Petroleo';
                    url = '/materia-prima/petroleo';
                    color = 'black';
                }
                if (payload == 'gold') {
                    nombre = 'Oro';
                    url = '/materia-prima/oro';
                    color = 'orange';
                }
                if (payload == 'btc') {
                    nombre = 'Bitcoin';
                    url = '/criptomonedas/bitcoin';
                    color = 'yellow';
                }
                if (!getters.tasasNombres.includes(nombre)) {
                    await Axios.get(API + payload).then(response => {
                        // fechas y precios
                        let tasas = response.data.data;
                        let porcentajeDolar = [];
                        let fechas = [];
                        let precios = {
                            dolar: [],
                        };
                        tasas.forEach((tasa, index) => {
                            fechas.push(tasa.fecha);
                            precios.dolar.push(tasa.dolar);
                            porcentajeDolar.push(pctjDolar(tasas, tasa, index));
                        });
                        // almacenamos los datos
                        commit('ADD_TASA', {
                            nombre: nombre,
                            url: url,
                            color: color,
                            fecha: tasas[tasas.length - 1].fecha,
                            precio: {
                                dolar: tasas[tasas.length - 1].dolar,
                            },
                            variacion: {
                                dolar: porcentajeDolar[porcentajeDolar.length - 1],
                            },
                            fechas: fechas,
                            precios: {
                                dolar: precios.dolar,
                            },
                            variaciones: {
                                dolar: porcentajeDolar,
                            },
                        });
                    });
                }
            }
        },
        async fetchAllTasas({ commit, dispatch }) {
            if (localStorage.getItem(STORAGE_KEY + 'tasas') != undefined) {
                console.log('entro');
                localStorage.setItem(STORAGE_KEY + 'tasas', JSON.stringify(''));
            }
            await dispatch('fetchTasas', 'bcv');
            await dispatch('fetchTasas', 'dtd');
            await dispatch('fetchTasas', 'dm');
            await dispatch('fetchTasas', 'oil');
            await dispatch('fetchTasas', 'gold');
            await dispatch('fetchTasas', 'btc');
            await dispatch('fetchTasas', 'ptr');
            commit('SET_LOADED_TASAS');
        }
    },
    getters: {
        tasasNombres: state => state.tasas.map(tasa => tasa.nombre),
        sliderTasas(state) {
            let dataDolar = [];
            let dataEuro = [];
            let data = [];
            state.tasas.forEach(tasa => {
                if (tasa.nombre == "Bcv") {
                    dataDolar.push({
                        nombre: 'Dolar Oficial',
                        url: tasa.url,
                        precio: `$ ${tasa.precio.dolar}`,
                        variacion: tasa.variacion.dolar,
                    });
                    dataEuro.push({
                        nombre: 'Euro Oficial',
                        url: tasa.url,
                        precio: `€ ${tasa.precio.euro}`,
                        variacion: tasa.variacion.euro,
                    });
                } else if (tasa.nombre == "Dtd") {
                    dataDolar.push({
                        nombre: 'Dolar Paralelo',
                        url: tasa.url,
                        precio: `$ ${tasa.precio.dolar}`,
                        variacion: tasa.variacion.dolar,
                    });
                    dataEuro.push({
                        nombre: 'Euro Paralelo',
                        url: tasa.url,
                        precio: `€ ${tasa.precio.euro}`,
                        variacion: tasa.variacion.euro,
                    });
                } else if (tasa.nombre == "Petro") {
                    data.push({
                        nombre: tasa.nombre,
                        url: tasa.url,
                        precio: `Bs ${tasa.precio.bolivares}`,
                        variacion: tasa.variacion.bolivares,
                    });
                } else {
                    if (tasa.nombre == "Dolar Monitor") {
                        dataDolar.push({
                            nombre: tasa.nombre,
                            url: tasa.url,
                            precio: `$ ${tasa.precio.dolar}`,
                            variacion: tasa.variacion.dolar,
                        });
                    } else {
                        data.push({
                            nombre: tasa.nombre,
                            url: tasa.url,
                            precio: `$ ${tasa.precio.dolar}`,
                            variacion: tasa.variacion.dolar,
                        });
                    }
                }
            });
            let enContruccion = [{
                    nombre: 'Nasdaq',
                    url: '/bolsas-valores/nasdaq',
                    precio: 'En construccion',
                    variacion: '',
                },
                {
                    nombre: 'S&P 500',
                    url: '/bolsas-valores/sp500',
                    precio: 'En construccion',
                    variacion: '',
                }
            ]
            return [...dataDolar, ...dataEuro, ...data, ...enContruccion];
        },
        indicadoresTasas(state) {
            let indicadores = state.tasas.map((tasa, index) => {
                let fechas = tasa.fechas.slice(tasa.fechas.length - 21);
                let precio = '';
                let precios = [];
                if (tasa.nombre == 'Petro') {
                    precio = `Bs ${tasa.precio.bolivares}`;
                    precios = tasa.precios.bolivares.slice(tasa.precios.bolivares.length - 21);
                } else {
                    precio = `$ ${tasa.precio.dolar}`;
                    precios = tasa.precios.dolar.slice(tasa.precios.dolar.length - 21);
                }
                let porcentajes = precios.map(precio => {
                    let varPrecioFijo = ((parseFloat(precio) - parseFloat(precios[0])) / parseFloat(precios[0])) * 100;
                    return Number(varPrecioFijo).toFixed(2);
                });
                let variacion = porcentajes[porcentajes.length - 1];
                return {
                    nombre: tasa.nombre,
                    url: tasa.url,
                    precio,
                    variacion,
                    fechas,
                    data: porcentajes,
                    configMiniMap: state.configMiniMap[index]
                };
            });
            return indicadores;
        },
        indicadoresGraficoGeneral(state) {
            let indicadores = [];
            state.tasas.forEach(tasa => {
                if (tasa.nombre != 'Petro') {
                    let nombre = '';
                    if (tasa.nombre == 'Bcv') {
                        nombre = 'Dolar Oficial';
                    } else if (tasa.nombre == 'Dtd') {
                        nombre = 'Dolar Today';
                    } else {
                        nombre = tasa.nombre;
                    }
                    indicadores.push({
                        nombre: nombre,
                        url: tasa.url,
                        color: tasa.color,
                        precio: tasa.precio.dolar,
                        variacion: tasa.variacion.dolar,
                        fechas: state.tasas[0].fechas,
                        datos: tasa.variaciones.dolar
                    });
                }
            });
            return indicadores;
        },
    }
}