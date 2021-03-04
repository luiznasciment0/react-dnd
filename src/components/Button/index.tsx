import React from 'react'

import { StyledButton } from './styles'

interface Props {
  children: React.ReactNode
  action: () => void
  ariaLabel: string
}

const Button = ({ children, action, ariaLabel }: Props) => (
  <StyledButton onClick={action} aria-label={ariaLabel}>
    {children}
  </StyledButton>
)

export default Button
