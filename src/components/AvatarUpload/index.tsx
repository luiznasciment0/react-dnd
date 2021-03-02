import React, { DragEvent, useState, useRef } from 'react'

import { Dropzone, FileInput } from './styles'
import EmptyState from '../EmptyState'
import Error from '../Error'
import CropImage from '../CropImage'

const AvatarUpload = () => {
  const [selectedFile, setSelectedFile] = useState<File>()
  const [error, setError] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const resetState = () => {
    setError(false)
    setSelectedFile(undefined)
  }

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

  const bgImage = () => {
    if (error || !selectedFile) return ''

    const imageURL = createURL(selectedFile)
    return `url(${imageURL})`
  }

  const fileInputClicked = () => {
    if (selectedFile || error) return
    const node = fileInputRef.current
    node?.click()
  }

  const filesSelected = () => {
    if (fileInputRef && fileInputRef.current) {
      const node = fileInputRef.current.files
      if (node?.length) {
        handleFile(node[0])
      }
    }
  }

  const renderComponent = () => {
    if (error) return <Error tryAgain={resetState} />

    if (!selectedFile)
      return (
        <>
          <EmptyState />
          <FileInput
            ref={fileInputRef}
            type="file"
            accept="image/png, image/jpeg, image/jpg"
            onChange={filesSelected}
          />
        </>
      )

    return <CropImage bgImage={bgImage} />
  }

  return (
    <>
      <Dropzone
        onDragOver={dragOver}
        onDragEnter={dragEnter}
        onDragLeave={dragLeave}
        onDrop={fileDrop}
        onClick={fileInputClicked}
      >
        {renderComponent()}
      </Dropzone>
    </>
  )
}

export default AvatarUpload
