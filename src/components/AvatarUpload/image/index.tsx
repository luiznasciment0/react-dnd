import React from 'react'

import { CroppedImageWrapper } from './styles'

interface Props {
  file?: File
  error?: boolean
  bgImage: () => string
}

const Image = ({ bgImage }: Props) => {
  return <CroppedImageWrapper backgroundImage={bgImage} />
}

export default Image
