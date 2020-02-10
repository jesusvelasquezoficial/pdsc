<template>
	<div id="inicio">
		<page-title-bar></page-title-bar>
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
		name: "inicio",
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