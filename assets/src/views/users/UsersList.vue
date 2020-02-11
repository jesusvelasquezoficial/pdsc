<template>
	<div class="user-list-wrapper">
		<page-title-bar></page-title-bar>
		<div class="row">
			<template v-for="user in users">
				<div class="col-half-lg-block col-xs-12 col-sm-6 col-md-6 col-xl-4 d-lg-half-block grid-b-space"
					:key="user.id">
					<app-card contentCustomClass="text-center">
						<div class="avatar-wrap pos-relative d-inline-block mb-15">
							<img :src="user.avatar" class="rounded-circle" alt="user thumbs" width="100" height="100">
							<span class="badge badge-label-sm badge-thumb-top-right badge-pill fa-notify" :class="user.status">
								&nbsp;
							</span>
						</div>
						<div class="mb-20 user-info">
							<h4 class="mb-0">{{user.name}}</h4>
							<span class="text-muted font-xs">{{user.designation}}</span>
						</div>
						<p class="fs-14 mb-15">{{user.about}}</p>
						<div class="connections mb-10">
							<span class="mb-15 d-block font-xs">Connections</span>
							<ul class="list-inline">
								<li class="list-inline-item" v-for="(img, index) in user.gallery" :key="index">
									<img :src="img" class="img-fluid rounded-circle" alt="user list" width="30" height="30">
								</li>
							</ul>
						</div>
						<div class="py-10 d-flex justify-content-center">
							<b-button size="sm" class="mx-2 font-xs" variant="primary">
								<i class="zmdi zmdi-eye mx-10"></i>{{$t('message.viewProfile')}}
							</b-button>
							<b-button size="sm" class="mx-2 font-xs" variant="warning">
								<i class="zmdi zmdi-comments mx-10"></i>{{$t('message.sendMessage')}}
							</b-button>
						</div>
					</app-card>
				</div>
			</template>
		</div>
	</div>
</template>

<script>
	import { users } from "Assets/data/usersList.js";

	export default {
		data() {
			return {
				users,
			}
		},
	}
</script>