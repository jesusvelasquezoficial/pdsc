<template>
<div>
  <app-card v-if="loadedTablaEuro" heading="Euro Informacion Diaria" :headingMenu="true">
    <div class="table-responsive mb-0">
      <div class="unseen">
        <b-table v-if="loadedTablaEuro" class="table table-hover table-bordered table-striped"
          id="tablaEuro"
          :items="dataTablaEuro"
          :per-page="paginacionEuroPorPagina"
          :current-page="paginacionEuroPagina"
          :thead-class="['bg-oscuro', 'text-white']" 
          :no-border-collapse="true"
          small
        >
        <template v-slot:table-caption>Total de Registros: {{paginacionEuroTotal}}</template>
        <template v-slot:head()="data">
          <small>{{ data.label }}</small>
        </template>
        <template v-slot:cell()="data">
          <small>$ {{ data.value }}</small>
        </template>
        <template v-slot:cell(fecha)="data">
          <small>{{ data.value }}</small>
        </template>
        <template v-slot:cell(VAR)="data">
          <div>
            <small :class="data.value[2] == 'text-white' ? 'text-black' : data.value[2]"><i :class="[data.value[1], data.value[2],  'mr-1']"></i>{{data.value[0]}}%</small>
          </div>
        </template>
          <template v-slot:head(VAR)="data">
            <small class="ml-1 d-flex align-items-center">% (24h)</small>
        </template>
        <template v-slot:cell(VAR2)="data">
          <div>
            <small :class="data.value[2] == 'text-white' ? 'text-black' : data.value[2]"><i :class="[data.value[1], data.value[2], 'mr-1']"></i>{{data.value[0]}}%</small>
          </div>
        </template>
          <template v-slot:head(VAR2)="data">
            <small class="ml-1 d-flex align-items-center">% (24h)</small>
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
    ...mapState('tasas',['loadedTablaEuro']),
    ...mapGetters('tasas', 
    [
      'paginacionEuroPagina',
      'paginacionEuroPorPagina',
      'paginacionEuroTotal',
    ]),
    ...mapGetters('tasas', ['dataTablaEuro']),
    paginacionEuroPagina2:{
      get(){
        return this.paginacionEuroPagina;
      },
      set(val){
        this.$store.dispatch('tasas/paginacionEuroPagina', val);
      }
    },
  },
  created() {
    // this.$store.dispatch('tasas/loadDataTablaEuro');
    this.$store.dispatch('tasas/paginacionEuroPagina', 1);
  },
}
</script>