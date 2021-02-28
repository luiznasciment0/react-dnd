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

  const handleFiles = (files: FileList) => {
    for (let i = 0; i < 1; i++) {
      if (validateFile(files[i])) {
        setSelectedFile(files[i])
      } else {
        setError(true)
      }
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
    const files = e.dataTransfer.files
    if (files.length) {
      handleFiles(files)
    }
  }

  return (
    <>
      <Dropzone
        onDragOver={dragOver}
        onDragEnter={dragEnter}
        onDragLeave={dragLeave}
        onDrop={fileDrop}
      >
        {!selectedFile && <EmptyState />}
        <Image file={selectedFile} error={error} />
      </Dropzone>
    </>
  )
}

export default AvatarUpload
