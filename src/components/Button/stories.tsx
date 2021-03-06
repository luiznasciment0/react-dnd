import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Button from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story = (args) => (
  <Button action={() => alert('clicked')} ariaLabel="Confirm">
    {args.children}
  </Button>
)

Default.args = {
  children: 'Confirm'
}
