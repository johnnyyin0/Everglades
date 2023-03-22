import React, { useState } from 'react';

import AddAnswerFormModal from './AddAnswerFormModal';

const AddAnswerButton = ({ questionId, productName, questionBody}) => {

  const [showModal, setShowModal] = useState(false);

  const handleAddAnswerClick = () => {
    console.log('QUESTION ID FROM ADD ANSWER:', questionId)
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    questionId ?
      <>
        <label
          style={{ textDecoration: 'underline', cursor: 'pointer' }}
          onClick={handleAddAnswerClick}
        >
          <small>Add Answer</small>
        </label>
        {showModal && <AddAnswerFormModal questionId= {questionId} questionBody={questionBody} closeModal={handleCloseModal} productName={productName}/>}
      </> : null
  );
};

export default AddAnswerButton;
