<template>
	<div>
		<page-title-bar></page-title-bar>
		<app-card>
			<dropzone></dropzone>
		</app-card>
	</div>
</template>

<script>
	import Dropzone from "Components/Widgets/Dropzone";
	export default {
		components: {
			Dropzone
		}
	}
</script>