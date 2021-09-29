<template>
  <div class="p-3 border-2 rounded">
    <h1 class="font-bold text-lg">
        {{ new Date(forecast.date).toLocaleString('fr-FR').split(',')[0] }}
    </h1>
    <div class="flex flex-row items-start space-x-4 mb-2">
        <!-- Icon -->
        <div>
            <img class="h-24" :src="forecast.day.condition.icon" alt="WeatherIcon">
        </div>
        
        <!-- Infos -->
        <div class="flex flex-col">
            <span class="underline font-bold">{{forecast.day.condition.text}}</span>
            <ListItem
                v-for="info in dayInfos" :key="info.attribute"
                :title="info.title"
                :content="forecast.day[info.attribute]" />
        </div>
    </div>
    <!-- Hours -->
    <h1 class="font-bold mb-2">
        Hourly forecast:
    </h1>
    <div class="flex flex-wrap">
        <ForecastHour
            v-for="hour in forecast.hour" :key="hour.time_epoch"
            :hour="hour" />
    </div>
  </div>
</template>

<script>
import ListItem from '@/components/ListItem.vue'
import ForecastHour from '@/components/ForecastHour.vue'

export default {
  name: 'ForecastDay',
  data() {
      return {
          dayInfos: [
              {
                  attribute: 'maxtemp_c',
                  title: "Max. temperature"
              },
              {
                  attribute: 'mintemp_c',
                  title: "Min. temperature"
              },
              {
                  attribute: 'avgtemp_c',
                  title: "Average temperature"
              }
          ]
      }
  },
  props: {
      forecast: Object,
  },
  components: {
    ListItem,
    ForecastHour
  },
  computed: {
  }
}
</script>

<style scoped>
</style>
