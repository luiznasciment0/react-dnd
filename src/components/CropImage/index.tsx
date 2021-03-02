import React, { ChangeEvent, memo, useMemo, useState } from 'react'
import Slider from '@material-ui/core/Slider'

import { Wrapper, TextWrapper, SliderWrapper } from './styles'
import Image from '../Image'
import Typography from 'components/Typography'

interface Props {
  bgImage: () => string
}

const CropImage = ({ bgImage }: Props) => {
  const [value, setValue] = useState<number>(0)
  const memoizedZoom = useMemo(() => value, [value])

  const handleSliderChange = (
    event: ChangeEvent<Record<string, unknown>>,
    newValue: number | number[]
  ) => {
    setValue(newValue as number)
  }

  return (
    <Wrapper>
      <Image bgImage={bgImage} zoom={memoizedZoom} />
      <TextWrapper>
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
            min={1}
            max={10}
            aria-labelledby="slider"
          />
        </SliderWrapper>
      </TextWrapper>
    </Wrapper>
  )
}

export default memo(CropImage)
