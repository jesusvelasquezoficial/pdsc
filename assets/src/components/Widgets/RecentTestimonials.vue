<template>
	<div class="testimonial-slider idb-block-content px-0">
		<slick ref="slick" :options="slickOptions" v-if="recentTestimonial">
			<div class="testimonial-content 	mx-auto mb-4" v-for="(data,index) in recentTestimonial" :key="index">
				<div class="mb-4">
					<img :src="data.img" alt="user thumb" class="rounded-circle" width="80" height="80" />
				</div>
				<div class="mb-4">
					<p>{{data.description}}</p>
					<h4 class="text-white">{{data.name}}</h4>
					<span class="m-0 fs-12">{{data.time}}</span>
				</div>
			</div>
		</slick>
	</div>
</template>

<script>
	import Slick from "vue-slick";
	import { recentTestimonial } from "Assets/data/recentTestimonial.js";

	export default {
		data() {
			return {
				slickOptions: {
					slidesToShow: 1,
					arrows: false,
					autoplay: true,
					dots: false
				},
				recentTestimonial
			}
		},
		components: {
			Slick
		}
	}
</script>