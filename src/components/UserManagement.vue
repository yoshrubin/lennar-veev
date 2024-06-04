<script setup>
import { ref } from 'vue'
const { userData } = defineProps({
  userData: Array
})

const displayOptions = ref(['list', 'card'])

const selectedDisplayOption = ref(displayOptions.value[0])
</script>
<template>
  <div class="user-management">
    <h1>User Management</h1>
    <select v-model="selectedDisplayOption">
      <option v-for="option in displayOptions" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
    <div v-if="selectedDisplayOption === 'list'">
      <ul>
        <li v-for="user in userData" :key="user.id">
          <img :src="user.image" :alt="`${user.username}'s profile`" width="20" height="20" />
          {{ user.username }} -
          {{ user.profession }}
        </li>
      </ul>
    </div>
    <div v-if="selectedDisplayOption === 'card'">
      <div class="card-grid">
        <div class="grid-item" v-for="user in userData" :key="user.id">
          <img :src="user.image" :alt="`${user.username}'s profile`" />
          <h3>{{ user.username }}</h3>
          <p>{{ user.profession }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.user-management {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.user-management > * {
  margin-bottom: 1rem;
}

select {
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  border: 1px solid #ccc;
  text-transform: capitalize;
  transition: all 0.1s ease-out;
}

select:hover {
  cursor: pointer;
  border: blue 2px solid;
  transition: all 0.1s ease-in;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
}

li > * {
  margin-right: 0.5rem;
}

li > img {
  border-radius: 50%;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}

.grid-item {
  text-align: center;
}

.grid-item > img {
  width: 100%;
  height: auto;
  border-radius: 50%;
}

@media (min-width: 768px) {
  .card-grid {
    grid-template-columns: repeat(2, minmax(200px, 1fr));
    gap: 4rem;
  }
}
</style>
