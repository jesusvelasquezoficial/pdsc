<template>
	<div>
		<page-title-bar></page-title-bar>
		<div class="row">
			<div class="col-sm-12 col-md-12 col-lg-12" v-for="(icons, key, index) in themifyIcons" :key="index">
				<app-card customClasses="grid-b-space" :heading="$t('message.'+ key)">
					<ul class="list-unstyled icon-box row">
						<template v-for="(icon, index) in icons">
							<li class="col-sm-12 col-md-6 col-lg-6 col-xl-3 b-50" :key="index">
								<span class="icon-style"><i :class="icon"></i></span>
								<span class="icon-title">{{ icon }}</span>
							</li>
						</template>
					</ul>
				</app-card>
			</div>
		</div>
	</div>
</template>

<script>
	import { themifyIcons } from "./data.js";

	export default {
		data: function () {
			return {
				themifyIcons
			}
		}
	};
</script>