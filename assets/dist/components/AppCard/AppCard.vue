<template>
	<div :class="[customClasses, { 'd-none': close }]" class="idb-block customClasses">
		<fullscreen ref="fullscreen" class="h-100">
			<div class="app-card " :class="appCardClass">
				<app-card-heading :heading="heading" :headingColor="headingColor" :headingMenu="headingMenu"
					:closeable="closeable" :reloadable="reloadable" :fullScreen="fullScreen" :withTabs="withTabs"
					:tabs="tabs" @onChangeTabCallback="onChangeTab" @onCollapse="onCollapse" @onReload="onReload"
					@onClose="onClose" :blockTitleClass="blockTitleClass" :showTodayBtn="showTodayBtn"
					:redirectUrl="redirectUrl"></app-card-heading>
				<app-card-content :extraClass="[contentCustomClass]" :fullBlock="fullBlock">
					<slot></slot>
				</app-card-content>
				<div class="idb-block-footer" :class="footerClasses" v-if="enableFooter">
					<slot name="footer"></slot>
				</div>
				<app-section-loader :status="reload"></app-section-loader>
			</div>
		</fullscreen> 
	</div>
</template>

<script>

	import AppCardHeading from "./AppCardHeading";
	import AppCardContent from "./AppCardContent";
	import AppCardFooter from "./AppCardFooter";
	import AppSectionLoader from "../AppSectionLoader/AppSectionLoader";

	export default {
		props: [
			"appCardClass",
			"heading",
			"headingColor",
			"headingMenu",
			"customClasses",
			"footerClasses",
			"blockTitleClass",
			"enableFooter",
			"fullBlock",
			"contentCustomClass",
			"closeable",
			"reloadable",
			"fullScreen",
			"withTabs",
			"tabs",
			"onChangeTabCallback",
			"showTodayBtn",
			"redirectUrl"
		],
		data() {
			return {
				reload: false,
				close: false
			};
		},
		components: {
			AppCardHeading,
			AppCardContent,
			AppCardFooter,
			AppSectionLoader
		},
		methods: {
			onCollapse() {
				this.$refs["fullscreen"].toggle();
			},
			onReload() {
				this.reload = true;
				let self = this;
				setTimeout(() => {
					self.reload = false;
				}, 1500);
			},
			onClose() {
				this.close = true;
			},
			onChangeTab(value) {
				this.$emit("onChangeTabCallback", value);
			}
		}
	};
</script>