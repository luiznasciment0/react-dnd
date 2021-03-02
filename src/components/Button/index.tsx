import React from 'react'

import { StyledButton } from './styles'

interface Props {
  children: React.ReactNode
  action: () => void
}

const Button = ({ children, action }: Props) => (
  <StyledButton onClick={action}>{children}</StyledButton>
)

export default Button
