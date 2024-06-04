<script setup>
import { ref } from 'vue'
const { currentUser } = defineProps({
  currentUser: Object
})

const languages = [
  { code: 'en', name: 'English' }, // Default selected
  { code: 'es', name: 'Español' },
  { code: 'he', name: 'עברית' }
]

const selectedLanguage = ref('en') // Set default language to English

const feedbackText = ref('')

const submitFeedback = () => {
  // Implement logic to handle feedback submission (e.g., console.log)
  alert('Feedback submitted: ' + feedbackText.value)
  feedbackText.value = '' // Clear feedback text box after submission
}
</script>

<template>
  <header class="header">
    <img class="logo" src="@/assets/logo.svg" alt="Company Logo" width="25" height="25" />
    <div class="user-info">
      <span class="username">Hi, {{ currentUser.username }}</span>
      <span class="profession">({{ currentUser.profession }})</span>
    </div>
    <div class="feedback-language">
      <div class="feedback">
        <span>Send Feedback:</span>
        <input type="text" v-model="feedbackText" placeholder="Enter your feedback" />
        <button @click.prevent="submitFeedback">Send</button>
      </div>
      <div class="language">
        <span>Language:</span>
        <select v-model="selectedLanguage">
          <option v-for="lang in languages" :key="lang.code" :value="lang.code">
            {{ lang.name }}
          </option>
        </select>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
  background-color: #f0f0f0;
}

.logo {
  width: 25px;
  height: 25px;
}

.user-info {
  margin-left: 1rem;
  font-weight: bold;
}

.feedback-language {
  margin-left: auto;
  display: flex;
  flex-direction: column;
}

.feedback,
.language {
  margin: 0.5rem 0;
}

.feedback button {
  padding: 0.25rem 0.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 0.25rem;
}

@media (min-width: 768px) {
  .header {
    padding: 1rem 2rem;
  }

  .feedback-language {
    flex-direction: row;
  }

  .feedback,
  .language {
    margin: 0;
    margin-right: 1rem;
  }

  .feedback button {
    font-size: 0.8rem;
  }
}
</style>
