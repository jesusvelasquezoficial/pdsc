<template>
	<div id="cards">
		<page-title-bar></page-title-bar>
		<div class="row align-items-stretch">
			<div class="col-lg-6 col-xl-6 mb-40 grid-b-space">
				<b-card img-src="/static/img/card-list.jpg" img-alt="Card image" img-top title="Card title"
					sub-title="Card subtitle" footer="Card Footer" footer-tag="footer">
					<div class="card-text">
						<p>Some quick example text to build on the <em>card title</em> and make up the bulk of the card's
							content.</p>
						<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
					</div>
					<div class="card-links">
						<a href="#" class="card-link">Card link</a>
						<b-link href="#" class="card-link">Another link</b-link>
					</div>
				</b-card>
			</div>
			<div class="col-lg-6 col-xl-6 mb-40 overlay-card grid-b-space">
				<b-card overlay img-src="/static/img/carousel-slider-2.jpg" img-alt="Card Image" text-variant="white"
					title="Image Overlay">
					<div class="card-text">
						<h3 class="mb-sm-2">Overlay Card</h3>
						<p>
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</p>
					</div>
				</b-card>
			</div>
		</div>
		<div class="card-block">
			<b-card-group deck>
				<b-card class="mb-30" header="<h6>featured</h6>" header-tag="header" footer="Card Footer"
					footer-tag="footer" title="Title">
					<p class="card-text">Header and footers using props.</p>
					<div class="card-btn">
						<b-button href="#" variant="primary">Go somewhere</b-button>
					</div>
				</b-card>
				<b-card class="mb-30" title="Title" header-tag="header" footer-tag="footer">
					<h6 slot="header" class="mb-0">Header Slot</h6>
					<em slot="footer">Footer Slot</em>
					<p class="card-text">Header and footers using slots.</p>
					<div class="card-btn">
						<b-button href="#" variant="primary">Go somewhere</b-button>
					</div>
				</b-card>
				<b-card class="mb-30" title="Title" header-tag="header" footer-tag="footer">
					<h6 slot="header" class="mb-0">Header Slot</h6>
					<em slot="footer">Footer Slot</em>
					<p class="card-text">Header and footers using slots.</p>
					<div class="card-btn">
						<b-button href="#" variant="primary">Go somewhere</b-button>
					</div>
				</b-card>
			</b-card-group>
		</div>
		<div class="card-block variant-cards">
			<b-card-group deck>
				<b-card v-for="cards in cardsColorOne" :key="cards.bgColor" :bg-variant="cards.bgColor" text-variant="white"
					:header="cards.heading" class="text-center mb-30">
					<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</b-card>
			</b-card-group>
			<b-card-group deck>
				<b-card v-for="cards in cardsColorTwo" :key="cards.bgColor" :bg-variant="cards.bgColor" text-variant="white"
					:header="cards.heading" class="text-center mb-30">
					<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</b-card>
			</b-card-group>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				cardsColorOne: [
					{
						bgColor: "primary",
						heading: "Primary"
					},
					{
						bgColor: "secondary",
						heading: "Secondary"
					},
					{
						bgColor: "success",
						heading: "Success"
					}
				],
				cardsColorTwo: [
					{
						bgColor: "info",
						heading: "Info"
					},
					{
						bgColor: "warning",
						heading: "Warning"
					},
					{
						bgColor: "danger",
						heading: "Danger"
					}
				]
			}
		}
	};
</script>