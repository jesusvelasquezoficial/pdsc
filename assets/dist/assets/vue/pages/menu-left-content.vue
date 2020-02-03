<template>
	<vue-perfect-scrollbar :settings="settings">
		<div class="idb-server-progress p-30">
			<div class="progress-wrap mb-30">
				<h5 class="text-white">Perfil Completado</h5>
				<b-progress :value="30" :max="50" class="mb-15" variant="warning" height="5px"></b-progress>
				<p class="fs-12">57%</p>
			</div>
			<div class="progress-wrap mb-30">
				<h5 class="text-white">Proxima Actualizacion</h5>
				<b-progress :value="70" :max="100" class="mb-15" height="5px" variant="danger"></b-progress>
				<p class="fs-12">68%</p>
			</div>
		</div>
		<nav class="idb-sidebar-nav">
		<f7-list>
      <f7-link @click="Salir" text-color="red" class="item-divider" style="background:#2e3344;">Cerrar Sesión</f7-link>
		</f7-list>
		</nav>
	</vue-perfect-scrollbar>
</template>

<script>
	import sideBarLinks from "./menu.js";
	import { textTruncate } from "Helpers/helpers";
	import Auth from '../../auth'
	export default {
		data() {
			return {
				settings: {
					maxScrollbarLength: 220
				},
				sideBarLinks,
			};
		},
		methods: {
			textTruncate(text) {
				return textTruncate(text, 18);
			},
			toggleActive(index) {
				for (let selectedRoute in this.sideBarLinks.routes) {
					if (selectedRoute == index) {
						this.sideBarLinks.routes[selectedRoute].active = !this.sideBarLinks.routes[selectedRoute].active
					} else {
						this.sideBarLinks.routes[selectedRoute].active = false
					}
				}
			},
			Salir: () => {
				Auth.signOut(this)
				location.reload()
			}
		}

	};
</script>