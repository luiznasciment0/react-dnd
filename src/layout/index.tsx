import React, { ReactNode } from 'react'

import { Content, Main } from './styles'

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => (
  <>
    <Main>
      <Content>{children}</Content>
    </Main>
  </>
)

export default Layout
