<template>
	<div class="user-section d-flex flex-column align-items-center justify-content-center">
		<div class="pos-relative d-inline-block">
			<img src="images/user3.png" width="60" height="60" alt="user" class="img-fluid rounded-circle mb-10" />
			<span class="badge badge-success badge-label-sm badge-thumb-top-right badge-pill fa-notify">&nbsp;</span>
		</div>
		<b-dropdown variant="link" size="md" :text="nombre">
			<b-dropdown-header class="gradient-warning">
				<span>{{nombre}}</span>
			</b-dropdown-header>
			<template v-for="(menu,index) in userMenu">
				<b-dropdown-item :to="menu.path" v-if="index !== 3" :key="index">
					<i class="mx-10" :class="[menu.icon, menu.color]"></i>
					{{menu.text}}
				</b-dropdown-item>
				<b-dropdown-item @click="logoutUser" v-else :key="index">
					<i class="mx-10" :class="[menu.icon, menu.color]"></i>
					{{menu.text}}
				</b-dropdown-item>
			</template>
		</b-dropdown>
	</div>
</template>
<script>
import Auth from '../../auth'
	export default {
		data() {
			return {
				user: localStorage.getItem('user') != null ? JSON.parse(localStorage.getItem('user')) : '',
				userMenu: [
					{
						icon: "ti-user",
						text: "Mi Perfil",
						color: "text-warning",
						path: '/users/user-profile',
					},
					{
						icon: "ti-bell",
						text: "Lista de Usuarios",
						color: "text-success",
						path: '/users/users-list',
					},
					{
						icon: "ti-image",
						text: "Galeria",
						color: "text-primary",
						path: '/pages/gallery',
					},
					{
						icon: "ti-power-off",
						text: "Cerrar Sesión",
						color: "text-danger",
						path: ''
					}
				]
			}
		},
		methods: {
			logoutUser() {
				// this.$store.dispatch("logoutUserFromFirebase");
				Auth.signOut(this)
      	location.reload()
			}
		},
		computed: {
			nombre(){
				return this.user.name +' '+ this.user.ape
			}
		},
	}
</script>
<style scope>
.dropdown-menu {
	left: -6% !important;
}
.btn-link{
	color: #fff !important;
}
</style>