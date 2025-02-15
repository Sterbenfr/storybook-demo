import MyButton from '../components/MyButton.vue'

export default {
  title: 'MyButton',
  component: MyButton,
  argTypes: {
    color: {
      control: {
        options: ['primary', 'secondary', 'success', 'info', 'warning', 'error'],
      },
    },
    loading: {
      control: {
        type: 'boolean',
      },
    },
    content: {
      control: {
        type: 'text',
      },
    },
  },
}

import type { StoryFn } from '@storybook/vue3'

const Template: StoryFn = (args) => ({
  components: { MyButton },
  setup() {
    return { args }
  },
  template: '<MyButton v-bind="args" content="click me"/>',
})

export const Primary = Template.bind({})
Primary.args = {
  color: 'primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
  color: 'secondary',
}

export const WithLoading = Template.bind({})
WithLoading.args = {
  color: 'error',
  loading: true,
}
