<template>
  <f7-page>
    <f7-navbar title="Tasas del Mercado" back-link="Back">
      <f7-nav-right> 
        <small>{{ dfhora }}</small>
        <f7-link icon="fas fa-user" panel-open="right"></f7-link>
      </f7-nav-right>
    </f7-navbar>
    <f7-block class="mt-0">
      <b-row>
        <b-col sm="12" md="6">
          <f7-block-title class="mt-2"><h1>Euro</h1>Oficial y Paralelo</f7-block-title>
          <f7-block>
            <!-- Graficos de linea -->
            <line-chart :chartData="dataEuro" :options="options"></line-chart>
          </f7-block>
        </b-col>
        <b-col sm="12" md="6">
          <f7-block-title class="mt-2"><h1>Dolar</h1>Oficial y Paralelo</f7-block-title>
          <f7-block class="mt-0">
            <!-- Graficos de linea -->
            <line-chart :chartData="dataDolar" :options="options"></line-chart>
          </f7-block>
        </b-col>
      </b-row>
      <b-row>
        <b-col sm="12" md="6">
          <f7-block-title class="mt-0"><h1>Euro</h1>Información Diaria</f7-block-title>
          <f7-block>
            <table class="data-table">
              <thead>
                <tr>
                  <th class="fecha" style="min-width:100%">Fecha</th>
                  <th class="euro">Euro Oficial</th>
                  <th class="dolar">Euro Paralelo</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, i) in tablaE" :key="i">
                  <td class="fecha">{{ item.fecha }}</td>
                  <td class="euro">{{  item.euroOficial  }}</td>
                  <td class="dolar">{{  item.euroParalelo  }}</td>
                </tr>
              </tbody>
            </table>
          </f7-block>
        </b-col>
        <b-col sm="12" md="6">
          <f7-block-title class="mt-0"><h1>Dolar</h1>Información Diaria</f7-block-title>
          <f7-block>
            <table class="data-table">
              <thead>
                <tr>
                  <th class="fecha" style="min-width:100%">Fecha</th>
                  <th class="euro">Dolar Oficial</th>
                  <th class="dolar">Dolar Paralelo</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, i) in tablaD" :key="i">
                  <td class="fecha">{{ item.fecha }}</td>
                  <td class="euro">{{  item.dolarOficial  }}</td>
                  <td class="dolar">{{  item.dolarParalelo  }}</td>
                </tr>
              </tbody>
            </table>
          </f7-block>
        </b-col>
      </b-row>
    </f7-block>
  </f7-page>
</template>

<script>

//Recursos
import Auth from './../../auth'

//Componentes
import LineChart from './LineChart.js'
import { f7Row } from 'framework7-vue'

