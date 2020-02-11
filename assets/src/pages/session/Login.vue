<template>
	<div class="session-wrapper overlay">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-lg-5 col-md-7 col-sm-10 col-xs-12 ">
					<div class="logo-wrap text-center mb-50">
						<img src="Static/img/phoenix.png" alt="site-logo">
					</div>
					<div class="session-block d-block">
						<div class="text-center mb-30">
							<div class="mb-20">
								<img class="img-fluid rounded-circle" width="60" height="60" src="Static/img/user.png" />
							</div>
							<h3 class="mb-20">{{$t('message.login')}}</h3>
							<span
								class="fs-12 d-block w-75 mx-auto">{{$t('message.enterUsernameAndPasswordToAccessControlPanelOfAdminify')}}</span>
						</div>
						<div class="form-wrapper">
							<b-form>
								<b-form-group id="exampleInputGroup1" label="E-mail ID" label-for="emailInput1">
									<b-form-input id="emailInput1" type="email" v-model="form.email" required
										placeholder="Enter Your Email">
									</b-form-input>
								</b-form-group>
								<b-form-group id="exampleInputGroup2" label="Password" label-for="passwordInput1">
									<b-form-input id="passwordInput1" type="password" v-model="form.password" required
										placeholder="Enter Your Password">
									</b-form-input>
								</b-form-group>
								<div class="d-flex justify-content-between align-items-center mb-15">
									<b-form-group id="exampleGroup4" class="mb-0">
										<b-form-checkbox value="me">{{$t('message.rememberMe')}}</b-form-checkbox>
									</b-form-group>
									<a href="javascript:;"
										class="text-danger text-center fs-12 d-block">{{$t('message.forgotPassword')}}</a>
								</div>
								<b-button @click="submit" variant="primary" class="session-btn mb-15">{{$t('message.login')}}
								</b-button>
								<a href="javascript:void(0)" @click="onCreateAccount"
									class="text-center fs-12 d-block text-success">{{$t('message.dontHaveAnAccount')}}</a>
							</b-form>
						</div>
					</div>
				</div>
				<!-- <div class="col-lg-3 col-sm-6 d-flex justify-content-center align-items-center social-block">
					<div class="social-wrap">
						<h3 class="text-white mb-30">Or Login With</h3>
						<ul class="social-btn-wrap p-0 m-0 list-unstyled">
							<li class="list-item mb-20">
								<a target="_blank" @click="signInWithFacebook">
									<span class="social-icon facebook">
										<i class="zmdi zmdi-facebook"></i>
									</span>
									<span class="fs-12 text-white">Login using Facebook</span>
								</a>
							</li>
							<li class="list-item mb-20">
								<a target="_blank" @click="signInWithGoogle">
									<span class="social-icon google">
										<i class="zmdi zmdi-google-plus"></i>
									</span>
									<span class="fs-12 text-white">Login using Google+</span>
								</a>
							</li>
							<li class="list-item mb-20">
								<a target="_blank" @click="signInWithTwitter">
									<span class="social-icon twitter">
										<i class="zmdi zmdi-twitter"></i>
									</span>
									<span class="fs-12 text-white">Login using Twitter</span>
								</a>
							</li>
							<li class="list-item mb-20">
								<a target="_blank" @click="signInWithGithub">
									<span class="social-icon github">
										<i class="zmdi zmdi-github-alt"></i>
									</span>
									<span class="fs-12 text-white">Login using Github</span>
								</a>
							</li>
							<li class="list-item mb-20">
								<b-button variant="danger" @click="signinWithAuth0">Signin With Auth0</b-button>
								</a>
							</li>
						</ul>
					</div>
				</div> -->
			</div>
		</div>
	</div>
</template>

<script>
	// import firebase from "firebase/app";
	// import AuthService from "../../auth/AuthService";
	// const auth = new AuthService();
	// const { login, logout, authenticated, authNotifier } = auth;

	export default {
		data: function () {
			return {
				form: {
					email: 'correo@gmail.com',
					password: '12345678',
				}
			}
		},
		methods: {
			submit() {
				// evt.preventDefault();
				const user = {
					email: this.form.email,
					password: this.form.password
				};
				this.$store.dispatch("signinUserInPHX", {user});
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