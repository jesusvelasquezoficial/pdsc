<template>
	<div id="buttons">
		<page-title-bar></page-title-bar>
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<app-card customClasses="grid-b-space" :heading="$t('message.predefinedButtonStyles')"
					class="predifined-btn-style">
					<div>
						<p class="text-muted mb-30">
							Simply use a element <code> &#60;b-button&#62;Primary&#60;/b-button&#62; </code> &nbsp;
							<code> &#60;b-button variant="secondary"&#62;Secondary&#60;/b-button&#62; </code> quickly create a
							general button.
						</p>
						<div class="btn-style">
							<b-button variant="primary" class="mb-10 mr-10">Primary</b-button>
							<b-button variant="secondary" class="mb-10 mr-10">Secondary</b-button>
							<b-button variant="success" class="mb-10 mr-10">Success</b-button>
							<b-button variant="warning" class="mb-10 mr-10">Warning</b-button>
							<b-button variant="danger" class="mb-10 mr-10">Danger</b-button>
							<b-button variant="info" class="mb-10 mr-10">Info</b-button>
							<b-button variant="dark" class="mb-10 mr-10">Dark</b-button>
							<b-button variant="light" class="mb-10 mr-10">Light</b-button>
							<b-button variant="link" class="mb-10 mr-10">Link</b-button>
						</div>
					</div>
				</app-card>
				<app-card customClasses="grid-b-space" :heading="$t('message.outlineButtons')" class="outline-btn">
					<p class="text-muted">
						Simply use a element
						<code>&#60;b-button variant="outline-primary"&#62;Primary&#60;/b-button&#62; </code>
					</p>
					<div class="btn-style">
						<b-button variant="outline-primary" class="mb-10 mr-10">Primary</b-button>
						<b-button variant="outline-secondary" class="mb-10 mr-10">Secondary</b-button>
						<b-button variant="outline-success" class="mb-10 mr-10">Success</b-button>
						<b-button variant="outline-warning" class="mb-10 mr-10">Warning</b-button>
						<b-button variant="outline-danger" class="mb-10 mr-10">Danger</b-button>
						<b-button variant="outline-info" class="mb-10 mr-10">Info</b-button>
						<b-button variant="outline-dark" class="mb-10 mr-10">Dark</b-button>
						<b-button variant="outline-link" class="mb-10 mr-10">Link</b-button>
					</div>
				</app-card>
				<app-card customClasses="grid-b-space" :heading="$t('message.buttonsSizes')" class="btn-sizes">
					<p class="text-muted">
						Simply use a element
						<code>&#60;b-button size="lg" variant="outline-primary"&#62;Primary&#60;/b-button&#62; </code>
					</p>
					<div class="btn-style mb-2">
						<b-button size="lg" variant="primary" class="mb-10 mr-10">Large</b-button>
						<b-button variant="primary" class="mb-10 mr-10">Medium</b-button>
						<b-button size="sm" variant="primary" class="mb-10 mr-10">Small</b-button>
					</div>
					<div class="btn-style">
						<b-button size="lg" variant="outline-primary" class="mb-10 mr-10">Large</b-button>
						<b-button variant="outline-primary" class="mb-10 mr-10">Medium</b-button>
						<b-button size="sm" variant="outline-primary" class="mb-10 mr-10">Small</b-button>
					</div>
				</app-card>
				<app-card customClasses="grid-b-space" :heading="$t('message.blockLevelButtons')" class="block-btn">
					<p class="text-muted mb-30">
						Simply use a element
						<code>&#60;b-button block variant="primary"&#62;Block Level Button&#60;/b-button&#62; </code>
					</p>
					<div class="block-btn-style">
						<b-button variant="primary" block class="mb-10">{{$t('message.blockLevelButton')}}</b-button>
						<b-button variant="danger" block class="mb-10">{{$t('message.blockLevelButton')}}</b-button>
					</div>
				</app-card>
				<app-card customClasses="grid-b-space" :heading="$t('message.dropDownAndDropUp')" class="dropdowndropup">
					<p class="text-muted mb-30">
						Simply use a element
						<code>&#60;b-dropdown text="Dropdown" variant="primary"&#62;&#60;b-dropdown-item href="#"&#62;Action&#60;/b-dropdown-item&#62;&#60;/b-dropdown&#62; </code>
					</p>
					<div class="btn-style mb-30">
						<b-dropdown id="down1" text="Dropdown" :variant="color" class="mb-10 mr-10"
							v-for="(color, index) in color" :key="index">
							<b-dropdown-item href="#">Action</b-dropdown-item>
							<b-dropdown-item href="#">Another action</b-dropdown-item>
							<b-dropdown-item href="#">Something else here...</b-dropdown-item>
						</b-dropdown>
					</div>
					<p class="text-muted mb-30">
						Simply use a element
						<code>&#60;b-dropdown text="Dropdown" split variant="primary"&#62;&#60;b-dropdown-item href="#"&#62;Action&#60;/b-dropdown-item&#62;&#60;/b-dropdown&#62; </code>
					</p>
					<div class="btn-style">
						<b-dropdown id="down2" text="Dropdown" :variant="color" split class="mb-10 mr-10"
							v-for="(color, index) in color" :key="index">
							<b-dropdown-item href="#">Action</b-dropdown-item>
							<b-dropdown-item href="#">Another action</b-dropdown-item>
							<b-dropdown-item href="#">Something else here...</b-dropdown-item>
						</b-dropdown>
					</div>
				</app-card>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "buttons",
		data() {
			return {
				color: ["secondary", "primary", "success", "warning", "danger"]
			}
		}
	};
</script>