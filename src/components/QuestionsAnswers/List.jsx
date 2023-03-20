import axios from 'axios';
import React, { useState } from 'react';
import Answers from './Answers';
import AddAnswer from './AddAnswer';
import AddQuestion from './AddQuestion'

const List = ({ questions, setQuestions}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [helpfulClicks, setHelpfulClicks] = useState([]);
  const [questionsCount, setQuestionsCount] = useState(4);

  const filteredQuestions = questions.filter(question => {
    return question.question_body.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  const handleHelpfulClick = (questionId) => {
    console.log('questionID', questionId)
    if (!helpfulClicks.includes(questionId)) {
      axios.put(`http://localhost:3000/questions/question/helpful`, { params: { questionId } })
        .then(() => {
          const updatedQuestions = questions.map((question) => {
            if (question.question_id === questionId) {
              return { ...question, question_helpfulness: question.question_helpfulness + 1 };
            }
            return question;
          });
          setHelpfulClicks([...helpfulClicks, questionId]);
          setQuestions(updatedQuestions);
        })
        .catch((err) => {
          console.log('Error on handleHelpfulClick: ', err);
        });
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS...🔍"
        style={{
          margin: '10px 0',
          opacity: searchTerm ? 1 : 0.5,
          border: '1px solid black',
          width: '800px',
          height: '50px',
        }}
      />
      <ul>
        {searchTerm === ''
          ? questions.slice(0, questionsCount).map((question) => (
              <li key={question.question_id} style={{ marginBottom: '10px', padding: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div>
                    <b>Q: {question.question_body}</b>
                  </div>
                  <div>
                    <span>
                      <small>Helpful? </small>
                    </span>
                    <span
                      style={{
                        textDecoration: 'underline',
                        cursor: 'pointer',
                        pointerEvents: helpfulClicks.includes(question.question_id) ? 'none' : 'auto',
                      }}
                      onClick={() => handleHelpfulClick(question.question_id)}
                    >
                      <small>Yes ({question.question_helpfulness})</small>
                    </span>
                    <span>
                      | <span><small><AddAnswer questionId={question.question_id} /></small></span>
                    </span>
                  </div>
                </div>
                <Answers questionId={question.question_id} />
              </li>
            ))
          : filteredQuestions.slice(0, questionsCount).map((question) => (
              <li key={question.question_id} style={{ marginBottom: '10px', padding: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div>
                    <b>Q: {question.question_body}</b>
                  </div>
                  <div>
                    <span>
                      <small>Helpful? </small>
                    </span>
                    <span
                      style={{ textDecoration: 'underline', cursor: 'pointer' }}
                      onClick={() => handleHelpfulClick(question.question_id)}
                    >
                      <small>Yes ({question.question_helpfulness})</small>
                    </span>
                    | <span><small><AddAnswer questionId={question.question_id} /></small></span>
                  </div>
                </div>
                <Answers questionId={question.question_id} />
              </li>
            ))}
      </ul>
      {questionsCount < filteredQuestions.length && (
        <button style={{
          border: '1px solid #ccc',
          borderRadius: '10px',
          padding: '10px 10px',
          background: 'none',
          cursor: 'pointer',
        }} onClick={() => setQuestionsCount(questionsCount + 2)}><b>MORE QUESTIONS</b></button> 
      )} <AddQuestion/>
    </div>
  );
}
export default List;