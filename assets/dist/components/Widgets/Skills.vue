<template>
	<app-card customClasses="grid-b-space" :heading="$t('message.skills')">
		<ul class="list-unstyled">
			<li class="mb-20" v-for="skill in skills" :key="skill.id">
				<div class="d-flex justify-content-between">
					<h6 class="mb-20">{{skill.name}}</h6>
					<span class="fs-12 text-muted">{{skill.perecentage}}%</span>
				</div>
				<b-progress height="5px" :value="skill.perecentage" class="mb-0"
					:variant="`${skill.class} gradient-${skill.class}`">
				</b-progress>
			</li>
		</ul>
	</app-card>
</template>

<script>
	import { skills } from "Assets/data/skills.js";

	export default {
		data() {
			return {
				skills
			};
		}
	};
</script>