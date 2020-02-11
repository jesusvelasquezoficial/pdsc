<template>
	<div class="auth-spinner">
		<img src="/static/img/loading.svg" alt="loading" />
	</div>
</template>

<script>
	export default {
		name: "callback",
		props: ["auth"],
		data() {
			this.auth.handleAuthentication();
			return {};
		}
	};
</script>