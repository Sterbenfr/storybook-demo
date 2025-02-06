<template>
  <div class="input-wrapper">
    <v-text-field
      :label="label"
      v-model="internalValue"
      :type="type"
      :error-messages="error ? [error] : []"
      outlined
      dense
      hide-details="auto"
      class="custom-text-field"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  modelValue: String,
  label: String,
  type: {
    type: String,
    default: 'text',
  },
  error: String, // Add a prop for the error message
})

const emit = defineEmits(['update:modelValue'])

const internalValue = ref(props.modelValue)

watch(internalValue, (newValue) => {
  emit('update:modelValue', newValue)
})

watch(
  () => props.modelValue,
  (newValue) => {
    internalValue.value = newValue
  },
)
</script>

<style scoped>
.input-wrapper {
  position: relative;
  margin-bottom: 1rem;
}

.custom-text-field .v-input__control {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0.5rem;
  transition: border-color 0.3s;
}

.custom-text-field .v-input__control:focus-within {
  border-color: #007bff;
}

.custom-text-field .v-input__control--error {
  border-color: #ff0000;
}

.custom-text-field .v-messages__message {
  color: #ff0000;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}
</style>
