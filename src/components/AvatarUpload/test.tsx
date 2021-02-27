import React from 'react'
import { render } from '@testing-library/react'

import AvatarUpload from '.'

describe('<AvatarUpload />', () => {
  it('should render the component', () => {
    const component = render(<AvatarUpload />)

    expect(component).toBeInTheDocument()
  })
})
