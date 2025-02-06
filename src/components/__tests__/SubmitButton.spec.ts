import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SubmitButton from '../form-components/SubmitButton.vue'

describe('SubmitButton.vue', () => {
  it('renders correctly', () => {
    const wrapper = mount(SubmitButton, {
      props: {
        loading: false,
      },
      slots: {
        default: 'Submit',
      },
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('displays loading state', () => {
    const wrapper = mount(SubmitButton, {
      props: {
        loading: true,
      },
      slots: {
        default: 'Submit',
      },
    })
    expect(wrapper.text()).toBe('Loading...')
  })
})
