<template>
	<div class="idb-customizer" :class="{ 'customizer-out': customizerIn } ">
		<a class="customizer-toggle gradient-primary faa-parent animated-hover" href="javascript:;"
			@click="toggleCustomizer">
			<i aria-hidden="true" class="fa fa-wrench faa-slow faa-wrench spin-icon"></i>
		</a>
		<div class="settings-panel">
			<div class="theme-options">
				<div class="theme-head gradient-primary">
					<h4 class="m-0">{{$t('message.themeSettings')}}</h4>
				</div>
				<vue-perfect-scrollbar class="customizer-scroll-area" :settings="settings">
					<div class="theme-body">
						<div class="layout-item form-check more-theme-style mb-4">
							<label class="mb-3 d-block">{{$t('message.chooseThemeColor')}}</label>
							<a href="javascript:void(0)" :class="{'active-theme': color === sidebarSelectedFilter}"
								class="theme d-block mb-2" v-for="color in themeColor" :key="color.iconColor"
								@click="emitSidebarFilters(color)">
								<i class="fa fa-circle fa-lg" :class="color.iconColor" aria-hidden="true"></i>{{color.text}}
							</a>
						</div>
						<!-- <div class="layout-item boxed-layout-xl form-check mb-4">
							<label class="custom-control custom-checkbox" for="boxLayout">
								<input type="checkbox" id="boxLayout" class="custom-control-input" :value="boxLayout"
									@change="toggleBoxLayout">
								<span class="custom-control-indicator"></span>
								<span class="d-block mb-15 theme-option-text">{{$t('message.boxLayout')}}</span>
							</label>
							<img src="/static/img/boxed-layout.png" alt="layout">
						</div> -->
						<div class="layout-item form-check mb-4">
							<label class="custom-control custom-checkbox" for="darkMode">
								<input class="custom-control-input" type="checkbox" id="darkMode" :value="darkMode"
									@change="darkModeHandler">
								<span class="custom-control-indicator"></span>
								<span class="d-block mb-15 theme-option-text">{{$t('message.darkMode')}}</span>
							</label>
							<img src="/static/img/nightmode.png" alt="layout">
						</div>
						<div class="layout-item rtl-layout-xl form-check mb-2">
							<label class="custom-control custom-checkbox" for="rtlLayout">
								<input class="custom-control-input" type="checkbox" id="rtlLayout" :value="rtlLayout"
									@change="emitRtlLayout">
								<span class="custom-control-indicator"></span>
								<span class="d-block mb-15 theme-option-text">Rtl Layout</span>
							</label>
						</div>
						<div class="layout-item form-check mb-4">
							<label class="custom-control custom-checkbox" for="backgroundImage">
								<input class="custom-control-input" type="checkbox" id="backgroundImage"
									@change="emitEnableBackgroundImage" :checked="backgroundImage">
								<span class="custom-control-indicator"></span>
								<span class="d-block mb-15 theme-option-text">Background Image</span>
							</label>
						</div>
						<div class="sidebar-images mb-4 text-center" v-if="backgroundImage">
							<div class="d-inline-block mx-1 mb-2" v-for="backgroundImage in sidebarBackgroundImages"
								:key="backgroundImage.id">
								<a class="img-holder" :class="{'active-theme': backgroundImage === selectedSidebarBgImage}">
									<img @click="changeBackgroundImage(backgroundImage)" :src="backgroundImage.url" height="200"
										width="75" alt="dynamic sidebar images" />
								</a>
							</div>
						</div>
					</div>
				</vue-perfect-scrollbar>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapGetters } from "vuex";

	export default {
		data() {
			return {
				settings: {
					maxScrollbarLength: 100
				},
				selected: undefined
			}
		},
		computed: {
			...mapGetters([
				"customizer",
				"boxLayout",
				"darkMode",
				"rtlLayout",
				"backgroundImage",
				"sidebarBackgroundImages",
				"selectedSidebarBgImage",
				"themeColor",
				"sidebarSelectedFilter"
			]),
			customizerIn() {
				return this.customizer;
			},
		},
		methods: {
			// method to customizer event
			toggleCustomizer() {
				this.$store.dispatch('toggleCustomizer');
			},
			// method to boxLayout event
			toggleBoxLayout() {
				this.$store.dispatch('toggleBoxLayout');
			},
			// method to darkMode event
			darkModeHandler() {
				this.$store.dispatch('darkModeHandler');
			},
			// RTL handler
			emitRtlLayout() {
				this.$store.dispatch("rtlLayout");
			},
			// method to change themeColor event
			changeBackgroundImage(sidebarImage) {
				this.$store.dispatch("changeBackgroundImage", sidebarImage);
			},
			//method to enable background image
			emitEnableBackgroundImage() {
				this.$store.dispatch("backgroundImage");
			},
			// method to change sidebar filter
			emitSidebarFilters(value) {
				this.$store.dispatch("changeThemeColor", value);
			},
		}
	};
</script>