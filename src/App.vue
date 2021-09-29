<template>
  <div class="px-2">
    <router-view/>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapState(['weather'])
  },
  methods: {
    ...mapActions(['saveWeather'])
  }
}
</script>

<style>
</style>
