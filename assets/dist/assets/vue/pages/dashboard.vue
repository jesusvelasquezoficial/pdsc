<template>
  <f7-page>
    <!-- Menu superior -->
    <f7-navbar>
      <f7-nav-left>
        <f7-link panel-open="left" icon="fas fa-bars"></f7-link>
      </f7-nav-left>
      <!-- <f7-nav-title>Central de Inteligencia Financiera</f7-nav-title> -->
      <f7-nav-right>
        <small>{{ horaDF }}</small>
        <f7-link icon="fas fa-user" panel-open="right" id="menu-diestro"></f7-link>
        <b-tooltip
          :title="fullname"
          target="menu-diestro"
          placement="left"
          delay="{ show: 0, hide: 0 }"
          boundary-padding="10"
          no-Fade="true"
          show
        ></b-tooltip>
      </f7-nav-right>
    </f7-navbar>
    <f7-block class="mb-0">
      <!--  NOMBRE DEL SITIO -->
      <app-card customClasses="page-title rounded-0">
        <h4 class="text-capitalize mb-0"><b>Central de Inteligencia Financiera</b></h4>
      </app-card>
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
      <f7-block v-else class="py-5 my-5 d-flex justify-content-center align-items-center">
        <fade-loader :loading="!sliderLoaded" color="DarkOrange" size="32px"></fade-loader>
      </f7-block>
      <!-- INDICADORES GRAPH AND CALENDARIO -->
      <div class="row">
        <!-- CARTAS DE TASAS -->
        <div class="col-md-8">
          <div class="row" v-if="indicadoresLoaded">
            <div class="col-12 col-md-4 grid-b-space">
              <app-card>
                <div class="d-flex align-items-center justify-content-between">
                  <div class="d-block">
                    <div class="layout justify-content-between">
                      <div class="align-items-center d-flex mb-1">
                        <!-- <div class="crypto-icon-wrap inline-block mr-3 font-2x">
                          <i :class="icon" title="BCN"></i>
                        </div> -->
                        <div class="inline-block">
                          <p class="mb-0">Petroleo</p>
                        </div>
                      </div>
                    </div>
                    <slot class=""><h4 class="m-0 p-0"><b>{{petroleoHoy}}</b></h4></slot>
                    <div class="chart-info d-flex align-items-center justify-content-between pt-1">
                      <div class="text-danger">
                        <i class="zmdi zmdi-long-arrow-up mr-2"></i>0.0%
                      </div>
                      <!-- <div class="fs-14 bg-grey rounded p-1 px-2 d-inline-block">last 4 days</div> -->
                    </div>
                  </div>
                  <div class="d-inline-block">
                    <line-chart-shadow :dataSet="[1,30,10,42,3]" :lineTension="0.4" :dataLabels="['a','b','c','d','e']"
                      :style="{height: '25px',width:'80px', position: 'relative'}" :borderWidth=3 :enableGradient="false"
                      :enableShadow="true" borderColor="danger" shadowColor="danger">
                    </line-chart-shadow>
                  </div>
                </div>
              </app-card>
            </div>
            <div class="col-12 col-md-4 grid-b-space">
              <app-card>
                <div class="layout justify-content-between">
                  <div class="align-items-center d-flex mb-1">
                    <!-- <div class="crypto-icon-wrap inline-block mr-3 font-2x">
                      <i :class="icon" title="BCN"></i>
                    </div> -->
                    <div class="inline-block">
                      <p class="mb-0">Oro</p>
                    </div>
                  </div>
                </div>
                <slot><h4 class="m-0 p-0"><b>{{oroHoy}}</b></h4></slot>
                <div class="chart-info d-flex align-items-center justify-content-between pt-1">
                  <div class="text-success">
                    <i class="zmdi zmdi-long-arrow-up mr-2"></i>0.0%
                  </div>
                  <!-- <div class="fs-14 bg-grey rounded p-1 px-2 d-inline-block">last 4 days</div> -->
                </div>
              </app-card>
            </div>
            <div class="col-12 col-md-4 grid-b-space">
              <app-card>
                <div class="layout justify-content-between">
                  <div class="align-items-center d-flex mb-1">
                    <!-- <div class="crypto-icon-wrap inline-block mr-3 font-2x">
                      <i :class="icon" title="BCN"></i>
                    </div> -->
                    <div class="inline-block">
                      <p class="mb-0">Petro</p>
                    </div>
                  </div>
                </div>
                <slot><h4 class="m-0 p-0"><b>{{petroHoy}}</b></h4></slot>
                <div class="chart-info d-flex align-items-center justify-content-between pt-1">
                  <div class="text-danger">
                    <i class="zmdi zmdi-long-arrow-up mr-2"></i>0.0%
                  </div>
                  <!-- <div class="fs-14 bg-grey rounded p-1 px-2 d-inline-block">last 4 days</div> -->
                </div>
              </app-card>
            </div>
            <div class="col-12 col-md-4 grid-b-space">
              <app-card>
                <div class="layout justify-content-between">
                  <div class="align-items-center d-flex mb-1">
                    <!-- <div class="crypto-icon-wrap inline-block mr-3 font-2x">
                      <i :class="icon" title="BCN"></i>
                    </div> -->
                    <div class="inline-block">
                      <p class="mb-0">Bitcoin</p>
                    </div>
                  </div>
                </div>
                <slot><h4 class="m-0 p-0"><b>{{bitcoinHoy}}</b></h4></slot>
                <div class="chart-info d-flex align-items-center justify-content-between pt-1">
                  <div class="text-success">
                    <i class="zmdi zmdi-long-arrow-up mr-2"></i>0.0%
                  </div>
                  <!-- <div class="fs-14 bg-grey rounded p-1 px-2 d-inline-block">last 4 days</div> -->
                </div>
              </app-card>
            </div>
            <div class="col-12 col-md-4 grid-b-space">
              <app-card>
                <div class="layout justify-content-between">
                  <div class="align-items-center d-flex mb-1">
                    <!-- <div class="crypto-icon-wrap inline-block mr-3 font-2x">
                      <i :class="icon" title="BCN"></i>
                    </div> -->
                    <div class="inline-block">
                      <p class="mb-0">S&P 500</p>
                    </div>
                  </div>
                </div>
                <slot><h4 class="m-0 p-0"><b>{{sp500Hoy}}</b></h4></slot>
                <div class="chart-info d-flex align-items-center justify-content-between pt-1">
                  <div class="text-danger">
                    <i class="zmdi zmdi-long-arrow-up mr-2"></i>0.0%
                  </div>
                  <!-- <div class="fs-14 bg-grey rounded p-1 px-2 d-inline-block">last 4 days</div> -->
                </div>
              </app-card>
            </div>
            <div class="col-12 col-md-4 grid-b-space">
              <app-card>
                <div class="layout justify-content-between">
                  <div class="align-items-center d-flex mb-1">
                    <!-- <div class="crypto-icon-wrap inline-block mr-3 font-2x">
                      <i :class="icon" title="BCN"></i>
                    </div> -->
                    <div class="inline-block">
                      <p class="mb-0">Nasdaq</p>
                    </div>
                  </div>
                </div>
                <slot><h4 class="m-0 p-0"><b>{{nasdaqHoy}}</b></h4></slot>
                <div class="chart-info d-flex align-items-center justify-content-between pt-1">
                  <div class="text-success">
                    <i class="zmdi zmdi-long-arrow-up mr-2"></i>0.0%
                  </div>
                  <!-- <div class="fs-14 bg-grey rounded p-1 px-2 d-inline-block">last 4 days</div> -->
                </div>
              </app-card>
            </div>
          </div>
          <!-- SPINNER -->
          <f7-block v-else class="py-5 my-5 d-flex justify-content-center align-items-center">
            <fade-loader :loading="!indicadoresLoaded" color="DarkOrange" size="32px"></fade-loader>
          </f7-block>
        </div>
        <!-- CALENDARIOS -->
        <div class="col-md-4">
          <div class="row">
            <div class="col-md-12">
              <calendar :attributes='attrsCalendar' :disabled-dates='ddCalendar' class='m-0 p-0' style="height:239px;" is-expanded/>
            </div>
            <!-- <div class="col-md-6">CALENDARIO</div> -->
          </div>
        </div>
      </div>
    </f7-block>
    <!-- GRAFICOS DEL MERCADO -->
    <f7-block class="mt-sm-2">
        <b-row>
          <!-- DOLAR -->
          <b-col sm="12" md="6">
            <app-card heading="Dolar Oficial y Paralelo">
              <!-- LAYOUT -->
              <div v-if="dataDolarLoaded">
                <!-- Precios del dia -->
                <div class="mb-3 ml-4 d-flex justify-content-between align-items-center">
                  <div class="col-md-4" style="border-left: solid 5px #252F5D;">
                    <p class="p-0 m-0" style="font-size:.7rem">Dolar Oficial</p>
                    <h3 class="p-0 m-0" style="font-size:1.2rem">{{precioDolarBCV}}</h3>
                  </div>
                  <div class="col-md-4" style="border-left: solid 5px Green;">
                    <p class="p-0 m-0" style="font-size:.7rem">Dolar Today</p>
                    <h3 class="p-0 m-0" style="font-size:1.2rem">{{precioDolarToday}}</h3>
                  </div>
                  <div class="col-md-4" style="border-left: solid 5px DarkOrange;">
                    <p class="p-0 m-0" style="font-size:.7rem">Dolar Monitor</p>
                    <h3 class="p-0 m-0" style="font-size:1.2rem">{{precioDolarMonitor}}</h3>
                  </div>
                </div>
                <!-- Botones Escala de Tiempo -->
                <div class="mb-1 ml-4 d-flex justify-content-start align-items-center">
                  <span style="color:#666666;">Zoom</span>
                  <div class="col-sm-8 col-md-10 col-lg-7">
                    <f7-segmented>
                      <f7-button @click="sD7D" small outline color="gray" class="p-0">7d</f7-button>
                      <f7-button @click="sD15D" small outline color="gray" class="p-0">15d</f7-button>
                      <f7-button @click="sD30D" small outline color="gray" class="p-0">1m</f7-button>
                      <f7-button @click="resertScaleDolar" small outline color="gray" class="p-0">3m</f7-button>
                      <f7-button @click="resertScaleDolar" small outline color="gray" class="p-0">1y</f7-button>
                      <!-- <f7-button @click="resertScaleDolar" small outline color="gray" class="p-0">YTD</f7-button> -->
                      <f7-button @click="resertScaleDolar" small outline color="gray" class="p-0">ALL</f7-button>
                    </f7-segmented>
                  </div>
                </div>
                <!-- Graficos de linea -->
                <line-chart
                  id="mercadoDolar"
                  ref="mercadoDolar"
                  :chartData="dataDolar"
                  :options="optionsDolar"
                  :styles="styles"
                ></line-chart>
              </div>
              <!-- SPINNER -->
              <f7-block class="py-5 my-5 d-flex justify-content-center align-items-center" v-else>
                <fade-loader :loading="!dataDolarLoaded" color="DarkOrange" size="32px"></fade-loader>
              </f7-block>
            </app-card>
          </b-col>
          <!-- EURO -->
          <b-col sm="12" md="6">
            <app-card heading="Euro Oficial y Paralelo">
              <!-- LAYOUT -->
              <div v-if="dataEuroLoaded">
                <!-- Precio del Dia -->
                <div class="mb-3 ml-4 d-flex justify-content-start align-items-center">
                  <div class="col-4 col-sm-5 col-md-4" style="border-left: solid 5px Red;">
                    <p class="p-0 m-0" style="font-size:.7rem">Euro Oficial</p>
                    <h3 class="p-0 m-0" style="font-size:1.2rem">{{precioEuroOficial}}</h3>
                  </div>
                  <div class="col-4 col-sm-5 col-md-4" style="border-left: solid 5px Darkred;">
                    <p class="p-0 m-0" style="font-size:.7rem">Euro Paralelo</p>
                    <h3 class="p-0 m-0" style="font-size:1.2rem">{{precioEuroParalelo}}</h3>
                  </div>
                </div>
                <!-- Botones Escala de Tiempo -->
                <div class="mb-1 ml-4 d-flex justify-content-start align-items-center">
                  <!-- <b-col class="p-0 m-0 mr-auto"> -->
                  <span class="pr-2" style="color:#666666;">Zoom</span>
                  <!-- </b-col> -->
                  <div class="col-sm-8 col-md-10 col-lg-7">
                    <f7-segmented>
                      <f7-button @click="sE7D" small outline color="gray" class="p-0">7d</f7-button>
                      <f7-button @click="sE15D" small outline color="gray" class="p-0">15d</f7-button>
                      <f7-button @click="sE30D" small outline color="gray" class="p-0">1m</f7-button>
                      <f7-button @click="resertScaleEuro" small outline color="gray" class="p-0">3m</f7-button>
                      <f7-button @click="resertScaleEuro" small outline color="gray" class="p-0">1y</f7-button>
                      <!-- <f7-button @click="resertScaleEuro" small outline color="gray" class="p-0">YTD</f7-button> -->
                      <f7-button @click="resertScaleEuro" small outline color="gray" class="p-0">ALL</f7-button>
                    </f7-segmented>
                  </div>
                </div>
                <!-- Graficos de linea -->
                <line-chart
                  id="mercadoEuro"
                  ref="mercadoEuro"
                  :chartData="dataEuro"
                  :options="optionsEuro"
                  :styles="styles"
                ></line-chart>
              </div>
              <!-- SPINNER -->
              <f7-block class="py-5 my-5 d-flex justify-content-center align-items-center" v-else>
                <fade-loader :loading="!dataEuroLoaded" color="DarkOrange" size="32px"></fade-loader>
              </f7-block>
            </app-card>
          </b-col>
        </b-row>
    </f7-block>
    <!-- TABLAS HISTORICAS -->
    <f7-block>
      <b-row>
        <!-- DOLAR -->
        <b-col sm="12" md="6">
          <app-card heading="Dolar Informacion Diaria" v-if="tablaDolarLoaded">
            <div class="table-responsive mb-0">
              <div class="unseen">
                <table class="table table-hover table-bordered table-striped">
                  <thead>
                    <tr class="bg-primary">
                      <th class="fecha" style="min-width:100%">Fecha</th>
                      <th class="numeric euro">Dolar Oficial</th>
                      <th class="numeric dolar">Dolar Today</th>
                      <th class="numeric dolar">Monitor Dolar</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, i) in tablaDolar" :key="i">
                      <td class="fecha">{{ item.fecha }}</td>
                      <td class="numeric euro">{{ item.dolarOficial }}</td>
                      <td class="numeric dolar">{{ item.dolarToday }}</td>
                      <td class="numeric dolar">{{ item.dolarMonitor }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <!-- table responsive closed -->
          </app-card>
          <!-- SPINNER -->
          <f7-block v-else class="py-5 my-5 d-flex justify-content-center align-items-center">
            <fade-loader :loading="!tablaDolarLoaded" color="DarkOrange" size="32px"></fade-loader>
          </f7-block>
        </b-col>
        <!-- EURO -->
        <b-col sm="12" md="6">
          <app-card heading="Euro Informacion Diaria" v-if="tablaEuroLoaded">
            <div class="table-responsive mb-0">
              <div class="unseen">
                <table class="table table-hover table-bordered table-striped">
                  <thead>
                    <tr class="bg-primary">
                      <th class="fecha" style="min-width:100%">Fecha</th>
                      <th class="numeric euro">Euro Oficial</th>
                      <th class="numeric dolar">Euro Paralelo</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, i) in tablaEuro" :key="i">
                      <td class="fecha">{{ item.fecha }}</td>
                      <td class="numeric euro">{{ item.euroOficial }}</td>
                      <td class="numeric dolar">{{ item.euroParalelo }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </app-card>
          <f7-block v-else class="py-5 my-5 d-flex justify-content-center align-items-center">
            <fade-loader :loading="!tablaEuroLoaded" color="DarkOrange" size="32px"></fade-loader>
          </f7-block>
        </b-col>
      </b-row>
    </f7-block>
  </f7-page>
</template>
<script>
//Recursos
import Auth from "./../../auth";
// import ChartDataLabels from "chartjs-plugin-datalabels";
import { FadeLoader } from "vue-spinner/dist/vue-spinner.min.js";
import moment from "moment";
import "regenerator-runtime/runtime";
// import "chartjs-plugin-crosshair";
// import "chartjs-plugin-zoom";
//Componentes
import Slick from "vue-slick";
import { f7Row } from "framework7-vue";
import LineChart from "./LineChart.js";
import ChartConfig from "Constants/ChartConfig";
import TasasSlider from "./TasasSlider.vue";
import StatsCardV7 from "Components/StatsCardV7/StatsCardV7";
import TraderHistory from "Components/Widgets/TradeHistory";
import LineChartShadow from "Components/Charts/LineChartShadow";
import { mapState, mapActions } from "vuex";
// import { mapState, mapActions } from "vuex";

export default {
  components: {
    LineChart,
    FadeLoader,
    StatsCardV7,
    LineChartShadow,
    TraderHistory,
    Slick,
    TasasSlider
  },
  data() {
    return {
      ddCalendar:[
        { 
          weekdays: [1, 7]
        }
      ],
      attrsCalendar:[
        {
          key: 'today',
          highlight: true,
          dates: new Date(),
        },
        {
          dates: {
            weekdays: [1, 7]
          },
          highlight:{
            color:'red',
            fillMode: 'none'
          }
        }
      ],
      tablaDolarLoaded: false,
      tablaEuroLoaded: false,
      sliderLoaded: false,
      indicadoresLoaded: false,
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
      user:
        localStorage.getItem("user") != null
          ? JSON.parse(localStorage.getItem("user"))
          : "",
      ChartConfig,
      bitcoin: {
        icon: "cc BTC text-success",
        name: "Bitcoin",
        color: "fw-semi-bold text-success",
        duration: "last 4 days",
        market_cap: "0.0",
        market_cap_icon: "fa-arrow-up",
        market_cap_color: "success-text",
        chartLabel: ["A", "B", "C", "D", "E"],
        data: [1, 26, 8, 22, 1],
        chartBorderColor: ChartConfig.color.success
      },
      dfhora: "",
      f7D: null,
      f15D: null,
      f30D: null,
      minPE7D: null,
      minPE15D: null,
      minPE30D: null,
      minPD7D: null,
      minPD15D: null,
      minPD30D: null,
      horaDF: null,
      width: 100,
      height: 500,
      precioDolarBCV: null,
      precioDolarToday: null,
      precioDolarMonitor: null,
      precioEuroOficial: null,
      precioEuroParalelo: null,
      // Pre-Carga Flag
      dataDolarLoaded: false,
      dataEuroLoaded: false,
      // Barra de escala
      scaleEuroX: null,
      scaleDolarX: null,
      scaleEuroY: null,
      scaleDolarY: null,
      // Axis Graph 2D (x, y)
      baseMinDolarX: null,
      baseMaxDolarX: null,
      minDolarX: null,
      maxDolarX: null,
      minDolarY: null,
      maxDolarY: null,
      baseMinEuroX: null,
      baseMaxEuroX: null,
      minEuroX: null,
      maxEuroX: null,
      minEuroY: null,
      maxEuroY: null,
      // dataDolar Parametros
      dolarFecha: null,
      dolarBCV: null,
      dolarToday: null,
      dolarMonitor: null,
      dolarOil: null,
      // dataEuro Parametros
      euroFecha: null,
      euroOficial: null,
      euroParalelo: null,
      // Tablas de Historicos
      tablaDolar: [],
      tablaEuro: []
    };
  },
  methods: {
    sE7D() {
      this.minEuroX = this.f7D;
      this.minEuroY = this.minPE7D;
    },
    sE15D() {
      this.minEuroX = this.f15D;
      this.minEuroY = this.minPE15D;
    },
    sE30D() {
      this.minEuroX = this.f30D;
      this.minEuroY = this.minPE30D;
    },
    sD7D() {
      this.minDolarX = this.f7D;
      this.minDolarY = this.minPD7D;
    },
    sD15D() {
      this.minDolarX = this.f15D;
      this.minDolarY = this.minPD15D;
    },
    sD30D() {
      this.minDolarX = this.f30D;
      this.minDolarY = this.minPD30D;
    },
    resertScaleDolar() {
      this.minDolarX = this.baseMinDolarX;
      this.minDolarY = this.baseMinDolarY;
    },
    resertScaleEuro() {
      this.minEuroX = this.baseMinEuroX;
      this.minEuroY = this.baseMinEuroY;
    },
    getDataOficial() {
      this.axios.get(Auth.URL + "/api/bcv").then(async res => {
        let bcv = res.data.data;
        var fecha = [];
        var dolar = [];
        var euro = [];
        var dataEuro = [];
        var dataDolar = [];
        await bcv.forEach((e, i) => {
          var f = moment(e.fecha).format("L");
          fecha[i] = f;
          var eu = e.euro.replace(".", "");
          var d = e.dolar.replace(".", "");
          // euro[i] = eu.replace(",", ".");
          euro[i] = parseFloat(eu.replace(",", "."));
          // dolar[i] = d.replace(",", ".");
          dolar[i] = parseFloat(d.replace(",", "."));
          dataEuro[i] = {
            x: fecha[i],
            y: euro[i]
          };
          dataDolar[i] = {
            x: fecha[i],
            y: dolar[i]
          };
        });
        this.euroOficial = euro;
        this.dolarOficial = dolar;
        this.precioDolarBCV = dolar[dolar.length - 1];
        this.precioEuroOficial = euro[euro.length - 1];
        this.dataDolarLoaded = true;
      });
    },
    getDataParalelo() {
      this.axios.get(Auth.URL + "/api/dtd").then(async res => {
        let dtd = res.data.data;
        var fechaDtd = [];
        var dolarDtd = [];
        var euroDtd = [];
        var dataEuroDtd = [];
        var dataDolarDtd = [];
        await dtd.forEach((e, i) => {
          var f = moment(e.fecha).format("L");
          fechaDtd[i] = f;
          var eu2 = e.euro.replace(".", "");
          var d2 = e.dolar.replace(".", "");
          // euroDtd[i] = eu2.replace(",", ".");
          euroDtd[i] = parseFloat(eu2.replace(",", "."));
          // dolarDtd[i] = d2.replace(",", ".");
          dolarDtd[i] = parseFloat(d2.replace(",", "."));
          dataEuroDtd[i] = {
            x: fechaDtd[i],
            y: euroDtd[i]
          };
          dataDolarDtd[i] = {
            x: fechaDtd[i],
            y: dolarDtd[i]
          };
        });
        //Fecha Global
        this.f7D = fechaDtd[fechaDtd.length - 7];
        this.f15D = fechaDtd[fechaDtd.length - 15];
        this.f30D = fechaDtd[fechaDtd.length - 30];
        this.minPE7D =
          parseFloat(
            dtd[dtd.length - 7].euro.replace(".", "").replace(",", ".")
          ) -
          (parseFloat(
            dtd[dtd.length - 7].euro.replace(".", "").replace(",", ".")
          ) *
            20) /
            100;
        this.minPE15D =
          parseFloat(
            dtd[dtd.length - 15].euro.replace(".", "").replace(",", ".")
          ) -
          (parseFloat(
            dtd[dtd.length - 15].euro.replace(".", "").replace(",", ".")
          ) *
            25) /
            100;
        this.minPE30D =
          parseFloat(
            dtd[dtd.length - 30].euro.replace(".", "").replace(",", ".")
          ) -
          (parseFloat(
            dtd[dtd.length - 30].euro.replace(".", "").replace(",", ".")
          ) *
            15) /
            100;
        this.minPD7D =
          parseFloat(
            dtd[dtd.length - 7].dolar.replace(".", "").replace(",", ".")
          ) -
          (parseFloat(
            dtd[dtd.length - 7].dolar.replace(".", "").replace(",", ".")
          ) *
            20) /
            100;
        this.minPD15D =
          parseFloat(
            dtd[dtd.length - 15].dolar.replace(".", "").replace(",", ".")
          ) -
          (parseFloat(
            dtd[dtd.length - 15].dolar.replace(".", "").replace(",", ".")
          ) *
            25) /
            100;
        this.minPD30D =
          parseFloat(
            dtd[dtd.length - 30].dolar.replace(".", "").replace(",", ".")
          ) -
          (parseFloat(
            dtd[dtd.length - 30].dolar.replace(".", "").replace(",", ".")
          ) *
            20) /
            100;
        this.fecha = fechaDtd;
        this.euroFecha = fechaDtd;
        this.dolarFecha = fechaDtd;
        // Valor de la Tasa
        this.euroParalelo = euroDtd;
        this.dolarToday = dolarDtd;
        // Escala del Euro (x, y)
        // this.minEuroX = moment(dtd[0].fecha).format("L");
        this.minEuroX = this.f7D;
        this.maxEuroX = moment(dtd[dtd.length - 1].fecha).format("L");
        this.minEuroY =
          // Math.min(...euroDtd) - (Math.min(...euroDtd) * 13) / 100;
          this.minPE7D;
        this.maxEuroY = Math.max(...euroDtd) + (Math.max(...euroDtd) * 5) / 100;
        // Escala del Dolar (x, y)
        // this.minDolarX = moment(dtd[0].fecha).format("L");
        this.minDolarX = this.f7D;
        this.maxDolarX = moment(dtd[dtd.length - 1].fecha).format("L");
        this.minDolarY =
          // Math.min(...dolarDtd) - (Math.min(...dolarDtd) * 23) / 100;
          this.minPD7D;
        this.maxDolarY = Math.max(...dolarDtd) + (Math.max(...dolarDtd) * 5) / 100;
        this.baseMinEuroX = moment(dtd[0].fecha).format("L"); // this.minEuroX;
        this.baseMinDolarX = moment(dtd[0].fecha).format("L"); // this.minDolarX;
        this.baseMinEuroY =
          Math.min(...euroDtd) - (Math.min(...euroDtd) * 13) / 100;
        // this.minEuroY;
        this.baseMinDolarY =
          Math.min(...dolarDtd) - (Math.min(...dolarDtd) * 23) / 100;
        // this.minDolarY;
        this.precioDolarToday = dolarDtd[dolarDtd.length - 1];
        this.precioEuroParalelo = euroDtd[euroDtd.length - 1];
        // Pre-Carga del Euro
        this.dataEuroLoaded = true;
      });
    },
    getDolarMonitor() {
      this.axios.get(Auth.URL + "/api/dm").then(async res => {
        let dm = res.data.data;
        var fechaM = [];
        var dolarM = [];
        var dataDolarM = [];
        await dm.forEach((e, i) => {
          var f = moment(e.fecha).format("L");
          fechaM[i] = f;
          var d = e.dolar.replace(".", "");
          // dolarM[i] = d.replace(",", ".");
          dolarM[i] = parseFloat(d.replace(",", "."));
          dataDolarM[i] = {
            x: fechaM[i],
            y: dolarM[i]
          };
        });
        this.dolarMonitor = dolarM;
        this.precioDolarMonitor = dolarM[dolarM.length - 1];
        // this.dataDolarLoaded = true;
      });
    },
    getTablaDolar() {
      this.axios.get(Auth.URL + "/api/bcvDesc").then(async res => {
        var data = res.data.data;
        var tabla = {};
        await data.forEach((valor, index) => {
          tabla[index] = {
            fecha: moment(valor.fecha).format("L"),
            dolarOficial: valor.dolar,
            dolarToday: [],
            dolarMonitor: []
          };
        });
        this.axios.get(Auth.URL + "/api/dtdDesc").then( async res2 => {
          var data = res2.data.data;
          await data.forEach((valor, index) => {
            if (tabla[index] != undefined) {
              tabla[index].dolarToday = valor.dolar;
            }
          });
          this.axios.get(Auth.URL + "/api/dmDesc").then( async res3 => {
            var data = res3.data.data;
            await data.forEach((valor, index) => {
              if (tabla[index] != undefined) {
                tabla[index].dolarMonitor = valor.dolar;
              }
              this.tablaDolar = tabla;
              this.tablaDolarLoaded = true;
            });
          });
        });
      });
    },
    getTablaEuro() {
      this.axios
        .get(Auth.URL + "/api/bcvDesc")
        .then(res => {
          var data = res.data.data;
          var tabla = {};
          data.forEach((valor, index) => {
            tabla[index] = {
              fecha: moment(valor.fecha).format("L"),
              euroOficial: valor.euro,
              euroParalelo: null
            };
          });
          return tabla;
        })
        .then(tabla => {
          this.axios.get(Auth.URL + "/api/dtdDesc").then(res => {
            var data = res.data.data;
            data.forEach((valor, index) => {
              if (tabla[index] != undefined) {
                tabla[index].euroParalelo = valor.euro;
              }
              this.tablaEuro = tabla;
              this.tablaEuroLoaded = true;
            });
          });
        });
    },
    getPetroleo(){
      this.axios.get('http://pdsc.phoenixplus.net:8000/getTasasOIL').then(async res => {
        let oil = res.data.data;
        var fechaOil = [];
        var dolarOil = [];
        console.log(res);
        
        await oil.forEach((e, i) => {
          var f = moment(e.fecha).format("L");
          fechaOil[i] = f;
          var d = e.petroleo.replace(".", "");
          dolarOil[i] = parseFloat(d.replace(",", "."));
        });
        this.dolarOil = dolarOil;
      });
    },
    getTasasOficialHoy(){
      this.axios.get("http://" + Auth.HOST + ":8000/getTasasBCV").then(res => {
        var data = res.data;
        this.euroOficialHoy = data.Euro[0];
        this.dolarOficialHoy = data.Dolar[0];
      }).catch(err => console.log('Dolar',err));
    },
    getTasasParalelaHoy(){
      this.axios.get("http://" + Auth.HOST + ":8000/getTasasDTD").then(res => {
        var data = res.data;
        this.euroParaleloHoy = data.euro[0];
        this.dolarParaleloHoy = data.dolar[0];
      }).catch(err => console.log('Euro',err));
    },
    getTasasDolarMonitorHoy(){-
      this.axios
        .get("http://" + Auth.HOST + ":8000/getTasasDM")
        .then(res => {
          var data = res.data;
          this.monitorDolarHoy = data.dolar[0];
        })
        .catch(err => console.log("Dolar Monitor", err));
    },
    getTasasPetroleoHoy(){
      this.axios
        .get("http://" + Auth.HOST + ":8000/getTasasOIL")
        .then(res => {
          var data = res.data;
          this.petroleoHoy = data.petroleo[0];
        })
        .catch(err => console.log("Petroleo", err));
    },
    getTasasOroHoy(){
      this.axios
        .get("http://" + Auth.HOST + ":8000/getTasasORO")
        .then(res => {
          var data = res.data;
          this.oroHoy = data.oro[0];
        })
        .catch(err => console.log("Oro", err));
    },
    getTasasPetroHoy(){
      this.axios
        .get("http://" + Auth.HOST + ":8000/getTasasPTR")
        .then(res => {
          var data = res.data;
          this.petroHoy = data.bolivar[0];
        })
        .catch(err => console.log("Petro", err));
    },
    getTasasBitcoinHoy(){
      this.axios
        .get("http://" + Auth.HOST + ":8000/getTasasBTC")
        .then(res => {
          var data = res.data;
          this.bitcoinHoy = data.bitcoin[0]; 
        })
        .catch(err => console.log("Bitcoin", err));
    },
    getTasasSP500Hoy(){
      this.axios
        .get("http://" + Auth.HOST + ":8000/getTasasSP500")
        .then(res => {
          var data = res.data;
          this.sp500Hoy = data.sp500[0];
        })
        .catch(err => console.log("PS500", err));
    },
    getTasasNasdaqHoy(){
      this.axios
        .get("http://" + Auth.HOST + ":8000/getTasasNASDAQ")
        .then(res => {
          var data = res.data;
          this.nasdaqHoy = data.nasdaq[0];
        })
        .catch(err => console.log("Nasdaq", err));
    },
    async getTasasHoy() {
      await this.getTasasOficialHoy()
      await this.getTasasParalelaHoy()
      await this.getTasasPetroleoHoy()
      await this.getTasasOroHoy()
      await this.getTasasPetroHoy()
      await this.getTasasBitcoinHoy()
      await this.getTasasSP500Hoy()
      await this.getTasasNasdaqHoy()
      this.sliderLoaded = true;
      this.indicadoresLoaded = true;
    },
    hora() {
      let t = new Date();
      let h = t.getHours();
      let m = t.getMinutes();
      m = setFormato(m);
      let s = t.getSeconds();
      s = setFormato(s);

      function setFormato(i) {
        if (i < 10) {
          i = "0" + i;
        }
        return i;
      }
      t = setTimeout(this.hora, 500);
      this.horaDF = h + ":" + m + ":" + s;
    }
  },
  computed: {
    fullname: function() {
      return this.user.name + " " + this.user.ape;
    },
    dataDolar() {
      return {
        type: "line",
        labels: this.dolarFecha,
        datasets: [
          {
            label: "Dolar Oficial BCV",
            borderColor: "#252F5D",
            borderWidth: 2,
            hoverBorderWidth: 3,
            backgroundColor: "rgba(0, 0, 0, 0)",
            pointBorderColor: "#252F5D",
            pointBackgroundColor: "#252F5D",
            pointHoverBorderColor: "#252F5D",
            pointHoverBackgroundColor: "#252F5D",
            pointRadius: 1,
            data: this.dolarOficial
          },
          {
            label: "Dolar Today",
            borderColor: "Green",
            borderWidth: 2,
            hoverBorderWidth: 3,
            backgroundColor: "rgba(0, 0, 0, 0)",
            pointBorderColor: "Green",
            pointBackgroundColor: "Green",
            pointHoverBorderColor: "Green",
            pointHoverBackgroundColor: "Green",
            pointRadius: 1,
            data: this.dolarToday
          },
          {
            label: "Monitor Dolar",
            borderColor: "DarkOrange",
            borderWidth: 2,
            hoverBorderWidth: 3,
            backgroundColor: "rgba(0, 0, 0, 0)",
            pointBorderColor: "DarkOrange",
            pointBackgroundColor: "DarkOrange",
            pointHoverBorderColor: "DarkOrange",
            pointHoverBackgroundColor: "DarkOrange",
            pointRadius: 1,
            data: this.dolarMonitor
          }
        ]
      };
    },
    optionsDolar() {
      return {
        // showLines: false, // disable for all datasets
        responsive: true,
        maintainAspectRatio: false,
        // aspectRatio: 2,
        // plugins: [ChartDataLabels],
        scales: {
          xAxes: [
            {
              ticks: {
                min: this.minDolarX,
                max: this.maxDolarX
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                min: this.minDolarY,
                max: this.maxDolarY
                // stepSize: 20000
                // callback: function(value, index, values) {
                //   // return "BsS " + value;
                //   return value;
                // }
              }
            }
          ]
        },
        legend: {
          display: true,
          position: "bottom",
          align: "center",
          labels: {
            boxWidth: 10,
            fontSize: 12,
            fontStyle: "normal",
            fontColor: "#666",
            usePointStyle: true
          }
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        },
        animation: {
          duration: 0 // general animation time
        },
        tooltips: {
          mode: "index", //point, nearest, dataset, x, y, interpolate
          intersect: false,
          titleFontSize: 12,
          titleAlign: "center",
          titleSpacing: 2,
          titleMarginBottom: 6,
          xPadding: 6,
          yPadding: 6,
          caretPadding: 2,
          caretSize: 5,
          cornerRadius: 6,
          borderWidth: 0,
          borderColor: "rgba(0, 0, 0, 1)",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          position: "nearest"
        }
      };
    },
    styles() {
      return {
        width: `${this.width}%`,
        height: `${this.height}px`,
        position: "relative"
      };
    },
    dataEuro() {
      return {
        type: "line",
        labels: this.euroFecha,
        datasets: [
          {
            // showLine: false, // disable for a single dataset
            label: "Euro Oficial",
            borderWidth: 2, //3
            hoverBorderWidth: 3, //3
            borderColor: "Red",
            backgroundColor: "rgba(0, 0, 0, 0)",
            pointBorderColor: "Red",
            pointBackgroundColor: "Red",
            pointHoverBorderColor: "Red",
            pointHoverBackgroundColor: "Red",
            pointRadius: 1,
            data: this.euroOficial
          },
          {
            label: "Euro Paralelo",
            borderWidth: 2,
            hoverBorderWidth: 3,
            borderColor: "Darkred",
            backgroundColor: "rgba(0, 0, 0, 0)",
            pointBorderColor: "Darkred",
            pointBackgroundColor: "Darkred",
            pointHoverBorderColor: "Darkred",
            pointHoverBackgroundColor: "Darkred",
            pointRadius: 1,
            data: this.euroParalelo
          }
        ]
      };
    },
    optionsEuro() {
      return {
        // showLines: false, // disable for all datasets
        responsive: true,
        maintainAspectRatio: false,
        // aspectRatio: 2,
        // plugins: [ChartDataLabels],
        scales: {
          xAxes: [
            {
              ticks: {
                min: this.minEuroX,
                max: this.maxEuroX
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                min: this.minEuroY,
                max: this.maxEuroY
                // stepSize: 20000
                // callback: function(value, index, values) {
                //   // return "BsS " + value;
                //   return value;
                // }
              }
            }
          ]
        },
        legend: {
          display: true,
          position: "bottom",
          align: "center",
          labels: {
            boxWidth: 10,
            fontSize: 12,
            fontStyle: "normal",
            fontColor: "#666",
            usePointStyle: true
          }
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        },
        animation: {
          duration: 0 // general animation time
        },
        tooltips: {
          mode: "index", //point, nearest, dataset, x, y, interpolate
          intersect: false,
          // titleFontFamily
          // titleFontColor: '#fff',
          titleFontSize: 12,
          titleAlign: "center",
          titleSpacing: 2,
          titleMarginBottom: 6,
          // bodyFontFamily
          //footerFontFamily
          xPadding: 6,
          yPadding: 6,
          caretPadding: 2,
          caretSize: 5,
          cornerRadius: 6,
          // multiKeyBackground: '#fff',
          borderColor: "rgba(0, 0, 0, 1)",
          borderWidth: 0,
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          position: "nearest"
          // axis: 'y'
        }
      };
    },
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
      }]
    },
  },
  created() {
    this.getTasasHoy();
    this.getDolarMonitor();
    this.getDataOficial();
    this.getDataParalelo();
    this.getTablaEuro();
    this.getTablaDolar();
    this.hora();
  }
};
</script>