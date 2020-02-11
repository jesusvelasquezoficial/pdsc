<template>
	<app-card customClasses="sales-overview">
		<div class="row">
			<div class="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3 mb-xl-0 mb-4 overflow-hide">
				<stats-card-v2 :title="$t('message.totalOrders')" value="380" :data="totalOrders" :width="300" :height="80"
					statsClass="mb-2" :color="ChartConfig.color.primary">
				</stats-card-v2>
			</div>
			<div class="col-12 col-sm-6  col-md-6 col-lg-6 col-xl-3 mb-xl-0 mb-4 overflow-hide">
				<stats-card-v2 :title="$t('message.totalSales')" value="$319200" :data="totalSales" :width="300"
					:height="80" :color="ChartConfig.color.danger">
				</stats-card-v2>
			</div>
			<div class="col-12 col-sm-6  col-md-6 col-lg-6 col-xl-3 mb-sm-0 mb-4 overflow-hide">
				<stats-card-v2 :title="$t('message.newCustomers')" value="120" :data="newCustomers" :width="300"
					:height="80" :color="ChartConfig.color.info">
				</stats-card-v2>
			</div>
			<div class="col-12 col-sm-6  col-md-6 col-lg-6 col-xl-3  overflow-hide">
				<stats-card-v2 :title="$t('message.totalCustomers')" value="950" :data="totalCustomers" :width="300"
					:height="80" :color="ChartConfig.color.warning">
				</stats-card-v2>
			</div>
		</div>
	</app-card>
</template>

<script>
	import ChartConfig from 'Constants/ChartConfig';

	export default {
		data: function () {
			return {
				ChartConfig,
				totalOrders: [440, 300, 200, 360, 380, 220, 440, 500, 410, 420, 380, 440],
				totalSales: [220, 150, 100, 140, 420, 110, 350, 150, 205, 350, 180, 220],
				newCustomers: [340, 400, 200, 360, 380, 220, 440, 500, 410, 420, 380, 400],
				totalCustomers: [480, 150, 200, 360, 380, 220, 440, 500, 410, 420, 380, 200]
			};
		}
	};
</script>