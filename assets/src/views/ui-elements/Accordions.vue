<template>
	<div id="accordians">
		<page-title-bar></page-title-bar>
		<div class="row">
			<div class="col-sm-12 col-md-12 col-lg-12">
				<app-card customClasses="grid-b-space" :heading="$t('message.collapse')">
					<p>The Bootstrap-Vue <code> &#60;b-collapse&#62; </code> component and <code> v-b-toggle </code>
						directive allows you to toggle content visibility on your pages. Includes support for making
						accordions.</p>
					<b-btn v-b-toggle.collapse1 variant="primary" class="toggle-collapse-inner">
						{{$t('message.toggleCollapse')}}</b-btn>
					<b-collapse id="collapse1">
						<b-card>
							<p class="card-text">Collapse contents Here</p>
							<b-btn v-b-toggle.collapse1_inner size="sm" class="mb-20">{{$t('message.toggleInnerCollapse')}}
							</b-btn>
							<b-collapse id=collapse1_inner>
								<b-card>Hello!</b-card>
							</b-collapse>
						</b-card>
					</b-collapse>
				</app-card>
				<app-card customClasses="grid-b-space" :heading="$t('message.multipleCollapse')">
					<p>You can even collapse multiple <code> &#60;b-collapse&#62; </code> components via a single
						<code> v-b-toggle </code> by providing multiple target IDs using modifers:</p>
					<!-- Single button triggers two b-collapse components -->
					<b-btn v-b-toggle.collapseA.collapseB variant="success"
						class="collapse-btn text-truncate toggle-collapse">{{$t('message.toggleBothCollapseAandB')}}</b-btn>
					<!-- elements to collapse -->
					<b-collapse id="collapseA" class="mt-2">
						<b-card>
							I am collapsable content A!
						</b-card>
					</b-collapse>
					<b-collapse id="collapseB" class="mt-2">
						<b-card>
							I am collapsable content B!
						</b-card>
					</b-collapse>
				</app-card>
				<app-card customClasses="grid-b-space" :heading="$t('message.accordion')">
					<p>Turn a group of <code> &#60;b-collapse&#62; </code> components into an accordion by supplying an
						accordion group identifier via the <code> accordion </code> prop:</p>
					<div role="tablist">
						<b-card no-body>
							<b-card-header header-tag="header" class="p-10" role="tab">
								<b-btn block href="#" v-b-toggle.basic-tab variant="primary">{{$t('message.basicTab')}}</b-btn>
							</b-card-header>
							<b-collapse id="basic-tab" :visible="true" accordion="my-accordion" role="tabpanel">
								<b-card-body>
									<p class="card-text">
										I start opened because <code>visible</code> is <code>true</code>
									</p>
									<p class="card-text">
										{{ text }}
									</p>
								</b-card-body>
							</b-collapse>
						</b-card>
						<b-card no-body>
							<b-card-header header-tag="header" class="p-10" role="tab">
								<b-btn block href="#" v-b-toggle.closed-item variant="primary">{{$t('message.closedItem')}}
								</b-btn>
							</b-card-header>
							<b-collapse id="closed-item" accordion="my-accordion" role="tabpanel">
								<b-card-body>
									<p class="card-text">
										{{ text }}
									</p>
								</b-card-body>
							</b-collapse>
						</b-card>
						<b-card no-body>
							<b-card-header header-tag="header" class="p-10" role="tab">
								<b-btn block href="#" v-b-toggle.closed-item-2 variant="primary">{{$t('message.closedItem2')}}
								</b-btn>
							</b-card-header>
							<b-collapse id="closed-item-2" accordion="my-accordion" role="tabpanel">
								<b-card-body>
									<p class="card-text">
										{{ text }}
									</p>
								</b-card-body>
							</b-collapse>
						</b-card>
					</div>
				</app-card>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "accordians",
		data() {
			return {
				text: `Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
          richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
          brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
          tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
          assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
          wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
          vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
          synth nesciunt you probably haven't heard of them accusamus labore VHS.`
			};
		}
	};
</script>