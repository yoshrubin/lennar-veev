<script setup>
import { RouterView } from 'vue-router'
import { userData } from './user-data'
import TheHeader from './components/TheHeader.vue'
import UserManagement from './components/UserManagement.vue'
import TheFooter from './components/TheFooter.vue'

const currentUser = userData[0] //would probably be in state management in large scale app to avoid prop drilling
</script>

<template>
  <TheHeader :user="currentUser" />
  <UserManagement />
  <TheFooter />
  <RouterView />
</template>
