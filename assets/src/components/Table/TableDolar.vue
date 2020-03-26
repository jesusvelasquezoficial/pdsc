<template>
<div>
  <app-card v-if="loadedTablaDolar" heading="Dolar Informacion Diaria" :headingMenu="true">
    <div class="table-responsive mb-0">
      <div class="unseen">
        <b-table v-if="loadedTablaDolar" class="table table-hover table-bordered table-striped"
          id="tablaDolar"
          :items="dataTablaDolar"
          :per-page="paginacionDolarPorPagina"
          :current-page="paginacionDolarPagina"
          :thead-class="['bg-oscuro', 'text-white']" 
          :no-border-collapse="true"
          small
        >
        <template v-slot:table-caption>Total de Registros: {{paginacionDolarTotal}}</template>
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
              <small :class="data.value[2] == 'text-white' ? 'text-black' : data.value[2]"><i :class="[data.value[1], data.value[2], 'mr-1']"></i>{{data.value[0]}}%</small>
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
          <template v-slot:cell(VAR3)="data">
            <div>
              <small :class="data.value[2] == 'text-white' ? 'text-black' : data.value[2]"><i :class="[data.value[1], data.value[2], 'mr-1']"></i>{{data.value[0]}}%</small>
            </div>
          </template>
          <template v-slot:head(VAR3)="data">
            <small class="ml-1 d-flex align-items-center">% (24h)</small>
          </template>
        </b-table>
      </div>
    </div>
    <!-- table responsive closed -->
    <div class="mb-20">
      <b-pagination aria-controls="tablaDolar" :page-class="['text-ligth','text-success']" pills align="center" :total-rows="paginacionDolarTotal" v-model="paginacionDolarPagina2" :per-page="paginacionDolarPorPagina">
        <template v-slot:aria-label="{ page, active }">
        <b class="bg-dark">{{ page }}</b>
      </template>
      </b-pagination>
    </div>
  </app-card>
  <div v-else class="d-flex justify-content-center py-5 mb-5">
    <fade-loader :loading="!loadedTablaDolar" color="DarkOrange" size="32px"></fade-loader>
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
    ...mapState('tasas',['loadedTablaDolar']),
    ...mapGetters('tasas', 
    [
      'paginacionDolarPagina',
      'paginacionDolarPorPagina',
      'paginacionDolarTotal',
    ]),
    ...mapGetters('tasas', ['dataTablaDolar']),
    paginacionDolarPagina2:{
      get(){
        return this.paginacionDolarPagina;
      },
      set(val){
        this.$store.dispatch('tasas/paginacionDolarPagina', val);
      }
    },
  },
  created() {
    // this.$store.dispatch('tasas/loadDataTablaDolar');
    this.$store.dispatch('tasas/paginacionDolarPagina', 1);
  },
}
</script>
<style>
  .bg-oscuro{
    background-color: #464d69;
    border:0px !important;
  }
  .table thead tr th {
    border: #585E78 1px solid;
  }
  .page-link{
    background-color: #464d69 !important;
  }
</style>