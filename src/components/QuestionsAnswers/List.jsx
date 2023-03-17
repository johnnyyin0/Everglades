import React, { useState } from 'react';
import Answers from './Answers';

const List = ({ questions }) => {
  //should import Answers for every questionID(imported from Answers)
  //have a add answer(imported from AddAnswer)
  //each question should have a button for helpfulness
  //each question should have a report button(pops up modal)

  //should have a helpful? Yes button and import Add Answer

  const [searchTerm, setSearchTerm] = useState('');

  const filteredQuestions = questions.filter(question => {
    return question.question_body.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  //each question map out the answer and display 2 at max
  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
        style={{
          margin: '20px 0',
          opacity: searchTerm ? 1 : 0.5,
          border: '1px solid black',
          width: '800px',
          height: '50px',
        }}
      />
      <ul>
        {searchTerm === '' ? (
          questions.slice(0, 4).map(question => (
            <li 
              key={question.question_id} 
              style={{ marginBottom: '10px', padding: '10px'}}>
              <div><b>Q: {question.question_body}</b></div>
              <Answers questionId={question.question_id} />
            </li>
          ))
        ) : (
          filteredQuestions.slice(0, 4).map(question => (
            <li 
              key={question.question_id} 
              style={{ marginBottom: '10px', padding: '10px' }}>
              <div><b>Q: {question.question_body}</b></div>
              <Answers questionId={question.question_id} />
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default List;