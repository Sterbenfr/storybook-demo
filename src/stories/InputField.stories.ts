import type { Meta, StoryObj } from '@storybook/vue3'
import InputField from '../components/form-components/InputField.vue'

const meta: Meta<typeof InputField> = {
  title: 'Form/InputField',
  component: InputField,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    modelValue: { control: 'text' },
    error: { control: 'text' },
  },
  args: {
    label: 'Name',
    modelValue: '',
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Name',
    modelValue: '',
  },
}

export const WithError: Story = {
  args: {
    label: 'Name',
    modelValue: '',
    error: 'This field is required',
  },
}
