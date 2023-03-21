import React, { useState } from 'react';
import AddAnswerFormModal from './AddAnswerFormModal';;

//modal
const AddAnswerButton = ({ questionId }) => {
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
          Add Answer
        </button>
        {showModal && <AddAnswerFormModal questionId= {questionId} closeModal={handleCloseModal}/>}
      </> : null
  );
};

export default AddAnswerButton;
