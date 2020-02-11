<template>
	<div id="dashboard" class="crm-projects-wrap">
		<page-title-bar></page-title-bar>
		<div class="row align-items-stretch">
			<div class="col-half-lg-block col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 grid-b-space">
				<div class="custom-search-wrap px-4 py-30 idb-block">
					<div class="row align-items-stretch">
						<div class="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
							<h2>{{$t('message.search')}}</h2>
						</div>
						<div class="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9">
							<div class="d-sm-flex align-items-center">
								<div class="input-wrap">
									<b-form-input type="text" required placeholder="Search Projects">
									</b-form-input>
								</div>
								<div class="action-btn-wrap ml-3">
									<b-button variant="primary" class="mr-3 text-capitalize">Search</b-button>
									<b-button variant="primary" class="d-inline-flex align-items-center text-capitalize">Add<i
											class="material-icons btn-icon ml-1">add</i></b-button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="d-flex align-items-center justify-content-between pb-40 pt-3">
			<div class="title">
				<h3 class="mb-0">{{$t('message'+'.'+viewType)}}</h3>
			</div>
			<div class="project-icon">
				<b-button class="btn-icon" :class="{active: selectedView == 'grid'}" @click="gridView()">
					<i class="zmdi zmdi-apps"></i>
				</b-button>
				<b-button class="btn-icon" :class="{active: selectedView == 'list'}" @click="listView()">
					<i class="zmdi zmdi-view-list-alt icon"></i>
				</b-button>
			</div>
		</div>
		<div class="row align-items-stretch" v-if="selectedView == 'grid'">
			<div class="col-half-lg-block col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 grid-b-space"
				v-for="(data,index) in projectDetails" :key="index">
				<ProjectGridView :managementData="data"></ProjectGridView>
			</div>
		</div>
		<div v-else>
			<app-card customClasses="mb-0" :fullBlock="true">
				<ProjectListView :projectDetails="projectDetails"></ProjectListView>
			</app-card>
		</div>
	</div>
</template>

<script>
	import ProjectGridView from "Components/Widgets/ProjectGrid";
	import { projectDetails } from "Assets/data/projectsData.js";
	import ProjectListView from "Components/Widgets/ProjectList";
	export default {
		data() {
			return {
				projectDetails,
				viewType: "projectGrid",
				selectedView: "grid"
			}
		},
		components: {
			ProjectGridView,
			ProjectListView
		},
		methods: {
			listView() {
				this.viewType = "projectList";
				this.selectedView = "list";
			},
			gridView() {
				this.viewType = "projectGrid";
				this.selectedView = "grid";
			}
		}
	};
</script>