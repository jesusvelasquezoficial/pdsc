<template>
	<div id="tooltip">
		<page-title-bar></page-title-bar>
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<app-card customClasses="grid-b-space" :heading="$t('message.basicUsage')">
					<p>Easily add tooltips to elements or components via the <code>&#60;b-tooltip&#62;</code> component or
						<code>v-b-tooltip</code> directive (preferred method).</p>
					<div class="button-wrap">
						<b-btn variant="primary" v-b-tooltip.hover.auto :title="$t('message.imaToolTip')">
							{{$t('message.hoverMe')}}
						</b-btn>
					</div>
				</app-card>
				<app-card customClasses="grid-b-space" :heading="$t('message.positioning')">
					<div class="position-btn-wrap button-wrap">
						<b-btn variant="primary" class="mr-10 mb-10" v-b-tooltip.hover.top
							:title="$t('message.tooltipOnTop')+'!'">
							{{$t('message.tooltipOnTop')}}
						</b-btn>
						<b-btn variant="primary" class="mr-10 mb-10" v-b-tooltip.hover.bottom
							:title="$t('message.tooltipOnBottom')+'!'">
							{{$t('message.tooltipOnBottom')}}
						</b-btn>
						<b-btn variant="primary" class="mr-10 mb-10" v-b-tooltip.hover.left
							:title="$t('message.tooltipOnLeft') + '!'">
							{{$t('message.tooltipOnLeft')}}
						</b-btn>
						<b-btn variant="primary" class="mr-10 mb-10" v-b-tooltip.hover.right
							:title="$t('message.tooltipOnRight') + '!'">
							{{$t('message.tooltipOnRight')}}
						</b-btn>
					</div>
				</app-card>
				<app-card customClasses="grid-b-space" :heading="$t('message.popover')">
					<p>The Popover feature, which provides a tooltip-like behavior, can be easily applied to any interactive
						element via the <code>&#60;b-popover&#62;</code> component or <code>v-b-popover</code> directive.</p>
					<div class="button-wrap">
						<b-btn variant="primary" v-b-popover.hover.auto="'I am popover content!'"
							:title="$t('message.popoverTitle')">
							{{$t('message.hoverMe')}}
						</b-btn>
					</div>
				</app-card>
				<app-card customClasses="grid-b-space" :heading="$t('message.popoverPositioning')">
					<p>The Popover feature, which provides a tooltip-like behavior, can be easily applied to any interactive
						element via the <code>&#60;b-popover&#62;</code> component or <code>v-b-popover</code> directive.</p>
					<div class="button-wrap popover-position">
						<b-btn variant="primary" class="mb-10 mr-10" v-b-popover.hover.top="'I am popover content!'"
							:title="$t('message.popoverOnTop')">
							{{$t('message.popoverOnTop')}}
						</b-btn>
						<b-btn variant="primary" class="mb-10 mr-10" v-b-popover.hover.bottom="'I am popover content!'"
							:title="$t('message.popoverOnBottom')">
							{{$t('message.popoverOnBottom')}}
						</b-btn>
						<b-btn variant="primary" class="mb-10 mr-10" v-b-popover.hover.left="'I am popover content!'"
							:title="$t('message.popoverOnLeft')">
							{{$t('message.popoverOnLeft')}}
						</b-btn>
						<b-btn variant="primary" class="mb-10 mr-10" v-b-popover.hover.right="'I am popover content!'"
							:title="$t('message.popoverOnRight')">
							{{$t('message.popoverOnRight')}}
						</b-btn>
					</div>
				</app-card>
			</div>
		</div>
	</div>
</template>