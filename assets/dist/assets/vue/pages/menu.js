export default {
	"routes": [
		{
			"menu_title": "dashboard",
			"menu_icon": "zmdi zmdi-view-dashboard",
			"active": false,
			"child_routes": [
				{
					"path": "/dashboard/dashboard-v1",
					"menu_title": "dashboard1"
				},
				{
					"route_name": "dashboard-v2",
					"path": "/dashboard/dashboard-v2",
					"menu_title": "dashboard2"
				},
				{
					"route_name": "crm",
					"path": "/dashboard/crm",
					"menu_title": "crm"
				},
				{
					"route_name": "crypto",
					"path": "/dashboard/crypto",
					"menu_title": "crypto"
				}
			]
		},
		{
			"menu_title": "crm",
			"menu_icon": "zmdi zmdi-accounts-alt",
			"active": false,
			"child_routes": [
				{
					"route_name": "projects",
					"path": "/crm/projects",
					"menu_title": "projects"
				},
				{
					"route_name": "projectDetails",
					"path": "/crm/projectDetails/01",
					"menu_title": "projectDetails"
				},
				{
					"route_name": "reports",
					"path": "/crm/reports",
					"menu_title": "reports"
				},
				{
					"route_name": "clients",
					"path": "/crm/clients",
					"menu_title": "clients"
				}
			]
		},
		{
			"menu_title": "crypto",
			"menu_icon": "zmdi zmdi-accounts-alt",
			"active": false,
			"child_routes": [
				{
					"route_name": "market-cap",
					"path": "/crypto/market-cap",
					"menu_title": "marketCap"
				},
				{
					"route_name": "wallet",
					"path": "/crypto/wallet",
					"menu_title": "wallet"
				},
				{
					"route_name": "trade",
					"path": "/crypto/trade",
					"menu_title": "trade"
				}
			]
		},
		
		{
			"menu_title": "uiElements",
			"menu_icon": "zmdi zmdi-view-carousel",
			"active": false,
			"child_routes": [
				{
					"path": "/ui-elements/alerts",
					"menu_title": "alerts"
				},
				{
					"path": "/ui-elements/buttons",
					"menu_title": "buttons"
				},
				{
					"path": "/ui-elements/progress-bar",
					"menu_title": "progressBar"
				},
				{
					"path": "/ui-elements/tabs",
					"menu_title": "tabs"
				},
				{
					"path": "/ui-elements/accordions",
					"menu_title": "accordions"
				},
				{
					"path": "/ui-elements/pagination",
					"menu_title": "pagination"
				},
				{
					"path": "/ui-elements/tooltip",
					"menu_title": "tooltip"
				},
				{
					"path": "/ui-elements/badges",
					"menu_title": "badges"
				},
				{
					"path": "/ui-elements/cards",
					"menu_title": "cards"
				},
				{
					"path": "/ui-elements/carousel",
					"menu_title": "carousel"
				}
			]
		},
		{
			"menu_title": "editor",
			"menu_icon": "zmdi zmdi-edit",
			"active": false,
			"child_routes": [
				{
					"path": "/editor/quill-editor",
					"menu_title": "quillEditor"
				},
				{
					"path": "/editor/wysiwyg",
					"menu_title": "wysiwyg"
				}
			]
		},
		{
			"menu_title": "dragAndDrop",
			"menu_icon": "zmdi zmdi-mouse",
			"active": false,
			"child_routes": [
				{
					"path": "/drag-drop/vuedraggable",
					"menu_title": "vueDraggable"
				},
				{
					"path": "/drag-drop/vue2-dragula",
					"menu_title": "vue2Dragula"
				},
				{
					"path": "/drag-drop/draggable-resizable",
					"menu_title": "draggableResizable"
				}
			]
		},
		{
			"menu_title": "icons",
			"menu_icon": "zmdi zmdi-star-circle",
			"active": false,
			"child_routes": [
				{
					"path": "/icons/themify",
					"menu_title": "themify"
				},
				{
					"path": "/icons/material",
					"menu_title": "material"
				},
				{
					"path": "/icons/font-awesome",
					"menu_title": "fontAwesome"
				}
			]
		},
		{
			"menu_title": "charts",
			"menu_icon": "zmdi zmdi-chart-donut",
			"active": false,
			"child_routes": [
				{
					"path": "/charts/vue-chartjs",
					"menu_title": "vueChartjs"
				},
				{
					"path": "/charts/vue-echarts",
					"menu_title": "vueEcharts"
				}
			]
		},
		{
			"menu_title": "tables",
			"menu_icon": "zmdi zmdi-view-quilt",
			"active": false,
			"child_routes": [
				{
					"path": "/tables/basic",
					"menu_title": "basic"
				},
				{
					"path": "/tables/responsive",
					"menu_title": "responsive"
				}
			]
		},
		{
			"menu_title": "maps",
			"menu_icon": "zmdi zmdi-map",
			"active": false,
			"child_routes": [
				{
					"path": "/maps/google-maps",
					"menu_title": "googleMaps"
				},
				{
					"path": "/maps/leaflet-maps",
					"menu_title": "leafletMaps"
				}
			]
		},
		{
			"menu_title": "pages",
			"menu_icon": "zmdi zmdi-collection-item",
			"active": false,
			"child_routes": [
				{
					"path": "/pages/gallery",
					"menu_title": "gallery"
				},
				{
					"path": "/pages/pricing",
					"menu_title": "pricing"
				},
				{
					"path": "/pages/blank",
					"menu_title": "blank"
				}
			]
		},
		{
			"menu_title": "users",
			"menu_icon": "zmdi zmdi-accounts",
			"active": false,
			"child_routes": [
				{
					"path": "/users/user-profile",
					"menu_title": "userProfile"
				},
				{
					"path": "/users/users-list",
					"menu_title": "usersList"
				}
			]
		},
		{
			"menu_title": "session",
			"menu_icon": "zmdi zmdi-time-countdown",
			"active": false,
			"child_routes": [
				{
					"path": "/session/login",
					"menu_title": "login"
				},
				{
					"path": "/session/sign-up",
					"menu_title": "signUp"
				},
				{
					"path": "/session/lock-screen",
					"menu_title": "lockScreen"
				},
				{
					"path": "/session/forgot-password",
					"menu_title": "forgotPassword"
				}
			]
		},
		{
			"menu_title": "features",
			"menu_icon": "zmdi zmdi-view-web",
			"active": false,
			"child_routes": [
				{
					"path": "/features/image-cropper",
					"menu_title": "imageCropper"
				},
				{
					"path": "/features/video-player",
					"menu_title": "videoPlayer"
				},
				{
					"path": "/features/dropzone",
					"menu_title": "dropzone"
				}
			]
		}
	]
}