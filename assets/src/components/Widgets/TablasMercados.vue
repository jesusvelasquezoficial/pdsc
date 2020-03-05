<template>
  <div id="tablasmercados">
    <b-row>
      <!-- DOLAR -->
      <b-col sm="12" md="6" class="grid-b-space">
        <app-card v-if="loadedTablaDolar" heading="Dolar Informacion Diaria" :headingMenu="true">
          <div class="table-responsive mb-0">
            <div class="unseen">
              <b-table v-if="loadedTablaDolar" class="table table-hover table-bordered table-striped"
                id="tablaDolar"
                :items="dataTablaDolar"
                :per-page="paginacionDolarPorPagina"
                :current-page="paginacionDolarPagina"
                :thead-class="['bg-primary', 'text-white']"  
                small
              >
              <template v-slot:table-caption>Total de Registros: {{paginacionDolarTotal}}</template>
              <template v-slot:cell(VAR)="data">
                <div :class="data.value[2] == 'text-white' ? 'text-black' : data.value[2]" style="font-size:12px;">
                  <i :class="[data.value[1], 'mr-1']"></i>{{data.value[0]}}%
                </div>
              </template>
               <template v-slot:head(VAR)="data">
                <span class="d-flex justify-content-center align-items-center">% <span class="ml-1" style="font-size:10px;"> (24h)</span></span>
              </template>
              <template v-slot:cell(VAR2)="data">
                <div :class="data.value[2] == 'text-white' ? 'text-black' : data.value[2]" style="font-size:12px;">
                  <i :class="[data.value[1], 'mr-1']"></i>{{data.value[0]}}%
                </div>
              </template>
              <template v-slot:head(VAR2)="data">
                <span class="d-flex justify-content-center align-items-center">% <span class="ml-1" style="font-size:10px;"> (24h)</span></span>
              </template>
              <template v-slot:cell(VAR3)="data">
                <div :class="data.value[2] == 'text-white' ? 'text-black' : data.value[2]" style="font-size:12px;">
                  <i :class="[data.value[1], 'mr-1']"></i>{{data.value[0]}}%
                </div>
              </template>
              <template v-slot:head(VAR3)="data">
                <span class="d-flex justify-content-center align-items-center">% <span class="ml-1" style="font-size:10px;"> (24h)</span></span>
              </template>
              </b-table>
            </div>
          </div>
          <!-- table responsive closed -->
          <div class="mb-20">
            <b-pagination aria-controls="tablaDolar" pills align="center" :total-rows="paginacionDolarTotal" v-model="paginacionDolarPagina2" :per-page="paginacionDolarPorPagina">
            </b-pagination>
          </div>
        </app-card>
        <div v-else class="d-flex justify-content-center py-5 mb-5">
          <fade-loader :loading="!loadedTablaDolar" color="DarkOrange" size="32px"></fade-loader>
        </div>
      </b-col>
      <!-- EURO -->
      <b-col sm="12" md="6" class="grid-b-space">
        <app-card v-if="loadedTablaEuro" heading="Euro Informacion Diaria" :headingMenu="true">
          <div class="table-responsive mb-0">
            <div class="unseen">
              <b-table v-if="loadedTablaEuro" class="table table-hover table-bordered table-striped"
                id="tablaEuro"
                :items="dataTablaEuro"
                :per-page="paginacionEuroPorPagina"
                :current-page="paginacionEuroPagina"
                :thead-class="['bg-primary', 'text-white']"  
                small
              >
              <template v-slot:table-caption>Total de Registros: {{paginacionEuroTotal}}</template>
              <template v-slot:cell(VAR)="data">
                <div :class="data.value[2] == 'text-white' ? 'text-black' : data.value[2]" style="font-size:12px;">
                  <i :class="[data.value[1], 'mr-1']"></i>{{data.value[0]}}%
                </div>
              </template>
               <template v-slot:head(VAR)="data">
                <span class="d-flex justify-content-center align-items-center">% <span class="ml-1" style="font-size:10px;"> (24h)</span></span>
              </template>
              <template v-slot:cell(VAR2)="data">
                <div :class="data.value[2] == 'text-white' ? 'text-black' : data.value[2]" style="font-size:12px;">
                  <i :class="[data.value[1], 'mr-1']"></i>{{data.value[0]}}%
                </div>
              </template>
               <template v-slot:head(VAR2)="data">
                <span class="d-flex justify-content-center align-items-center">% <span class="ml-1" style="font-size:10px;"> (24h)</span></span>
              </template>
              </b-table>
            </div>
          </div>
          <!-- table responsive closed -->
          <div class="mb-20">
            <b-pagination aria-controls="tablaEuro" pills align="center" :total-rows="paginacionEuroTotal" v-model="paginacionEuroPagina2" :per-page="paginacionEuroPorPagina">
            </b-pagination>
          </div>
        </app-card>    
        <div v-else class="d-flex justify-content-center py-5 mb-5">
          <fade-loader :loading="!loadedTablaEuro" color="DarkOrange" size="32px"></fade-loader>
        </div>    
      </b-col>
    </b-row>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex';
export default {
  data() {
    return {
        
    }
  },
  computed: {
    ...mapState('tasas',['loadedTablaDolar','loadedTablaEuro',]),
    ...mapGetters('tasas', 
    [
      'paginacionDolarPagina',
      'paginacionDolarPorPagina',
      'paginacionDolarTotal',
      'paginacionEuroPagina',
      'paginacionEuroPorPagina',
      'paginacionEuroTotal',
    ]),
    ...mapGetters('tasas', ['dataTablaDolar','dataTablaEuro']),
    paginacionDolarPagina2:{
      get(){
        return this.paginacionDolarPagina;
      },
      set(val){
        this.$store.dispatch('tasas/paginacionDolarPagina', val);
      }
    },
    paginacionEuroPagina2:{
      get(){
        return this.paginacionEuroPagina;
      },
      set(val){
        this.$store.dispatch('tasas/paginacionEuroPagina', val);
      }
    }
  },
  created() {
    this.$store.dispatch('tasas/loadDataTablaDolar');
    this.$store.dispatch('tasas/loadDataTablaEuro');
    this.$store.dispatch('tasas/paginacionDolarPagina', 1);
    this.$store.dispatch('tasas/paginacionEuroPagina', 1);
  },
}
</script>