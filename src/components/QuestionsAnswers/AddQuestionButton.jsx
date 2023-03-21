//pops up a modal and adds a question
import React, {useState} from 'react';
import AddQuestionFormModal from './AddQuestionFormModal';

//MODAL
const AddQuestionButton = ({productName, productId, getQuestions}) => {
  const [showModal, setShowModal] = useState(false);

  const handleAddQuestionClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <span>
      <button
        style={{
          border: '1px solid #ccc',
          borderRadius: '10px',
          padding: '10px 10px',
          background: 'none',
          cursor: 'pointer',
        }}
        onClick={handleAddQuestionClick}
      >
        <b> ADD A QUESTION +</b>
      </button>
      {showModal && <AddQuestionFormModal closeModal={handleCloseModal} productName={productName} productId={productId} getQuestions={getQuestions}/>}
    </span>
  );
};

export default AddQuestionButton;