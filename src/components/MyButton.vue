<template>
  <v-btn :color="color" :loading="loading">
    <!-- @slot To put any element inside the button-->
    <slot>
      {{ content }}
    </slot>
  </v-btn>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue'
export type Props = {
  /** Color of the button */
  color?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error'

  /** To show a loading icon */
  loading?: boolean

  /** the content of the button */
  content?: string
}
withDefaults(defineProps<Props>(), {
  loading: false,
  color: 'primary',
  content: 'Button',
})
/***the comments in the above example
 * aren't just there for clarification purposes inside our code, but they are being displayed as descriptions
 * for the props and slots by stories automatically. */
</script>
