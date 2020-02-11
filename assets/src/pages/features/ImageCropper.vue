<template>
	<div>
		<page-title-bar></page-title-bar>
		<div class="row">
			<div class="col-half-lg-block col-xs-12 col-sm-12 col-md-6 col-lg-5 col-xl-4 mb-md-0 mb-4">
				<app-card :heading="$t('message.cropImage')">
					<croppa v-model="croppaImg" canvas-color="transparent" :placeholder="'Choose an image'"
						:accept="'image/*'" :show-remove-button="true" :remove-button-color="'red'"
						:initial-position="'center'" class="mb-20">
					</croppa>
					<div class="d-flex justify-content-between mb-20">
						<b-button @click="rotate()" variant="primary" class="w-25">Rotate</b-button>
						<b-button @click="flipX()" variant="primary" class="w-25">Flip-X</b-button>
						<b-button @click="flipY()" variant="primary" class="w-25">Flip-Y</b-button>
					</div>
					<b-button variant="success" class="w-100" @click="generateImage">Generate</b-button>
				</app-card>
			</div>
			<div class="col-sm-12 col-md-4 col-lg-4">
				<app-card v-if="imgUrl" :heading="$t('message.previewImage')">
					<img height="" width="" class="img-fluid" :src="imgUrl" alt="cropped image">
				</app-card>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				croppaImg: null,
				imgUrl: ''
			}
		},
		methods: {
			generateImage() {
				let url = this.croppaImg.generateDataUrl()
				if (!url) {
					alert('Please Select An Image')
					return
				}
				this.imgUrl = url
			},
			rotate() {
				this.croppaImg.rotate()
			},
			flipX() {
				this.croppaImg.flipX()
			},
			flipY() {
				this.croppaImg.flipY()
			}
		}
	}
</script>