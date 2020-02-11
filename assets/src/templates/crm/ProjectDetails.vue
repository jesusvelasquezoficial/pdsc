<template>
	<div id="dashboard" class="project-detail-wrap">
		<page-title-bar></page-title-bar>
		<div v-if="selectedManagement !== null">
			<div class="col-half-lg-block col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 grid-b-space">
				<h2>{{selectedManagement.name}}</h2>
			</div>
		</div>
		<div class="row align-items-stretch">
			<div class="col-half-lg-block col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 grid-b-space">
				<app-card customClasses="mb-30">
					<h3 class="mb-4">Description</h3>
					<div class="project-content">
						<p class="fw-bold mb-2">{{ descriptionDetails.decriptionHeading }}</p>
						<p>{{ descriptionDetails.description }}</p>
						<ul class="pl-3">
							<li class="mb-2" v-for="(point,index) in descriptionDetails.descriptionPoints" :key="index">
								{{ point }}
							</li>
						</ul>
					</div>
				</app-card>
				<app-card :heading="$t('message.filesUploaded')" customClasses="mb-30 files-uploaded">
					<files-uploaded></files-uploaded>
				</app-card>
				<app-card :heading="$t('message.statistics')" customClasses="mb-30">
					<statistics :data="statisticsData.data" :labels="statisticsData.labels" :label="statisticsData.label"
						:labelX="statisticsData.label1" :labelY="statisticsData.label2">
					</statistics>
				</app-card>
			</div>
			<div class="col-full-lg-block col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 grid-b-space">
				<app-card customClasses="mb-30 management-details">
					<management-details :managementData="selectedManagement"></management-details>
				</app-card>
				<app-card customClasses="mb-30">
					<h6 class="mb-3">
						{{ $t('message.progress') }}: {{ valueDeterminate }}%
					</h6>
					<b-progress :value="valueDeterminate" class="rounded-0 progress-sm"></b-progress>
				</app-card>
				<app-card :heading="$t('message.projectGallery')" customClasses="mb-30">
					<project-gallery></project-gallery>
				</app-card>
			</div>
		</div>
	</div>
</template>

<script>
	import { projectDetails } from "Assets/data/projectsData.js";
	import ManagementDetails from 'Components/Widgets/ManagementDetails'
	import FilesUploaded from 'Components/Widgets/FilesUploaded'
	import Statistics from 'Components/Widgets/Statistics'
	import ProjectGallery from 'Components/Widgets/ProjectGallery'

	export default {
		data() {
			return {
				valueDeterminate: 60,
				selectedManagement: {},
				projectDetails,
				descriptionDetails: {
					description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
					decriptionHeading: "Integer pharetra mi eu libero convallis ultricies",
					descriptionPoints: [
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
						"Donec auctor sapien eget sem blandit pharetra.",
						"In sed tellus congue, rhoncus mi quis, iaculis magna.",
						"Vestibulum at mauris semper, tristique nulla et, tristique nulla.",
						"Vestibulum at mauris semper, tristique nulla et, tristique nulla."
					]
				},
				statisticsData: {
					labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
					data: ['60', '5', '100', '60', '170', '25', '60'],
					label: 'Progress',
					label1: 'Time',
					label2: 'Cost'
				},
			}
		},
		mounted() {
			for (var i = 0; i < this.projectDetails.length; i++) {
				if (this.projectDetails[i].id == this.$route.params.id) {
					this.selectedManagement = {
						client: this.projectDetails[i].client,
						budget: this.projectDetails[i].budget,
						duration: this.projectDetails[i].duration,
						name: this.projectDetails[i].name,
						teamImage: this.projectDetails[i].teamImage,
						status: this.projectDetails[i].status,
						statusColor: this.projectDetails[i].statusColor,
						deadline: this.projectDetails[i].deadline,
						department: this.projectDetails[i].department,
						projectManager: this.projectDetails[i].projectManager
					}
				}
			}
		},
		components: {
			ManagementDetails,
			FilesUploaded,
			Statistics,
			ProjectGallery
		}
	};
</script>