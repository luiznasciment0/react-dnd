import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import 'jest-styled-components'

import AvatarUpload from '.'

const setup = () => {
  const utils = render(<AvatarUpload />)

  return {
    ...utils
  }
}

describe('<AvatarUpload />', () => {
  it('should render the component', () => {
    const { container } = setup()

    expect(container.firstChild).toBeInTheDocument()
  })

  it('should show slider when user uploads image', () => {
    const file = new File(['hello'], 'hello.png', { type: 'image/png' })
    render(<AvatarUpload />)

    const fileInput = screen.getByLabelText('File input')

    fireEvent.change(fileInput, { target: { files: [file] } })
    fireEvent.input(fileInput)

    const slider = screen.getByLabelText('Slider')
    expect(slider).toBeInTheDocument()
  })

  // it('should zoom image when user move slider to right', () => {
  //   const file = new File(['hello'], 'hello.png', { type: 'image/png' })
  //   render(<AvatarUpload />)

  //   const fileInput = screen.getByLabelText('File input')

  //   fireEvent.change(fileInput, { target: { files: [file] } })
  //   fireEvent.input(fileInput)

  // const sliderElement = screen.getByLabelText('Slider').children[0]
  // expect(sliderElement).toBeInTheDocument()

  // const sliderInput = sliderElement.children[2]
  // expect(sliderInput).toBeInTheDocument()

  // fireEvent.change(sliderInput, { target: { value: 3 } })
  // fireEvent.input(sliderInput)

  //   const image = screen.getByLabelText('Image')

  //******************************** */
  /**  apparently jsdom don't get inline styles, find other way to test it (cypress?)
   *   https://github.com/styled-components/jest-styled-components/issues/295
   *   https://github.com/jsdom/jsdom/issues/1332
  //******************************** */

  //   expect(image).toHaveStyle('transform: scale(1.3)')
  // })

  it('should show a warning image when user uploads a file thats not an image', () => {
    const file = new File(['hello'], 'hello.pdf', { type: 'application/pdf' })
    render(<AvatarUpload />)

    const fileInput = screen.getByLabelText('File input')

    fireEvent.change(fileInput, { target: { files: [file] } })
    fireEvent.input(fileInput)

    const image = screen.getByLabelText('Image')

    expect(image).toHaveStyle('background-image: url(images/warning.png)')
  })

  it('should allow user to try again when an error show up', () => {
    const wrongFile = new File(['hello'], 'hello.pdf', {
      type: 'application/pdf'
    })
    const rightFile = new File(['hello'], 'hello.png', { type: 'image/png' })
    render(<AvatarUpload />)

    const fileInput = screen.getByLabelText('File input')

    fireEvent.change(fileInput, { target: { files: [wrongFile] } })
    fireEvent.input(fileInput)

    const image = screen.getByLabelText('Image')

    expect(image).toHaveStyle('background-image: url(images/warning.png)')

    const tryAgain = screen.getByLabelText('Try again')

    fireEvent.click(tryAgain)

    expect(fileInput).toBeInTheDocument()

    fireEvent.change(fileInput, { target: { files: [rightFile] } })
    fireEvent.input(fileInput)

    const slider = screen.getByLabelText('Slider')
    expect(slider).toBeInTheDocument()
  })

  it('should allow user to restart after image upload', () => {
    const file = new File(['hello'], 'hello.png', { type: 'image/png' })
    render(<AvatarUpload />)

    const fileInput = screen.getByLabelText('File input')

    fireEvent.change(fileInput, { target: { files: [file] } })
    fireEvent.input(fileInput)

    const image = screen.getByLabelText('Image')

    const closeButton = screen.getByLabelText('Close')
    fireEvent.click(closeButton)

    expect(screen.getByLabelText('File input')).toBeInTheDocument()
    expect(image).not.toBeInTheDocument()
  })

  it('should keep image after user click save button', () => {
    const file = new File(['hello'], 'hello.png', { type: 'image/png' })
    render(<AvatarUpload />)

    const fileInput = screen.getByLabelText('File input')

    fireEvent.change(fileInput, { target: { files: [file] } })
    fireEvent.input(fileInput)

    const image = screen.getByLabelText('Image')

    const saveButton = screen.getByLabelText('Save')
    fireEvent.click(saveButton)

    expect(screen.getByLabelText('File input')).toBeInTheDocument()
    expect(image).toBeInTheDocument()
  })
})
