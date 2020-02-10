<template>
	<div id="carousel">
		<page-title-bar></page-title-bar>
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<app-card :heading="$t('message.carousel')">
					<b-carousel id="carousel1" controls indicators :interval="4000" img-width="700" img-height="480"
						v-model="slide" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
						<!-- Text slides with image -->
						<b-carousel-slide :caption="$t('message.firstSlide')" img-src="/static/img/carousel-slider-1.jpg">
						</b-carousel-slide>
						<!-- Slides with custom text -->
						<b-carousel-slide img-src="/static/img/carousel-slider-2.jpg">
							<h2 class="text-white text-center">{{$t('message.helloWorld')}}!</h2>
						</b-carousel-slide>
						<!-- Slides with image only -->
						<b-carousel-slide img-src="/static/img/carousel-slider-3.jpg" class="img-fluid"></b-carousel-slide>
						<!-- Slides with img slot -->
						<!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
					</b-carousel>
				</app-card>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				slide: 0,
				sliding: null
			};
		},
		methods: {
			onSlideStart(slide) {
				this.sliding = true;
			},
			onSlideEnd(slide) {
				this.sliding = false;
			}
		}
	};
</script>