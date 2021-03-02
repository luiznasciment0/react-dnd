import React, { memo } from 'react'

import { CroppedImageWrapper, Wrapper } from './styles'

interface Props {
  error?: boolean
  bgImage?: () => string
  zoom?: number
}

const Image = ({ bgImage, error, zoom }: Props) => {
  return (
    <Wrapper>
      <CroppedImageWrapper
        backgroundImage={bgImage}
        error={error}
        zoom={zoom}
      />
    </Wrapper>
  )
}

export default memo(Image)
