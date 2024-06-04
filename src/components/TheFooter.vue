<script setup>
import TheToggle from './TheToggle.vue'

const routes = [
  {
    route: '/cookies',
    label: 'Cookies'
  },
  {
    route: '/notifications',
    label: 'Notifications'
  },
  {
    route: '/general-policies',
    label: 'General Policies'
  }
]
</script>
<template>
  <footer class="footer">
    <TheToggle :routes />
  </footer>
</template>
