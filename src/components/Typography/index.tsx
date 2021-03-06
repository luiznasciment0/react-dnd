import styled, { css } from 'styled-components'

const theme = {
  colors: {
    primaryGray: '#495567',
    secondaryGray: '#677489',
    systemRed: '#C64D32',
    darkerGray: '#3D485F',
    white: '#FFFFFF'
  },
  sizes: {
    normal: '1.4rem',
    large: '1.6rem'
  }
}

interface Props {
  color?: keyof typeof theme.colors
  size?: keyof typeof theme.sizes
  fontWeight?: 400 | 500
  lineHeight?: string | number
  level?: 1 | 2 | 3 | 4 | 5 | 6
  underline?: boolean
  pointer?: boolean
}

const Typography = styled('h1').attrs<Props>(({ level }) => ({
  as: `h${level}`
}))<Props>`
  ${({
    color = 'primaryGray',
    size = 'normal',
    fontWeight = 400,
    lineHeight = '2.52rem',
    underline = false,
    pointer = false
  }) => css`
    font-size: ${theme.sizes[size]};
    color: ${theme.colors[color]};
    font-weight: ${fontWeight};
    line-height: ${lineHeight};
    cursor: ${pointer ? 'pointer' : 'text'};
    :hover {
      text-decoration-line: ${underline ? 'underline' : 'none'};
    }
  `}
`

export default Typography
