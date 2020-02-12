import Vue from 'vue'
import Router from 'vue-router'

// components
import Full from 'Container/Full'

// inicio
import Dashboard from 'Pages/dashboard/DashboardCIF';

// dashboard views
import DashboardOne from 'Pages/dashboard/DashboardOne'
import DashboardTwo from 'Pages/dashboard/DashboardTwo'
import CRM from 'Pages/dashboard/CRM'
import Crypto from 'Pages/dashboard/Crypto'


//CRM
import Projects from 'Pages/crm/Projects'
import ProjectDetails from 'Pages/crm/ProjectDetails'
import Reports from 'Pages/crm/Reports'
import Clients from 'Pages/crm/Clients'

//Crypto
import MarketCap from 'Pages/crypto/MarketCap'
import Wallet from 'Pages/crypto/Wallet'
import Trade from 'Pages/crypto/Trade'

// ui elements views
import Buttons from 'Pages/ui-elements/Buttons'
import ProgressBar from 'Pages/ui-elements/ProgressBar'
import Tabs from 'Pages/ui-elements/Tabs'
import Accordions from 'Pages/ui-elements/Accordions'
import Pagination from 'Pages/ui-elements/Pagination'
import Tooltip from 'Pages/ui-elements/Tooltip'
import Badges from 'Pages/ui-elements/Badges'
import Cards from 'Pages/ui-elements/Cards'
import Alerts from 'Pages/ui-elements/Alerts'
import Carousel from 'Pages/ui-elements/Carousel'

// editors views
import QuillEditor from 'Pages/editor/QuillEditor'
import WYSIWYG from 'Pages/editor/WYSIWYG'

// drag and drop views
import Vuedraggable from 'Pages/drag-drop/Vuedraggable'
import Vue2Dragula from 'Pages/drag-drop/Vue2Dragula'
import VueDraggableResizable from 'Pages/drag-drop/VueDraggableResizable'

// icons views
import Themify from 'Pages/icons/Themify'
import Material from 'Pages/icons/Material'
import FontAwesome from 'Pages/icons/FontAwesome'

// charts views
import VueChartjs from 'Pages/charts/VueChartjs'
// import VueEcharts from 'Pages/charts/VueEcharts'

// maps views
// import GoogleMaps from 'Pages/maps/GoogleMaps'
import LeafletMaps from 'Pages/maps/LeafletMaps'

// tables views
import BasicTable from 'Pages/tables/Basic'
import ResponsiveTable from 'Pages/tables/Responsive'

// pages views
import Gallery from 'Pages/pages/Gallery'
import Pricing from 'Pages/pages/Pricing'
import Blank from 'Pages/pages/Blank'

// users views
import UserProfile from 'Pages/users/UserProfile'
import UsersList from 'Pages/users/UsersList'

// session views
import Login from 'Pages/session/Login'
import SignUp from 'Pages/session/SignUp'
import LockScreen from 'Pages/session/LockScreen'
import ForgotPassword from 'Pages/session/ForgotPassword'

// features views
import ImageCropper from 'Pages/features/ImageCropper'
import VideoPlayer from 'Pages/features/VideoPlayer'
import Dropzone from 'Pages/features/Dropzone'

import Auth0CallBack from 'Components/Auth0Callback/Auth0Callback'

Vue.use(Router)

