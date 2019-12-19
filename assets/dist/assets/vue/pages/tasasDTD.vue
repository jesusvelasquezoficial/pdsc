<template>
  <f7-page>
    <f7-navbar title="Tasas Mercado Paralelo" back-link="Back">
      <f7-nav-right> 
        <small>{{ dfhora }}</small>
        <f7-link icon="fas fa-user" panel-open="right"></f7-link>
      </f7-nav-right>
    </f7-navbar>
    <f7-block>
      <b-row>
        <b-col sm="12" md="6">
          <f7-block>
            <!-- Graficos de linea -->
            <line-chart :chartData="dataLine2" :options="options"></line-chart>
          </f7-block>
        </b-col>
        <b-col sm="12" md="6">
          <f7-block>
            <bar-chart :chartData="dataBar2" :options="options2"></bar-chart>
          </f7-block>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <f7-block>
            <table class="data-table">
              <thead>
                <tr>
                  <th class="fecha" style="min-width:100%">Fecha</th>
                  <th class="euro">Euro</th>
                  <th class="dolar">Dolar</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in tabla" :key="index">
                  <td class="fecha" style="min-width:100%">{{item.fecha}}</td>
                  <td class="euro">{{item.euro}}</td>
                  <td class="dolar">{{item.dolar}}</td>
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
import BarChart from './BarChart.js'

export default {
  components:{
    LineChart,
    BarChart
  },
  data() {
    return {
      dfhora: '',

      fecha: null,
      euro: null,
      dolar: null,

      tabla: [],

      options: {
        responsive: true,
        maintainAspectRatio: false,
        tooltips: {
            mode: 'index'
        }
      },
      options2: {
        responsive: true,
        maintainAspectRatio: false
      },
    }
  },
  methods: {
    getDataDTD () {
      this.axios.get(Auth.URL+'/api/dtd').then(res => {
        let dtd = res.data.data
        var fecha = []
        var dolar = []
        var euro = []
        
        dtd.forEach((e, i)=>{
          fecha[i] = e.fecha
          var eu = e.euro.replace(".", "")
          var d = e.dolar.replace(".", "")
          euro[i] = eu.replace(",", ".")
          dolar[i] = d.replace(",", ".")
        })

        this.fecha = fecha
        this.euro = euro
        this.dolar = dolar

      })
    },
    getTablaDTD(){
      this.axios.get(Auth.URL+'/api/dtdDesc').then(res=>{
        var data = res.data.data
        var tabla = {}
        data.forEach((valor, index) => {
          tabla[index] = {
            fecha: valor.fecha,
            euro: valor.euro,
            dolar: valor.dolar,
          }
        });
        this.tabla = tabla
      })
    },
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
    }
  },
  computed: {
    dataLine2(){
      return {
        type:'line',
        labels: this.fecha,
        datasets: [
          {
            label: 'Euro',
            backgroundColor:'rgba(0,0,0,0)',
            borderColor: 'Darkred',
            data: this.euro
          },
          {
            label: 'Dolar',
            backgroundColor:'rgba(0,0,0,0)',
            borderColor: 'Darkblue',
            data: this.dolar
          }
        ]
      }
    },
    dataBar2(){
      return {
        type:'bar',
        labels: this.fecha,
        datasets: [
          {
            label: 'Euro',
            backgroundColor:'darkred',
            borderColor: 'darkred',
            data: this.euro
          },
          {
            label: 'Dolar',
            backgroundColor:'darkblue',
            borderColor: 'darkblue',
            data: this.dolar
          }
        ]
      }
    }
  },
  mounted() {
    this.hora()
    this.getDataDTD()
    this.getTablaDTD()
  },
}
</script>

<style>

</style>