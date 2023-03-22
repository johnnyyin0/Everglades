import React, { useState } from 'react';
import AddAnswerFormModal from './AddAnswerFormModal';

const AddAnswerButton = ({ questionId, productName, questionBody, getAnswers}) => {

  const [showModal, setShowModal] = useState(false);

  const handleAddAnswerClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      {questionId && (
        <>
          <span
            style={{ textDecoration: 'underline', cursor: 'pointer' }}
            onClick={handleAddAnswerClick}
          >
            <small>Add Answer</small>
          </span>
          {showModal && (
            <AddAnswerFormModal
              getAnswers={getAnswers}
              questionId={questionId}
              questionBody={questionBody}
              closeModal={handleCloseModal}
              productName={productName}
            />
          )}
        </>
      )}
    </div>
  );
};

export default AddAnswerButton;
