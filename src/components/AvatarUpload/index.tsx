import React, { DragEvent, useState } from 'react'

import { Dropzone } from './styles'
import EmptyState from './initial'
import Image from './image'

const AvatarUpload = () => {
  const [selectedFile, setSelectedFile] = useState<File>()
  const [error, setError] = useState(false)

  const validateFile = (file: File) => {
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png']

    if (!validTypes.includes(file.type)) return false
    return true
  }

  const handleFiles = (file: File) => {
    validateFile(file) ? setSelectedFile(file) : setError(true)
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
      handleFiles(file)
    }
  }

  const createURL = (file: File) => URL.createObjectURL(file)

  const bgImage = () => {
    if (error) return 'url("images/warning.png")'

    if (selectedFile) {
      const imageURL = createURL(selectedFile)
      return `url(${imageURL})`
    }

    return ''
  }

  return (
    <>
      <Dropzone
        onDragOver={dragOver}
        onDragEnter={dragEnter}
        onDragLeave={dragLeave}
        onDrop={fileDrop}
      >
        {!selectedFile ? <EmptyState /> : <Image bgImage={bgImage} />}
      </Dropzone>
    </>
  )
}

export default AvatarUpload
