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
    <div>
      {images.map((image) => (
        <img className="h-32"
          src={image.thumbnailUrl.url}
          onClick={() => handleImageClick(image)}
        />
      ))}
      {modalImage && (
        <div className='question-answer-modal-overlay'>
        <div className='question-answer-modal-box'>
        <img src={modalImage.fullUrl.url}/>
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
