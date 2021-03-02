import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  width: 11.3rem;
  height: 11.3rem;
  overflow: hidden;
  border-radius: 7.25rem;
`

interface CroppedImageProps {
  backgroundImage?: () => string
  error?: boolean
  zoom?: number
}

export const CroppedImageWrapper = styled.div<CroppedImageProps>`
  height: 11.3rem;
  width: 11.3rem;
  border-radius: 7.25rem;
  background: #c3cbd5;
  ${({ backgroundImage, error, zoom }) => css`
    background-image: ${error ? 'url("images/warning.png")' : backgroundImage};
    transform: scale(${zoom ? 1 + zoom / 10 : 1});
  `}
  background-repeat: no-repeat;
  background-position: center;
`
