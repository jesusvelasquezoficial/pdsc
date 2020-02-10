<template>
	<div>
		<page-title-bar></page-title-bar>
		<app-card :heading="$t('message.listOfAllMaterialIcons')" contentCustomClass="overflow-hide">
			<ul class="list-unstyled icon-box mat-list material-icon-list">
				<li v-for="(icon, index) in icons" :key="index">
					<span class="icon-style">
						<i class="material-icons">{{ icon }}</i>
					</span>
					<span class="icon-title">{{ icon }}</span>
				</li>
			</ul>
		</app-card>
	</div>
</template>

<script>
	import { materialIcons } from "./data";

	export default {
		data: function () {
			return {
				icons: materialIcons
			};
		}
	};
</script>