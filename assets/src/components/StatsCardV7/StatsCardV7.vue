<template>
  <div>
    <app-card>
      <div class="layout justify-content-between">
        <div class="align-items-center d-flex mb-1">
          <!-- <div class="crypto-icon-wrap inline-block mr-3 font-2x">
            <i :class="icon" title="BCN"></i>
          </div> -->
          <div class="inline-block">
            <p class="mb-0">{{heading}}</p>
          </div>
        </div>
      </div>
      <slot><h4 class="m-0 p-0"><b>123123</b></h4></slot>
      <div class="chart-info d-flex align-items-center justify-content-between pt-1">
        <div :class="color">
          <i class="zmdi zmdi-long-arrow-up mr-2"></i>2.3%
        </div>
        <!-- <div class="fs-14 bg-grey rounded p-1 px-2 d-inline-block">last 4 days</div> -->
      </div>
    </app-card>
  </div>
</template>

<script>
export default {
  props: ["heading", "icon", "color"]
};
</script>