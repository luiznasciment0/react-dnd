import React from 'react'

import { CroppedImageWrapper } from './styles'

interface Props {
  file?: File
  error?: boolean
}

const Image = ({ error = false }: Props) => {
  const bgImage = () => {
    if (error) return 'url("images/warning.png")'
    return ''
  }

  return <CroppedImageWrapper backgroundImage={bgImage} />
}

export default Image
