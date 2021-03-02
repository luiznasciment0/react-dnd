import React from 'react'

import { Wrapper, TextImageWrapper, Image, FileInput } from './styles'
import defaultImage from 'assets/image.png'
import Typography from 'components/Typography'

interface Props {
  filesSelected?: () => void
  inputRef?: React.RefObject<HTMLInputElement>
}

const EmptyState = ({ filesSelected, inputRef }: Props) => (
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
    <FileInput
      ref={inputRef}
      type="file"
      accept="image/png, image/jpeg, image/jpg"
      onChange={filesSelected}
    />
  </Wrapper>
)

export default EmptyState
