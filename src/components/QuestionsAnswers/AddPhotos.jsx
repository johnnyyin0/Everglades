import React, { useState } from 'react';
import { Image } from 'cloudinary-react';

const AddPhotos = ({ onSubmit }) => {
  const [photos, setPhotos] = useState([]);
  const [uploadWidget, setUploadWidget] = useState(null);

  const handleUploadClick = (e) => {
    e.preventDefault()
    const widget = window.cloudinary.createUploadWidget({
      cloudName: 'dyrlg2pzz',
      uploadPreset: 'tiigxyou',
      multiple: true,
      maxFiles: 5 - photos.length,
      resourceType: 'image',
      showAdvancedOptions: false,
      cropping: false,
      theme: 'minimal'
    }, (error, result) => {
      if (!error && result && result.event === 'success') {
        const selectedPhotos = [
          ...photos,
          {
            url: result.info.secure_url,
            preview: result.info.public_id
          }
        ];
        setPhotos(selectedPhotos);
        const selectedUrls = selectedPhotos.map(photo => photo.url);
        // console.log('selectedUrls', selectedUrls)
        onSubmit(selectedUrls);
      }
    });
    setUploadWidget(widget);
    widget.open();
  }

  return (
    <div style={{marginTop:'10px'}}>
     <b>{'('}OPTIONAL: Add up to 5 photos{')'}</b> 
        <div style={{marginTop:'10px'}}>
        {photos.length < 5 && (
          <button className="btn" onClick={handleUploadClick}>
            Add Photo
          </button>
        )}
      </div>
      <div style={{marginTop:'10px'}}>
        {photos.map(photo => (
          <Image 
            key={photo.preview}
            cloudName="dyrlg2pzz"
            publicId={photo.preview}
            width="100"
            height="100"
            crop="fill"
            alt={photo.url}
          />
        ))}
      </div>
    </div>
  );
};

export default AddPhotos;