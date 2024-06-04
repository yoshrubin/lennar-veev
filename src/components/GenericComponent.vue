<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

console.log(route)
</script>
<template>
  <div class="route-name">{{ route.name }}</div>
</template>

<style scoped>
.route-name {
  color: red;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-top: 2rem;
}
</style>
