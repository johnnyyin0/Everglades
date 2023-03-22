import React, { useState } from 'react';
import Answers from './Answers';
import AddQuestionButton from './AddQuestionButton'
import QuestionHelpful from './QuestionHelpful';

const QuestionList = ({questions, setQuestions, productId, productName, getQuestions}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [questionsCount, setQuestionsCount] = useState(2);

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
        placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS...🔍"
        style={{margin: '10px 0', opacity: searchTerm ? 1 : 0.5, border: '1px solid black', width: '100%', height: '65px',}}
      />
      <div className='question-list'>
      <ul>
        {searchTerm === ''
          ? questions.slice(0, questionsCount).map((question) => (
              <li key={question.question_id} style={{ marginBottom: '5px', padding: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div>
                    <b>Q: {question.question_body}</b>
                  </div>
                  <div>
                  <QuestionHelpful questions={questions} questionId={question.question_id} setQuestions={setQuestions} questionHelpfulness={question.question_helpfulness}/>
                  </div>
                </div>
                <Answers questionId={question.question_id} questionBody={question.question_body} productName={productName}/>
              </li>
            ))
          :  filteredQuestions.slice(0, questionsCount).map((question) => (
              <li key={question.question_id} style={{ marginBottom: '10px', padding: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div>
                    <b>Q: {question.question_body}</b>
                  </div>
                  <div>
                  <QuestionHelpful questions={questions} questionId={question.question_id} setQuestions={setQuestions} questionHelpfulness={question.question_helpfulness}/>
                  </div>
                </div>
                <Answers questionId={question.question_id} questionBody={question.question_body} productName={productName}/>
              </li>
            ))}
      </ul>
      </div>
      <div style={{ display: 'flex'}}>
      {questionsCount < filteredQuestions.length && (
        <button style={{border: '1px solid #ccc', borderRadius: '0px', padding: '10px 10px', background: 'none', cursor: 'pointer', marginRight: '10px',
        }} onClick={() => setQuestionsCount(questionsCount + 2)}><b>LOAD MORE QUESTIONS</b></button> 
      )} 
      <AddQuestionButton productName={productName} productId={productId} getQuestions={getQuestions}/>
      </div>
    </div>
  );
}
export default QuestionList;