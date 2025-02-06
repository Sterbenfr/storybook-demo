import { withVuetifyTheme } from './withVuetifyTheme.decorator'
import { setup } from '@storybook/vue3'
import vuetify from '../src/plugins/vuetify'

setup((app) => {
  app.use(vuetify)
})

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    expanded: true,
    sort: 'requiredFirst',
  },
  docs: {
    inlineStories: false,
  },
  tags: ['autodocs'],
}

export const globalTypes = {
  theme: {
    name: 'vuetify.theme.defaultTheme',
    description: 'Global theme for components',
    toolbar: {
      icon: 'paintbrush',
      items: [
        { value: 'light', title: 'Light', left: '🌞' },
        { value: 'dark', title: 'Dark', left: '🌛' },
      ],
      dynamicTitle: true,
    },
  },
}

export const decorators = [withVuetifyTheme]
