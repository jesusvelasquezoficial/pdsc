import Vue from 'vue'
import Router from 'vue-router'

// components
import Full from 'Container/Full'

// inicio
import Dashboard from 'Templates/dashboard/DashboardCif';

// dashboard views
import DashboardOne from 'Templates/dashboard/DashboardOne'
import DashboardTwo from 'Templates/dashboard/DashboardTwo'
import CRM from 'Templates/dashboard/CRM'
import Crypto from 'Templates/dashboard/Crypto'


//CRM
import Projects from 'Templates/crm/Projects'
import ProjectDetails from 'Templates/crm/ProjectDetails'
import Reports from 'Templates/crm/Reports'
import Clients from 'Templates/crm/Clients'

//Crypto
import MarketCap from 'Templates/crypto/MarketCap'
import Wallet from 'Templates/crypto/Wallet'
import Trade from 'Templates/crypto/Trade'

// ui elements views
import Buttons from 'Templates/ui-elements/Buttons'
import ProgressBar from 'Templates/ui-elements/ProgressBar'
import Tabs from 'Templates/ui-elements/Tabs'
import Accordions from 'Templates/ui-elements/Accordions'
import Pagination from 'Templates/ui-elements/Pagination'
import Tooltip from 'Templates/ui-elements/Tooltip'
import Badges from 'Templates/ui-elements/Badges'
import Cards from 'Templates/ui-elements/Cards'
import Alerts from 'Templates/ui-elements/Alerts'
import Carousel from 'Templates/ui-elements/Carousel'

// editors views
import QuillEditor from 'Templates/editor/QuillEditor'
import WYSIWYG from 'Templates/editor/WYSIWYG'

// drag and drop views
import Vuedraggable from 'Templates/drag-drop/Vuedraggable'
import Vue2Dragula from 'Templates/drag-drop/Vue2Dragula'
import VueDraggableResizable from 'Templates/drag-drop/VueDraggableResizable'

// icons views
import Themify from 'Templates/icons/Themify'
import Material from 'Templates/icons/Material'
import FontAwesome from 'Templates/icons/FontAwesome'

// charts views
import VueChartjs from 'Templates/charts/VueChartjs'
// import VueEcharts from 'Templates/charts/VueEcharts'

// maps views
// import GoogleMaps from 'Templates/maps/GoogleMaps'
import LeafletMaps from 'Templates/maps/LeafletMaps'

// tables views
import BasicTable from 'Templates/tables/Basic'
import ResponsiveTable from 'Templates/tables/Responsive'

// pages views
import Gallery from 'Templates/pages/Gallery'
import Pricing from 'Templates/pages/Pricing'
import Blank from 'Templates/pages/Blank'

// users views
import UserProfile from 'Templates/users/UserProfile'
import UsersList from 'Templates/users/UsersList'

// session views
import Login from 'Templates/session/Login'
import SignUp from 'Templates/session/SignUp'
import LockScreen from 'Templates/session/LockScreen'
import ForgotPassword from 'Templates/session/ForgotPassword'

// features views
import ImageCropper from 'Templates/features/ImageCropper'
import VideoPlayer from 'Templates/features/VideoPlayer'
import Dropzone from 'Templates/features/Dropzone'

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