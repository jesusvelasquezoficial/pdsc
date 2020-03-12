/**
 * Settings Module
 */
import {
	languages,
	sidebarBackgroundImages,
	themeColor
} from "./data";

const state = {
	languages,  									               // languages
	selectedLocale: languages[5],				               // selected locale
	customizer: false,							               // customizer
	boxLayout: false,			  	                           // box layout
	darkMode: true,
	rtlLayout: false,					                        // dark mode
	themeColor,                                           // sidebar filters
	sidebarSelectedFilter: themeColor[0],    				   // theme color
	collapsedSidebar: false,					               // collapse sidebar
	fullScreen: false,	                                 // fullscreen
	backgroundImage: false,						               // background image
	rightSidebar: false,						               // right sidebar 
	sidebarBackgroundImages,                              // sidebar backgorund images
	selectedSidebarBgImage: sidebarBackgroundImages[0]    // selected sidebar background image
}

// getters
const getters = {
	languages: state => {
		return state.languages;
	},
	selectedLocale: state => {
		return state.selectedLocale;
	},
	customizer: state => {
		return state.customizer;
	},
	boxLayout: state => {
		return state.boxLayout;
	},
	darkMode: state => {
		return state.darkMode;
	},
	rtlLayout: state => {
		return state.rtlLayout;
	},
	themeColor: state => {
		return state.themeColor;
	},
	sidebarSelectedFilter: state => {
		return state.sidebarSelectedFilter;
	},
	collapsedSidebar: state => {
		return state.collapsedSidebar;
	},
	fullScreen: state => {
		return state.fullScreen;
	},
	rightSidebar: state => {
		return state.rightSidebar;
	},
	backgroundImage: state => {
		return state.backgroundImage;
	},
	sidebarbackgroundImage: state => {
		return state.sidebarbackgroundImage;
	},
	sidebarBackgroundImages: state => {
		return state.sidebarBackgroundImages;
	},
	selectedSidebarBgImage: state => {
		return state.selectedSidebarBgImage;
	}
}

// actions 
const actions = {
	changeLanguage(context, payload) {
		context.commit('changeLanguageHandler', payload);
	},
	toggleCustomizer(context) {
		context.commit('toggleCustomizerHandler');
	},
	toggleBoxLayout(context) {
		context.commit('toggleBoxLayoutHandler');
	},
	darkModeHandler(context) {
		context.commit('darkModeHandler');
	},
	rtlLayout(context) {
		context.commit('rtlLayoutHandler');
	},
	changeThemeColor(context, payload) {
		context.commit('changeSidebarFilterHandler', payload)
	},
	collapsedSidebar(context) {
		context.commit('collapsedSidebarHandler');
	},
	toggleFullscreen(context, payload) {
		context.commit('toggleFullscreenHandler', payload);
	},
	toggleRightSidebar(context) {
		context.commit('toggleRightSidebarHandler');
	},
	backgroundImage(context) {
		context.commit('sidebarBgImageHandler');
	},
	changeBackgroundImage(context, payload) {
		context.commit('changeBackgroundImageHandler', payload);
	},
}

// mutations
const mutations = {
	changeLanguageHandler(state, language) {
		state.selectedLocale = language;
	},
	toggleCustomizerHandler(state) {
		state.customizer = !state.customizer;
	},
	toggleBoxLayoutHandler(state) {
		state.boxLayout = !state.boxLayout;
	},
	darkModeHandler(state) {
		state.darkMode = !state.darkMode;
	},
	rtlLayoutHandler(state) {
		state.rtlLayout = !state.rtlLayout;
	},
	changeSidebarFilterHandler(state, payload) {
		state.sidebarSelectedFilter = payload;
	},
	collapsedSidebarHandler(state) {
		state.collapsedSidebar = !state.collapsedSidebar;
	},
	toggleFullscreenHandler(state, payload) {
		state.fullScreen = !payload;
	},
	toggleRightSidebarHandler(state) {
		state.rightSidebar = !state.rightSidebar;
	},
	sidebarBgImageHandler(state) {
		state.backgroundImage = !state.backgroundImage;
	},
	changeBackgroundImageHandler(state, image) {
		state.selectedSidebarBgImage = image;
	},
}

export default {
	state,
	getters,
	actions,
	mutations
}