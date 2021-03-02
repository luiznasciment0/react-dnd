import React, { ChangeEvent, memo, useMemo, useState } from 'react'

import { Wrapper, TextWrapper } from './styles'

import Image from 'components/Image'
import Crop from 'components/Crop'
import EmptyState from 'components/EmptyState'

interface Props {
  bgImage: () => string
  reset: () => void
  filesSelected?: () => void
  inputRef?: React.RefObject<HTMLInputElement>
}

const UpdateImage = ({ bgImage, reset, filesSelected, inputRef }: Props) => {
  const [value, setValue] = useState<number>(0)
  const [isSaved, setIsSaved] = useState<boolean>(false)
  const memoizedZoom = useMemo(() => value, [value])

  const handleSliderChange = (
    event: ChangeEvent<Record<string, unknown>>,
    newValue: number | number[]
  ) => {
    setValue(newValue as number)
  }

  const save = () => {
    setIsSaved(true)
  }

  return (
    <Wrapper>
      <Image bgImage={bgImage} zoom={memoizedZoom} />
      <TextWrapper>
        {isSaved ? (
          <EmptyState filesSelected={filesSelected} inputRef={inputRef} />
        ) : (
          <Crop
            sliderChange={handleSliderChange}
            value={value}
            reset={reset}
            save={save}
          />
        )}
      </TextWrapper>
    </Wrapper>
  )
}

export default memo(UpdateImage)
