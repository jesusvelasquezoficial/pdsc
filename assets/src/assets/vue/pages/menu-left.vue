<template>
  <div class="sidebar-panel-wrap">
    <div class="sidebar-panel" :class="thema">
      <div class="sidebar-top">
        <div class="sidebar-logo-wrap d-flex justify-content-center py-20">
          <app-logo></app-logo>
        </div>
        <user-block></user-block>
      </div>
			<sidebar-content></sidebar-content>
    </div>
  </div>
</template>
<script>	
import AppLogo from "./appLogo.vue";
import UserBlock from "./userBlock.vue";
import SidebarContent from "./menu-left-content.vue";

export default {
  components: {			
    AppLogo,
    UserBlock,
    SidebarContent
    },
    data() {
      return {
        thema: {
          extraClass: "default",
          iconColor: "text-primary",
          text: "Default"
        }
      }
    },
};
</script>
<style lang="scss">
	.scroll-area {
		margin: auto;
		width: 100%;
		min-height: 100%;
	}
</style>