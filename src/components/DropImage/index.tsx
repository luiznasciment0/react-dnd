import React from 'react'

import { Wrapper, TextImageWrapper, Image } from './styles'
import defaultImage from 'assets/image.png'
import Typography from '../Typography'

const DropImage = () => (
  <Wrapper>
    <TextImageWrapper>
      <Image src={defaultImage} alt="Image placeholder" />
      <Typography level={1} fontWeight={500} size="normal">
        Organization Logo
      </Typography>
    </TextImageWrapper>
    <Typography level={2} color="secondaryGray" fontWeight={400} size="normal">
      Drop the image here or click to browse.
    </Typography>
  </Wrapper>
)

export default DropImage
