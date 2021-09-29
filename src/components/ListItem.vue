<template>
  <div class="flex flex-row items-center">
      <span class="font-bold mr-2">{{ title }}:</span>
      <span class="">{{ content }}°C</span>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
      title: String,
      content: [String, Number]
  },
  computed: {
  }
}
</script>