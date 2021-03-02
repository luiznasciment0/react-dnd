import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import CropImage from '.'

export default {
  title: 'CropImage',
  component: CropImage
} as Meta

export const Default: Story = () => (
  <CropImage bgImage={() => `url(/images/warning.png)`} />
)
