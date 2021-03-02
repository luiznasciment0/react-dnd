import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import EmptyState from '.'

export default {
  title: 'EmptyState',
  component: EmptyState
} as Meta

export const Default: Story = () => <EmptyState />
