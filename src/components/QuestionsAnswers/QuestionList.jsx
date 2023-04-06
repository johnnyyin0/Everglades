import React, { useState } from 'react';
import AnswersList from './AnswersList';
import AddQuestionButton from './AddQuestionButton'

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
      placeholder=" HAVE A QUESTION? SEARCH FOR ANSWERS...🔍"
      style={{
        margin: '10px 0',
        border: '1px solid #ccc',
        width: '100%',
        height: '60px',
        marginBottom: '10px',
        marginTop: '10px',
        backgroundColor: '#FFFFFF'
      }}
    />
    {filteredQuestions.length === 0 && (
      <div style={{ marginBottom: '10px', padding: '10px' }}>
        <b><i>Be the first to add questions!</i></b>
      </div>
    )}
    <div className='question-list'>
      <ul>
        {searchTerm === ''
          ? questions.slice(0, questionsCount).map((question) => (
              <li key={question.question_id} style={{ marginBottom: '10px', padding: '10px' }}>
                <AnswersList questionId={question.question_id} questionBody={question.question_body} productName={productName} questions={questions} setQuestions={setQuestions} questionHelpfulness={question.question_helpfulness}/>          
              </li>
            ))
          : filteredQuestions.slice(0, questionsCount).map((question) => (
              <li key={question.question_id} style={{ marginBottom: '10px', padding: '10px' }}>              
                <AnswersList questionId={question.question_id} questionBody={question.question_body} productName={productName} questions={questions} setQuestions={setQuestions} questionHelpfulness={question.question_helpfulness}/>
              </li>
            ))}
      </ul>
    </div>
    <div style={{ display: 'flex'}}>
      {questionsCount < filteredQuestions.length && (
        <button className= 'btn' style={{padding: '10px 10px', marginRight: '10px', marginTop: '10px'}} onClick={()=>{ setQuestionsCount(questionsCount + 2)}}>LOAD MORE QUESTIONS</button>
      )} 
      <AddQuestionButton productName={productName} productId={productId} getQuestions={getQuestions}/>
    </div>
  </div>
);
}
export default QuestionList;