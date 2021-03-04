import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Image from '.'

export default {
  title: 'Image',
  component: Image
} as Meta

export const Default: Story = () => (
  <Image bgImage={() => `url('images/warning.png')`} error />
)
