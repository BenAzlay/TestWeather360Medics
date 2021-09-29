<template>
  <div class="flex flex-col items-center px-2">
    <img class="h-12" :src="hour.condition.icon" alt="HourIcon">
    <span class="font-semibold">{{ hour.temp_c }}°C</span>
    <span class="font-light text-sm">{{ hour.time.split(' ')[1] }}</span>
  </div>
</template>

<script>
export default {
  name: 'ForecastHour',
  data() {
      return {
      }
  },
  props: {
      hour: Object,
  },
  components: {
  },
  computed: {
  }
}
</script>

<style scoped>
</style>
