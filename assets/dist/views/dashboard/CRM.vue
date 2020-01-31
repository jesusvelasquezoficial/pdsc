<template>
	<div id="dashboard">
		<page-title-bar></page-title-bar>
		<div class="row align-items-stretch">
			<div class="col-half-lg-block col-md-6 col-lg-6 col-xl-3 grid-b-space">
				<stats-card-v3 :title="$t('message'+'.'+visitors.title)" :viewer="visitors.viewer" :icon="visitors.icon"
					:trade="visitors.trade" class="gradient-primary">
					<div>
						<line-chart :label="visitors.label" :width="118" :height="70" class="overflow-hide h-100"
							:dataSet="visitors.chartData" :labels="visitors.chartLabel"></line-chart>
					</div>
				</stats-card-v3>
			</div>
			<div class="col-half-lg-block col-md-6 col-lg-6 col-xl-3 grid-b-space">
				<stats-card-v3 :title="$t('message'+'.'+revenue.title)" :viewer="revenue.viewer" :trade="revenue.trade"
					:icon="revenue.icon" class="gradient-success">
					<div>
						<line-chart :label="revenue.label" :width="118" :height="70" class="overflow-hide h-100"
							:dataSet="revenue.chartData" :labels="revenue.chartLabel"></line-chart>
					</div>
				</stats-card-v3>
			</div>
			<div class="col-half-lg-block col-md-6 col-lg-6 col-xl-3 grid-b-space">
				<stats-card-v3 :title="$t('message'+'.'+sales.title)" :viewer="sales.viewer" :trade="sales.trade"
					:icon="sales.icon" class="gradient-info">
					<div>
						<line-chart :label="sales.label" :width="118" :height="70" class="overflow-hide h-100"
							:dataSet="sales.chartData" :labels="sales.chartLabel"></line-chart>
					</div>
				</stats-card-v3>
			</div>
			<div class="col-half-lg-block col-md-6 col-lg-6 col-xl-3 grid-b-space">

				<stats-card-v3 :title="$t('message'+'.'+deals.title)" :viewer="deals.viewer" :trade="deals.trade"
					:icon="deals.icon" class="gradient-danger">
					<div>
						<line-chart :label="deals.label" :width="118" :height="70" class="overflow-hide h-100"
							:dataSet="deals.chartData" :labels="deals.chartLabel"></line-chart>
					</div>
				</stats-card-v3>
			</div>
		</div>
		<div class="row align-items-stretch">
			<div class="col-half-lg-block col-12 col-sm-12 col-md-6 col-lg-8 col-xl-8 grid-b-space">
				<app-card :heading="$t('message.projectStatus')" headingMenu="true">
					<project-status-v2 :height="350"></project-status-v2>
				</app-card>
			</div>
			<div class="col-half-lg-block col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 grid-b-space">
				<app-card customClasses="h-100" :heading="$t('message.sales')" headingMenu="true" class="crm-pie-chart">
					<sales :height="300"></sales>
				</app-card>
			</div>
		</div>
		<div class="row align-items-stretch">
			<div class="col-full-lg-block col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 grid-b-space">
				<app-card :heading="$t('message.upcomingEvents')" headingMenu="true"
					contentCustomClass="upcoming-event-wrap" customClasses="trending-widget overflow-hide">
					<upcoming-events></upcoming-events>
				</app-card>
			</div>
			<div class="col-half-lg-block col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 grid-b-space">
				<app-card :heading="$t('message.ongoingProjects')" headingMenu="true">
					<ongoing-projects></ongoing-projects>
				</app-card>
			</div>
			<div class="col-half-lg-block col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 grid-b-space">
				<app-card :heading="$t('message.projectStatus')" headingMenu="true" contentCustomClass="project-status-wrap"
					customClasses="trending-widget overflow-hide">
					<project-status></project-status>
				</app-card>
			</div>
			<div class="col-half-lg-block col-md-4 col-lg-4 col-xl-4 grid-b-space">
				<app-card :heading="$t('message.notifications')" headingMenu="true" class="overflow-hide h-100">
					<notification-cards></notification-cards>
				</app-card>
			</div>
			<div class="col-half-lg-block col-md-8 col-lg-8 col-xl-8 grid-b-space">
				<app-card class="overflow-hide" :heading="$t('message.chat')" headingMenu="true">
					<chat-2></chat-2>
				</app-card>
			</div>
			<!-- Tabs And Tables -->
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<tabs-and-tables></tabs-and-tables>
			</div>
		</div>
	</div>
</template>

<script>

	// widgets
	import UpcomingEvents from 'Components/Widgets/UpcomingEvents'
	import OngoingProjects from 'Components/Widgets/OngoingProjects'
	import ProjectStatus from 'Components/Widgets/ProjectStatus'
	import NotificationCards from 'Components/Widgets/NotificationCards'
	import Chat2 from 'Components/Widgets/Chat2'
	import ProjectStatusV2 from 'Components/Charts/ColumnChartWithImages'
	import TabsAndTables from 'Components/Widgets/TabsAndTables'
	import StatsCardV3 from "Components/StatsCardV3/StatsCardV3";
	import LineChart from "Components/Charts/LineChart";
	import ChartConfig from 'Constants/ChartConfig';
	import Sales from 'Components/Charts/PieChartWithLegend';

	export default {
		name: "dashboard",
		data() {
			return {
				ChartConfig,
				visitors: {
					card_color: "primary-bg",
					icon: "zmdi zmdi-account-add",
					title: "visitors",
					viewer: "+ 41",
					trade: "30",
					chartLabel: ['0', '1', '20', '3', '10'],
					label: "Visitors",
					chartData: [30, 5, 26, 10, 30]
				},
				revenue: {
					card_color: "success-bg",
					icon: "zmdi zmdi-money-box",
					title: "revenue",
					viewer: "+ 4381",
					trade: "60",
					chartLabel: ['0', '1', '2', '3', '4'],
					label: "Revenue",
					chartData: [1, 26, 8, 22, 1]
				},
				sales: {
					card_color: "accent-bg",
					icon: "zmdi zmdi-shopping-cart",
					title: "sales",
					viewer: "+ 2611",
					trade: "80",
					chartLabel: ['0', '1', '2', '3', '4'],
					label: "Sales",
					chartData: [30, 5, 26, 10, 30]
				},
				deals: {
					card_color: "warn-bg",
					icon: "ti-thumb-up",
					title: "deals",
					viewer: "+ 611",
					trade: "40",
					chartLabel: ['0', '1', '2', '3', '4'],
					label: "Deals",
					chartData: [1, 26, 8, 22, 1]
				}
			}
		},
		components: {
			UpcomingEvents,
			OngoingProjects,
			ProjectStatus,
			NotificationCards,
			Chat2,
			ProjectStatusV2,
			TabsAndTables,
			StatsCardV3,
			LineChart,
			Sales
		}
	};
</script>