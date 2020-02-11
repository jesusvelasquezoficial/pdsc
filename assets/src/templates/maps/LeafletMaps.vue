<template>
	<div>
		<page-title-bar></page-title-bar>
		<app-card :fullBlock="true">
			<div id="leaflet-maps">
				<v-map style="height: 400px" :zoom="zoom" :center="center" :zoomAnimation="true">
					<v-tilelayer :url="url" :attribution="attribution"></v-tilelayer>
					<v-marker :lat-lng="marker"></v-marker>
				</v-map>
			</div>
		</app-card>
	</div>
</template>

<script>
	import L from "leaflet";
	import * as Vue2Leaflet from 'vue2-leaflet'
	delete L.Icon.Default.prototype._getIconUrl;

	L.Icon.Default.mergeOptions({
		iconUrl: require("leaflet/dist/images/marker-icon.png"),
	});

	export default {
		name: "leaflet-maps",
		components: {
			vMap: Vue2Leaflet.LMap,
			vTilelayer: Vue2Leaflet.LTileLayer,
			vMarker: Vue2Leaflet.LMarker
		},
		data: function () {
			return {
				zoom: 13,
				marker: L.latLng(47.41322, -1.219482),
				center: [47.41322, -1.219482],
				url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
				attribution:
					'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
			};
		}
	};
</script>

<style scoped>
	@import "~leaflet/dist/leaflet.css";
</style>