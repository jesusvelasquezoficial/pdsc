<template>
	<div class="font-icon-wrapper">
    <page-title-bar></page-title-bar>
		<app-card>
			<ul class="list-unstyled icon-box row">
				<li v-for="(icon, index) in icons" :key="index" class="col-sm-12 col-md-6 col-lg-6 col-xl-4">
					<span class="icon-style"><i :class="'fa fa-'+icon"></i></span>
					<span class="icon-title">{{icon}}</span>
				</li>
			</ul>
		</app-card>
	</div>
</template>

<script>
import { fontAwesome } from "./data.js";

export default {
  data: function() {
    return {
      icons: fontAwesome
    };
  }
};
</script>