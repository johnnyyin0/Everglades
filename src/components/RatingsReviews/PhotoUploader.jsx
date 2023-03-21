import React, { useState } from 'react'
import axios from 'axios'
import CarouselPhoto from './CarouselPhoto.jsx'
//import Path from 'path'

export default function PhotoUploader({ photos, setPhotos, setPhoto }) {

  const[photoToUpload, setPhotoToUpload] = useState({})
  const[showButton, setShowButton] = useState(true)

  const photoWidget = cloudinary.createUploadWidget({
    cloudName: 'dyrlg2pzz',
    uploadPreset: 'tiigxyou',
    cropping: true,
    multiple: false,
    clientAllowedFormats: ["image"]
  },
  (error, result) => { if(!error && result && result.event === "success"){
    console.log(result.info.secure_url, 'url')
    console.log()
    let newPhotos = photos.slice()
    newPhotos.push(result.info.secure_url)
    if (newPhotos.length >= 5) {
      setShowButton(false)
    }
    setPhotos(newPhotos)

  }
  })

  const handleSubmit = (evt) => {
    photoWidget.open()

  }

  return (
    <div>
      <div>{photos.length > 0 && <div className="pb-5 px-5 carousel">
      {photos.length > 0 && photos.map(photo => <CarouselPhoto src={photo} setPhoto={setPhoto}/>)}
      </div>}</div>
      {showButton && <div>
        <button className="btn" onClick={handleSubmit}>Add Photo</button>
      </div>}
    </div>
  )
}