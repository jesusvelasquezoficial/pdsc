<template>
	<div>
		<page-title-bar></page-title-bar>
		<app-card class="overflow-hide" :heading="$t('message.draggableResizable')">
			<div style="height: 500px; border: 1px solid #ddd; position: relative;" class="w-100 overflow-hide">
				<vue-draggable-resizable :w="300" :h="170" v-on:dragging="onDrag" v-on:resizing="onResize" :parent="true">
					<div class="idb-block w-100 h-100">
						<div class="idb-block-content">
							<p>Hello! I'm a flexible component. You can drag me around and you can resize me.<br>
								<code>X: {{ x }} / Y: {{ y }} - Width: {{ width }} / Height: {{ height }}</code></p>
						</div>
					</div>
				</vue-draggable-resizable>
			</div>
		</app-card>
	</div>
</template>

<script>
	import VueDraggableResizable from 'vue-draggable-resizable'

	export default {
		data: function () {
			return {
				width: 0,
				height: 0,
				x: 0,
				y: 0
			}
		},
		methods: {
			onResize: function (x, y, width, height) {
				this.x = x
				this.y = y
				this.width = width
				this.height = height
			},
			onDrag: function (x, y) {
				this.x = x
				this.y = y
			}
		},
		components: {
			VueDraggableResizable
		}
	}
</script>