import SubmitButton from '../components/form-components/SubmitButton.vue'

export default {
  title: 'Form/SubmitButton',
  component: SubmitButton,
}

import type { StoryFn } from '@storybook/vue3'

const Template: StoryFn = (args) => ({
  components: { SubmitButton },
  setup() {
    return { args }
  },
  template: '<SubmitButton v-bind="args">Submit</SubmitButton>',
})

export const Default = Template.bind({})
Default.args = {
  loading: false,
}
