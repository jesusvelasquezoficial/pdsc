<template>
	<div>
		<vue-perfect-scrollbar :settings="settings" class="scroll-length">
			<div class="ongoing-projects-wrap" v-for="( project, index ) in ongoingProjects" :key="index">
				<h4 class="mb-3">Project {{project.id}}</h4>
				<b-list-group class="mb-4">
					<b-list-group-item class="border-0 rounded-0 p-0 d-flex justify-content-start align-items-center">
						<span class="w-50 d-flex align-items-center fw-semi-bold ">
							<i class="zmdi zmdi-account-circle v-input__prepend-outer mr-2"></i>
							Supervisor :
						</span>
						<span class="w-50 text-truncate">
							{{project.supervisor}}
						</span>
					</b-list-group-item>
					<b-list-group-item class="border-0 rounded-0 p-0 d-flex justify-content-start align-items-center">
						<span class="w-50 d-flex align-items-center fw-semi-bold ">
							<i class="zmdi zmdi-time v-input__prepend-outer mr-2"></i>
							Duration :
						</span>
						<span class="w-50 text-truncate">
							{{project.duration}}
						</span>
					</b-list-group-item>
					<b-list-group-item class="border-0 rounded-0 p-0 d-flex justify-content-start align-items-center">
						<span class="w-50 d-flex align-items-center fw-semi-bold ">
							<i class="zmdi zmdi-money v-input__prepend-outer mr-2"></i>
							Net Worth :
						</span>
						<span class="w-50 text-truncate">
							{{project.netWorth}}
						</span>
					</b-list-group-item>
					<b-list-group-item class="border-0 rounded-0 p-0 d-flex justify-content-start align-items-center">
						<span class="w-50 d-flex align-items-center fw-semi-bold ">
							<i class="zmdi zmdi-email v-input__prepend-outer mr-2"></i>
							E-mail :
						</span>
						<span class="w-50 text-truncate">
							{{project.email}}
						</span>
					</b-list-group-item>
					<b-list-group-item class="border-0 rounded-0 p-0 d-flex justify-content-start align-items-center">
						<span class="w-50 d-flex align-items-center fw-semi-bold ">
							<i class="zmdi zmdi-phone v-input__prepend-outer mr-2"></i>
							Phone :
						</span>
						<span class="w-50 text-truncate">
							{{project.phone}}
						</span>
					</b-list-group-item>
				</b-list-group>
				<h4>Progress: {{ valueDeterminate }}%</h4>
				<div class="progress-width-style">
					<b-progress :value="valueDeterminate" class="mt-3 rounded-0 progress-sm"></b-progress>
				</div>
			</div>
		</vue-perfect-scrollbar>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				valueDeterminate: 30,
				ongoingProjects: [
					{
						id: '1',
						supervisor: 'John Gena',
						duration: '3 Weeks',
						netWorth: '$2364378',
						email: 'support@theironnetwork.org',
						phone: '+01 3456 25378'
					}
				],
				settings: {
					maxScrollbarLength: 60
				}
			};
		}
	};
</script>