<template>
	<app-card customClasses="overflow-hide h-100" :appCardClass="`${bgColor} h-100`"
		contentCustomClass="crypto-card">
		<div class="d-flex align-items-center mb-3">
			<i :class="icon" class="font-lg mr-2"></i>
			<h3 class="mb-0 fw-normal">{{name}}</h3>
		</div>
		<div class="d-flex align-items-center justify-content-between mb-3">
			<p class="mb-0 fs-14">+ {{viewers}}</p>
			<p class="mb-0 fs-14">Trade : {{trade}}</p>
		</div>
		<b-progress variant="light" :value="progress" class="progress-sm rounded-0"></b-progress>
	</app-card>
</template>
<script>
	export default {
		props: ['name', 'trade', 'icon', 'bgColor', 'viewers', 'progress']
	}
</script>