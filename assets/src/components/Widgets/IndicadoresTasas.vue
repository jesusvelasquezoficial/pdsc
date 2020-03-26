<template>
  <div id="indicadores-tasas" class="mx-2">
    <b-row v-if="loadedTasas" class="grid-b-space">
      <div class="col-12 col-md-4 col-lg-3"
      v-for="(indicador, index) in indicadores" :key="index">
        <app-card>
          <div class="d-flex align-items-center justify-content-between py-2">
            <div class="d-block">
              <div class="layout justify-content-between">
                <div class="align-items-center d-flex mb-1">
                  <div class="inline-block">
                    <router-link :to="indicador.url" class="mb-0" style="font-size:.8em;"><b style="color:#0081f2;">{{indicador.nombre}}</b></router-link>
                  </div>
                </div>
              </div>
              <slot class="">
                <h5 class="m-0 p-0" style="font-size:.75em;"><b>{{indicador.precio}}</b></h5>
              </slot>
              <div class="chart-info d-flex align-items-center justify-content-between pt-1">
                <div v-if="indicador.variacion != ''" :class="{
                  'text-up': indicador.variacion > 0,
                  'text-white': indicador.variacion == 0,
                  'text-down': indicador.variacion < 0}" style="font-size:.65em;">
                  <i :class="{
                    'zmdi zmdi-long-arrow-up text-up' : indicador.variacion > 0,
                    'fas fa-equals font-sm text-white' : indicador.variacion == 0,
                    'zmdi zmdi-long-arrow-down text-down' : indicador.variacion < 0
                    }"></i> {{indicador.variacion}}%
                </div>
                <div v-else>
                  <i class="zmdi">&nbsp;</i>
                </div>
              </div>
            </div>
            <div class="d-inline-block">
              <mini-chart  v-if="indicador.variacion != ''" :dataSet="indicador.data" :labels="indicador.fechas" :height="indicador.configMiniMap"
                :style="{height: '65px', width:'100px', position: 'relative'}"></mini-chart>
                <img v-else src="Static/img/mantenimiento.png" width="66" height="66" alt="user" class="img-fluid rounded-circle mb-3"/>
            </div>
          </div>
        </app-card>
      </div>
      
    </b-row>
    <!-- Loaded -->
    <div v-else class="d-flex justify-content-center py-5 mb-5">
      <fade-loader :loading="!loadedTasas" color="DarkOrange" size="32px"></fade-loader>
    </div>
  </div>
</template>
<script>
  import StatsCardV7 from "Components/StatsCardV7/StatsCardV7";
  import LineChartShadow from "Components/Charts/LineChartShadow";
  import MiniChart from "Components/Charts/MiniChart";
  import ChartConfig from "Constants/ChartConfig";
  import { mapState, mapGetters } from 'vuex'
  
  export default {
    components: {
    StatsCardV7,
    LineChartShadow,
    MiniChart
    },
    data() {
      return {
        ChartConfig
      }
    },
    computed: {
      ...mapState('datos', ['loadedTasas']),
      ...mapGetters('datos', ['indicadoresTasas']),
      indicadores(){
        let materiaPrima = this.indicadoresTasas.slice(3,5);
        let cripto = this.indicadoresTasas.slice(5, 7);
        let bolsa = [
          {
            nombre: 'Nasdaq',
            url: '',
            precio: 'En construccion',
            variacion: '',
            fechas: [],
            data: []
          },
          {
            nombre: 'S&P 500',
            url: '',
            precio: 'En construccion',
            variacion: '',
            fechas: [],
            data: []
          }
        ];
        let other = [
          {
            nombre: 'USD/EUR',
            url: '',
            precio: 'En construccion',
            variacion: '',
            fechas: [],
            data: []
          },
          {
            nombre: 'USD/JPY',
            url: '',
            precio: 'En construccion',
            variacion: '',
            fechas: [],
            data: []
          }
        ];  
        return [materiaPrima[0], cripto[0], other[0], bolsa[0],materiaPrima[1], cripto[1], other[1], bolsa[1],];
      }
    },
  }
</script>
<style>
  .idb-block-content{
  padding: .70rem !important;
  }
  .col-12{
  padding: .5rem !important;
  }
  .grid-b-space-indicadores{
  }
</style>