<template>
	<div :class="[{'idb-full-block': fullBlock, 'idb-block-content': !fullBlock}, extraClass]">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		props: ["fullBlock", "extraClass"]
	};
</script>