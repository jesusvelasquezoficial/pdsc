const axios = require("axios")
var express = require('express');
var app = express();

var getTasasDTD = () => {
  axios.get('http://0.0.0.0:8000/getTasasDTD').then(res => {
    var dataDTD = res.data
    var dtd = {
      fecha: dataDTD.fecha[0],
      euro: dataDTD.euro[0],
      dolar: dataDTD.dolar[0]
    }
    console.log(JSON.stringify(dataDTD));   
    console.log("Se ejecuto el script al terminarse el tiempo");
    console.log(dtd);
    
    axios.post('http://127.0.0.1:4000/api/dtd', {dtd: dtd}).then(res => {
      console.log(res.data.data);
      console.log("CARGO A LA BASE DE DATOS");
    }).catch(error => {
      console.log(error);
    }) 
  }).catch(error => {
    console.log(error);
  })
}

var getTasasBCV = () => {
  axios.get('http://0.0.0.0:8000/getTasasBCV').then(res => {
    //Variables del resultado de la API
    var dataBCV = res.data
    var bcv = {
      fecha: dataBCV.Fecha[0],
      euro: dataBCV.Euro[0],
      dolar: dataBCV.Dolar[0],
      yuan: dataBCV.Yuan[0],
      lira: dataBCV.Lira[0],
      rublo: dataBCV.Rublo[0]
    }
    console.log(JSON.stringify(dataBCV));   
    console.log("Se ejecuto el script al terminarse el tiempo");
    console.log(bcv);
    
    axios.post('http://127.0.0.1:4000/api/bcv', {bcv: bcv}).then(res => {
      console.log(res.data.data);
      console.log("CARGO A LA BASE DE DATOS");
    }).catch(error => {
      console.log(error);
    }) 
    
  }).catch(error => {
    console.log(error);
  })

}

var ejecutar_a_las = (hora, min, fun) => {
  var hora_actual = new Date()
  console.log(`Hora actual: ${hora_actual}`);
  
  var momento = new Date(hora_actual.getFullYear(), hora_actual.getMonth(), hora_actual.getDate(), hora, min, 0)
  
  // si es la hora del momento es menos a la hora actual
  ahora = (momento<hora_actual) ? new Date(momento.getTime()+1000*60*60*24) : momento
  console.log(`Hora de ejecucion: ${ahora}`);
  tiempo_espera = ahora.getTime() - hora_actual.getTime()
  console.log(`Tiempo de espera: ${tiempo_espera}`);
  
  if (tiempo_espera>=0) {
    setTimeout(() => {
      fun()
      ejecutar_a_las(hora,min,fun)
    }, tiempo_espera);
  }

}

app.get('/', (req, res) => {
  res.send('Bot Activo')
  console.log('Bot estado: Activo');
});


app.listen(3000, () => {
  console.log('Bot listening on port 3000!');
  console.log('##### Mercado Oficial #####');
  ejecutar_a_las(20,10,getTasasBCV)
  console.log('###################################')
  console.log('##### Mercado Paralelo #####');
  ejecutar_a_las(20,10,getTasasDTD)
  console.log('###################################')
});