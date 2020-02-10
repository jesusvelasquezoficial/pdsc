<template>
	<div class="forget-password-wrap session-wrapper overlay">
		<div class="container">
			<div class="row  justify-content-center">
				<div class="col-lg-4  col-md-5 col-sm-10 col-12">
					<div class="logo-wrap text-center mb-50">
						<img src="/static/img/logo.png" alt="site-logo" width="200" height="60">
					</div>
					<div class="session-block">
						<div class="text-center mb-30">
							<div class="mb-20">
								<img class="img-fluid rounded-circle" width="60" height="60" src="/static/img/user-1.jpg" />
							</div>
							<h3 class="mb-20">{{$t('message.forgotPassword')}}</h3>
							<span class="fs-12 d-block w-75 mx-auto">{{$t('message.enterYourEmailToSendYouAResetLink')}}</span>
						</div>
						<div class="form-wrapper">
							<b-form @submit="onSubmit">
								<b-form-group id="exampleInputGroup1" label="E-mail ID" label-for="emailInput1">
									<b-form-input id="emailInput1" type="email" v-model="form.email" required
										placeholder="Enter Your Email">
									</b-form-input>
								</b-form-group>
								<b-button type="submit" variant="primary" class="session-btn mb-15">{{$t('message.sendEmail')}}
								</b-button>
								<a href="/session/login"
									class="text-center fs-12 d-block text-success">{{$t('message.alreadyHaveAnAccount')}}</a>
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