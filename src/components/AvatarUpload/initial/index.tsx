import React from 'react'

import { Wrapper, Image } from './styles'
import defaultImage from 'assets/image.png'
import Typography from 'components/Typography'

const EmptyState = () => (
  <>
    <Wrapper>
      <Image src={defaultImage} alt="Image placeholder" />
      <Typography level={1} fontWeight={500} size="normal">
        Organization Logo
      </Typography>
    </Wrapper>
    <Typography level={2} color="secondaryGray" fontWeight={400} size="normal">
      Drop the image here or click to browse.
    </Typography>
  </>
)

export default EmptyState
