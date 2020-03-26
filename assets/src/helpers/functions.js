import moment from "moment";

function sube0baja(params) {
    var flag = Math.sign(params);
    if (flag > 0) {
        return ['zmdi zmdi-long-arrow-up', 'text-up'];
    } else if (flag < 0) {
        return ['zmdi zmdi-long-arrow-down', 'text-down'];
    } else {
        return ['fas fa-equals font-sm', 'text-white'];
    }
};

function porcentajeDolar(data, datos, index) {
    var precio = datos.dolar;
    var precioAnterior = data[index - 1] == undefined ? data[index].dolar : data[index - 1].dolar;
    precio = precio.split('.').join('').replace(',', '.');
    precioAnterior = precioAnterior.split('.').join('').replace(',', '.');
    var pctj = ((precio - precioAnterior) / precioAnterior) * 100;
    pctj = parseFloat(pctj.toFixed(2));
    var result = sube0baja(pctj);
    result.unshift(pctj);
    // console.log(a);
    // console.log(b);
    // console.log(datos.id, pctj);
    // console.log(result);
    return result;
};

function porcentajeEuro(data, datos, index) {
    var precio = datos.euro;
    var precioAnterior = data[index - 1] == undefined ? data[index].euro : data[index - 1].euro;
    precio = precio.split('.').join('').replace(',', '.');
    precioAnterior = precioAnterior.split('.').join('').replace(',', '.');
    var pctj = ((precio - precioAnterior) / precioAnterior) * 100;
    pctj = parseFloat(pctj.toFixed(2));
    var result = sube0baja(pctj);
    result.unshift(pctj);
    // console.log(a);
    // console.log(b);
    // console.log(datos.id, pctj);
    // console.log(result);
    return result;
};

function porcentajeBolivares(data, datos, index) {
    var precio = datos.bolivares;
    var precioAnterior = data[index - 1] == undefined ? data[index].bolivares : data[index - 1].bolivares;
    precio = precio.split('.').join('').replace(',', '.');
    precioAnterior = precioAnterior.split('.').join('').replace(',', '.');
    var pctj = ((precio - precioAnterior) / precioAnterior) * 100;
    pctj = parseFloat(pctj.toFixed(2));
    var result = sube0baja(pctj);
    result.unshift(pctj);
    // console.log(a);
    // console.log(b);
    // console.log(datos.id, pctj);
    // console.log(result);
    return result;
}
export default {
    arrayTasas: tasas => {
        let fechas = [];
        let precios = {
            dolar: [],
        };
        let variacion = {
            dolar: {
                porcentaje: [],
                icono: [],
                color: [],
            },
        };

        tasas.forEach((datos, index) => {
            let fecha = moment(datos.fecha).format("L");
            let precioDolar = parseFloat(datos.dolar.replace(".", "").replace(",", "."));
            let varDolar = porcentajeDolar(tasas, datos, index);
            // almacenamos en las listas de fechas y precios
            fechas[index] = fecha;
            precios.dolar[index] = precioDolar;
            variacion.dolar.porcentaje[index] = varDolar[0];
            variacion.dolar.icono[index] = varDolar[1];
            variacion.dolar.color[index] = varDolar[2];
        });
        let result = {
            fechas: fechas,
            precios: precios,
            variacion: variacion
        };
        return result;
    },
    arrayTasas2: tasas => {
        let fechas = [];
        let precios = {
            dolar: [],
            euro: [],
        };
        let variacion = {
            dolar: {
                porcentaje: [],
                icono: [],
                color: [],
            },
            euro: {
                porcentaje: [],
                icono: [],
                color: [],
            },
        };

        tasas.forEach((datos, index) => {
            let fecha = moment(datos.fecha).format("L");
            let precioDolar = parseFloat(datos.dolar.replace(".", "").replace(",", "."));
            let precioEuro = parseFloat(datos.euro.replace(".", "").replace(",", "."));
            let varDolar = porcentajeDolar(tasas, datos, index);
            let varEuro = porcentajeEuro(tasas, datos, index);
            // almacenamos en las listas de fechas y precios
            fechas[index] = fecha;
            precios.dolar[index] = precioDolar;
            precios.euro[index] = precioEuro;
            variacion.dolar.porcentaje[index] = varDolar[0];
            variacion.euro.porcentaje[index] = varEuro[0];
            variacion.dolar.icono[index] = varDolar[1];
            variacion.euro.icono[index] = varEuro[1];
            variacion.dolar.color[index] = varDolar[2];
            variacion.euro.color[index] = varEuro[2];
        });
        let result = {
            fechas: fechas,
            precios: precios,
            variacion: variacion
        };
        return result;
    },
    arrayTasas3: tasas => {
        let fechas = [];
        let precios = {
            bolivares: [],
        };
        let variacion = {
            bolivares: {
                porcentaje: [],
                icono: [],
                color: [],
            },
        };

        tasas.forEach((datos, index) => {
            let fecha = moment(datos.fecha).format("L");
            let precioBolivares = parseFloat(datos.bolivares.replace(".", "").replace(",", "."));
            let varBolivares = porcentajeBolivares(tasas, datos, index);
            // almacenamos en las listas de fechas y precios
            fechas[index] = fecha;
            precios.bolivares[index] = precioBolivares;
            variacion.bolivares.porcentaje[index] = varBolivares[0];
            variacion.bolivares.icono[index] = varBolivares[1];
            variacion.bolivares.color[index] = varBolivares[2];
        });
        let result = {
            fechas: fechas,
            precios: precios,
            variacion: variacion
        };
        return result;
    },
    variacion: pctj => {
        return sube0baja(pctj);
    },
    dataPctjBase(indexBase, precios) {
        let data = [];
        let precioBase = precios[indexBase];
        for (let index = indexBase; index < precios.length; index++) {
            const precio = precios[index];
            // console.log(precio + " - " + precioBase + " / " + precioBase + " * " + "100");
            var variacion = ((precio - precioBase) / precioBase) * 100;
            // console.log(variacion.toFixed(2));
            data.push(Number(variacion.toFixed(2)));
        }
        return data;
    },
    precioActual: precios => {
        let precio = precios[precios.length - 1]
        precio = precio.toFixed(2);
        return new Intl.NumberFormat("de-DE").format(precio);
    },
    variacionActual: variacion => {
        let porcentaje = variacion.porcentaje[variacion.porcentaje.length - 1].toFixed(2);
        let icono = variacion.icono[variacion.icono.length - 1];
        let color = variacion.color[variacion.color.length - 1];
        return [porcentaje, icono, color];
    }
};