<template>
	<div>
		<page-title-bar></page-title-bar>
		<app-card :fullBlock="true">
			<gmap-map :center="center" :zoom="9" style="width: '100%'; height: 400px">
				<gmap-marker :position="markers.position" :clickable="true" :draggable="true"
					@click="center=markers.position"></gmap-marker>
			</gmap-map>
		</app-card>
	</div>
</template>

<script>
	export default {
		data: function () {
			return {
				center: { lat: 30.7, lng: 76.7 },
				markers: {
					position: { lat: 30.7, lng: 76.7 }
				}
			};
		}
	};
</script>