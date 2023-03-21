import React, { useState } from 'react'
import {fill} from "@cloudinary/url-gen/actions/resize";
import {CloudinaryImage} from '@cloudinary/url-gen';


export default function PhotoUploader({ photos, setPhotos }) {

  const[photoToUpload, setPhotoToUpload] = useState('')

  const handleSelect = (evt) => {
    console.log(evt.target.files[0])
  }

  const handleUpload = (evt) => {
    console.log(evt.target)
  }

  return (
    <div>
      <div>{photos.length > 0 && <div className="pb-5 px-5 carousel">
      {review.photos.map(photo => <CarouselPhoto src={photo.url} setPhoto={props.setPhoto}/>)}
      </div>}</div>
      <input type="file" className="file-input file-input-bordered w-full max-w-xs" onChange={handleSelect} /><button className="btn" onClick={handleUpload}>Add Photo</button>
    </div>
  )
}