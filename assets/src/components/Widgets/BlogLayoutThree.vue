<template>
	<app-card customClasses="blog-layout h-100  blog-layout-three" :fullBlock="true" appCardClass="h-100">
		<div class="blog-content  p-20 overlay-content">
			<div class="d-flex flex-column justify-content-between h-100">
				<div class="d-flex justify-content-end">
					<a href="javascript:;" class="icon-btn text-primary"><i class="zmdi zmdi-edit"></i></a>
					<a href="javascript:;" class="icon-btn text-danger "><i class="zmdi zmdi-delete"></i></a>
					<a href="javascript:;" class="icon-btn text-success "><i class="zmdi zmdi-share"></i></a>
				</div>
				<div>
					<div class="custom-p-lh">
						<p class="font-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, dolores facilis
							maiores minus itaque excepturi.</p>
					</div>
					<div class="media align-items-center">
						<div class="thumb-wrap">
							<img src="/static/img/user-1.jpg" class="rounded-circle" width="65" height="65" alt="author" />
						</div>
						<div class="media-body">
							<h5 class="mb-0">Alejandro Garza</h5>
							<span class="font-xs ">Share Public Post- a hours ago</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</app-card>
</template>