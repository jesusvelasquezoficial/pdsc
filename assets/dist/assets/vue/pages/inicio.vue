<template>
  <f7-page>
    <!-- Menu superior -->
    <f7-navbar>
      <f7-nav-left>
        <f7-link panel-open="left" icon="fas fa-bars"></f7-link>
      </f7-nav-left>
      <f7-nav-title>Pagina de Inicio</f7-nav-title>
      <f7-nav-right navbar-tooltip="hola">
        <small>{{ dfhora }}</small>
        <f7-link icon="fas fa-user" panel-open="right" id="menu-diestro"></f7-link>
        <b-tooltip
          :title="fullname"
          target="menu-diestro"
          placement="left"
          delay="{ show: 0, hide: 0 }"
          boundary-padding="10"
          no-Fade="true"
          show
        ></b-tooltip>
      </f7-nav-right>
    </f7-navbar>
    <marquee he direction="left">
      <div class="d-flex justify-content-between align-items-center">
        <div class="col-1" style="border-left: solid 5px #252F5D;">
          <p class="p-0 m-0">Dolar Oficial</p>
          <h3 class="p-0 m-0">{{euroOficialHoy}}</h3>
        </div>
        <div class="col-1" style="border-left: solid 5px Green;">
          <p class="p-0 m-0">Dolar Today</p>
          <h3 class="p-0 m-0">{{dolarParaleloHoy}}</h3>
        </div>
        <div class="col-1" style="border-left: solid 5px DarkOrange;">
          <p class="p-0 m-0">Dolar Monitor</p>
          <h3 class="p-0 m-0">{{monitorDolarHoy}}</h3>
        </div>
        <div class="col-1" style="border-left: solid 5px Red;">
          <p class="p-0 m-0">Euro Oficial</p>
          <h3 class="p-0 m-0">{{euroOficialHoy}}</h3>
        </div>
        <div class="col-1" style="border-left: solid 5px Darkred;">
          <p class="p-0 m-0">Euro Paralelo</p>
          <h3 class="p-0 m-0">{{euroParaleloHoy}}</h3>
        </div>
        <div class="col-1" style="border-left: solid 5px Black;">
          <p class="p-0 m-0">Petroleo</p>
          <h3 class="p-0 m-0">{{petroleoHoy}}</h3>
        </div>
        <div class="col-1" style="border-left: solid 5px Gold;">
          <p class="p-0 m-0">Oro</p>
          <h3 class="p-0 m-0">{{oroHoy}}</h3>
        </div>
        <div class="col-1" style="border-left: solid 5px Blue;">
          <p class="p-0 m-0">Petro</p>
          <h3 class="p-0 m-0">{{petroHoy}}</h3>
        </div>
        <div class="col-1" style="border-left: solid 5px Yellow;">
          <p class="p-0 m-0">Bitcoin</p>
          <h3 class="p-0 m-0">{{bitcoinHoy}}</h3>
        </div>
        <div class="col-1" style="border-left: solid 5px DarkViolet;">
          <p class="p-0 m-0">S&P 500</p>
          <h3 class="p-0 m-0">{{sp500Hoy}}</h3>
        </div>
        <div class="col-1" style="border-left: solid 5px DeepPink;">
          <p class="p-0 m-0">Nasdaq</p>
          <h3 class="p-0 m-0">{{nasdaqHoy}}</h3>
        </div>
      </div>
    </marquee>
    <!-- Body -->
    <f7-block-title>Productos</f7-block-title>
    <!-- Slider de Productos -->
    <f7-block>
      <f7-swiper navigation :params="paramSlider">
        <f7-swiper-slide v-for="data in productosSlider" :key="data.id">
          <producto :data="data"></producto>
        </f7-swiper-slide>
      </f7-swiper>
    </f7-block>
    <!-- Productos -->
    <f7-block>
      <b-container fluid>
        <b-row>
          <b-col v-for="data in productos" :key="data.id" class="px-0" xs="12" sm="6" md="4" lg="3">
            <producto :data="data"></producto>
          </b-col>
        </b-row>
      </b-container>
    </f7-block>
  </f7-page>
