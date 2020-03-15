<template>
  <!-- <div id="calendario">
    <b-calendar 
    v-bind="labels['es'] || {}"
    v-model="value" 
    :min="min" 
    :max="max" 
    locale="es"
    selected-variant="primary" 
    today-variant="secundary"
    no-highlight-today
    block 
    :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
    value-as-date
    :date-info-fn="dateClass"
    :start-weekday="weekday"
    hide-header
    >
    </b-calendar>
  </div> -->
  <div id="calendario" class="mx-3">
		<b-row class="grid-b-space">
      <b-col md="12" class="p-md-0">
        <calendar :attributes='attrsCalendar' :disabled-dates='ddCalendar' isDark color="gray" :masks="{ weekdays: 'WW' }" class='mt-md-2 m-0 p-0' style="width:0px; height:217px;" is-expanded/>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  data() {
    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    // 15th two months prior
    const minDate = new Date(today)
    minDate.setMonth(minDate.getMonth() - 2)
    minDate.setDate(15)
    // 15th in two months
    const maxDate = new Date(today)
    maxDate.setMonth(maxDate.getMonth() + 2)
    maxDate.setDate(15)
    return {
      value: '',
      min: minDate,
      max: maxDate,
      weekday: 1,
      labels:{
        es: {
            labelPrevYear: '<<',
            labelPrevMonth: '<',
            labelCurrentMonth: '☺',
            labelNextMonth: '>',
            labelNextYear: '>>',
            labelToday: '',
            labelSelected: 'Seleccionado',
            labelNoDateSelected: 'No seleccionado',
            labelCalendar: 'Calendario',
            labelNav: 'Nav',
            labelHelp: 'Texto de Ayuda'
          },
      },
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
    }
  },
  methods: {
    dateClass(ymd, date) {
      const day = date.getDate()
      return day >= 10 && day <= 20 ? 'table-info' : ''
    }
  },
}
</script>
<style>
  /* .fondoCalendario{
    background-color: rgba(0,0,0,0.5) !important;
  } */
  .vc-container{
    /* background: #6d6d6d; */
    /* color: #fff; */
    border-color: #424242;
  }
  .vc-header{
    padding: 0px !important;
    /* color: #fff; */
  }
  .vc-title{
    /* color: #fff; */
  }
  .vc-title-wrapper{
    margin-top: .0rem;
    /* background: #424242; */
    /* color: #fff; */
  }
  .vc-flex{
    background: #424242;
  }
  .vc-bg-gray-900{
    background: #424242;
  }
  .vc-arrows-container{
    padding-top: .1rem;
    padding-bottom: .0rem;
    /* background: #424242; */
    /* color: #fff; */
  }
  .vc-svg-icon{
    background: #424242;
  }
  .vc-grid-container .vc-weeks{
    padding: .0rem;
  }
</style>