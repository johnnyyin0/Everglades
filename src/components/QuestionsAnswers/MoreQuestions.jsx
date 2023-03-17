//more questions loads another 2 questions button
import React, { useState } from 'react';

const MoreQuestions = () => {
  const [numberQuestionsToShow, setNumberQuestionsToShow] = useState(2);

  const handleShowMore = () => {
    setNumberQuestionsToShow(numberQuestionsToShow + 2);
  };

  return (
    <span>
        <button style={{
          border: '1px solid #ccc',
          borderRadius: '5px',
          padding: '5px 10px',
          background: 'none',
          cursor: 'pointer',
        }} onClick={handleShowMore}><b>MORE QUESTIONS</b></button>
    </span>
  );
};

export default MoreQuestions;