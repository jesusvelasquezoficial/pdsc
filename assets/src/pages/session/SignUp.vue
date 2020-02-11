<template>
	<div class="session-wrapper overlay">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-lg-5  col-md-7 col-sm-10 col-xs-12 ">
					<div class="logo-wrap text-center mb-50">
						<img src="Static/img/phoenix.png" alt="site-logo">
					</div>
					<div class="session-block d-block ">
						<div class="text-center mb-30">
							<div class="mb-20">
								<img class="img-fluid rounded-circle" width="60" height="60" src="Static/img/user.png" />
							</div>
							<h3 class="mb-20">{{$t('message.registerToAdmin')}}</h3>
							<span
								class="fs-12 d-block w-75 mx-auto">{{$t('message.enterUsernameAndPasswordToAccessControlPanelOfAdminify')}}</span>
						</div>
						<div class="form-wrapper">
							<b-form @submit="onSubmit">
									<b-row>
										<b-col>
											<b-form-group id="exampleInputGroup1" label="Name" label-for="userName1">
												<b-form-input id="userName1" type="text" v-model="form.userName" required
													placeholder="Enter Name">
												</b-form-input>
											</b-form-group>
										</b-col>
										<b-col>
											<b-form-group id="exampleInputGroup2" label="Last Name" label-for="userApe1">
												<b-form-input id="userApe1" type="text" v-model="form.userApe" required
													placeholder="Enter Last Name">
												</b-form-input>
											</b-form-group>
										</b-col>
									</b-row>
								<b-form-group id="exampleInputGroup3" label="E-mail ID" label-for="emailInput1">
									<b-form-input id="emailInput1" type="email" v-model="form.email" required
										placeholder="Enter Your Email">
									</b-form-input>
								</b-form-group>
								<b-row>
									<b-col>
										<b-form-group id="exampleInputGroup4" label="Password" label-for="passwordInput1">
											<b-form-input id="passwordInput1" type="password" v-model="form.password" required
												placeholder="Enter Your Password">
											</b-form-input>
										</b-form-group>
									</b-col>
									<b-col>
										<b-form-group id="exampleInputGroup5" label="Password Confirmation" label-for="password2Input1">
											<b-form-input id="password2Input1" type="password" v-model="form.password_confirmation" required
												placeholder="Enter Your Password Confirmation">
											</b-form-input>
										</b-form-group>
									</b-col>
								</b-row>
								<b-button type="submit" variant="primary" class="session-btn mb-15">
									{{$t('message.createAccount')}}</b-button>
								<!-- <a href="/session/login"
									class="text-center fs-12 d-block text-success">{{$t('message.alreadyHaveAnAccount')}}</a> -->
								<a href="#/session/login"
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
					userName: '',
          userApe: '',
          email: '',
          password: '',
          password_confirmation: '',
          tyc: true,
				}
			}
		},
		methods: {
			onSubmit(evt) {
				evt.preventDefault()
				let userDetail = {
					name: this.form.name,
					ape: this.form.ape,
					email: this.form.email,
					password: this.form.password,
          password_confirmation: this.form.password_confirmation,
          tyc: this.form.tyc,
				};
				this.$store.dispatch("signupUserInPHX", {
					userDetail
				});
			},
			signInWithFacebook() {
				this.$store.dispatch("signinUserWithFacebook");
			},
			signInWithGoogle() {
				this.$store.dispatch("signinUserWithGoogle");
			},
			signInWithTwitter() {
				this.$store.dispatch("signinUserWithTwitter");
			},
			signInWithGithub() {
				this.$store.dispatch("signinUserWithGithub");
			},
			signinWithAuth0() {
				login();
			},
			onCreateAccount() {
				this.$router.push("/session/sign-up");
			}
		}
	}
</script>