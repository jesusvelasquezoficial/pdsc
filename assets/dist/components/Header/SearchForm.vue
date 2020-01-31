<template>
	<div class="search-wrap">
		<b-form-input type="text" v-model="form.search" required placeholder="Search" class="search-input">
		</b-form-input>
		<span class="search-icon">
			<i class="zmdi zmdi-search"></i>
		</span>
	</div>
</template>
<script>
	export default {
		data: function () {
			return {
				form: {
					search: '',
				}
			}
		}
	}
</script>