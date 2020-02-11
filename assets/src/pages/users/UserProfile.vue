<template>
	<div class="user-profile-wrapper">
		<page-title-bar></page-title-bar>
		<div class="row">
			<div class="col-full-lg-block col-sm-12 col-md-12 col-lg-3 col-xl-3">
				<user-profile-block></user-profile-block>
				<user-meta-details></user-meta-details>
			</div>
			<div class="col-full-lg-block col-sm-12 col-md-12 col-lg-6 col-xl-6">
				<app-card customClasses="grid-b-space" :heading="$t('message.activityTimeline')">
					<activity-timeline></activity-timeline>
				</app-card>
				<photo-gallery></photo-gallery>
				<blogs></blogs>
			</div>
			<div class="col-full-lg-block col-sm-12 col-md-12 col-lg-3 col-xl-3">
				<div class="row">
					<div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
						<skills></skills>
					</div>
					<div class="col-sm-12 col-md-6 col-lg-12 col-xl-12">
						<peoples></peoples>
					</div>
					<div class="col-sm-12 col-md-6 col-lg-12 col-xl-12">
						<connections></connections>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Connections from "Components/Widgets/Connections";
	import Peoples from "Components/Widgets/Peoples";
	import Skills from "Components/Widgets/Skills";
	import Blogs from "Components/Widgets/Blogs";
	import PhotoGallery from "Components/Widgets/PhotoGallery";
	import ActivityTimeline from "Components/Widgets/ActivityTimeline";
	import UserProfileBlock from "Components/Widgets/UserProfileBlock";
	import UserMetaDetails from "Components/Widgets/UserMetaDetails";

	export default {
		components: {
			Connections,
			Peoples,
			Skills,
			Blogs,
			PhotoGallery,
			ActivityTimeline,
			UserProfileBlock,
			UserMetaDetails
		},
	};
</script>