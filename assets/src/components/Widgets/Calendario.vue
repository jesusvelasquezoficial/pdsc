<template>
  <div id="calendario">
      <div class="col-md-12 mb-sm-4 grid-b-space">
        <calendar :attributes='attrsCalendar' :disabled-dates='ddCalendar'  :masks="{ weekdays: 'WW' }" class='m-0 p-0' style="height:239px;" is-expanded/>
      </div>
  </div>
</template>
<script>
export default {
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
    }
  },
}
</script>