<template>
	<div id="dashboard-2">
		<page-title-bar></page-title-bar>
		<div class="row">
			<div class="col-full-lg-block col-sm-12 col-md-12 col-xl-8 col-lg-8  grid-b-space">
				<app-card appCardClass="h-100 d-flex flex-column justify-content-between"
					:heading="$t('message.salesAndVisitorStatus')" :headingMenu="true"
					customClasses="d-flex justify-content-between flex-column overflow-hide h-100">
					<sales-and-visitor-status></sales-and-visitor-status>
				</app-card>
			</div>
			<div class="col-full-lg-block col-sm-12 col-md-12 col-xl-4 col-lg-4  grid-b-space">
				<statistic></statistic>
			</div>
		</div>
		<div class="row">
			<div class="col-full-lg-block col-sm-12 col-md-12 col-xl-4 grid-b-space">
				<inbox-widget></inbox-widget>
			</div>
			<div class="col-full-lg-block col-sm-12 col-md-12 col-xl-8 grid-b-space">
				<app-card appCardClass="h-100 d-flex justify-content-between flex-column"
					:heading="$t('message.websiteStatistics')" :headingMenu="true"
					customClasses="d-flex justify-content-between flex-column overflow-hide h-100">
					<stacked-area-chart :width="300" :height="110"></stacked-area-chart>
				</app-card>
			</div>
		</div>
		<div class="row align-items-stretch">
			<div class="col-half-lg-block col-sm-12 col-md-12 col-xl-4 col-lg-4 grid-b-space">
				<system-reports></system-reports>
			</div>
			<div class="col-half-lg-block col-sm-12 col-md-6 col-xl-4 col-lg-4 grid-b-space">
				<app-card :heading="$t('message.serverLoad')" :enableFooter="true" headingMenu="true"
					appCardClass=" d-flex flex-column justify-content-between h-100" customClasses="server-load-widget h-100"
					footerClasses="p-0">
					<server-load></server-load>
					<ul slot="footer" class="footer-border border-0">
						<li class="w-33">
							<h5 class="font-weight-bold mb">50% / 100%</h5>
							<span class="font-xs">{{$t('message.CPULoad')}}</span>
						</li>
						<li class="w-33">
							<h5 class="font-weight-bold mb">35% / 100%</h5>
							<span class="font-xs">{{$t('message.storageRemain')}}</span>
						</li>
						<li class="w-33">
							<h5 class="font-weight-bold mb">364mb/1Gb</h5>
							<span class="font-xs">{{$t('message.bandwidthUse')}}</span>
						</li>
					</ul>
				</app-card>
			</div>
			<div class="col-full-lg-block col-sm-12 col-md-6 col-xl-4 col-lg-4 grid-b-space">
				<top-buyers></top-buyers>
			</div>
		</div>
		<div class="row align-items-stretch">
			<div class="col-full-lg-block col-sm-12 col-md-12 col-xl-4 col-lg-4 grid-b-space">
				<app-card :heading="$t('message.recentTestimonial')" headingColor="text-white"
					customClasses="gradient-danger overflow-hide">
					<recent-testimonials></recent-testimonials>
				</app-card>
			</div>
			<div class="col-full-lg-block col-sm-12 col-md-12 col-lg-8 col-xl-8 grid-b-space">
				<app-card appCardClass="d-flex h-100 justify-content-between flex-column"
					customClasses="overflow-hide h-100" :heading="$t('message.productStats')" :headingMenu="true">
					<product-stats-chart :width="300" :height="100"></product-stats-chart>
				</app-card>
			</div>
		</div>
		<div class="row align-items-stretch">
			<div class="col-full-lg-block col-sm-12 col-md-12 col-xl-6 col-lg-6 grid-b-space">
				<recent-comments></recent-comments>
			</div>
			<div class="col-full-lg-block col-sm-12 col-md-12 col-xl-6 col-lg-6 grid-b-space">
				<app-card customClasses="h-100" :heading="$t('message.activityTimeline')" :headingMenu="true">
					<activity-timeline></activity-timeline>
				</app-card>
			</div>
		</div>
		<div class="row align-items-stretch">
			<div class="col-half-lg-block col-sm-12 col-md-6 col-lg-6 col-xl-6 col-lg-6 grid-b-space">
				<advertise-campaign></advertise-campaign>
			</div>
			<div class="col-half-lg-block col-sm-12 col-md-6 col-lg-6 col-xl-6 grid-b-space">
				<real-time-traffic></real-time-traffic>
			</div>
		</div>
		<div class="row align-items-stretch">
			<div class="col-full-lg-block col-sm-12 col-md-12 col-xl-4 grid-b-space">
				<cities-and-clients></cities-and-clients>
			</div>
			<div class="col-full-lg-block col-sm-12 col-md-12 col-xl-8 grid-b-space">
				<app-card customClasses="h-100" :heading="$t('message.couponStats')" :headingMenu="true"
					contentCustomClass="p-0">
					<coupons-stats></coupons-stats>
				</app-card>
			</div>
		</div>
		<div class="row align-items-stretch">
			<div class="col-full-lg-block col-sm-12 col-md-6 col-xl-4 grid-b-space">
				<browser-stats></browser-stats>
			</div>
			<div class="col-half-lg-block col-sm-12 col-md-6 col-xl-4 grid-b-space">
				<buyers-stats-chart></buyers-stats-chart>
			</div>
			<div class="col-half-lg-block col-sm-12 col-md-12 col-xl-4 grid-b-space">
				<today-weather-widget></today-weather-widget>
			</div>
		</div>
		<div class="row chart-wrap">
			<div class="col-full-lg-block col-sm-12 col-md-4 col-lg-4 grid-b-space" v-for="(cards,index) in cards"
				:key="index">
				<app-card customClasses="overflow-hide " :fullBlock="true"
					:contentCustomClass="`d-flex justify-content-between flex-column ` + cards.color">
					<div class="d-flex justify-content-between p-20">
						<h4>{{cards.title}}</h4>
						<div>
							<h3 class="mb-2 fw-bold">{{cards.count}}</h3>
							<span class="font-sm text-right d-block">{{cards.period}}</span>
						</div>
					</div>
					<area-chart :width="300" :height="100" :data="cards.data"></area-chart>
				</app-card>
			</div>
		</div>
		<div class="row">
			<div class="col-full-lg-block col-sm-12 col-md-6 col-lg-6 grid-b-space">
				<blog-layout-one></blog-layout-one>
			</div>
			<div class="col-full-lg-block col-sm-12 col-md-6 col-lg-6 grid-b-space">
				<blog-layout-four></blog-layout-four>
			</div>
		</div>
	</div>
