<template>
  <div id="Petroleo">
    <page-title-bar></page-title-bar>
		<crypto-slider></crypto-slider>
    <b-row class="grid-b-space">
      <b-col>
        <graph-petroleo></graph-petroleo>
      </b-col>
    </b-row>
    <b-row class="grid-b-space">
      <b-col>
        <table-petroleo></table-petroleo>
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
  //   ...mapActions('tasas', ['loadDataPetroleo', 'loadDataTablaPetroleo'])
  // },
  // created() {
  //   this.loadDataPetroleo();
  //   this.loadDataTablaPetroleo();
  // },
}
</script>