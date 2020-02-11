<template>
	<app-card :heading="$t('message.toDoList')" :enableFooter="false" :showTodayBtn="true" :withTabs="true"
		:fullBlock="true">
		<div>
			<vue-perfect-scrollbar :settings="settings" style="height:393px">
				<b-list-group class="todo-list" v-if="toDoLists !== null">
					<b-list-group-item v-for="item in toDoLists" :key="item.id" class="">
						<div class="d-flex align-items-center task-wrap">
							<div class="pr-3">
								<label class="custom-control custom-checkbox m-0 pl-0">
									<input type="checkbox" v-model="item.status" @click="marked(item.status = !item.status)"
										class="custom-control-input" value="on">
									<span class="custom-control-indicator"></span>
								</label>
							</div>
							<div @click="marked(item.status = !item.status)" class="content-wrap">
								<span class="fs-12 mb-2 d-block text-muted">{{item.time}}</span>
								<h5 class="striked title" :class="{'strike': item.status}">{{item.taskName}}</h5>
								<template v-for="(img,index) in item.assignTo">
									<img :key="index" height="30" width="30" :src="img"
										class="mr-1 img-responsive rounded-circle" />
								</template>
							</div>
							<div @click="onDeleteToDoList(item)" class="trash-icon text-center">
								<i class="material-icons">delete</i>
							</div>
						</div>
					</b-list-group-item>
				</b-list-group>
			</vue-perfect-scrollbar>
			<div class="py-3 px-4 view-more-wrap">
				<b-button variant="primary" class="btn-sm text-capitalize">Add New</b-button>
			</div>
		</div>
		<delete-confirmation-dialog ref="deleteConfirmationDialog"
			message="Are you sure you want to delete this list permanently?" @onConfirm="deleteToDo">
		</delete-confirmation-dialog>
		<app-section-loader :status="loader"></app-section-loader>
	</app-card>

</template>

<script>
	import { toDoLists } from "Assets/data/toDoLists.js";

	export default {
		data() {
			return {
				menu: false,
				settings: {
					maxScrollbarLength: 100
				},
				toDoLists,
				dialog: false,
				loader: false,
				snackbar: false,
				snackbarMessage: "",
				timeout: 2000,
				y: "top"
			};
		},
		methods: {
			showModal() {
				this.$refs.myModalRef.show()
			},
			hideModal() {
				this.$refs.myModalRef.hide()
			},
			marked() {
				this.loader = true;
				setTimeout(() => {
					this.loader = false;
					this.snackbar = true;
					this.$swal('ToDo Updated Successfully');
				}, 1500);
			},
			onDeleteToDoList(toDoList) {
				this.$refs.deleteConfirmationDialog.openDialog();
				this.selectToDoList = toDoList;
			},
			deleteToDo() {
				this.$refs.deleteConfirmationDialog.close();
				this.loader = true;
				let deletedToDoList = this.toDoLists;
				let index = deletedToDoList.indexOf(this.selectToDoList);
				setTimeout(() => {
					this.loader = false;
					this.selectToDoList = null;
					this.toDoLists.splice(index, 1);
					this.$swal('ToDo List Deleted Successfully');
				}, 1500);
			}
		}
	};
</script>