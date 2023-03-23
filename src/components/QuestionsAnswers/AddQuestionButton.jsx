import React, {useState} from 'react';
import AddQuestionFormModal from './AddQuestionFormModal';

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
      className='btn'
        style={{
          marginTop: '10px',
          padding: '10px 10px',
        }}
        onClick={handleAddQuestionClick}
      >
        ADD A QUESTION +
      </button>
      {showModal && <AddQuestionFormModal closeModal={handleCloseModal} productName={productName} productId={productId} getQuestions={getQuestions}/>}
    </span>
  );
};

export default AddQuestionButton;