<script setup>
import { RouterView } from 'vue-router'
import { userData } from './user-data'
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'

const currentUser = userData[0] //would probably be in state management in large scale app to avoid prop drilling
</script>

<template>
  <TheHeader :current-user="currentUser" />
  <RouterView />
  <TheFooter />
</template>
