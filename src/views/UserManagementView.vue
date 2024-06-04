<script setup>
import UserManagement from '@/components/UserManagement.vue'
import { userData } from '@/user-data'
</script>

<template>
  <main>
    <UserManagement :userData />
  </main>
</template>
