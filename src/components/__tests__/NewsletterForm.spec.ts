import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import NewsletterForm from '../form/NewsletterForm.vue'

// Mock the v-text-field component
const VTextField = {
  template: `
    <div>
      <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
      <div v-if="errorMessages.length" class="v-messages__message">{{ errorMessages[0] }}</div>
    </div>
  `,
  props: ['modelValue', 'label', 'type', 'errorMessages', 'outlined', 'dense', 'hideDetails'],
}

// Mock window.alert
global.alert = vi.fn()

describe('NewsletterForm.vue', () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = mount(NewsletterForm, {
      global: {
        components: {
          'v-text-field': VTextField,
        },
      },
    })
  })

  it('renders correctly', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('matches snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('updates form data when input fields change', async () => {
    const inputs = wrapper.findAll('input')
    const nameInput = inputs[0]
    const emailInput = inputs[1]

    await nameInput.setValue('John Doe')
    await emailInput.setValue('john.doe@example.com')

    expect(wrapper.vm.formData.name).toBe('John Doe')
    expect(wrapper.vm.formData.email).toBe('john.doe@example.com')
  })

  it('displays validation errors when fields are invalid', async () => {
    await wrapper.find('form').trigger('submit.prevent')

    expect(wrapper.find('.v-messages__message').exists()).toBe(true)
    expect(wrapper.find('.v-messages__message').text()).toBe('Name is required')
  })

  it('submits the form when fields are valid', async () => {
    wrapper.vm.formData = {
      name: 'John Doe',
      email: 'john.doe@example.com',
    }

    await wrapper.find('form').trigger('submit.prevent')

    expect(wrapper.emitted()).toHaveProperty('submit')
  })

  it('handles loading state correctly', async () => {
    wrapper.vm.formData = {
      name: 'John Doe',
      email: 'john.doe@example.com',
    }

    await wrapper.find('form').trigger('submit.prevent')

    expect(wrapper.vm.loading).toBe(true)

    // Simulate form submission delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    expect(wrapper.vm.loading).toBe(false)
  })
})
