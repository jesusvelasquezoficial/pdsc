<template>
	<div id="tabs">
		<page-title-bar></page-title-bar>
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
				<app-card customClasses="grid-b-space" :heading="$t('message.basicUsage')">
					<b-tabs>
						<b-tab title="First" active>
							<p> Basic tabs example using <code>.nav-tabs</code> class. Also requires base <code>.nav</code>
								class. </p>
						</b-tab>
						<b-tab title="Second">
							<p>This style Should Apply same for all the possible variations of this sections.</p>
						</b-tab>
						<b-tab title="Disabled" disabled>
							<p> Basic tabs example using <code>.nav-tabs</code> class. Also requires base <code>.nav</code>
								class.</p>
						</b-tab>
					</b-tabs>
				</app-card>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
				<app-card customClasses="grid-b-space" :heading="$t('message.pillsVariant')">
					<b-tabs pills>
						<b-tab title="First" active>
							<p> Basic tabs example using <code>.nav-tabs</code> class. Also requires base <code>.nav</code>
								class. </p>
						</b-tab>
						<b-tab title="Second">
							<p>This style Should Apply same for all the possible variations of this sections.</p>
						</b-tab>
						<b-tab title="Disabled" disabled>
							<p> Basic tabs example using <code>.nav-tabs</code> class. Also requires base <code>.nav</code>
								class.</p>
						</b-tab>
					</b-tabs>
				</app-card>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<app-card customClasses="grid-b-space" :heading="$t('message.advancedExamples')">
					<b-tabs card ref="tabs" v-model="tabIndex">
						<b-tab title="General">
							<p>Easily make tabs equal widths of their parent with <code>.nav-justified</code> class.</p>
						</b-tab>
						<b-tab title="Edit profile">
							<p>I'm the second tab</p>
							<b-card>I'm the card in tab</b-card>
						</b-tab>
						<b-tab title="Premium Plan" disabled>
							Sibzamini!
						</b-tab>
						<b-tab title="Info">
							<p>Easily make tabs equal widths of their parent with <code>.nav-justified</code> class.</p>
						</b-tab>
					</b-tabs>
					<!-- Control buttons-->
					<div class="text-center">
						<b-button-group class="p-20">
							<b-btn variant="danger" @click="tabIndex--">{{$t('message.previous')}}</b-btn>
							<b-btn variant="danger" @click="tabIndex++">{{$t('message.next')}}</b-btn>
						</b-button-group>
						<br>
						<span class="text-muted">Current Tab: {{tabIndex}}</span>
					</div>
				</app-card>
				<app-card customClasses="grid-b-space" :heading="$t('message.dynamicTabs')">
					<b-tabs card>
						<!-- Render Tabs -->
						<b-tab :title="`Tab ${i}`" v-for="i in tabs" :key="i">
							Tab Contents {{i}}
							<b-btn size="sm" variant="danger" class="float-right" @click="()=>closeTab(i)">
								Close tab
							</b-btn>
						</b-tab>
						<!-- New Tab Button (Using tabs slot) -->
						<b-nav-item slot="tabs" @click.prevent="newTab" href="#">
							+
						</b-nav-item>
						<!-- Render this if no tabs -->
						<div slot="empty" class="text-center text-muted">
							There are no open tabs
							<br> Open a new tab using + button.
						</div>
					</b-tabs>
				</app-card>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "tabs",
		data() {
			return {
				tabIndex: 0,
				tabs: [],
				tabCounter: 0
			};
		},
		methods: {
			closeTab(x) {
				for (let i = 0; i < this.tabs.length; i++) {
					if (this.tabs[i] === x) {
						this.tabs.splice(i, 1);
					}
				}
			},
			newTab() {
				this.tabs.push(this.tabCounter++);
			}
		}
	};
</script>