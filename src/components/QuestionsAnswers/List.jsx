import React, { useState } from 'react';

const List = ({ questions }) => {
  //should import Answers for every questionID(imported from Answers)
  //have a add answer(imported from AddAnswer)
  //each question should have a button for helpfulness
  //each question should have a report button(pops up modal)

  const [searchTerm, setSearchTerm] = useState('');

  const filteredQuestions = questions.filter(question => {
    return question.question_body.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search for questions here..."
        style={{
          opacity: searchTerm ? 1 : 0.5,
          border: '1px solid black',
          width: '300px', // Change the width as needed
        }}
      />
      <ul>
        {searchTerm === '' ? (
          questions.slice(0, 2).map(question => (
            <li key={question.question_id}>Question: {question.question_body}</li>
          ))
        ) : (
          filteredQuestions.slice(0, 2).map(question => (
            <li key={question.question_id}>Question: {question.question_body}</li>
          ))
        )}
      </ul>
    </div>
  );
};

export default List;
