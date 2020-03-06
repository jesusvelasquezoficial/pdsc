<template>
  <div id="Dolar">
    <page-title-bar></page-title-bar>
		<crypto-slider></crypto-slider>
    <b-row class="grid-b-space">
      <b-col>
        <graph-dolar></graph-dolar>
      </b-col>
    </b-row>
    <b-row class="grid-b-space">
      <b-col>
        <table-dolar></table-dolar>
      </b-col>
    </b-row>
  </div>
</template>
<script>
// import { mapActions } from 'vuex';
export default {
  data() {
    return {
      
    }
  },
  // methods: {
  //   ...mapActions('tasas', ['loadDataParalelo','loadDataOficial'])
  // },
  // created() {
  //   this.loadDataOficial();
  //   this.loadDataParalelo();
  // },
}
</script>