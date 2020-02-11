<template>
	<div class="user-section d-flex flex-column align-items-center mt-3">
		<div class="pos-relative d-inline-block">
			<img src="Static/img/user.png" width="60" height="60" alt="user" class="img-fluid rounded-circle mb-10" />
			<span class="badge badge-success badge-label-sm badge-thumb-top-right badge-pill fa-notify">&nbsp;</span>
		</div>

		<b-dropdown variant="link" size="md" :text="fullname" class="admin-section py-0">
			<b-dropdown-header class="gradient-primary">
				<span>{{fullname}}</span>
			</b-dropdown-header>
			<template v-for="(menu,index) in userMenu">
				<b-dropdown-item :to="menu.path" v-if="index !== 3" :key="index">
					<i class="mx-10" :class="[menu.icon, menu.color]"></i>
					{{$t(menu.text)}}
				</b-dropdown-item>
				<b-dropdown-item @click="logoutUser" v-else :key="index">
					<i class="mx-10" :class="[menu.icon, menu.color]"></i>
					{{$t(menu.text)}}
				</b-dropdown-item>
			</template>
		</b-dropdown>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				fullname:localStorage.getItem('fullname'),
				userMenu: [
					{
						icon: "ti-user",
						text: "message.myProfile",
						color: "text-warning",
						path: '/users/user-profile',
					},
					{
						icon: "ti-bell",
						text: "message.usersList",
						color: "text-success",
						path: '/users/users-list',
					},
					{
						icon: "ti-image",
						text: "message.gallery",
						color: "text-primary",
						path: '/pages/gallery',
					},
					{
						icon: "ti-power-off",
						text: "message.logOut",
						color: "text-danger",
						path: ''
					}
				]
			}
		},
		methods: {
			logoutUser() {
				this.$store.dispatch("logoutUserFromFirebase");
			}
		}
	}
</script>
<style>
	#app .app-container .sidebar-wrapper .user-section .dropdown-menu {
		left: -12% !important
	}
</style>