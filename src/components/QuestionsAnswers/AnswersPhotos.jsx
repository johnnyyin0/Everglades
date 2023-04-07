import React, { useState } from 'react';

const AnswersPhotos = ({ photos }) => {
  const [modalImage, setModalImage] = useState(null);

  const images = photos.map((url) => ({
    thumbnailUrl: url,
    fullUrl: url,
  }));

  const handleImageClick = (image) => {
    setModalImage(image);
  };

  const handleModalClose = () => {
    setModalImage(null);
  };

  return (
    <div style={{ display: 'flex' }}>
      {images.map((image, index) => (
        <img 
          key={index}
          className="h-32"
          style={{ width: '150px', height: '150px', objectFit: 'cover', marginTop:'10px', marginBottom:'10px', marginRight: '10px' }}
          src={image.thumbnailUrl.url}
          alt="answer photos"
          onClick={() => handleImageClick(image)}
        />
      ))}
      {modalImage && (
        <div className='question-answer-modal-overlay' onClick={handleModalClose}>
        <div className='question-answer-modal-photo-box'>
        <img src={modalImage.fullUrl.url} style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="answer photos full"/>
        <span className='close' onClick={handleModalClose}>
          &times;
        </span>
        </div>
        </div>
      )}
    </div>
  );
};

export default AnswersPhotos;