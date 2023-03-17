//pops up a modal and adds a question
import React from 'react';

//MODAL
const AddQuestion = () => {
  return (
    <span>
      <button
        style={{
          border: '1px solid #ccc',
          borderRadius: '5px',
          padding: '5px 10px',
          background: 'none',
          cursor: 'pointer',
        }}
      >
        <b>ADD A QUESTION +</b>
      </button>
    </span>
  );
};

export default AddQuestion;