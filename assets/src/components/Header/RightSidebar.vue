<template>
	<div class="idb-right-panel" :class="sidebarOpen ? 'panel-show':'panel-hide' ">
		<div class="chat-sidebar-pan">
			<div class="system-setting">
				<div class="setting-header"><i class="ti-settings px-2"></i>System</div>
				<ul class="list-style-none pl-0">
					<li class="d-flex justify-content-between">
						<div class="align-self-center">Notifications</div>
						<div class="onoffswitch align-self-center">
							<input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="switch-nofications" checked>
							<label class="onoffswitch-label mb-0" for="switch-nofications">
								<span class="onoffswitch-inner"></span>
								<span class="onoffswitch-switch"></span>
							</label>
						</div>
					</li>
					<li class="d-flex justify-content-between">
						<div class="align-self-center">Quick Results</div>
						<div class="onoffswitch align-self-center">
							<input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="switch-results">
							<label class="onoffswitch-label mb-0" for="switch-results">
								<span class="onoffswitch-inner"></span>
								<span class="onoffswitch-switch"></span>
							</label>
						</div>
					</li>
					<li class="d-flex justify-content-between">
						<div class="align-self-center">Auto Updates</div>
						<div class="onoffswitch align-self-center">
							<input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="switch-updates" checked>
							<label class="onoffswitch-label mb-0" for="switch-updates">
								<span class="onoffswitch-inner"></span>
								<span class="onoffswitch-switch"></span>
							</label>
						</div>
					</li>
				</ul>
			</div>
			<div class="system-setting account-settings">
				<div class="setting-header"><i class="ti-user px-2"></i>Account</div>
				<ul class="list-style-none pl-0">
					<li class="d-flex justify-content-between">
						<div class="align-self-center">Offline Mode</div>
						<div class="onoffswitch align-self-center">
							<input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="switch-offline" checked>
							<label class="onoffswitch-label mb-0" for="switch-offline">
								<span class="onoffswitch-inner"></span>
								<span class="onoffswitch-switch"></span>
							</label>
						</div>
					</li>
					<li class="d-flex justify-content-between">
						<div class="align-self-center">Location Share</div>
						<div class="onoffswitch align-self-center">
							<input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="switch-share" checked>
							<label class="onoffswitch-label mb-0" for="switch-share">
								<span class="onoffswitch-inner"></span>
								<span class="onoffswitch-switch"></span>
							</label>
						</div>
					</li>
					<li class="d-flex justify-content-between">
						<div class="align-self-center">Show Offline User</div>
						<div class="onoffswitch align-self-center">
							<input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="switch-active-user">
							<label class="onoffswitch-label mb-0" for="switch-active-user">
								<span class="onoffswitch-inner"></span>
								<span class="onoffswitch-switch"></span>
							</label>
						</div>
					</li>
					<li class="d-flex justify-content-between">
						<div class="align-self-center">Save History</div>
						<div class="onoffswitch align-self-center">
							<input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="switch-history" checked>
							<label class="onoffswitch-label mb-0" for="switch-history">
								<span class="onoffswitch-inner"></span>
								<span class="onoffswitch-switch"></span>
							</label>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['sidebarOpen']
	}
</script>