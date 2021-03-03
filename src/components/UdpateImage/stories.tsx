import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import UpdateImage from '.'

export default {
  title: 'UpdateImage',
  component: UpdateImage
} as Meta

export const Default: Story = () => (
  <UpdateImage
    bgImage={() => `url(/images/warning.png)`}
    reset={() => alert('reset')}
    save={() => alert('save')}
    isSaved={false}
  />
)
