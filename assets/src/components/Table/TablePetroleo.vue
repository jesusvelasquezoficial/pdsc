<template>
  <app-card v-if="loadedTablaPetroleo" heading="Petroleo Informacion Diaria" :headingMenu="true">
    <div class="table-responsive mb-0">
      <div class="unseen">
        <b-table v-if="loadedTablaPetroleo" class="table table-hover table-bordered table-striped"
          id="tablaPetroleo"
          :items="dataTablaPetroleo"
          :per-page="paginacionPetroleoPorPagina"
          :current-page="paginacionPetroleoPagina"
          :thead-class="['bg-oscuro', 'text-white']" 
          :no-border-collapse="true"
          small
        >
        <template v-slot:table-caption>Total de Registros: {{paginacionPetroleoTotal}}</template>
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
          <div :class="data.value[2] == 'text-white' ? 'text-black' : data.value[2]">
            <small><i :class="[data.value[1], 'mr-1']"></i>{{data.value[0]}}%</small>
          </div>
        </template>
          <template v-slot:head(VAR)="data">
            <small class="ml-1 d-flex align-items-center">% (24h)</small>
        </template>
        </b-table>
      </div>
    </div>
    <!-- table responsive closed -->
    <div class="mb-20">
      <b-pagination aria-controls="tablaPetroleo" pills align="center" :total-rows="paginacionPetroleoTotal" v-model="paginacionPetroleoPagina2" :per-page="paginacionPetroleoPorPagina">
      </b-pagination>
    </div>
  </app-card>    
  <div v-else class="d-flex justify-content-center py-5 mb-5">
    <fade-loader :loading="!loadedTablaPetroleo" color="DarkOrange" size="32px"></fade-loader>
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
    ...mapState('tasas',['loadedTablaPetroleo']),
    ...mapGetters('tasas', 
    [
      'paginacionPetroleoPagina',
      'paginacionPetroleoPorPagina',
      'paginacionPetroleoTotal',
    ]),
    ...mapGetters('tasas', ['dataTablaPetroleo']),
    paginacionPetroleoPagina2:{
      get(){
        return this.paginacionPetroleoPagina;
      },
      set(val){
        this.$store.dispatch('tasas/paginacionPetroleoPagina', val);
      }
    },
  },
  created() {
    this.$store.dispatch('tasas/loadDataTablaPetroleo');
    this.$store.dispatch('tasas/paginacionPetroleoPagina', 1);
  },
}
</script>