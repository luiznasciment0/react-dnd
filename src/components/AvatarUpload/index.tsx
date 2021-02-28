import React, { DragEvent, useState, useRef } from 'react'

import { Dropzone, FileInput } from './styles'
import EmptyState from './initial'
import Image from './image'

const AvatarUpload = () => {
  const [selectedFile, setSelectedFile] = useState<File>()
  const [error, setError] = useState(false)

  const isValidFile = (file: File) => {
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png']

    if (!validTypes.includes(file.type)) setError(true)

    return true
  }

  const handleFiles = (file: File) => {
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
      handleFiles(file)
    }
  }

  const createURL = (file: File) => URL.createObjectURL(file)

  const bgImage = () => {
    if (error || !selectedFile) return ''

    const imageURL = createURL(selectedFile)
    return `url(${imageURL})`
  }

  const fileInputRef = useRef<HTMLInputElement>(null)

  const fileInputClicked = () => {
    if (selectedFile || error) return
    const node = fileInputRef.current
    node?.click()
  }

  const filesSelected = () => {
    if (fileInputRef && fileInputRef.current) {
      const node = fileInputRef.current.files
      if (node?.length) {
        handleFiles(node[0])
      }
    }
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
        {!selectedFile ? (
          <>
            <EmptyState />
            <FileInput
              ref={fileInputRef}
              type="file"
              accept="image/png, image/jpeg, image/jpg"
              onChange={filesSelected}
            />
          </>
        ) : (
          <Image bgImage={bgImage} error={error} />
        )}
      </Dropzone>
    </>
  )
}

export default AvatarUpload
