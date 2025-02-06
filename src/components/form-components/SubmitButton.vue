<template>
  <button :disabled="loading" type="submit">
    <span v-if="loading">Loading...</span>
    <span v-else><slot /></span>
  </button>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  loading: Boolean,
})
</script>

<style scoped>
button {
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}

button:disabled {
  background-color: #6c757d;
  cursor: not-allowed;
}
</style>
