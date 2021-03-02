import React, { ChangeEvent } from 'react'
import Slider from '@material-ui/core/Slider'

import { SliderWrapper, Close, ButtonWrapper, Wrapper2 } from './styles'

import CloseIcon from 'assets/closeicon.png'
import Typography from 'components/Typography'
import Button from 'components/Button'

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
    <Wrapper2>
      <div>
        <Typography
          level={1}
          fontWeight={400}
          size="large"
          color="secondaryGray"
        >
          Crop
        </Typography>
        <SliderWrapper>
          <Slider
            onChange={sliderChange}
            value={value}
            min={1}
            max={10}
            aria-labelledby="slider"
          />
        </SliderWrapper>
        <ButtonWrapper>
          <Button action={save}>Save</Button>
        </ButtonWrapper>
      </div>
      <Close src={CloseIcon} onClick={reset} />
    </Wrapper2>
  )
}

export default Crop
