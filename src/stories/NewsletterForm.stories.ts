import type { Meta, StoryObj } from '@storybook/vue3'
import NewsletterForm from '../components/form/NewsletterForm.vue'

const meta: Meta<typeof NewsletterForm> = {
  title: 'Form/NewsletterForm',
  component: NewsletterForm,
  tags: ['autodocs'],
  argTypes: {
    // Define controls for the props if needed
  },
  args: {
    // Provide default args if needed
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    // Provide default args for the Default story
  },
}
