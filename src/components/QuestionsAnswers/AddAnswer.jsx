import React, { useState } from 'react';

//modal
const AddAnswer = ({ questionId }) => {
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
        {showModal && (
          <div className='add-answer-modal-overlay'>
            <div className='add-answer-modal-box'>
              <span className='close' onClick={handleCloseModal}>
                &times;
              </span>
              <p>
                <label className="label">
                  <span className="label-text">Username:</span>
                </label><input type="text" placeholder="Enter username..." className="input input-bordered w-full max-w-xs" />
                <label className="label">
                  <span className="label-text">Email:</span>
                </label><input type="text" placeholder="Enter email..." className="input input-bordered w-full max-w-xs" />
                <label className="label">
                  <span className="label-text">Your Answer:</span>
                </label><input type="text" placeholder="Type your answer here..." className="input input-bordered w-full max-w-xs" />
              </p>
            </div> 
          </div>
        )}
      </> : null
  );
};

export default AddAnswer;
