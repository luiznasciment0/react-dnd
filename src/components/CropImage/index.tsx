import React, { ChangeEvent, useState } from 'react'
import Slider from '@material-ui/core/Slider'

import { Wrapper, ErrorMessageWrapper, SliderWrapper } from './styles'
import Image from '../Image'
import Typography from 'components/Typography'

interface Props {
  bgImage: () => string
}

const CropImage = ({ bgImage }: Props) => {
  const [value, setValue] = useState<number>(0)

  const handleSliderChange = (
    event: ChangeEvent<Record<string, unknown>>,
    newValue: number | number[]
  ) => {
    setValue(newValue as number)
  }

  return (
    <Wrapper>
      <Image bgImage={bgImage} />
      <ErrorMessageWrapper>
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
            onChange={handleSliderChange}
            value={value}
            aria-labelledby="slider"
          />
        </SliderWrapper>
      </ErrorMessageWrapper>
    </Wrapper>
  )
}

export default CropImage