</template>
<script>
import Auth from "../../auth";
import Producto from "./producto.vue";
export default {
  components: {
    Producto
  },
  data() {
    return {
      user:
        localStorage.getItem("user") != null
          ? JSON.parse(localStorage.getItem("user"))
          : "",
      productos: [],
      dfhora: "",
      euroOficialHoy: "",
      dolarOficialHoy: "",
      euroParaleloHoy: "",
      dolarParaleloHoy: "",
      monitorDolarHoy: "",
      petroleoHoy: "",
      oroHoy: "",
      petroHoy: "",
      bitcoinHoy: "",
      sp500Hoy: "",
      nasdaqHoy: "",
      bcv: {
        fecha: "",
        euro: "",
        yuan: "",
        lira: "",
        rublo: "",
        dolar: ""
      },
      dtd: {
        fecha: "",
        euro: "",
        dolar: ""
      },
      productosSlider: [],
      paramSlider: {
        speed: 500,
        slidesPerView: 4,
        breakpoints: {
          // when window width is >= 640px
          900: {
            slidesPerView: 3
          },
          700: {
            slidesPerView: 2
          },
          500: {
            slidesPerView: 1
          }
        }
      }
    };
  },
  methods: {
    cargarDatosProductos: function() {
      this.axios.get(Auth.URL + "/api/productos").then(res => {
        this.productos = res.data.data;
        this.productosSlider = res.data.data;
      });
    },
    getTasasHoy: function() {
      this.axios.get("http://" + Auth.HOST + ":8000/getTasasBCV").then(res => {
        var data = res.data;
        this.euroOficialHoy = data.Euro[0];
        this.dolarOficialHoy = data.Dolar[0];
      });
      this.axios.get("http://" + Auth.HOST + ":8000/getTasasDTD").then(res2 => {
        var data = res2.data;
        this.euroParaleloHoy = data.euro[0];
        this.dolarParaleloHoy = data.dolar[0];
      });
      this.axios
        .get("http://" + Auth.HOST + ":8000/getTasasDM")
        .then(res3 => {
          var data = res3.data;
          this.monitorDolarHoy = data.dolar[0];
        })
        .catch(err => {
          console.log("Dolar Monitor", err);
        });
      this.axios
        .get("http://" + Auth.HOST + ":8000/getTasasOIL")
        .then(res4 => {
          var data = res4.data;
          console.log(data);
          this.petroleoHoy = data.petroleo[0];
        })
        .catch(err => {
          console.log("Petroleo", err);
        });
      this.axios
        .get("http://" + Auth.HOST + ":8000/getTasasORO")
        .then(res3 => {
          console.log(res3);
          var data = res3.data;
          this.oroHoy = data.oro[0];
        })
        .catch(err => {
          console.log("Oro", err);
        });
      this.axios
        .get("http://" + Auth.HOST + ":8000/getTasasPTR")
        .then(res4 => {
          var data = res4.data;
          console.log(data);
          this.petroHoy = data.bolivar[0];
        })
        .catch(err => {
          console.log("Petro", err);
        });
      this.axios
        .get("http://" + Auth.HOST + ":8000/getTasasBTC")
        .then(res4 => {
          var data = res4.data;
          console.log(data);
          this.bitcoinHoy = data.bitcoin[0]; 
        })
        .catch(err => {
          console.log("Bitcoin", err);
        });
      this.axios
        .get("http://" + Auth.HOST + ":8000/getTasasSP500")
        .then(res4 => {
          var data = res4.data;
          console.log(data);
          this.sp500Hoy = data.sp500[0];
        })
        .catch(err => {
          console.log("PS500", err);
        });
      this.axios
        .get("http://" + Auth.HOST + ":8000/getTasasNASDAQ")
        .then(res4 => {
          var data = res4.data;
          console.log(data);
          this.nasdaqHoy = data.nasdaq[0];
        })
        .catch(err => {
          console.log("Nasdaq", err);
        });
    },
    getTasasBCV: function() {
      //Obtenemos los datos de la API
      this.axios.get("http://" + Auth.HOST + ":8000/getTasasBCV").then(res => {
        //Variables del resultado de la API
        var dataBCV = res.data;
        var dataFecha = dataBCV.Fecha[0];
        var dataEuro = dataBCV.Euro[0];
        var dataYuan = dataBCV.Yuan[0];
        var dataLira = dataBCV.Lira[0];
        var dataRublo = dataBCV.Rublo[0];
        var dataDolar = dataBCV.Dolar[0];

        //Formato 0+i -> 09
        function setFormato(i) {
          if (i < 10) {
            i = "0" + i;
          }
          return i;
        }

        //Caturamos fecha actual y le damos el formato necesario
        var miFecha = new Date();
        var year = miFecha.getFullYear();
        var mes = parseInt(miFecha.getMonth()) + 1; //[0:11] +1 -> 12 (diciembre)
        var dia = miFecha.getDate();
        dia = setFormato(dia);
        var hora = miFecha.getHours(); //[0:23]
        var minutos = miFecha.getMinutes(); //[0:59]
        if (dia < 10) {
          dia = "0" + parseInt(miFecha.getDate()) + 1;
        } // 0+[1:9]  -> 09 (dia)
        miFecha = year + "-" + mes + "-" + dia;
        console.log(hora);
        console.log(minutos);

        var horaAct = hora + ":" + minutos;
        if (horaAct == "9:50") {
          console.log("hora igual");
          console.log(horaAct);
        }

        //Si la fecha de los datos es diferente de la fecha actual
        if (dataFecha !== miFecha && horaAct == "13:57") {
          console.log("La fecha es diferente");
          //Cargamos a la DB los datos de la API
          console.log(dataBCV);
          console.log(dataFecha);
          console.log(dataEuro);
          console.log(dataYuan);
          console.log(dataLira);
          console.log(dataRublo);
          console.log(dataDolar);
        }

        //Prueba de Tiempo de espera con setTimeout()
        let ahora = new Date();
        let hora_de_ejecucion = new Date();
        hora_de_ejecucion.setHours(8);
        hora_de_ejecucion.setMinutes(59);
        hora_de_ejecucion.setSeconds(0);
        let tiempo_espera = hora_de_ejecucion.getTime() - Date.now();
        console.log(ahora);
        console.log(tiempo_espera);

        var hora_fin = 8;
        var min_fin = 59;
        var seg_fin = 59;

        var hora = new Date();
        var h = hora_fin - hora.getHours();
        var m = min_fin - hora.getMinutes();
        var s = seg_fin - hora.getSeconds();
        function mifun() {
          setTimeout(() => {
            console.log(h + ":" + m + ":" + s);
            mifun();
          }, 1000);
        }
        mifun();

        //Si el tiempo de espera es mayor (o igual) a 0 -> Permanece en Escucha hasta que llegue a 0
        if (tiempo_espera >= 0) {
          setTimeout(() => {
            console.log("Se ejecuto el script al terminarse el tiempo");
            console.log(dataBCV);
            console.log(dataFecha);
            console.log(dataEuro);
            console.log(dataYuan);
            console.log(dataLira);
            console.log(dataRublo);
            console.log(dataDolar);
            this.bcv.fecha = dataFecha;
            this.bcv.euro = dataEuro;
            this.bcv.yuan = dataYuan;
            this.bcv.lira = dataLira;
            this.bcv.rublo = dataRublo;
            this.bcv.dolar = dataDolar;

            this.axios
              .post(Auth.URL + "/api/bcv", { bcv: this.bcv })
              .then(res => {
                console.log(res.data.data);
                console.log("CARGO A LA BASE DE DATOS");
              });
          }, tiempo_espera);
        }
      });
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
    }
  },
  computed: {
    fullname: function() {
      return this.user.name + " " + this.user.ape;
    }
  },
  created() {
    // console.log(localStorage.getItem('user'));
    this.getTasasHoy();
    this.cargarDatosProductos();
    this.hora();
  },
  beforeMount() {
    this.cargarDatosProductos();
  }
};
</script>
<style>
.swiper-container {
  height: auto !important;
}
.swiper-container-android .swiper-slide,
.swiper-wrapper {
  height: auto !important;
}
.swiper-wrapper {
  height: auto !important;
}
</style>