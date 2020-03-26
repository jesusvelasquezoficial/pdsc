<template>
  <div id="app">
    <router-view></router-view>
    <!-- <tour></tour> -->
		<notifications group="loggedIn" position="top right" animation-type="velocity"/>
  </div>
</template>
<script>
  // import Tour from "Components/Tour/Tour";
  import AppConfig from "Constants/AppConfig";
  export default {
    components: {
        // Tour
    },
    mounted() {
      setTimeout(() => {
          this.loading = false;
          // setTimeout(() => {
          //   if (AppConfig.enableUserTour) {
          //     this.$tours["vuelyTour"].start();
          //   }
          // }, 1000);
        }, 2000);
    },
    data() {
      return {
        animation: {
          enter: {
            opacity: [1, 0],
            translateX: [0, -300],
            scale: [1, 0.2]
          },
          leave: {
            opacity: 0,
            height: 0
          }
        }
      }
    }
  }
</script>
<style>
/* @media (min-width: 1400px) {
  body {
    width: 1360px !important;
    margin-left: auto;
    margin-right: auto;
  }
} */
</style>