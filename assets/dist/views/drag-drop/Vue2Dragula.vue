<template>
	<div>
		<page-title-bar></page-title-bar>
		<app-card>
			<div class="row">
				<div class="col-sm-12 col-lg-6 col-md-6 dragula-list mb-md-0 mb-4" v-for="(data, index) in data"
					:key="index">
					<h3 class="mb-20">{{data.title}}</h3>
					<div class="vue2-dragula-container" v-dragula="data.columns" drake="first">
						<div v-for="rows in data.columns" :key="rows">{{rows}} [click me]</div>
					</div>
				</div>
			</div>
		</app-card>
	</div>
</template>

<script>
	export default {
		data: function () {
			return {
				data: [
					{
						title: "List 1",
						columns: ['Its is too amezing component try it !',
							'You can move these elements between these two containers',
							'Moving them anywhere else isn"t quite possible',
							'There"s also the possibility of moving elements around in the same container, changing their position'
						]
					},
					{
						title: "List 2",
						columns: [
							'This is the use case. You only need to specify the containers you want to use',
							'More interactive use cases lie ahead',
							'Another message',
							'Move on upper'
						]
					}
				]
			}
		}
	}
</script>