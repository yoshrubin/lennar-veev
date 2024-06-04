<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const { routes } = defineProps({
  routes: Array
})

const toggle = (navRoute) => {
  router.push(navRoute)
}
</script>

<template>
  <div class="wrapper">
    <div class="toggle" v-for="navRoute in routes" :key="navRoute.route">
      <input
        type="radio"
        :value="navRoute.route"
        :id="navRoute.route"
        :checked="navRoute.route === route.path"
        @click="toggle(navRoute.route)"
      />
      <label :for="navRoute.route">{{ navRoute.label }}</label>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.wrapper > div {
  margin: 0 0.5rem;
}

.toggle:hover {
  color: blue;
  cursor: pointer;
}
</style>
