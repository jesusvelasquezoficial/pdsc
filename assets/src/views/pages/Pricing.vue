<template>
	<div class="pricing-wrapper">
		<page-title-bar></page-title-bar>
		<div class="row">
			<div class="col-xs-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 d-md-half-block d-sm-half-block b-50 grid-b-space"
				v-for="(price, index) in pricing" :key="index">
				<div class="pricing-item card text-center idb-block">
					<div class="card-header" :class="price.headerColor">
						<h3 class="font-lg">{{$t('message.'+price.title)}}</h3>
						<p class="mb-0">{{$t('message.'+price.subTitle)}}</p>
					</div>
					<div class="card-body">
						<h2 class="mb-40 font-3x"><span className="font-xl">{{price.price}}</span><sub>/Mo</sub></h2>
						<ul class="list-group list-group-flush">
							<div v-for="(list,index) in price.available" :key="index">
								<li class="list-group-item">{{list}}</li>
							</div>
						</ul>
					</div>
					<div class="card-footer">
						<a href="javascript:;" class="btn btn-block text-white"
							:class="price.btnColor">{{$t('message.choosePlan')}}</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { pricing } from "Assets/data/pricing.js";

	export default {
		data() {
			return {
				pricing
			}
		}
	}
</script>