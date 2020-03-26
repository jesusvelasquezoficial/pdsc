<template>
	<div id="Full">
		<div class="app-container" :class="{ 'collapsed-sidebar': sidebarCollapse }">
			<div class="app-content"
				:class="{ 'rtl-layout': rtlLayout, 'box-layout': toggleBoxLayout, 'dark-mode': darkModeEvent, 'red': getThemeColor==='red', 'green': getThemeColor==='green', 'orange': getThemeColor==='orange', '': getThemeColor==='default' }">
				<div class="sidebar-wrapper">
					<app-sidebar-nav></app-sidebar-nav>
				</div><!-- Sidebar panel closed -->
				<div class="sidebarOverlay" @click="closeSidebar"></div>
				<div class="main-content">
					<app-header></app-header>
					<!-- header closed -->
					<div class="base-container">
						<div class="inner-container">
							<transition name="router-anim" enter-active-class="animated slideInUpTiny animation-duration-fast">
								<router-view></router-view>
							</transition>
						</div><!-- inner container closed -->
						<app-customizer></app-customizer>
					</div><!-- base container closed -->
				</div><!-- Main Content closed -->
			</div>
		</div><!-- app container closed -->
	</div>
</template>

<script>
	import Header from '@/components/Header/Header'
	import SideNav from '@/components/Sidebar/SideNav'
	import Customizer from '@/components/Customizer/Customizer'
	import { mapGetters } from "vuex"
	import $ from 'jquery';
	export default {
		data() {
			return {
				window: {
					width: 0,
					height: 0
				}
			}
		},
		name: 'Full',
		components: {
			appHeader: Header,
			appSidebarNav: SideNav,
			appCustomizer: Customizer,

		},
		mounted() {
			this.toggleSidebar();
			// setTimeout(() => {
		      // this.loading = false;
		  //     setTimeout(() => {
		  //       if (AppConfig.enableUserTour) {
		  //         this.$tours["vuelyTour"].start();
		  //       }
		  //     }, 1000);
		    // }, 2000);
		},
		computed: {
			...mapGetters([
				"rtlLayout",
				"customizer",
				"boxLayout",
				"darkMode",
				"themeColor",
				"collapsedSidebar"
			]),
			// computed property to get the state of collapsed sidebar
			sidebarCollapse() {
				return this.collapsedSidebar;
			},
			// computed property to get the state of customizer
			customizerIn() {
				return this.customizer;
			},
			// computed property to get the state of box layout
			toggleBoxLayout() {
				return this.boxLayout;
			},
			// computed property to get the state of dark mode
			darkModeEvent() {
				return this.darkMode;
			},
			// computed property to get theme color
			getThemeColor() {
				return this.themeColor;
			}
		},
		beforeUpdate() {
			this.toggleSidebar();
		},
		methods: {
			closeSidebar() {
				document.querySelector('.app-container').classList.add('collapsed-sidebar');
				document.querySelector('.sidebarOverlay').classList.remove('active');
			},
			toggleSidebar() {
				var element = document.getElementsByClassName("app-container");
				if (window.innerWidth < 1265) {
					document.querySelector('.app-container').classList.add('collapsed-sidebar');
					document.querySelector('.sidebarOverlay').classList.remove('active');
				}
				else if (window.innerWidth < 1201) {
					document.querySelector('.app-content').classList.remove('box-layout');
				}
				else if (window.innerWidth > 1265) {
					document.querySelector('.sidebarOverlay').style.display = 'block';					
				}
				$(window).resize(function () {
					if (window.innerWidth < 1265) {
						document.querySelector('.app-container').classList.add('collapsed-sidebar');
					}
					else if (window.innerWidth < 1201) {
						document.querySelector('.app-content').classList.remove('box-layout');
					}
					else {
						document.querySelector('.sidebarOverlay').style.display = 'block';
						document.querySelector('.app-container').classList.remove('collapsed-sidebar');
					}
				});
			}
		}
	}
</script>