<template>
	<div class="gallery-wrapper">
		<page-title-bar></page-title-bar>
		<div class="row">
			<template v-for="image in images">
				<div class="col-sm-6 col-md-6 col-xl-4 grid-b-space" :key="image.id">
					<div class="card-white idb-block">
						<div class="card-body">
							<figure class="mb-30">
								<img :src="image.url" class="img-fluid rounded w-100" alt="home" width="500" height="302" />
							</figure>
							<div class="d-flex justify-content-between thumb-content">
								<div class="d-flex align-items-start flex-column">
									<h5 class="mb-2">Title</h5>
									<span class="font-xs text-muted">{{image.date}}</span>
								</div>
								<div class="d-flex align-items-end flex-column">
									<ul class="list-inline">
										<li class="list-inline-item">
											<b-button variant="primary" class="rounded-circle btn square-40">
												<i class="zmdi zmdi-eye"></i>
											</b-button>
										</li>
										<li class="list-inline-item">
											<b-button variant="danger" class="rounded-circle btn square-40">
												<i class="zmdi zmdi-delete"></i>
											</b-button>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</template>
		</div>
	</div>
</template>

<script>
	import { images } from "Assets/data/gallery.js";

	export default {
		data() {
			return {
				images
			};
		}
	};
</script>