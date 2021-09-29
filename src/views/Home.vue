<template>
  <div class="home">
    <ForecastDay :index="0"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ForecastDay from '@/components/ForecastDay.vue'

export default {
  name: 'Home',
  components: {
    ForecastDay
  }
}
</script>
