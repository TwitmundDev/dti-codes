<script setup>
import { ref, computed, onMounted } from 'vue'
import CodeComponent from '../assets/component/CodeComponent.vue'
import { fetchCodes } from '../utils/codeFetcher'

const codeInput = ref('')
const codes = ref({})

onMounted(async () => {
  codes.value = await fetchCodes()
})

const matchingCodes = computed(() => {
  const search = codeInput.value.trim().toUpperCase()
  if (search.length < 3) return {}
  const result = {}
  Object.entries(codes.value).forEach(([key, value]) => {
    if (key.includes(search)) {
      result[key] = value
    }
  })
  return result
})
</script>

<template>
  <div class="code-checker-container">
    <h1>Code verificator</h1>
    <input class="inputCode" type="text" v-model="codeInput" placeholder="Enter the code" />
    <div v-if="codeInput.trim().length >= 3">
      <div v-if="Object.keys(matchingCodes).length">
        <div v-for="(codeDetail, code) in matchingCodes" :key="code">
          <CodeComponent :name="codeDetail.name" :expired="codeDetail.expired" :code="code" />
        </div>
      </div>
      <div v-else>
        <p>Code not found.</p>
      </div>
    </div>
    <div v-else class="codeMessage">
      <p>Please enter a minimum of 3 letters.</p>
    </div>
  </div>
</template>

<style scoped>
.code-checker-container {
  max-width: 600px;
  margin: 2rem auto;
  padding: 1rem;
  text-align: center;
}
.inputCode {
  width: 90%;
  padding: 0.8rem;
  border-radius: 8px;
  border: 1px solid var(--third-color);
  margin-bottom: 1.5rem;
  background-color: var(--primary-color);
}
h1 {
  color: var(--primary-text-color);
  margin-bottom: 1rem;
}
.codeMessage {
  margin-top: 1rem;
  font-size: 1.2rem;
  color: var(--primary-text-color);
}
</style>