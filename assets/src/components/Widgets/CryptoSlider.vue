<template>
		<app-card v-if="loadedTasasSlider" class="ticker-slider grid-b-space" style="height:4rem;">
			<slick class="slick" ref="slick" :options="slickOptions"
				@breakpoint="handleBreakpoint"
				@destroy="handleDestroy"
				@edge="handleEdge"
				@init="handleInit"
				@reInit="handleReInit"
				@swipe="handleSwipe"
				@lazyLoaded="handleLazyLoaded"
				@lazyLoadError="handleLazeLoadError">
				<div @click="pause()" class="ticker-item-wrap px-3" v-for="(item,index) in getData" :key="index">
					<div class="d-flex align-items-center justify-content-between">
						<div class="price-content">
							<span class="d-inline-block">
								<router-link :to="item.url"><b style="color:#0081f2;">{{ item.coin1 }}</b></router-link>
							</span>
							<!-- <span class="d-inline-block ml-1 mr-1">/</span> -->
							<span class="d-inline-block">{{ item.coin2 }}</span>
							<div class="fw-bold mt-1">
								{{ item.price }}
							</div>
							<span>{{ item.volume }}</span>
						</div>
						<div>
							<span :class="item.color" class="fw-bold d-flex align-items-center">
								<i :class="item.icon" class="mr-2 font-lg"></i>{{ item.market_cap }}
							</span>
						</div>
					</div>
				</div>
			</slick>
		</app-card>
		<div v-else class="d-flex justify-content-center py-5 mb-5">
			<fade-loader :loading="!loadedTasasSlider" color="DarkOrange" size="32px"></fade-loader>
		</div>
</template>

<script>
	import Slick from "vue-slick";
  import Auth from "@/assets/auth";
	import { mapState, mapGetters, mapActions } from 'vuex';
	export default {
		components: {
			Slick,
		},
		data() {
			return {
				pausa: false,
				slickOptions: {
					// adaptiveHeight: true,
					speed: 3000,
					autoplay: true,
					autoplaySpeed: 0,
					arrows: false,
					// centerMode: true,
					slidesToShow: 3,
					slidesToScroll: 1,
					variableWidth: true,
					mobileFirst: true,
					cssEase: 'linear',
        },
				cryptoSliderData: [
					{
						"coin1": "BTC",
						"coin2": "USD",
						"price": "$ 3,884.95",
						"market_cap": "12.3%",
						"icon": "zmdi zmdi-long-arrow-up",
						"color": "text-green"
					},
					{
						"coin1": "BTC",
						"coin2": "ETH",
						"price": "Ξ 29.33",
						"market_cap": "3.3%",
						"icon": "zmdi zmdi-long-arrow-down",
						"color": "text-danger"
					},
					{
						"coin1": "BTC",
						"coin2": "EUR",
						"price": "€ 3,409.48",
						"market_cap": "14.3%",
						"icon": "zmdi zmdi-long-arrow-up",
						"color": "text-green"
					},
					{
						"coin1": "ETH",
						"coin2": "EUR",
						"price": "€ 111.61",
						"market_cap": "7.3%",
						"icon": "zmdi zmdi-long-arrow-down",
						"color": "text-danger"
					},
					{
						"coin1": "ETH",
						"coin2": "USD",
						"price": "$ 133.02",
						"market_cap": "1.43%",
						"icon": "zmdi zmdi-long-arrow-down",
						"color": "text-danger"
					},
					{
						"coin2": "GBP",
						"coin1": "LTC",
						"price": "£ 23141.85",
						"market_cap": "14.3%",
						"icon": "zmdi zmdi-long-arrow-down",
						"color": "text-green"
					},
					{
						"coin1": "EOS",
						"coin2": "USD",
						"price": "$ 1383.65",
						"market_cap": "6.3%",
						"icon": "zmdi zmdi-long-arrow-down",
						"color": "text-danger"
					},
					{
						"coin1": "BTC",
						"coin2": "GBP",
						"price": "£ 2,918.94",
						"market_cap": "13.3%",
						"icon": "zmdi zmdi-long-arrow-up",
						"color": "text-green"
					},
					{
						"coin1": "ETH",
						"coin2": "GBP",
						"price": "£ 99123.67",
						"market_cap": "21.2%",
						"icon": "zmdi zmdi-long-arrow-up",
						"color": "text-green"
					},
					{
						"coin1": "EUR",
						"coin2": "GBP",
						"price": "£ 218.94",
						"market_cap": "1.23%",
						"icon": "zmdi zmdi-long-arrow-down",
						"color": "text-danger"
					},
					{
						"coin1": "BTC",
						"coin2": "USDT",
						"price": "₮ 3,869.09",
						"market_cap": "10.3%",
						"icon": "zmdi zmdi-long-arrow-down",
						"color": "text-green"
					},
					{
						"coin1": "ETH",
						"coin2": "USDT",
						"price": "₮ 131.89",
						"market_cap": "3.43%",
						"icon": "zmdi zmdi-long-arrow-down",
						"color": "text-danger"
					}
				]
			};
		},
    computed: {
			...mapState('tasas',['loadedTasasSlider']),
			...mapGetters('tasas', ['getData']),
			
		},
		methods: {
			...mapActions('tasas', ['loadTasasSlider']),
			pause(){
				if (this.pausa) {
					this.pausa = !this.pausa;
					$('.slick').slick('slickPlay');

					// this.$refs.slick.play();
				}else{
					this.pausa = !this.pausa;
					$('.slick').slick('slickPause');

					// this.$refs.slick.pause();
				}
			},
			next() {
				this.$refs.slick.next();
			},

			prev() {
				this.$refs.slick.prev();
			},
			reInit() {
					this.$refs.slick.play();
            // Helpful if you have to deal with v-for to update dynamic lists
            this.$nextTick(() => {
                this.$refs.slick.reSlick();
            });
        },
        // Events listeners
        // handleAfterChange(event, slick, currentSlide) {
        //     console.log('handleAfterChange', event, slick, currentSlide);
        // },
        // handleBeforeChange(event, slick, currentSlide, nextSlide) {
        //     console.log('handleBeforeChange', event, slick, currentSlide, nextSlide);
        // },
        handleBreakpoint(event, slick, breakpoint) {
            console.log('handleBreakpoint', event, slick, breakpoint);
        },
        handleDestroy(event, slick) {
            console.log('handleDestroy', event, slick);
        },
        handleEdge(event, slick, direction) {
            console.log('handleEdge', event, slick, direction);
        },
        handleInit(event, slick) {
					console.log('handleInit', event, slick);
        },
        handleReInit(event, slick) {
					console.log('handleReInit', event, slick);
					this.$refs.slick.play();
        },
        // handleSetPosition(event, slick) {
        //     console.log('handleSetPosition', event, slick);
        // },
        handleSwipe(event, slick, direction) {
            console.log('handleSwipe', event, slick, direction);
        },
        handleLazyLoaded(event, slick, image, imageSource) {
            console.log('handleLazyLoaded', event, slick, image, imageSource);
        },
        handleLazeLoadError(event, slick, image, imageSource) {
            console.log('handleLazeLoadError', event, slick, image, imageSource);
        },
		},
		created() {
			this.loadTasasSlider();
		},
	};
