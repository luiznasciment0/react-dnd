import React from 'react'

import { Wrapper, ErrorMessageWrapper, Close } from './styles'
import Image from '../Image'
import Typography from '../Typography'
import CloseIcon from 'assets/closeicon.png'

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
        aria-label="Try again"
      >
        Try again
      </Typography>
    </ErrorMessageWrapper>
    <Close src={CloseIcon} onClick={tryAgain} />
  </Wrapper>
)

export default Error
