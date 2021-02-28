import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

interface CroppedImageProps {
  backgroundImage?: () => string
}

export const CroppedImageWrapper = styled.div<CroppedImageProps>`
  width: 11.3rem;
  height: 11.3rem;
  border-radius: 7.25rem;
  background: #c3cbd5;
  ${({ backgroundImage }) => css`
    background-image: ${backgroundImage};
  `}
  background-repeat: no-repeat;
  background-position: center;
`