</script>
<style>
.slick-prev,
.slick-next {
  font-size: 0;
  line-height: 0;

  position: absolute;
  top: 50%;

  display: block;

  width: 50px;
  height: 20px;
  padding: 0;
  -webkit-transform: translate(0, -50%);
  -ms-transform: translate(0, -50%);
  transform: translate(0, -50%);

  cursor: pointer;

  color: transparent;
  border: none;
  outline: none;
  background: transparent;
}
.slick-prev:hover,
.slick-prev:focus,
.slick-next:hover,
.slick-next:focus {
  color: transparent;
  outline: none;
  background: transparent;
}
.slick-prev:hover:before,
.slick-prev:focus:before,
.slick-next:hover:before,
.slick-next:focus:before {
  opacity: 1;
}
.slick-prev.slick-disabled:before,
.slick-next.slick-disabled:before {
  opacity: 0.25;
}

.slick-prev:before,
.slick-next:before {
  font-family: 'slick';
  font-size: 20px;
  line-height: 1;

  opacity: 0.75;
  color: white;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.slick-prev {
  left: -31px;
}
[dir='rtl'] .slick-prev {
  right: -31px;
  left: auto;
}
.slick-prev:before {
  /* content: '←'; */
  content: '<';
}
[dir='rtl'] .slick-prev:before {
  /* content: '→'; */
  content: '>';
}

.slick-next {
  right: -31px;
}
[dir='rtl'] .slick-next {
  right: auto;
  left: -31px;
}
.slick-next:before {
  /* content: '→'; */
  content: '>';
}
[dir='rtl'] .slick-next:before {
  /* content: '←'; */
  content: '<';
}

/* Dots */
.slick-dotted.slick-slider {
  margin-bottom: 30px;
}

.slick-dots {
  position: absolute;
  bottom: -25px;

  display: block;

  width: 100%;
  padding: 0;
  margin: 0;

  list-style: none;

  text-align: center;
}
.slick-dots li {
  position: relative;

  display: inline-block;

  width: 20px;
  height: 20px;
  margin: 0 5px;
  padding: 0;

  cursor: pointer;
}
.slick-dots li button {
  font-size: 0;
  line-height: 0;

  display: block;

  width: 20px;
  height: 20px;
  padding: 5px;

  cursor: pointer;

  color: transparent;
  border: 0;
  outline: none;
  background: transparent;
}
.slick-dots li button:hover,
.slick-dots li button:focus {
  outline: none;
}
.slick-dots li button:hover:before,
.slick-dots li button:focus:before {
  opacity: 1;
}
.slick-dots li button:before {
  font-family: 'slick';
  font-size: 6px;
  line-height: 20px;

  position: absolute;
  top: 0;
  left: 0;

  width: 20px;
  height: 20px;

  content: '•';
  text-align: center;

  opacity: 0.25;
  color: black;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.slick-dots li.slick-active button:before {
  opacity: 0.75;
  color: black;
}
</style>