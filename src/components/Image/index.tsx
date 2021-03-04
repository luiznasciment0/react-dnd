import React, { memo, RefObject } from 'react'

import { CroppedImageWrapper, Wrapper } from './styles'

interface Props {
  error?: boolean
  bgImage?: () => string
  imgRef?: RefObject<HTMLDivElement>
}

const Image = ({ bgImage, error, imgRef }: Props) => {
  return (
    <Wrapper>
      <CroppedImageWrapper
        backgroundImage={bgImage}
        error={error}
        ref={imgRef}
        aria-label="Image"
      />
    </Wrapper>
  )
}

export default memo(Image)
