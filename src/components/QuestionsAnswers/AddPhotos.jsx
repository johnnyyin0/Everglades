import React, { useState } from 'react';

const AddPhotos = ({onSubmit}) => {
  const [photos, setPhotos] = useState([]);

  const handlePhotoChange = (e) => {
    const urls = e.target.value.split('\n');
    const selectedPhotos = urls.slice(0, 5).map(url => ({
      url,
      preview: url
    })).filter(photo => photo.url.match(/\.(jpeg|jpg|png|gif)$/) !== null);
    //remove the preview data
    const selectedUrls = selectedPhotos.map(photo => photo.url);
    setPhotos(selectedPhotos);
    onSubmit(selectedUrls);
  }

  return (
    <div>
      <label className='label' htmlFor="photos">
        <span className='label-text'>Add Photo URL's (only up to 5)</span>
      </label>
      <textarea
        className='input input-bordered w-full max-w-xs'
        id="photos"
        rows="5"
        onChange={handlePhotoChange}
      />
      {photos.map(photo => (
        <img key={photo.preview} src={photo.preview} alt={photo.url} width="100" height="100"
        />
      ))}
    </div>
  );
};

export default AddPhotos;