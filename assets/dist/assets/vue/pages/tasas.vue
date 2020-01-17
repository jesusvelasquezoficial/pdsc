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
                  <th class="euro">Dolar Oficial BCV</th>
                  <th class="dolar">Dolar Today</th>
                  <th class="dolar">Monitor Dolar</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, i) in tablaD" :key="i">
                  <td class="fecha">{{ item.fecha }}</td>
                  <td class="euro">{{  item.dolarOficial  }}</td>
                  <td class="dolar">{{  item.dolarToday  }}</td>
                  <td class="dolar">{{  item.monitorDolar  }}</td>
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
      dolarToday: null,

      fechaMonitor: null,
      monitorDolar: null,

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
      this.axios.get(Auth.URL+'/api/bcvDesc').then(res => {
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
        });
        
        // this.fechas = fecha
        this.euroOficial = euro
        this.dolarOficial = dolar
        
      })
    },
    getDataParalelo(){
      this.axios.get(Auth.URL+'/api/dtdDesc').then(res => {
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
          
        });

        this.fechas = fecha
        this.fechaParalelo = fecha
        this.euroParalelo = euro
        this.dolarToday = dolar

      })
    },
    getDolarMonitor(){
      this.axios.get(Auth.URL+'/api/dmDesc').then(res => {
        let dm = res.data.data
        var fechaM = []
        var dolarM = []

        dm.forEach((e, i) => {
          fechaM[i] = e.fecha
          // var eu = e.euro.replace(".", "")
          var d = e.dolar.replace(".", "")
          // euro[i] = eu.replace(",", ".")
          dolarM[i] = d.replace(",", ".")
          
        });
        this.fechaMonitor = fechaM
        this.monitorDolar = dolarM

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
        this.axios.get(Auth.URL+'/api/dtdDesc').then(res=>{
          var data = res.data.data
          data.forEach((valor, index) => {
            if (tabla[index] != undefined) {
              tabla[index].euroParalelo = valor.euro
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
            dolarToday: [],
            monitorDolar: [],
          }
        });
        this.axios.get(Auth.URL+'/api/dtdDesc').then(res2=>{
          var data = res2.data.data
          data.forEach((valor, index) => {
            if (tabla[index] != undefined) {
              tabla[index].dolarToday = valor.dolar
            }
          });
          this.axios.get(Auth.URL+'/api/dmDesc').then(res3=>{
            var data = res3.data.data
            data.forEach((valor, index) => {
              if (tabla[index] != undefined) {
                tabla[index].monitorDolar = valor.dolar
              }
              this.tablaD = tabla
            });
          })
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
            label: 'Dolar Oficial BCV',
            backgroundColor:'rgba(0,0,0,0)',
            borderColor: 'Blue',
            data: this.dolarOficial
          },
          {
            label: 'Dolar Today',
            backgroundColor:'rgba(0,0,0,0)',
            borderColor: 'Green',
            data: this.dolarToday
          },
          {
            label: 'Monitor Dolar',
            backgroundColor:'rgba(0,0,0,0)',
            borderColor: 'rgba(232, 126, 4, 1)',
            data: this.monitorDolar
          }
        ]
      }
    }
  },
  mounted(){
    this.hora()
    this.getDataOficial()
    this.getDataParalelo()
    this.getDolarMonitor()
    this.getTablaEuro()
    this.getTablaDolar()

  },
}
</script>

<style>

</style>