</template>

<script>

	// widgets
	import SalesAndVisitorStatus from "Components/Widgets/SalesAndVisitorStatus";
	import Statistic from "Components/Widgets/Statistic";
	import InboxWidget from "Components/Widgets/Inbox";
	import RecentTestimonials from "Components/Widgets/RecentTestimonials";
	import TopBuyers from "Components/Widgets/TopBuyers";
	import SystemReports from "Components/Widgets/SystemReports";
	import RecentComments from "Components/Widgets/RecentComments";
	import ActivityTimeline from "Components/Widgets/ActivityTimeline";
	import AdvertiseCampaign from "Components/Widgets/AdvertiseCampaign";
	import CitiesAndClients from "Components/Widgets/CitiesAndClients";
	import CouponsStats from "Components/Widgets/CouponsStats";
	import BrowserStats from "Components/Widgets/BrowserStats";
	import TodayWeatherWidget from "Components/Widgets/TodayWeather2.vue";
	import StackedAreaChart from "Components/Charts/StackedAreaChart";
	import ProductStatsChart from "Components/Charts/ProductStatsChart";
	import RealTimeTraffic from "Components/Widgets/RealTimeTraffic";
	import BlogLayoutOne from "Components/Widgets/BlogLayoutOne";
	import BlogLayoutFour from "Components/Widgets/BlogLayoutFour";
	import BuyersStatsChart from "Components/Charts/BuyersStatsChart";
	import AreaChart from "Components/Charts/AreaChart";
	import ServerLoad from "Components/Charts/ServerLoad.vue";

	// data
	import { cards } from "Assets/data/cards.js"
	export default {
		name: "dashboard-2",
		components: {
			SalesAndVisitorStatus,
			Statistic,
			InboxWidget,
			RecentTestimonials,
			TopBuyers,
			SystemReports,
			RecentComments,
			ActivityTimeline,
			AdvertiseCampaign,
			CitiesAndClients,
			CouponsStats,
			BrowserStats,
			TodayWeatherWidget,
			StackedAreaChart,
			ProductStatsChart,
			RealTimeTraffic,
			BlogLayoutOne,
			BlogLayoutFour,
			BuyersStatsChart,
			AreaChart,
			ServerLoad
		},
		data: function () {
			return {
				cards
			}
		},
	};
</script>