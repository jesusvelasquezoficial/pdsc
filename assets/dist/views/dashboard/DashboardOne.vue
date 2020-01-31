<template>
	<div id="dashboard">
		<page-title-bar></page-title-bar>
		<div class="row align-items-stretch">
			<div class="col-half-lg-block col-md-6 col-lg-6 col-xl-3 grid-b-space">
				<total-revenue></total-revenue>
			</div>
			<div class="col-half-lg-block col-md-6 col-lg-6 col-xl-3 grid-b-space">
				<total-orders></total-orders>
			</div>
			<div class="col-half-lg-block col-md-6 col-lg-6 col-xl-3 grid-b-space">
				<daily-sales></daily-sales>
			</div>
			<div class="col-half-lg-block col-md-6 col-lg-6 col-xl-3 grid-b-space">
				<expences></expences>
			</div>
		</div>
		<div class="row">
			<div class="col-half-lg-block col-md-6 col-lg-6 col-xl-6 grid-b-space">
				<app-card :heading="$t('message.salesReport')" :headingMenu="true" class="overflow-hide">
					<sales-report></sales-report>
				</app-card>
			</div>
			<div class="col-half-lg-block col-md-6 col-lg-6 col-xl-6 grid-b-space">
				<app-card class="overflow-hide" :heading="$t('message.userStats')" :headingMenu="true">
					<user-stats></user-stats>
				</app-card>
			</div>
		</div>
		<div class="row align-items-stretch">
			<div class="col-half-lg-block col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 grid-b-space">
				<app-card contentCustomClass="mx-auto" appCardClass="h-100 justify-content-between flex-column d-flex"
					:heading="$t('message.salesByCategory')" :headingMenu="true"
					customClasses="sales-category-widget overflow-hide h-100" footerClasses="p-0" :enableFooter="true">
					<sales-by-category></sales-by-category>
					<ul slot="footer" class="footer-border border-0">
						<li class="w-25" v-for="(category,index) in salesByCategory" :key="index">
							<h5 class="font-weight-bold mb text-center">{{category.count}}</h5>
							<span class="font-xs">{{category.category}}</span>
						</li>
					</ul>
				</app-card>
			</div>
			<div class="col-full-lg-block col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 grid-b-space">
				<app-card :heading="$t('message.trending')" :headingMenu="true" contentCustomClass="p-0"
					customClasses="trending-widget overflow-hide">
					<trending></trending>
				</app-card>
			</div>
			<div class="col-half-lg-block col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 grid-b-space">
				<todo-list></todo-list>
			</div>
		</div>
		<div class="row align-items-stretch resp-list-height">
			<div class="col-half-lg-block col-md-12 col-lg-6 col-xl-6 grid-b-space">
				<app-card :heading="$t('message.newArticle')" :fullBlock="true" appCardClass="h-100"
					customClasses="article-widget h-100">
					<new-article></new-article>
				</app-card>
			</div>
			<div class="col-half-lg-block col-md-12 col-lg-6 col-xl-6 grid-b-space">
				<div class="h-100">
					<overall-traffic-status></overall-traffic-status>
					<app-card :heading="$t('message.globalSalesByTopLocation')" headingMenu="true">
						<global-sales-by-top-locations></global-sales-by-top-locations>
					</app-card>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-half-lg-block col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 grid-b-space stats-pie-wrap">
				<stats-card :title="$t('message.salesTarget')" varient="gradient-primary h-100" :percent="82"
					barColor="ChartConfig.color.white">
				</stats-card>
			</div>
			<div class="col-half-lg-block col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 grid-b-space  stats-pie-wrap">
				<stats-card :title="$t('message.orders')" varient="gradient-info h-100" :percent="75"
					barColor="ChartConfig.color.white">
				</stats-card>
			</div>
			<div class="col-half-lg-block col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3  grid-b-space  stats-pie-wrap">
				<stats-card :title="$t('message.newVisitors')" varient="gradient-pink h-100" :percent="80"
					barColor="ChartConfig.color.white">
				</stats-card>
			</div>
			<div class="col-half-lg-block col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 grid-b-space  stats-pie-wrap">
				<stats-card :title="$t('message.subscriptions')" varient="gradient-purple h-100" :percent="60"
					:barColor="ChartConfig.color.white">
				</stats-card>
			</div>
		</div>
		<div class="row align-items-stretch">
			<div class="col-half-lg-block col-md-12 col-lg-4 col-xl-4 grid-b-space">
				<app-card :fullBlock="true" customClasses="chat-support-widget overflow-hide">
					<chat-and-support></chat-and-support>
				</app-card>
			</div>
			<div class="col-half-lg-block col-md-6 col-lg-4 col-xl-4 grid-b-space">
				<best-seller></best-seller>
			</div>
			<div class="col-full-lg-block col-md-6 col-lg-4 col-xl-4 grid-b-space">
				<user-profile></user-profile>
			</div>
		</div>
		<div class="row">
			<div class="col-full-lg-block col-sm-12 col-md-12 col-lg-12 grid-b-space">
				<recent-orders></recent-orders>
			</div>
		</div>
		<div class="row">
			<div class="col-half-lg-block col-sm-12 col-md-6 col-lg-6 col-xl-3 grid-b-space">
				<app-card customClasses="social-share-wrap">
					<social-feeds socialIcon="zmdi zmdi-facebook" followers="89K" likes="459" type="facebook">
					</social-feeds>
				</app-card>
			</div>
			<div class="col-half-lg-block col-sm-12 col-md-6 col-lg-6 col-xl-3 grid-b-space">
				<app-card customClasses="social-share-wrap">
					<social-feeds socialIcon="zmdi zmdi-twitter" followers="65K" likes="350" type="twitter">
					</social-feeds>
				</app-card>
			</div>
			<div class="col-half-lg-block col-sm-12 col-md-6 col-lg-6 col-xl-3 grid-b-space">
				<app-card customClasses="social-share-wrap">
					<social-feeds socialIcon="zmdi zmdi-linkedin" followers="35K" likes="689" type="linkedin">
					</social-feeds>
				</app-card>
			</div>
			<div class="col-half-lg-block col-sm-12 col-md-6 col-lg-6 col-xl-3 grid-b-space">
				<app-card customClasses="social-share-wrap">
					<social-feeds socialIcon="zmdi zmdi-google" followers="90K" likes="1000" type="google">
					</social-feeds>
				</app-card>
			</div>
		</div>
		<div class="row">
			<div class="col-full-lg-block col-sm-12 col-md-12 col-lg-12 grid-b-space">
				<sales-overview></sales-overview>
			</div>
		</div>
		<div class="row">
			<div class="col-half-lg-block col-sm-12 col-md-6 col-lg-4 col-xl-4 grid-b-space">
				<blog-layout-one></blog-layout-one>
			</div>
			<div class="col-half-lg-block col-sm-12 col-md-6 col-lg-4 col-xl-4 grid-b-space">
				<blog-layout-two></blog-layout-two>
			</div>
			<div class="col-full-lg-block col-sm-12 col-md-12 col-lg-4 col-xl-4 grid-b-space">
				<blog-layout-three></blog-layout-three>
			</div>
		</div>
	</div>
