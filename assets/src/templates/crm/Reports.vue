<template>
	<div id="dashboard">
		<page-title-bar></page-title-bar>
		<div class="row align-items-stretch">
			<div class="col-half-lg-block col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 grid-b-space">
				<app-card :heading="$t('message.invoices')">
					<invoice></invoice>
				</app-card>
			</div>
			<div class="col-full-lg-block col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 grid-b-space">
				<app-card :heading="$t('message.payments')">
					<payments></payments>
				</app-card>
			</div>
		</div>
		<!-- Tabs And Tables -->
		<div class="row align-items-stretch">
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<tabs-and-tables></tabs-and-tables>
			</div>
		</div>
		<div class="row align-items-stretch">
			<div class="col-full-lg-block col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 grid-b-space">
				<app-card :heading="$t('message.taxRates')">
					<tax-rates></tax-rates>
				</app-card>
			</div>
			<div class="col-half-lg-block col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 grid-b-space">
				<app-card :heading="$t('message.addTickets')">
					<add-tickets></add-tickets>
				</app-card>
			</div>
		</div>
	</div>
</template>

<script>
	import TabsAndTables from "Components/Widgets/TabsAndTables";
	import Invoice from "Components/Widgets/Invoice";
	import Payments from "Components/Widgets/Payments";
	import TaxRates from "Components/Widgets/TaxRates";
	import AddTickets from "Components/Widgets/AddTickets";

	export default {
		components: {
			TabsAndTables,
			Invoice,
			Payments,
			TaxRates,
			AddTickets
		}
	};
</script>