export default {
  components:{
    LineChart
  },
  data() {
    return {
      dfhora: '',

      fechas:null,
      fechaParalelo:null,

      euroOficial: null,
      dolarOficial: null,

      euroParalelo: null,
      dolarParalelo: null,

      tablaE: [],
      tablaD: [],

      options: {
        responsive: true,
        maintainAspectRatio: false,
        tooltips: {
            mode: 'index'
        }
      }
    }
  },
  methods: {
    hora: function() {
      let t = new Date()
      let h = t.getHours()
      let m = t.getMinutes()
          m = setFormato(m)
      let s = t.getSeconds()
          s = setFormato(s)
      
      function setFormato(i){
        if (i<10) {
          i='0'+i
        }
        return i
      }
      t = setTimeout(this.hora, 500);
      this.dfhora = h+":"+m+":"+s
    },
    getDataOficial(){
      this.axios.get(Auth.URL+'/api/bcv').then(res => {
        let bcv = res.data.data
        var fecha = []
        var dolar = []
        var euro = []

        bcv.forEach((e, i) => {
          fecha[i] = e.fecha
          var eu = e.euro.replace(".", "")
          var d = e.dolar.replace(".", "")
          euro[i] = eu.replace(",", ".")
          dolar[i] = d.replace(",", ".")

          // this.tablaEuro[i] = {
          //   fecha: fecha[i],
          //   euroOficial: dolar[i]
          // }

        });
        this.fechas = fecha
        this.euroOficial = euro
        this.dolarOficial = dolar
        
      })
    },
    getDataParalelo(){
      this.axios.get(Auth.URL+'/api/dtd').then(res => {
        let dtd = res.data.data
        var fecha = []
        var dolar = []
        var euro = []

        dtd.forEach((e, i) => {
          fecha[i] = e.fecha
          var eu = e.euro.replace(".", "")
          var d = e.dolar.replace(".", "")
          euro[i] = eu.replace(",", ".")
          dolar[i] = d.replace(",", ".")
          
          // this.tablaEuro[i]['euroParalelo'] = euro[i]
          
        });

        this.fechaParalelo = fecha
        this.euroParalelo = euro
        this.dolarParalelo = dolar

      })
    },
    getDataBCV() {
      this.loadedEuro = false
      this.axios.get(Auth.URL+'/api/bcv').then(res => {
        let bcv = res.data.data
        this.bcv = bcv
        var fecha = []
        var dolar = []
        var euro = []
        bcv.forEach((e, i) => {
          fecha[i] = e.fecha
          var eu = e.euro.replace(".", "")
          var d = e.dolar.replace(".", "")
          euro[i] = eu.replace(",", ".")
          dolar[i] = d.replace(",", ".")
        });
        this.euroOficial = euro
        this.dolarOficial = dolar
        this.dataEuroColeccion = {
          type:'line',
          labels: fecha,
          datasets: [
            {
              label: 'Euro Oficial',
              backgroundColor:'rgba(0,0,0,0)',
              borderColor: 'Red',
              data: this.euroOficial
            },
            {
              label: 'Euro Paralelo',
              backgroundColor:'rgba(0,0,0,0)',
              borderColor: 'Darkred',
              data: this.euroParalelo
            }
          ]
        }
        this.loadedEuro = true
      })
    },
    getDataDTD() {
      this.loadedDolar = false
      this.axios.get(Auth.URL+'/api/dtd').then(async res => {
        let dtd = res.data.data
        this.dtd = dtd
        var fecha = []
        var dolar = []
        var euro = []
        dtd.forEach((e, i) => {
          fecha[i] = e.fecha
          // var eu = e.euro.replace(".", "")
          // var d = e.dolar.replace(".", "")
          euro[i] = e.euro.replace(",", ".")
          dolar[i] = e.dolar.replace(",", ".")
        });
        this.euroParalelo = euro
        this.dolarParalelo = dolar
        this.dataDolarColeccion = {
          type:'line',
          labels: fecha,
          datasets: [
            {
              label: 'Dolar Oficial',
              backgroundColor:'rgba(0,0,0,0)',
              borderColor: 'Blue',
              data: this.dolarOficial
            },
            {
              label: 'Dolar Paralelo',
              backgroundColor:'rgba(0,0,0,0)',
              borderColor: 'Darkblue',
              data: this.dolarParalelo
            }  
          ]
        }
        this.loadedDolar = true
      })
    },
    getTablaEuro(){
      this.axios.get(Auth.URL+'/api/bcvDesc').then(res=>{
        var data = res.data.data
        var tabla = {}
        data.forEach((valor, index) => {
          tabla[index] = {
            fecha: valor.fecha,
            euroOficial: valor.euro,
            euroParalelo: null
          }
        });
        return tabla
      }).then(tabla => {
        this.axios.get(Auth.URL+'/api/dtd').then(res=>{
          var data = res.data.data
          data.forEach((valor, index) => {

            // FORMATO DE NUMERO     OJOOOOOOOOO OJOOOOOOOOOO !!!! 
            var euroFormat = valor.euro.replace(",", "")
            var euro = valor.euro.replace(",", ".")
            var eur = parseFloat(euro).toLocaleString('de-DE')
            euro = eur.toString()
            
            // var eur = euro.toString("F")
            // euro = eur.replace(".", ",")
            
            if (tabla[index] != undefined) {
              tabla[index].euroParalelo = euro
            }
            this.tablaE = tabla
          });
          
        })
      })
    },
    getTablaDolar(){
      this.axios.get(Auth.URL+'/api/bcvDesc').then(res=>{
        var data = res.data.data
        var tabla = {}
        data.forEach((valor, index) => {
          tabla[index] = {
            fecha: valor.fecha,
            dolarOficial: valor.dolar,
            dolarParalelo: null
          }
        });
        return tabla
      }).then(tabla => {
        this.axios.get(Auth.URL+'/api/dtd').then(res=>{
          var data = res.data.data
          data.forEach((valor, index) => {
            // FORMATO DE NUMERO     OJOOOOOOOOO OJOOOOOOOOOO !!!! 
            var euroFormat = valor.dolar.replace(",", "")
            var dolar = valor.dolar.replace(",", ".")
            var dol = parseFloat(dolar).toLocaleString('de-DE')
            dolar = dol.toString()
            if (tabla[index] != undefined) {
              tabla[index].dolarParalelo = dolar
            }
            this.tablaD = tabla
          });
          
        })
      })
    }
  },
  computed: {
    dataEuro(){
      return {
        type:'line',
        labels: this.fechas,
        datasets: [
          {
            label: 'Euro Oficial',
            backgroundColor:'rgba(0,0,0,0)',
            borderColor: 'Red',
            data: this.euroOficial
          },
          {
            label: 'Euro Paralelo',
            backgroundColor:'rgba(0,0,0,0)',
            borderColor: 'Darkred',
            data: this.euroParalelo
          }
        ]
      }
    },
    dataDolar(){
      return {
        type:'line',
        labels: this.fechas,
        datasets: [
          {
            label: 'Dolar Oficial',
            backgroundColor:'rgba(0,0,0,0)',
            borderColor: 'Blue',
            data: this.dolarOficial
          },
          {
            label: 'Dolar Paralelo',
            backgroundColor:'rgba(0,0,0,0)',
            borderColor: 'Darkblue',
            data: this.dolarParalelo
          }
        ]
      }
    }
  },
  mounted(){
    this.hora()
    this.getDataOficial()
    this.getDataParalelo()
    this.getTablaEuro()
    this.getTablaDolar()

  },
}
</script>

<style>

</style>