</template>

<script>

	// widgets
	import TotalRevenue from "Components/Widgets/TotalRevenue";
	import TotalOrders from "Components/Widgets/TotalOrders";
	import DailySales from "Components/Widgets/DailySales";
	import Expences from "Components/Widgets/Expences";
	import SalesReport from "Components/Widgets/SalesReport";
	import UserStats from "Components/Widgets/UserStats";
	import SalesByCategory from "Components/Widgets/SalesByCategory";
	import Trending from "Components/Widgets/Trending";
	import NewArticle from "Components/Widgets/NewArticle";
	import GlobalSalesByTopLocations from "Components/Widgets/GlobalSalesByTopLocations";
	import ChatAndSupport from "Components/Widgets/ChatAndSupport";
	import TodoList from "Components/Widgets/TodoList";
	import BestSeller from "Components/Widgets/BestSeller";
	import OverallTrafficStatus from "Components/Widgets/OverallTrafficStatus";
	import RecentOrders from "Components/Widgets/RecentOrders";
	import BlogLayoutOne from "Components/Widgets/BlogLayoutOne";
	import BlogLayoutTwo from "Components/Widgets/BlogLayoutTwo";
	import BlogLayoutThree from "Components/Widgets/BlogLayoutThree";
	import SalesOverview from "Components/Widgets/SalesOverview";
	import SocialFeeds from "Components/Widgets/SocialFeeds";
	import UserProfile from "Components/Widgets/UserProfile"

	//data
	import { salesByCategory } from "Assets/data/salesByCategory.js";
	//chartconfig color
	import ChartConfig from 'Constants/ChartConfig';

	export default {
		name: "dashboard",
		data() {
			return {
				ChartConfig,
				salesByCategory
			}
		},
		components: {
			TodoList,
			TotalRevenue,
			TotalOrders,
			DailySales,
			Expences,
			SalesReport,
			UserStats,
			SalesByCategory,
			Trending,
			NewArticle,
			GlobalSalesByTopLocations,
			ChatAndSupport,
			BestSeller,
			OverallTrafficStatus,
			RecentOrders,
			BlogLayoutOne,
			BlogLayoutTwo,
			BlogLayoutThree,
			SalesOverview,
			SocialFeeds,
			UserProfile
		}
	};
</script>