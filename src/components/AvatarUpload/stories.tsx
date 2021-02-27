import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import AvatarUpload from '.'

export default {
  title: 'AvatarUpload',
  component: AvatarUpload
} as Meta

export const Default: Story = () => <AvatarUpload />
