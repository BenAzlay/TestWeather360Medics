<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import axios from "axios";
import { mapState, mapActions } from 'vuex'

export default {
  name: 'App',
  mounted() {
    // Fetching from weatherapi API
    const apiKey = process.env.VUE_APP_WEATHERAPI_KEY
    axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=Paris&days=10&aqi=no&alerts=no`)
      .catch(error => {
        return new Promise(() => {
          console.log('fetching weather failed')
          console.log(error)
        })
      })
      .then(response => response.data)
      .then(this.saveWeather)
  },
  computed: {
    ...mapState(['weather'])
  },
  methods: {
    ...mapActions(['saveWeather'])
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
