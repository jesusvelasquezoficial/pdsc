<template>
	<app-card :heading="$t('message.browserStats')" :headingMenu="true" :fullBlock="true"
		customClasses="browser-stat-widget h-100" appCardClass="h-100">
		<vue-perfect-scrollbar :settings="settings" style="height:393px">
			<b-list-group v-if="browserStats !== null">
				<b-list-group-item v-for="(stats, index) in browserStats" :key="index"
					class="d-flex align-items-center py-10 px-20 browser-stats-item">
					<div class="w-50 d-flex align-items-center">
						<img :src="stats.imgUrl" width="30" height="30">
						<h5 class="mb-0">{{stats.browserName}}</h5>
					</div>
					<div class="w-50 d-flex align-items-center justify-content-end">
						<span class="font-xs text-muted w-50">{{stats.runningPercentage}} Users</span>
						<radial-progress-bar :diameter="35" :completed-steps="stats.completedSteps" :total-steps="100"
							startColor="#50D166" stopColor="#50D166" innerStrokeColor="rgba(0,0,0,0.2)" :strokeWidth="4">
						</radial-progress-bar>
					</div>
				</b-list-group-item>
			</b-list-group>
		</vue-perfect-scrollbar>
	</app-card>
</template>

<script>
	import RadialProgressBar from "vue-radial-progress/dist/vue-radial-progress.min";
	import { browserStats } from "Assets/data/browserStats.js";

	export default {
		data() {
			return {
				browserStats,
				settings: {
					maxScrollbarLength: 100
				}
			}
		},
		components: {
			RadialProgressBar
		}
	}
</script>