<template>
  <f7-page>
    <f7-navbar title="Tasas Mercado Oficial" back-link="Back">
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
            <line-chart :chartData="datacollection" :options="options"></line-chart>
          </f7-block>
        </b-col>
        <b-col sm="12" md="6">
          <f7-block>
            <bar-chart :chartData="datacollection2" :options="options2"></bar-chart>
          </f7-block>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <f7-block>
            <table class="data-table">
              <thead>
                <tr>
                  <th class="id">Nro</th>
                  <th class="fecha" style="min-width:100%">Fecha</th>
                  <th class="euro">Euro</th>
                  <th class="dolar">Dolar</th>
                  <th class="yuan">Yuan</th>
                  <th class="lira">Lira</th>
                  <th class="rublo">Rublo</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in bcv" :key="index">
                  <td class="id">{{index+1}}</td>
                  <td class="fecha" style="min-width:100%">{{item.fecha}}</td>
                  <td class="euro">{{item.euro}}</td>
                  <td class="dolar">{{item.dolar}}</td>
                  <td class="yuan">{{item.yuan}}</td>
                  <td class="lira">{{item.lira}}</td>
                  <td class="rublo">{{item.rublo}}</td>
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
      bcv: null,
      datacollection: null,
      datacollection2: null,
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
    getDataBCV () {
      this.axios.get(Auth.URL+'/api/bcv').then(res => {
        let bcv = res.data.data
        this.bcv = bcv
        var fecha = []
        var dolar = []
        var euro = []
        var rdm = [this.getRandomInt(),this.getRandomInt(),this.getRandomInt(),this.getRandomInt(),this.getRandomInt(),this.getRandomInt(),this.getRandomInt(),this.getRandomInt(),this.getRandomInt(),]
        bcv.forEach((element, index) => {
          fecha[index] = element.fecha
        });
        bcv.forEach((e, i)=>{
          var eu = e.euro.replace(".", "")
          var d = e.dolar.replace(".", "")
          euro[i] = eu.replace(",", ".")
          dolar[i] = d.replace(",", ".")
        })
        
        
        
        this.datacollection = {
          type:'line',
          labels: fecha,
          datasets: [
            {
              label: 'Euro',
              backgroundColor:'rgba(0,0,0,0)',
              borderColor: 'black',
              data: euro
            },
            {
              label: 'Dolar',
              backgroundColor:'rgba(0,0,0,0)',
              borderColor: 'grey',
              data: dolar
            }
          ]
        }
        this.datacollection2 = {
          type:'bar',
          labels: fecha,
          datasets: [
            {
              label: 'Euro',
              backgroundColor:'rgba(200,0,0,1)',
              borderColor: 'black',
              data: euro
            },
            {
              label: 'Dolar',
              backgroundColor:'rgba(0,250,0,1)',
              borderColor: 'grey',
              data: dolar
            }
          ]
        }

      })
    },
    getRandomInt () {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5
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
  mounted() {
    this.hora()
    this.getDataBCV()

  },
}
</script>

<style>

</style>