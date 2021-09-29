<template>
  <div class="hello">
      <p>{{ forecastDay.date }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'ForecastDay',
  props: {
      index: {
          type: Number,
          required: true
      }
  },
  computed: {
      ...mapState(['weather']),
      forecastDay () {
          return this.weather.forecast.forecastday[this.index]
      }
  }
}
</script>

<style scoped>
</style>
