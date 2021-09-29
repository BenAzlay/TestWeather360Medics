<template>
  <div class="">
    <div class="mb-2">
      <h1 class="font-black text-xl">
        Paris weather forecast ({{ forecasts ? forecasts.length : 0 }} days)
      </h1>
      <p class="font-light">
        Last updated: {{ lastUpdated }}
      </p>
    </div>
    <div v-for="forecast in forecasts" :key="forecast.date" >
      <ForecastDay class="mb-2" :forecast="forecast"/>
    </div>
    
  </div>
</template>

<script>
import axios from "axios";
import { mapState, mapActions } from 'vuex'
import ForecastDay from '@/components/ForecastDay.vue'

export default {
  name: 'Home',
  data() {
    return {
    }
  },
  components: {
    ForecastDay
  },
  beforeRouteEnter(to, from, next) {
    // Fetching from weatherapi API
    const apiKey = process.env.VUE_APP_WEATHERAPI_KEY
    axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=Paris&days=10&aqi=no&alerts=no`)
      .catch(error => {
        return new Promise(() => {
          console.log('fetching weather failed')
          console.log(error)
        })
      })
      .then(res => {
        next(vm => vm.saveWeather(res.data))
      })
  },
  computed: {
    ...mapState(['weather']),
    forecasts () {
      return this.weather ? this.weather.forecast.forecastday : null
    },
    lastUpdated () {
      return this.weather ? this.weather.location.localtime.split(' ')[1] : null
    }
  },
  methods: {
    ...mapActions(['saveWeather']),
  }
}
</script>
