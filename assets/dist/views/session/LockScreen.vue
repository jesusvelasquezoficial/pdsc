<template>
	<div class="lock-screen-wrapper">
		<div class="container">
			<div class="row">
				<div class="col-sm-10 col-md-4 mx-auto text-center align-center">
					<div class="logo-wrap text-center mb-50">
						<img src="/static/img/logo.png" alt="site-logo" width="200" height="60">
					</div>
					<div class="lock-screen-block">
						<div class="s-user mb-40">
							<img class="rounded-circle img-fluid" width="60" height="60" src="/static/img/user-1.jpg">
						</div>
						<div class="form-wrapper">
							<b-form @submit="onSubmit">
								<b-form-group id="exampleInputGroup3">
									<b-form-input id="exampleInput3" class="form-control-lg" type="password"
										v-model="form.password" required placeholder="Enter Password">
									</b-form-input>
								</b-form-group>
							</b-form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data: function () {
			return {
				form: {
					password: ''
				}
			}
		},
		methods: {
			onSubmit(evt) {
				evt.preventDefault()
				alert(JSON.stringify(this.form))
			}
		}
	}
</script>