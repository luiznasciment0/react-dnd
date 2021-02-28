import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Error from '.'

export default {
  title: 'Error',
  component: Error
} as Meta

export const Default: Story = () => <Error tryAgain={() => alert('clicked')} />
