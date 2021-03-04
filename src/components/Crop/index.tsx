import React, { ChangeEvent } from 'react'
import Slider from '@material-ui/core/Slider'

import { SliderWrapper, Close, ButtonWrapper, Wrapper } from './styles'

import CloseIcon from 'assets/closeicon.png'
import Typography from '../Typography'
import Button from '../Button'

interface Props {
  sliderChange: (
    event: ChangeEvent<Record<string, unknown>>,
    newValue: number | number[]
  ) => void
  value: number
  reset: () => void
  save: () => void
}

const Crop = ({ sliderChange, value, reset, save }: Props) => {
  return (
    <Wrapper>
      <div>
        <Typography
          level={1}
          fontWeight={400}
          size="large"
          color="secondaryGray"
        >
          Crop
        </Typography>
        <SliderWrapper aria-label="Slider">
          <Slider onChange={sliderChange} value={value} min={1} max={10} />
        </SliderWrapper>
        <ButtonWrapper>
          <Button action={save} ariaLabel="Save">
            Save
          </Button>
        </ButtonWrapper>
      </div>
      <Close src={CloseIcon} onClick={reset} aria-label="Close" />
    </Wrapper>
  )
}

export default Crop
