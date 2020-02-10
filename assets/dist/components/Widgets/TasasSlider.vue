<template>
	<div>
		<!-- SLIDER TASAS -->
      <app-card v-if="sliderLoaded" class="ticker-slider grid-b-space" style="height:75;">
        <slick :options="slickOptions">
          <div class="ticker-item-wrap px-3" v-for="(item,index) in tasasSliderData" :key="index">
            <div class="d-flex align-items-center justify-content-between">
              <div class="price-content">
                <span class="d-inline-block">{{ item.coin1 }}</span>
                <!-- <span class="d-inline-block ml-1 mr-1">/</span> -->
                <!-- <span class="d-inline-block">{{ item.coin2 }}</span> -->
                <span>{{ item.volume }}</span>
                <div class="fw-bold mt-2">
                  {{ item.price }}
                </div>
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
      <!-- SPINNER -->
      <div v-else class="py-5 my-5 d-flex justify-content-center align-items-center">
        <fade-loader :loading="!sliderLoaded" color="DarkOrange" size="32px"></fade-loader>
      </div>
	</div>
</template>

<script>
	import Slick from "vue-slick";
  import Auth from "@/assets/auth";

	export default {
    name: "TasasSlider",
		components: {
			Slick,
		},
		data() {
			return {
        loaded: false,
        euroOficialHoy: "",
        dolarOficialHoy: "",
        euroParaleloHoy: "",
        dolarParaleloHoy: "",
        monitorDolarHoy: "",
        petroleoHoy: "",
        oroHoy: "",
        petroHoy: "",
        bitcoinHoy: "",
        sp500Hoy: "",
        nasdaqHoy: "",
				slickOptions: {
					speed: 5000,
					autoplay: true,
					autoplaySpeed: 0,
					arrows: false,
					cssEase: 'linear',
					slidesToShow: 1,
					slidesToScroll: 1,
					variableWidth: true,
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
    methods: {
      async getTasasHoy() {
        await this.axios.get("http://" + Auth.HOST + ":8000/getTasasBCV").then(res => {
          var data = res.data;
          this.euroOficialHoy = data.Euro[0];
          this.dolarOficialHoy = data.Dolar[0];
        });
        await this.axios.get("http://" + Auth.HOST + ":8000/getTasasDTD").then(res2 => {
          var data = res2.data;
          this.euroParaleloHoy = data.euro[0];
          this.dolarParaleloHoy = data.dolar[0];
        });
        await this.axios
          .get("http://" + Auth.HOST + ":8000/getTasasDM")
          .then(res3 => {
            var data = res3.data;
            this.monitorDolarHoy = data.dolar[0];
          })
          .catch(err => {
            console.log("Dolar Monitor", err);
          });
        await this.axios
          .get("http://" + Auth.HOST + ":8000/getTasasOIL")
          .then(res4 => {
            var data = res4.data;
            console.log(data);
            this.petroleoHoy = data.petroleo[0];
          })
          .catch(err => {
            console.log("Petroleo", err);
          });
        await this.axios
          .get("http://" + Auth.HOST + ":8000/getTasasORO")
          .then(res3 => {
            console.log(res3);
            var data = res3.data;
            this.oroHoy = data.oro[0];
          })
          .catch(err => {
            console.log("Oro", err);
          });
        await this.axios
          .get("http://" + Auth.HOST + ":8000/getTasasPTR")
          .then(res4 => {
            var data = res4.data;
            console.log(data);
            this.petroHoy = data.bolivar[0];
          })
          .catch(err => {
            console.log("Petro", err);
          });
        await this.axios
          .get("http://" + Auth.HOST + ":8000/getTasasBTC")
          .then(res4 => {
            var data = res4.data;
            console.log(data);
            this.bitcoinHoy = data.bitcoin[0]; 
          })
          .catch(err => {
            console.log("Bitcoin", err);
          });
        await this.axios
          .get("http://" + Auth.HOST + ":8000/getTasasSP500")
          .then(res4 => {
            var data = res4.data;
            console.log(data);
            this.sp500Hoy = data.sp500[0];
          })
          .catch(err => {
            console.log("PS500", err);
          });
        await this.axios
          .get("http://" + Auth.HOST + ":8000/getTasasNASDAQ")
          .then(res4 => {
            var data = res4.data;
            console.log(data);
            this.nasdaqHoy = data.nasdaq[0];
          })
          .catch(err => {
            console.log("Nasdaq", err);
          });
      this.loaded = true;

      },
    },
    computed: {
      tasasSliderData(){
          return [{
            "coin1": "Dolar Oficial",
						"coin2": "",
						"price": this.dolarOficialHoy,
						"market_cap": "",
						"icon": "",
						"color": ""
          },
          {
            "coin1": "Dolar Paralelo",
						"coin2": "",
						"price": this.dolarParaleloHoy,
						"market_cap": "",
						"icon": "",
						"color": ""
          },
          {
            "coin1": "Euro Oficial",
						"coin2": "",
						"price": this.euroOficialHoy,
						"market_cap": "",
						"icon": "",
						"color": ""
          },
          {
            "coin1": "Euro Paralelo",
						"coin2": "",
						"price": this.euroParaleloHoy,
						"market_cap": "",
						"icon": "",
						"color": ""
          },
          {
            "coin1": "Petroleo",
						"coin2": "",
						"price": this.petroleoHoy,
						"market_cap": "",
						"icon": "",
						"color": ""
          },
          {
            "coin1": "Oro",
						"coin2": "",
						"price": this.oroHoy,
						"market_cap": "",
						"icon": "",
						"color": ""
          },
          {
            "coin1": "Petro",
						"coin2": "",
						"price": this.petroHoy,
						"market_cap": "",
						"icon": "",
						"color": ""
          },
          {
            "coin1": "Bitcoin",
						"coin2": "",
						"price": this.bitcoinHoy,
						"market_cap": "",
						"icon": "",
						"color": ""
          },
          {
            "coin1": "S&P 500",
						"coin2": "",
						"price": this.sp500Hoy,
						"market_cap": "",
						"icon": "",
						"color": ""
          },
          {
            "coin1": "Nasdaq",
						"coin2": "",
						"price": this.nasdaqHoy,
						"market_cap": "",
						"icon": "",
						"color": ""
          }
        ]
      },
    },
    created() {
      this.getTasasHoy();
    },
	};
</script>
<style scoped>
</style>