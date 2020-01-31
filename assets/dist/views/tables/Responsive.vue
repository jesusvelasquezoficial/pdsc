<template>
	<div id="responsive-table">
		<page-title-bar></page-title-bar>
		<app-card customClasses="grid-b-space" :heading="$t('message.responsiveTable')">
			<div class="table-responsive">
				<div class="unseen">
					<table class="table table-hover table-bordered table-striped">
						<thead>
							<tr class="bg-primary">
								<th>Code</th>
								<th>Company</th>
								<th class="numeric">Price</th>
								<th class="numeric">Change</th>
								<th class="numeric">Change %</th>
								<th class="numeric">Open</th>
								<th class="numeric">High</th>
								<th class="numeric">Low</th>
								<th class="numeric">Volume</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="row in table1" :key="row.code">
								<td>{{row.code}}</td>
								<td>{{row.companyName}}</td>
								<td class="numeric">{{row.price}}</td>
								<td class="numeric">{{row.change}}</td>
								<td class="numeric">{{row.changePercentage}}</td>
								<td class="numeric">{{row.open}}</td>
								<td class="numeric">{{row.high}}</td>
								<td class="numeric">{{row.low}}</td>
								<td class="numeric">{{row.volume}}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div><!-- table responsive closed -->
		</app-card>
		<app-card customClasses="grid-b-space" :heading="$t('message.responsiveTable2')">
			<div class="table-responsive">
				<table class="table table-striped table-hover table-bordered table-middle">
					<thead>
						<tr>
							<th>Task</th>
							<th>Progress</th>
							<th>Deadline</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="row in table2" :key="row.date">
							<td>{{row.taskName}}</td>
							<td>
								<b-progress height="5px" :value="row.areaValueNow"></b-progress>
							</td>
							<td class="font-sm text-muted">{{row.deadLinedate}}</td>
							<td class="d-flex">
								<a href="javascript:;" class="icon-btn bg-white">
									<i class="zmdi zmdi-settings text-primary"></i>
								</a>
								<a href="javascript:;" class="icon-btn bg-white">
									<i class="zmdi zmdi-close text-danger"></i>
								</a>
							</td>
						</tr>
					</tbody>
				</table>
			</div><!-- table responsive closed -->
		</app-card>
	</div>
</template>

<script>
	import { table1, table2 } from "Assets/data/responsiveTable.js";
	export default {
		data() {
			return {
				table1,
				table2
			}
		}
	}
</script>