<template>
  <div id="Euro">
    <page-title-bar></page-title-bar>
		<crypto-slider></crypto-slider>
    <b-row class="grid-b-space">
      <b-col>
        <graph-euro></graph-euro>
      </b-col>
    </b-row>
    <b-row class="grid-b-space">
      <b-col>
        <table-euro></table-euro>
      </b-col>
    </b-row>
    <!-- <b-row>
      <b-col class="text-center">
        <img src="Static/img/mantenimiento.png" width="auto" height="auto" alt="euro" class="img-fluid rounded-circle ml-3"/> 
        <h1>En construcción</h1>
      </b-col>
    </b-row> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      
    }
  },
}
</script>