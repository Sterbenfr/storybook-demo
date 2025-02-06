<template>
  <form @submit.prevent="handleSubmit">
    <InputField v-model="formData.name" label="Name" :error="errors.name" />
    <InputField v-model="formData.email" label="Email" type="email" :error="errors.email" />
    <SubmitButton :loading="loading">Submit</SubmitButton>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import InputField from '../form-components/InputField.vue'
import SubmitButton from '../form-components/SubmitButton.vue'

/**
 * Form data object
 */
const formData = ref({
  name: '',
  email: '',
})

/**
 * Error messages for form fields
 */
const errors = ref({
  name: '',
  email: '',
})

/**
 * Loading state for form submission
 */
const loading = ref(false)

/**
 * Validate the form fields
 * @returns {boolean} - Returns true if the form is valid, otherwise false
 */
const validateForm = () => {
  let valid = true
  if (!formData.value.name) {
    errors.value.name = 'Name is required'
    valid = false
  } else {
    errors.value.name = ''
  }

  if (!formData.value.email) {
    errors.value.email = 'Email is required'
    valid = false
  } else if (!/\S+@\S+\.\S+/.test(formData.value.email)) {
    errors.value.email = 'Email is invalid'
    valid = false
  } else {
    errors.value.email = ''
  }

  return valid
}

/**
 * Handle form submission
 */
const handleSubmit = () => {
  if (validateForm()) {
    loading.value = true
    // Simulate form submission
    setTimeout(() => {
      loading.value = false
      alert('Form submitted!')
    }, 1000)
  }
}
</script>
