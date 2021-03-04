import React, { DragEvent, useState, useRef, useCallback } from 'react'

import { Dropzone } from './styles'
import DropImage from '../DropImage'
import Error from '../Error'
import UpdateImage from '../UdpateImage'

const AvatarUpload = () => {
  const [selectedFile, setSelectedFile] = useState<File>()
  const [error, setError] = useState(false)
  const [isSaved, setIsSaved] = useState<boolean>(false)

  const inputRef = useRef<HTMLInputElement>(null)

  const resetState = () => {
    setError(false)
    setSelectedFile(undefined)
  }

  const save = () => {
    setIsSaved(true)
  }

  const resetSave = useCallback(() => {
    setIsSaved(false)
  }, [])

  const isValidFile = (file: File) => {
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png']

    if (!validTypes.includes(file.type)) return setError(true)

    return true
  }

  const handleFile = (file: File) => {
    if (isValidFile(file)) {
      setSelectedFile(file)
    }
  }

  const dragOver = (e: DragEvent) => {
    e.preventDefault()
  }

  const dragEnter = (e: DragEvent) => {
    e.preventDefault()
  }

  const dragLeave = (e: DragEvent) => {
    e.preventDefault()
  }

  const fileDrop = (e: DragEvent) => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    if (file) {
      handleFile(file)
    }
  }

  const createURL = (file: File) => URL.createObjectURL(file)

  const bgImage = useCallback(() => {
    if (error || !selectedFile) return ''

    const imageURL = createURL(selectedFile)
    return `url(${imageURL})`
  }, [error, selectedFile])

  const fileInputClicked = () => {
    if (error) return

    const node = inputRef?.current
    node?.click()
  }

  const filesSelected = () => {
    if (inputRef && inputRef.current) {
      const node = inputRef.current?.files
      if (node?.length) {
        handleFile(node[0])
      }
    }
  }

  const renderComponent = () => {
    if (error) return <Error tryAgain={resetState} />

    if (!selectedFile && !isSaved) return <DropImage />

    return (
      <UpdateImage
        bgImage={bgImage}
        reset={resetState}
        isSaved={isSaved}
        save={save}
        resetSave={resetSave}
      />
    )
  }

  const renderInput = () => {
    if ((!selectedFile && !isSaved) || (selectedFile && isSaved))
      return (
        <input
          ref={inputRef}
          style={{ display: 'none' }}
          type="file"
          accept="image/png, image/jpeg, image/jpg"
          onChange={filesSelected}
          aria-label="File input"
        />
      )
  }

  return (
    <>
      <Dropzone
        onDragOver={dragOver}
        onDragEnter={dragEnter}
        onDragLeave={dragLeave}
        onDrop={fileDrop}
        onClick={fileInputClicked}
        aria-labelledby="Drop file zone"
      >
        {renderComponent()}
        {renderInput()}
      </Dropzone>
    </>
  )
}

export default AvatarUpload
