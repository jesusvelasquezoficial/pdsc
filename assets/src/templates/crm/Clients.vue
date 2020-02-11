<template>
	<div id="dashboard">
		<page-title-bar></page-title-bar>
		<div class="row align-items-stretch">
			<div class="col-half-lg-block col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 grid-b-space">
				<div class="custom-search-wrap px-4 py-30 idb-block">
					<div class="row align-items-stretch">
						<div class="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
							<h2>{{$t('message.search')}}</h2>
						</div>
						<div class="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9">
							<div class="d-sm-flex align-items-center">
								<div class="input-wrap">
									<b-form-input type="text" required placeholder="Search Projects">
									</b-form-input>
								</div>
								<div class="action-btn-wrap ml-3">
									<b-button variant="primary" class="mr-3 text-capitalize">{{$t('message.search')}}</b-button>
									<b-button variant="primary" class="d-inline-flex align-items-center text-capitalize"
										@click="openDialog()">{{$t('message.add')}}<i class="material-icons btn-icon ml-1">add</i>
									</b-button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="row align-items-stretch">
			<div class="col-half-lg-block col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 grid-b-space">
				<app-card>
					<clients-details></clients-details>
				</app-card>
			</div>
		</div>
		<template>
			<div class="editConfirmationDialog">
				<b-modal v-model="open" max-width="500" hide-footer centered title="Add User">
					<div class="d-block p-1">
						<b-form @submit.stop.prevent="onSubmit">
							<b-form-group id="input-group-1" label="Name" label-for="name">
								<b-form-input class="mb-3" id="name" v-model="$v.form.editName.$model"
									:state="$v.form.editName.$dirty ? !$v.form.editName.$error : null" placeholder="Name">
								</b-form-input>
								<b-form-invalid-feedback>
									{{message}}
								</b-form-invalid-feedback>
							</b-form-group>
							<b-form-group id="input-group-2" label="Email" label-for="email">
								<b-form-input class="mb-3" id="email" v-model="$v.form.editEmail.$model"
									:state="$v.form.editEmail.$dirty ? !$v.form.editEmail.$error : null" placeholder="Email">
								</b-form-input>
								<b-form-invalid-feedback>
									E-mail must be valid
								</b-form-invalid-feedback>
							</b-form-group>
							<b-form-group id="input-group-3" label="Phone Number" label-for="phone-no">
								<b-form-input class="mb-3" id="phone-no" v-model="$v.form.editPhoneNo.$model"
									:state="$v.form.editPhoneNo.$dirty ? !$v.form.editPhoneNo.$error : null"
									placeholder="Phone Number"></b-form-input>
								<b-form-invalid-feedback>
									{{message}}
								</b-form-invalid-feedback>
							</b-form-group>
							<b-form-group id="input-group-4" label="Location" label-for="location">
								<b-form-input class="mb-3" id="location" v-model="$v.form.editLocation.$model"
									:state="$v.form.editLocation.$dirty ? !$v.form.editLocation.$error : null"
									placeholder="Location"></b-form-input>
								<b-form-invalid-feedback>
									{{message}}
								</b-form-invalid-feedback>
							</b-form-group>
							<div class="d-flex justify-content-end">
								<b-btn class="mt-3 text-capitalize mx-2" variant="primary" @click="open = false" size="sm">
									Cancel
								</b-btn>
								<b-btn type="submit" :disabled="$v.form.$invalid" class="mt-3 text-capitalize mx-2 px-4"
									variant="danger" size="sm">
									Add
								</b-btn>
							</div>
						</b-form>
					</div>
				</b-modal>
			</div>
		</template>
	</div>
</template>

<script>
	import ClientsDetails from 'Components/Widgets/ClientsDetails'
	import { clientData } from "Assets/data/clientData.js";
	import { validationMixin } from 'vuelidate'
	import { required, email } from 'vuelidate/lib/validators'
	export default {
		mixins: [validationMixin],
		data() {
			return {
				clientData,
				message: "Field should not be empty",
				open: false,
				form: {
					editName: null,
					editEmail: null,
					editPhoneNo: null,
					editLocation: null
				}
			}
		},
		validations: {
			form: {
				editName: {
					required
				},
				editEmail: {
					required, email
				},
				editPhoneNo: {
					required
				},
				editLocation: {
					required
				}
			}
		},
		components: {
			ClientsDetails
		},
		methods: {
			openDialog() {
				this.open = true;
			},
			close() {
				this.open = false;
			},
			onSubmit() {
				this.$v.form.$touch()
				if (this.$v.form.$anyError) {
					return
				}
				var clientsArr = clientData.recentlyAdded;
				var newClient = {
					image: "/static/img/user-1.jpg",
					name: this.form.editName,
					e_mail: this.form.editEmail,
					phone_number: this.form.editPhoneNo,
					country: this.form.editLocation,
					tag: "recently_added"
				}
				clientsArr.push(newClient);
				this.form.editName = null;
				this.form.editEmail = null;
				this.form.editPhoneNo = null;
				this.form.editLocation = null;
				this.$v.$reset();
				this.close();
			}
		}
	};
</script>