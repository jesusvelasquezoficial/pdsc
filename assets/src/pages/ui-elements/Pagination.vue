<template>
	<div id="pagination">
		<page-title-bar></page-title-bar>
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<app-card customClasses="grid-b-space" :heading="$t('message.basicUsage')" class="basic-usage">
					<div class="paginations-type">
						<div class="mb-20" v-for="data in basicUsage" :key="data.size">
							<h5 class="mb-20">{{data.title}}</h5>
							<b-pagination :size="data.size" :total-rows="100" v-model="basicPage" :per-page="10">
							</b-pagination>
						</div>
					</div>
				</app-card>
				<app-card customClasses="grid-b-space" :heading="$t('message.alignment')">
					<div>
						<p class="mb-30">By default the pagination component is left aligned. Change the alignment to
							<code>center</code> or <code>right</code> (right is an alias for end) by setting the prop align to
							the appropriate value.</p>
						<div class="mb-20">
							<h5 class="mb-20">Left alignment (default)</h5>
							<b-pagination :total-rows="100" v-model="alignMentPage" :per-page="10">
							</b-pagination>
						</div>
						<div class="mb-20">
							<h5 class="mb-20">Center alignment</h5>
							<b-pagination align="center" :total-rows="100" v-model="alignMentPage" :per-page="10">
							</b-pagination>
						</div>
						<div class="mb-20">
							<h5 class="mb-20">Right (end) alignment</h5>
							<b-pagination align="right" :total-rows="100" v-model="alignMentPage" :per-page="10">
							</b-pagination>
						</div>
						<div>currentPage: {{alignMentPage}}</div>
					</div>
				</app-card>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				basicPage: 3,
				alignMentPage: 3,
				basicUsage: [
					{
						title: "Default",
						size: "md"
					},
					{
						title: "Small",
						size: "sm"
					},
					{
						title: "Large",
						size: "lg"
					}
				]
			};
		}
	};
</script>