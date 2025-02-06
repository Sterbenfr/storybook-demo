import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import InputField from '../form-components/InputField.vue'

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

describe('InputField.vue', () => {
  it('renders correctly', () => {
    const wrapper = mount(InputField, {
      global: {
        components: {
          'v-text-field': VTextField,
        },
      },
      props: {
        label: 'Name',
        modelValue: '',
      },
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('emits update:modelValue event', async () => {
    const wrapper = mount(InputField, {
      global: {
        components: {
          'v-text-field': VTextField,
        },
      },
      props: {
        label: 'Name',
        modelValue: '',
      },
    })
    const input = wrapper.find('input')
    await input.setValue('John Doe')
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual(['John Doe'])
  })

  it('displays error message', () => {
    const wrapper = mount(InputField, {
      global: {
        components: {
          'v-text-field': VTextField,
        },
      },
      props: {
        label: 'Name',
        modelValue: '',
        error: 'This field is required',
      },
    })
    expect(wrapper.find('.v-messages__message').text()).toBe('This field is required')
  })
})
