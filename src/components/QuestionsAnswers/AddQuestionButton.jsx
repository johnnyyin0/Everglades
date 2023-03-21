//pops up a modal and adds a question
import React, {useState} from 'react';
import AddQuestionFormModal from './AddQuestionFormModal';
import QuestionList from './QuestionList';

//MODAL
const AddQuestionButton = ({productName}) => {
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
      {showModal && <AddQuestionFormModal closeModal={handleCloseModal} productName={productName}/>}
    </span>
  );
};

export default AddQuestionButton;