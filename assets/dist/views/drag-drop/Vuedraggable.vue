<template>
	<div>
		<page-title-bar></page-title-bar>
		<app-card :heading="$t('message.vueDraggable')" customClasses="vue-draggable-wrap">
			<div class="row">
				<div class="col-sm-12 col-md-6 col-lg-6 mb-md-0 mb-4" v-for="(list, key, index) in data" :key="index">
					<ul class="list-group">
						<draggable :v-model="key" class="dragArea" :group="{name:'people'}">
							<li class="list-group-item" v-for="item in list" :key="item.image">
								<div class="d-flex justify-content-start">
									<div class="d-flex align-items-start flex-column img-wrap">
										<img :src="item.image" alt="user thumb"
											class="rounded-circle align-self-center artical-user" width="80" height="80" />
									</div>
									<div class="d-flex align-items-start flex-column pt-10">
										<h6 class="font-lg">{{item.name}}</h6>
										<p class="mb-0">Project -- Setup the project..!</p>
										<p class="small fw-bold">5min ago</p>
									</div>
								</div>
							</li>
						</draggable>
					</ul>
				</div>
			</div>
		</app-card>
	</div>
</template>

<script>
	import draggable from 'vuedraggable'

	export default {
		data() {
			return {
				data: {
					'list1': [
						{
							name: 'Piper Vaus',
							image: '/static/img/user-13.jpg'
						},
						{
							name: 'Bonnie Aderson',
							image: '/static/img/user-2.jpg'
						},
						{
							name: 'Clay Jenson',
							image: '/static/img/user-3.jpg'
						}
					],
					'list2': [
						{
							name: 'Natalie',
							image: '/static/img/user-4.jpg'
						},
						{
							name: 'Emma',
							image: '/static/img/user-5.jpg'
						},
						{
							name: 'Jamica',
							image: '/static/img/user-6.jpg'
						}
					]
				}
			}
		},
		components: {
			draggable
		}
	}
</script>