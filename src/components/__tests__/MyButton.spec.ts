import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import MyButton from '../MyButton.vue'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import { VBtn } from 'vuetify/components'

// Mock CSS imports
vi.mock('vuetify/lib/components/VCode/VCode.css', () => ({}))

// Create a Vuetify instance
const vuetify = createVuetify({
  components: {
    VBtn,
  },
})

describe('MyButton.vue', () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = mount(MyButton, {
      global: {
        plugins: [vuetify],
      },
    })
  })

  it('renders correctly with default props', () => {
    expect(wrapper.find('button').exists()).toBe(true)
    expect(wrapper.find('button').text()).toBe('Button')
    expect(wrapper.find('button').attributes('color')).toBe('primary')
    expect(wrapper.find('button').attributes('loading')).toBe('false')
  })

  it('renders correctly with custom props', () => {
    wrapper = mount(MyButton, {
      global: {
        plugins: [vuetify],
      },
      props: {
        color: 'success',
        content: 'Submit',
      },
    })
    expect(wrapper.find('button').text()).toBe('Submit')
    expect(wrapper.find('button').attributes('color')).toBe('success')
  })
})
