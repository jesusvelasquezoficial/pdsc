import Spinner from 'vue-spinner/dist/vue-spinner.min.js';
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import Datepicker from 'vuejs-datepicker';
import VCalendar from 'v-calendar/lib/components/calendar.umd';
import CountUp from 'Components/CountUp/CountUp';
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import AppCard from 'Components/AppCard/AppCard';
import StatsCard from 'Components/StatsCard/StatsCard';
import StatsCardV2 from "Components/StatsCardV2/StatsCardV2"
import SocialStatsCard from 'Components/SocialStatsCard/SocialStatsCard';
import AppSectionLoader from 'Components/AppSectionLoader/AppSectionLoader';
import CryptoSlider from "Components/Widgets/CryptoSlider";
import IndicadoresTasas from "Components/Widgets/IndicadoresTasas";
import Calendario from "Components/Widgets/Calendario";
import GraphMercadoOficial from "Components/Widgets/GraphMercadoOficial";
import TablasMercados from 'Components/Widgets/TablasMercados';
import DeleteConfirmationDialog from 'Components/DeleteConfirmationDialog/DeleteConfirmationDialog';
// import TasasSlider from "Components/Widgets/TasasSlider";
const GlobalComponents = {
	install(Vue) {
		Vue.component('countUp', CountUp);
		Vue.component('appCard', AppCard);
		Vue.component('statsCard', StatsCard);
		Vue.component('statsCardV2', StatsCardV2);
		Vue.component('socialStatsCard', SocialStatsCard);
		Vue.component('vuePerfectScrollbar', VuePerfectScrollbar);
		Vue.component('pageTitleBar', PageTitleBar);
		Vue.component('datePicker', Datepicker);
		Vue.component('Calendar', VCalendar);
		Vue.component('appSectionLoader', AppSectionLoader);
		Vue.component('DeleteConfirmationDialog', DeleteConfirmationDialog);
		Vue.component('Spinner', Spinner);
		Vue.component('cryptoSlider', CryptoSlider);
		Vue.component('indicadoresTasas', IndicadoresTasas);
		Vue.component('calendario', Calendario);
		Vue.component('graphMercadoOficial', GraphMercadoOficial);
		Vue.component('TablasMercados', TablasMercados);
		// Vue.component('tasasSlider', TasasSlider);
	}
}
export default GlobalComponents