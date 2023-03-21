import React, { useState } from 'react';
import AddAnswerFormModal from './AddAnswerFormModal';

//modal
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
        <button
          style={{ textDecoration: 'underline', cursor: 'pointer' }}
          onClick={handleAddAnswerClick}
        >
          <small>Add Answer</small>
        </button>
        {showModal && <AddAnswerFormModal questionId= {questionId} questionBody={questionBody} closeModal={handleCloseModal} productName={productName}/>}
      </> : null
  );
};

export default AddAnswerButton;
