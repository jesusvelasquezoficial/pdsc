<template>
	<div class="clients-list-wrap ">
		<b-tabs>
			<b-tab :title="$t('message.allClients')">
				<div class="row">
					<template v-for="(details,tabName,index) in clientData">
						<div class="mb-30 col-12 col-sm-6 col-md-4 col-lg-3" v-for="(details,keyy,i) in clientData[tabName]"
							:key="i">
							<app-card customClasses="mb-0 client-item">
								<div :key="index" class="text-center position-relative">
									<div class="thumb-wrap mb-3 ">
										<img :src="details.image" class="rounded-lg" />
									</div>
									<div class="client-content">
										<h4 class="mb-2 text-primary">{{ details.name }}</h4>
										<div class="contact-links text-truncate mb-1 fs-14">
											<a class="" href="javascript:void(0)">{{ details.e_mail }}</a>
										</div>
										<div class="contact-links fs-14 text-truncate mb-1">
											<a class="" href="javascript:void(0)">{{ details.phone_number }}</a>
										</div>
										<div class="fs-14 text-truncate mb-1">{{ details.country }}</div>
									</div>
									<div class="action-btn-wrap">
										<b-button @click="onEditClients(details,tabName)" class="border-0"><i
												class="material-icons">edit</i></b-button>
										<b-button @click="onDeleteClients(details,tabName)" class="border-0"><i
												class="material-icons">delete</i></b-button>
									</div>
								</div>
							</app-card>
						</div>
					</template>
				</div>
			</b-tab>
			<div :key="index" v-for="(details,tabName,index) in clientData">
				<b-tab :title="$t('message.'+tabName)" :key="index">
					<div class="row">
						<div class="mb-30 col-12 col-sm-6 col-md-4 col-lg-3"
							v-for="(details,keyy,index) in clientData[tabName]" :key="index">
							<app-card customClasses="mb-0 client-item">
								<div class="text-center position-relative">
									<div class="thumb-wrap mb-3 ">
										<img :src="details.image" class="rounded-lg" />
									</div>
									<div class="client-content">
										<h4 class="mb-2 text-primary">{{ details.name }}</h4>
										<div class="contact-links text-truncate mb-1 fs-14">
											<a class="" href="javascript:void(0)">{{ details.e_mail }}</a>
										</div>
										<div class="contact-links fs-14 text-truncate mb-1">
											<a class="" href="javascript:void(0)">{{ details.phone_number }}</a>
										</div>
										<div class="fs-14 text-truncate mb-1">{{ details.country }}</div>
									</div>
									<div class="action-btn-wrap">
										<b-button @click="onEditClients(details,tabName)" class="border-0"><i
												class="material-icons">edit</i>
										</b-button>
										<b-button @click="onDeleteClients(details,tabName)" class="border-0"><i
												class="material-icons">delete</i></b-button>
									</div>
								</div>
							</app-card>
						</div>
					</div>
				</b-tab>
			</div>
		</b-tabs>
		<delete-confirmation-dialog ref="deleteConfirmationDialog"
			message="Are you sure you want to delete this Client permanently?" @onConfirm="deleteClientItem">
		</delete-confirmation-dialog>
		<template>
			<div class="editConfirmationDialog">
				<b-modal v-model="open" max-width="500" hide-footer centered title="Edit User">
					<div class="d-block pa-1">
						<b-form @submit.stop.prevent="editClientItem">
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
									Update
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
	import { clientData } from "Assets/data/clientData.js";
	import { validationMixin } from 'vuelidate'
	import { required, email } from 'vuelidate/lib/validators'

	export default {
		data() {
			return {
				clientData,
				selectItemToDelete: null,
				selectedTabName: null,
				selectItemToEdit: null,
				open: false,
				form: {
					editName: null,
					editEmail: null,
					editPhoneNo: null,
					editLocation: null
				},
				message: "Field should not be empty"
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
		methods: {
			onDeleteClients(item, tabName) {
				this.$refs.deleteConfirmationDialog.openDialog();
				this.selectItemToDelete = item;
				this.selectedTabName = tabName;
			},
			deleteClientItem() {
				this.$refs.deleteConfirmationDialog.close();
				let deletedClient = this.clientData;
				let index = deletedClient[this.selectedTabName].indexOf(this.selectItemToDelete);
				deletedClient[this.selectedTabName].splice(index, 1);
			},
			onEditClients(item, tabName) {
				this.openDialog();
				this.form.editName = item.name;
				this.form.editEmail = item.e_mail;
				this.form.editPhoneNo = item.phone_number;
				this.form.editLocation = item.country;
				this.selectItemToEdit = item;
				this.selectedTabName = tabName;
			},
			editClientItem() {
				let editClient = this.clientData;
				let index = editClient[this.selectedTabName].indexOf(this.selectItemToEdit);
				editClient[this.selectedTabName][index].name = this.form.editName
				editClient[this.selectedTabName][index].e_mail = this.form.editEmail
				editClient[this.selectedTabName][index].phone_number = this.form.editPhoneNo
				editClient[this.selectedTabName][index].country = this.form.editLocation
				this.close();
			},
			openDialog() {
				this.open = true;
			},
			close() {
				this.open = false;
			}
		}
	}
</script>