<template>
   <i-count-up
      :startVal="startVal"
      :endVal="endVal"
      :decimals="decimals"
      :duration="duration"
      :options="counterOptions"
   ></i-count-up>
</template>

<script>
import ICountUp from "vue-countup-v2";

export default {
  props: ["decimals", "startVal", "endVal", "duration"],
  components: {
    ICountUp
  },
  data() {
    return {
      counterOptions: {
        useEasing: true,
        useGrouping: true,
        separator: ",",
        decimal: ".",
        prefix: "",
        suffix: ""
      }
    };
  }
};
</script>