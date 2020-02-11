<template>
	<app-card customClasses="grid-b-space" :heading="$t('message.photos')">
		<div class="row photo-wrap">
			<div class="col-6 col-sm-4 col-md-3 image-wrap" v-for="image in images" :key="image.id">
				<img :src="image.url" alt="gallery" class="img-fluid mb-30 text-center mx-auto" width="220" height="146">
			</div>
		</div>
	</app-card>
</template>

<script>
	import { images } from "Assets/data/photoGallery.js";

	export default {
		data() {
			return {
				images
			};
		},
	};
</script>