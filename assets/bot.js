process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
const axios = require("axios");
var express = require('express')
const io = require('socket.io-client');
const telegraf = require('telegraf')

var app = express();
const bot = new telegraf('808493714:AAHY05haOIoj3MnrqmMBs7hsYmceH62S1zI')
app.use(bot.webhookCallback('ruta_bot'))
bot.telegram.setWebhook('http://pdsc.phoenixplux:4000/ruta_bot')
bot.command('/test', ctx => {
  ctx.reply('hola Mundo Bot')
})

var bcv = null
var dtd = null
var dm = null

var getTasasDM = () => {
  axios.get('http://0.0.0.0:8000/getTasasDM').then(res => {
    var dataDM = res.data
    var dm = {
      fecha: dataDM.fecha[0],
      dolar: dataDM.dolar[0]
    }
    console.log(JSON.stringify(dataDM));
    console.log("Se ejecuto el script al terminarse el tiempo");
    console.log(dm);

    axios.post('http://127.0.0.1:4000/api/dm', {dm: dm}).then(res => {
      console.log(res.data.data);
      console.log("CARGO A LA BASE DE DATOS");
    }).catch(error => {
      console.log(error);
    })
  })
}

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
  console.log(`Hora ejecuc: ${ahora}`);
  tiempo_espera = ahora.getTime() - hora_actual.getTime()
  console.log(`Tiempo de espera: ${tiempo_espera}`);
  
  if (tiempo_espera>=0) {
    setTimeout(() => {
      fun()
      ejecutar_a_las(hora,min,fun)
    }, tiempo_espera);
  }

}

var getLastTasasDB = async () =>{
  await axios.get('http://127.0.0.1:4000/api/lastTasasBcv').then(res => {
    bcv = res.data.data
  }).catch(error => {
    console.log(error);
    console.log('Entro por Catch Bcv');
  }) 
  await axios.get('http://127.0.0.1:4000/api/lastTasasDtd').then(res => {
    dtd = res.data.data
  }).catch(error => {
    console.log(error);
    console.log('Entro por Catch Dtd');
  }) 
  await axios.get('http://127.0.0.1:4000/api/lastTasasDm').then(res => {
    dm = res.data.data
  }).catch(error => {
    console.log(error);
    console.log('Entro por Catch Dm');
  })
  
  var msj_notificacion = `<center> Este es un mensaje de la Central de Inteligencia Financiera de Phoenix Plus. </center> <br>
  Actualizacion de Tasas <br>
  Mercado Oficial y Paralelo <br>
  </strong>Fecha:</strong> ${dtd.fecha} <br>
  -------------------------- <br>
  <strong>Euro:</strong> <br>
  BCV: ${bcv.euro} <br>
  Dolar Today: ${dtd.euro} <br>
  -------------------------- <br>
  <strong>Dolar:</strong> <br>
  BCV: ${bcv.dolar} <br>
  Dolar Today: ${dtd.dolar} <br>
  Monitor Dolar: ${dm.dolar} <br>
  --------------------------
  <p align="justify" style="margin:0px; padding:0px"><font size="1">Los precios reflejados son obtenidos de los indicadores referenciales y los resultados son mostrados a modo de orientación. <br> </font></p>
  <div align='center'>Para ampliar informacion de click aqui: <br> <a href="http://pdsc.phoenixplus.net:4000" style="text-align:center; color:white; text-decoration:none;">Phoenix Plus</a></div>` 

  console.log(msj_notificacion);
  let message = {
    fecha: "", // FALTA LA FECHA DEL BOT
    hora: "",  // FALTA LA HORA DEL BOT
    name: "CIF BOT",
    from_id: 3, //Este es el ID del USUARIO Nro 1 --> DEBERIA SER UN ID del BOT
    conversation_id: 1,
    text: msj_notificacion
  }

  await axios.post('https://127.0.0.1:4001/api/messages', {message: message}).then().catch(error => {
    console.log(error);
    console.log('Entro por Catch MSJ');
  })


}

app.get('/', (req, res) => {
  res.send('Bot Activo')
  console.log('Bot estado: Activo');
});

app.get('/bot_notificacion_push', (req, res) => {
  res.send('El Puto Bot, envio una notificacion...!')
  getLastTasasDB()
   
})

app.get('/bot_getTasas', (req, res) => {
  res.send('El Puto Bot, obtuvo las tasas...!')
  getTasasBCV()
  getTasasDTD()
  getTasasDM()
})

app.get('/ruta_bot',(req,res)=>{
  res.send('llamada a la ruta del bot')
})

app.post('/ruta_bot',(req,res)=>{
  res.send('llamada a la ruta del bot')
})

app.listen(3000, () => {
  console.log('Bot listening on port 3000!');
  console.log('############################# Mercado Oficial #############################');
  console.log("BANCO CENTRAL DE VENEZUELA:");
  ejecutar_a_las(20,10,getTasasBCV)
  // ejecutar_a_las(8,59,getTasasBCV)
  console.log('############################################################################')
  console.log('############################# Mercado Paralelo #############################');
  console.log("DOLAR TODAY:");
  ejecutar_a_las(20,10,getTasasDTD)
  // ejecutar_a_las(8,59,getTasasDTD)
  console.log('-----------------------------------------------------------------------------')
  console.log("MONITOR DOLAR");
  ejecutar_a_las(21,10,getTasasDM)
  // ejecutar_a_las(8,59,getTasasDM)
  console.log('############################################################################')
  ejecutar_a_las(21, 0, getLastTasasDB)
  console.log('-----------------------------------------------------------------------------')
  ejecutar_a_las(22, 0, getLastTasasDB)
  console.log('-----------------------------------------------------------------------------')
  ejecutar_a_las(23, 0, getLastTasasDB)
  console.log('-----------------------------------------------------------------------------')
  ejecutar_a_las(23, 59, getLastTasasDB)
  console.log('-----------------------------------------------------------------------------')
  ejecutar_a_las(1, 0, getLastTasasDB)
  console.log('-----------------------------------------------------------------------------')
  ejecutar_a_las(2, 0, getLastTasasDB)
  console.log('-----------------------------------------------------------------------------')
  ejecutar_a_las(3, 0, getLastTasasDB)
  console.log('-----------------------------------------------------------------------------')
  ejecutar_a_las(4, 0, getLastTasasDB)
  console.log('-----------------------------------------------------------------------------')
  ejecutar_a_las(5, 0, getLastTasasDB)
  console.log('-----------------------------------------------------------------------------')
  ejecutar_a_las(6, 0, getLastTasasDB)
  console.log('-----------------------------------------------------------------------------')
  ejecutar_a_las(7, 0, getLastTasasDB)
  console.log('-----------------------------------------------------------------------------')
  ejecutar_a_las(8, 0, getLastTasasDB)
  console.log('-----------------------------------------------------------------------------')
  ejecutar_a_las(9, 0, getLastTasasDB)
  console.log('-----------------------------------------------------------------------------')

});