// define your routes here
export default new Router({
	// mode: 'history',
	routes: [
		{
			path: '/',
			component: Full,
			redirect: '/dashboard/dashboard-v1',
			children: [
				{
					name: "Dashboard",
					path: '/dashboard/dashboard-v1',
					component: Dashboard,
					meta: {
						requiresAuth: true,
						title: 'Dashboard',
						breadcrumb: 'Tablero / Central de Inteligencia Financiera'
					}
				},
				{
					name: "Dashboard Two",
					path: '/dashboard/dashboard-v2',
					component: DashboardTwo,
					meta: {
						requiresAuth: true,
						title: 'message.dashboard2',
						breadcrumb: 'message.dashboardDashboard2'
					}
				},
				{
					name: "Dashboard CRM",
					path: '/dashboard/crm',
					component: CRM,
					meta: {
						requiresAuth: true,
						title: 'message.crm',
						breadcrumb: 'message.dashboardCrm'
					}
				},
				{
					name: "Dashboard Crypto",
					path: '/dashboard/crypto',
					component: Crypto,
					meta: {
						requiresAuth: true,
						title: 'message.crypto',
						breadcrumb: 'message.dashboardCrypto'
					}
				},
				{
					name: "Reports",
					path: '/crm/reports',
					component: Reports,
					meta: {
						requiresAuth: true,
						title: 'message.reports',
						breadcrumb: 'message.crmReports'
					}
				},

				{
					name: "Projects",
					path: '/crm/projects',
					component: Projects,
					meta: {
						requiresAuth: true,
						title: 'message.projects',
						breadcrumb: 'message.crmProjects'
					}
				},
				{
					name: "Project Details",
					path: '/crm/projectDetails/:id',
					component: ProjectDetails,
					meta: {
						requiresAuth: true,
						title: 'message.projectDetails',
						breadcrumb: 'message.crmProjectDetails'
					}
				},
				{
					name: "Clients",
					path: '/crm/clients',
					component: Clients,
					meta: {
						requiresAuth: true,
						title: 'message.clients',
						breadcrumb: 'message.crmClients'
					}
				},
				{
					name: "MarketCap",
					path: '/crypto/market-cap',
					component: MarketCap,
					meta: {
						requiresAuth: true,
						title: 'message.marketCap',
						breadcrumb: 'message.cryptoMarketCap'
					}
				},
				{
					name: "Wallet",
					path: '/crypto/wallet',
					component: Wallet,
					meta: {
						requiresAuth: true,
						title: 'message.wallet',
						breadcrumb: 'message.cryptoWallet'
					}
				},
				{
					name: "Trade",
					path: '/crypto/trade',
					component: Trade,
					meta: {
						requiresAuth: true,
						title: 'message.trade',
						breadcrumb: 'message.cryptoTrade'
					}
				},

				{
					name: "Buttons",
					path: '/ui-elements/buttons',
					component: Buttons,
					meta: {
						requiresAuth: true,
						title: 'message.buttons',
						breadcrumb: 'message.uiElementsButtons'
					}
				},
				{
					name: "ProgressBar",
					path: '/ui-elements/progress-bar',
					component: ProgressBar,
					meta: {
						requiresAuth: true,
						title: 'message.progressBar',
						breadcrumb: 'message.uiElementsProgressBar'
					}
				},
				{
					name: "Tabs",
					path: '/ui-elements/tabs',
					component: Tabs,
					meta: {
						requiresAuth: true,
						title: 'message.tabs',
						breadcrumb: 'message.uiElementsTabs'
					}
				},
				{
					name: "Accordions",
					path: '/ui-elements/accordions',
					component: Accordions,
					meta: {
						requiresAuth: true,
						title: 'message.accordions',
						breadcrumb: 'message.uiElementsAccordions'
					}
				},
				{
					name: "Pagination",
					path: '/ui-elements/pagination',
					component: Pagination,
					meta: {
						requiresAuth: true,
						title: 'message.pagination',
						breadcrumb: 'message.uiElementsPagination'
					}
				},
				{
					name: "Tooltip",
					path: '/ui-elements/tooltip',
					component: Tooltip,
					meta: {
						requiresAuth: true,
						title: 'message.tooltip',
						breadcrumb: 'message.uiElementsTooltip'
					}
				},
				{
					name: "Badges",
					path: '/ui-elements/badges',
					component: Badges,
					meta: {
						requiresAuth: true,
						title: 'message.badges',
						breadcrumb: 'message.uiElementsBadges'
					}
				},
				{
					name: "Cards",
					path: '/ui-elements/cards',
					component: Cards,
					meta: {
						requiresAuth: true,
						title: 'message.cards',
						breadcrumb: 'message.uiElementsCards'
					}
				},
				{
					name: "Alerts",
					path: '/ui-elements/alerts',
					component: Alerts,
					meta: {
						requiresAuth: true,
						title: 'message.alerts',
						breadcrumb: 'message.uiElementsAlerts'
					}
				},
				{
					name: "Carousel",
					path: '/ui-elements/carousel',
					component: Carousel,
					meta: {
						requiresAuth: true,
						title: 'message.carousel',
						breadcrumb: 'message.uiElementsCarousel'
					}
				},
				{
					name: "QuillEditor",
					path: '/editor/quill-editor',
					component: QuillEditor,
					meta: {
						requiresAuth: true,
						title: 'message.quillEditor',
						breadcrumb: 'message.editorQuillEditor'
					}
				},
				{
					name: "WySiwyg",
					path: '/editor/wysiwyg',
					component: WYSIWYG,
					meta: {
						requiresAuth: true,
						title: 'message.wysiwyg',
						breadcrumb: 'message.editorWYSIWYG'
					}
				},
				{
					name: "Vue Draggable",
					path: '/drag-drop/vuedraggable',
					component: Vuedraggable,
					meta: {
						requiresAuth: true,
						title: 'message.vueDraggable',
						breadcrumb: 'message.dragAndDropVueDraggable'
					}
				},
				{
					name: "Vue2 Dragula",
					path: '/drag-drop/vue2-dragula',
					component: Vue2Dragula,
					meta: {
						requiresAuth: true,
						title: 'message.vue2Dragula',
						breadcrumb: 'message.dragAndDropVue2Dragula'
					}
				},
				{
					name: "Draggable Resziable",
					path: '/drag-drop/draggable-resizable',
					component: VueDraggableResizable,
					meta: {
						requiresAuth: true,
						title: 'message.draggableResizable',
						breadcrumb: 'message.dragAndDropDraggableResizable'
					}
				},
				{
					name: "Themify",
					path: '/icons/themify',
					component: Themify,
					meta: {
						requiresAuth: true,
						title: 'message.themify',
						breadcrumb: 'message.iconsThemify'
					}
				},
				{
					name: "Material",
					path: '/icons/material',
					component: Material,
					meta: {
						requiresAuth: true,
						title: 'message.material',
						breadcrumb: 'message.iconsMaterial'
					}
				},
				{
					name: "Font Awesome",
					path: '/icons/font-awesome',
					component: FontAwesome,
					meta: {
						requiresAuth: true,
						title: 'message.fontAwesome',
						breadcrumb: 'message.iconsFontAwesome'
					}
				},
				{
					name: "Vue Chartjs",
					path: '/charts/vue-chartjs',
					component: VueChartjs,
					meta: {
						requiresAuth: true,
						title: 'message.vueChartjs',
						breadcrumb: 'message.chartsVueChartjs'
					}
				},
				// {
				// 	name: "Vue Echarts",
				// 	path: '/charts/vue-echarts',
				// 	component: VueEcharts,
				// 	meta: {
				// 		requiresAuth: true,
				// 		title: 'message.vueEcharts',
				// 		breadcrumb: 'message.chartsVueEcharts'
				// 	}
				// },
				// {
				// 	name: "Google Maps",
				// 	path: '/maps/google-maps',
				// 	component: GoogleMaps,
				// 	meta: {
				// 		requiresAuth: true,
				// 		title: 'message.googleMaps',
				// 		breadcrumb: 'message.mapsGoogleMaps'
				// 	}
				// },
				{
					name: "Leaflet Maps",
					path: '/maps/leaflet-maps',
					component: LeafletMaps,
					meta: {
						requiresAuth: true,
						title: 'message.leafletMaps',
						breadcrumb: 'message.mapsLeafletMaps'
					}
				},
				{
					name: "Basic Table",
					path: '/tables/basic',
					component: BasicTable,
					meta: {
						requiresAuth: true,
						title: 'message.tables',
						breadcrumb: 'message.tablesTables'
					}
				},
				{
					name: "Responsive Table",
					path: '/tables/responsive',
					component: ResponsiveTable,
					meta: {
						requiresAuth: true,
						title: 'message.responsiveTable',
						breadcrumb: 'message.tablesResponsiveTable'
					}
				},
				{
					name: "Gallery",
					path: '/pages/gallery',
					component: Gallery,
					meta: {
						requiresAuth: true,
						title: 'message.gallery',
						breadcrumb: 'message.pagesGallery'
					}
				},
				{
					name: "Pricing",
					path: '/pages/pricing',
					component: Pricing,
					meta: {
						requiresAuth: true,
						title: 'message.pricing',
						breadcrumb: 'message.pagesPricing'
					}
				},
				{
					name: "Blank",
					path: '/pages/blank',
					component: Blank,
					meta: {
						requiresAuth: true,
						title: 'message.blank',
						breadcrumb: 'message.pagesBlank'
					}
				},
				{
					name: "User Profile",
					path: '/users/user-profile',
					component: UserProfile,
					meta: {
						requiresAuth: true,
						title: 'message.userProfile',
						breadcrumb: 'message.usersUserProfile'
					}
				},
				{
					name: "Users List",
					path: '/users/users-list',
					component: UsersList,
					meta: {
						requiresAuth: true,
						title: 'message.usersList',
						breadcrumb: 'message.usersUsersList'
					}
				},
				{
					name: "Image Cropper",
					path: '/features/image-cropper',
					component: ImageCropper,
					meta: {
						requiresAuth: true,
						title: 'message.imageCropper',
						breadcrumb: 'message.featuresImageCropper'
					}
				},
				{
					name: "Video Player",
					path: '/features/video-player',
					component: VideoPlayer,
					meta: {
						requiresAuth: true,
						title: 'message.videoPlayer',
						breadcrumb: 'message.featuresVideoPlayer'
					}
				},
				{
					name: "Dropzone",
					path: '/features/dropzone',
					component: Dropzone,
					meta: {
						requiresAuth: true,
						title: 'message.dropzone',
						breadcrumb: 'message.featuresDropzone'
					}
				}
			]
		},
		{
			path: '/callback',
			component: Auth0CallBack
		},
		{
			path: '/session/login',
			name: 'Login',
			component: Login
		},
		{
			path: '/session/sign-up',
			name: 'Sign Up',
			component: SignUp
		},
		{
			path: '/session/lock-screen',
			name: 'Lock Screen',
			component: LockScreen
		},
		{
			path: '/session/forgot-password',
			name: 'Forgot Password',
			component: ForgotPassword
		}
	]
})