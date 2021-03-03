import React, {
  ChangeEvent,
  memo,
  useMemo,
  useState,
  useRef,
  useEffect
} from 'react'

import { Wrapper, TextWrapper } from './styles'

import Image from 'components/Image'
import Crop from 'components/Crop'
import DropImage from 'components/DropImage'

interface Props {
  bgImage: () => string
  reset: () => void
  save: () => void
  resetSave: () => void
  isSaved: boolean
}

const UpdateImage = ({ bgImage, reset, isSaved, save, resetSave }: Props) => {
  const [value, setValue] = useState<number>(0)
  const memoizedZoom = useMemo(() => value, [value])

  const imgRef = useRef<HTMLDivElement>(null)

  const handleSliderChange = (
    event: ChangeEvent<Record<string, unknown>>,
    newValue: number | number[]
  ) => {
    setValue(newValue as number)
  }

  const setZoom = (zoom?: number) => {
    imgRef.current?.style.setProperty(
      'transform',
      `scale(${zoom ? 1 + zoom / 10 : 1})`
    )
  }

  useEffect(() => {
    setZoom(memoizedZoom)
  }, [memoizedZoom])

  useEffect(() => {
    resetSave()
    setValue(0)
  }, [bgImage, resetSave])

  return (
    <Wrapper>
      <Image bgImage={bgImage} imgRef={imgRef} />
      <TextWrapper>
        {isSaved ? (
          <DropImage />
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
