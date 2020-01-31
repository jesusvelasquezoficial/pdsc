<template>
	<div class="loader-overlay" v-if="status">
		<spinner :loading="true" :size="43" :depth="3.5" color="#5D92F4"></spinner>
	</div>
</template>

<script>
	export default {
		props: ["status"]
	};
</script>