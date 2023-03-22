import React, { useState, useEffect } from 'react';

const AddPhotos = () => {
  const [imageDataList, setImageDataList] = useState([]);
  const [uploadButtonVisible, setUploadButtonVisible] = useState(true);

  const handleUpload = () => {
    window.cloudinary.openUploadWidget({
      cloudName: 'dyrlg2pzz',
      uploadPreset: 'tiigxyou',
      cropping: true,
      multiple: true,
      maxFiles: 5, 
      clientAllowedFormats: ["image"],
    }, 
    (error, results) => {
      if (!error && results.event === 'success') {
        const newImageDataList = [...imageDataList];
        results.info.forEach((result) => {
          newImageDataList.push(result);
        });
        setImageDataList(newImageDataList);
        if (newImageDataList.length === 5) {
          setUploadButtonVisible(false);
        }
      }
    });
  };

  return (
    <div>
      <b>Add Photos: </b>
      {uploadButtonVisible && <button className='btn' onClick={handleUpload}>Upload</button>}
      {imageDataList.map((imageData, index) => (
        <div key={index}>
          <img src={imageData.secure_url} alt={imageData.public_id} />
        </div>
      ))}
    </div>
  );
};

export default AddPhotos;