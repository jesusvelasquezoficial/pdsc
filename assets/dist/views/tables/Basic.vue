<template>
	<div id="basic-table">
		<page-title-bar></page-title-bar>
		<app-card customClasses="grid-b-space" :heading="$t('message.basicTables')">
			<p class="text-muted mb-30">Using the most basic table markup, here’s how <code
					class="highlighter-rouge">.table</code>-based tables look in Bootstrap. <strong>All table styles are
					inherited in Bootstrap 4</strong>, meaning any nested tables will be styled in the same manner as the
				parent.</p>
			<div class="table-responsive">
				<table class="table">
					<thead>
						<tr>
							<th>#</th>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Username</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="row in commonRows" :key="row.id">
							<th scope="row">{{row.id}}</th>
							<td>{{row.firstName}}</td>
							<td>{{row.lastName}}</td>
							<td>{{row.userName}}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</app-card>
		<app-card customClasses="grid-b-space" :heading="$t('message.tableInverse')">
			<p class="text-muted mb-30">You can also invert the colors&mdash;with light text on dark backgrounds&mdash;with
				<code class="highlighter-rouge">.table-inverse</code>.</p>
			<div class="table-responsive">
				<table class="table table-inverse">
					<thead>
						<tr>
							<th>#</th>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Username</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="row in commonRows" :key="row.id">
							<th scope="row">{{row.id}}</th>
							<td>{{row.firstName}}</td>
							<td>{{row.lastName}}</td>
							<td>{{row.userName}}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</app-card>
		<app-card customClasses="grid-b-space" class="table-head" :heading="$t('message.tableHead')">
			<div class="table-responsive">
				<table class="table">
					<thead class="thead-default">
						<tr>
							<th>#</th>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Username</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="row in commonRows" :key="row.id">
							<th scope="row">{{row.id}}</th>
							<td>{{row.firstName}}</td>
							<td>{{row.lastName}}</td>
							<td>{{row.userName}}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</app-card>
		<app-card customClasses="grid-b-space" :heading="$t('message.stripedRows')">
			<p class="text-muted mb-3">Use <code class="highlighter-rouge">.table-striped</code> to add zebra-striping to
				any table row within the <code class="highlighter-rouge">&lt;tbody&gt;</code>.</p>
			<div class="table-responsive">
				<table class="table table-striped">
					<thead>
						<tr>
							<th>#</th>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Username</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="row in commonRows" :key="row.id">
							<th scope="row">{{row.id}}</th>
							<td>{{row.firstName}}</td>
							<td>{{row.lastName}}</td>
							<td>{{row.userName}}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</app-card>
		<app-card customClasses="grid-b-space" :heading="$t('message.borderedTable')">
			<p class="text-muted mb-3">Add <code class="highlighter-rouge">.table-bordered</code> for borders on all sides
				of the table and cells.</p>
			<div class="table-responsive">
				<table class="table table-bordered">
					<thead>
						<tr>
							<th>#</th>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Username</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="row in commonRows" :key="row.id">
							<th scope="row">{{row.id}}</th>
							<td>{{row.firstName}}</td>
							<td>{{row.lastName}}</td>
							<td>{{row.userName}}</td>
						</tr>
						<tr>
							<th scope="row">4</th>
							<td colspan="2">Larry the Bird</td>
							<td>@twitter</td>
						</tr>
					</tbody>
				</table>
			</div>
		</app-card>
		<app-card customClasses="grid-b-space" :heading="$t('message.hoverableTable')">
			<p class="text-muted mb-30">Add <code class="highlighter-rouge">.table-hover</code> to enable a hover state on
				table rows within a <code class="highlighter-rouge">&lt;tbody&gt;</code>.</p>
			<div class="table-responsive">
				<table class="table table-hover">
					<thead>
						<tr>
							<th>#</th>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Username</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="row in commonRows" :key="row.id">
							<th scope="row">{{row.id}}</th>
							<td>{{row.firstName}}</td>
							<td>{{row.lastName}}</td>
							<td>{{row.userName}}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</app-card>
		<app-card customClasses="grid-b-space" class="contexual-table" :heading="$t('message.contextualTable')">
			<div class="table-responsive">
				<table class="table table-inverse">
					<thead>
						<tr>
							<th>#</th>
							<th>Column heading</th>
							<th>Column heading</th>
							<th>Column heading</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(row, index) in contextualTableRows" :class="row" :key="index">
							<th scope="row">{{index}}</th>
							<td>Column content</td>
							<td>Column content</td>
							<td>Column content</td>
						</tr>
					</tbody>
				</table>
			</div>
		</app-card>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				commonRows: [
					{
						id: 1,
						firstName: "Mark",
						lastName: "Otto",
						userName: "@mdo"
					},
					{
						id: 2,
						firstName: "Jacob",
						lastName: "Thornton",
						userName: "@fat"
					},
					{
						id: 3,
						firstName: "Larry",
						lastName: "the Bird",
						userName: "@twitter"
					}
				],
				contextualTableRows: ["bg-primary", "", "bg-success", "", "bg-info", "", "bg-warning", "", "bg-danger"]
			}
		}
	}
</script>