<template>
	<div>
		<page-title-bar></page-title-bar>
		<app-card :heading="$t('message.wysiwyg')">
			<wysiwyg v-model="myHTML" />
		</app-card>
	</div>
</template>

<script>
	export default {
		data: function () {
			return {
				myHTML: ''
			}
		}
	}
</script>

<style lang="scss">
	.editr--content {
		min-height: 300px;
	}
</style>