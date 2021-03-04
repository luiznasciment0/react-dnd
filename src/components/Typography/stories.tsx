import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Typography from '.'

export default {
  title: 'Typography',
  component: Typography
} as Meta

export const Default: Story = (args) => <Typography {...args}>Test</Typography>
