import React from 'react'

import { Wrapper, ErrorMessageWrapper } from './styles'
import Image from '../Image'
import Typography from 'components/Typography'

interface Props {
  tryAgain: () => void
}

const Error = ({ tryAgain }: Props) => (
  <Wrapper>
    <Image error />
    <ErrorMessageWrapper>
      <Typography level={1} fontWeight={400} size="large" color="systemRed">
        Sorry, the upload failed.
      </Typography>
      <Typography
        level={2}
        color="darkerGray"
        fontWeight={500}
        size="large"
        underline
        onClick={tryAgain}
        pointer
      >
        Try again
      </Typography>
    </ErrorMessageWrapper>
  </Wrapper>
)

export default Error
