import React from 'react'

import { CroppedImageWrapper } from './styles'

interface Props {
  error?: boolean
  bgImage?: () => string
}

const Image = ({ bgImage, error }: Props) => {
  return <CroppedImageWrapper backgroundImage={bgImage} error={error} />
}

export default Image
