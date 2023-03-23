import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {format, parseISO} from 'date-fns'
import ReportButton from './ReportButton';
import AnswerHelpful from './AnswerHelpful';
import AnswersPhotos from './AnswersPhotos';
import AddAnswerButton from './AddAnswerButton';

const AnswersList = ({questionId, questionBody, productName}) => {
  const [answers, setAnswers] = useState([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    getAnswers(questionId);
  }, [questionId]);

  const getAnswers = (questionId) => {
    axios.get('http://localhost:3000/questions/answers', { params: { questionId } })
      .then((response) => {
        setAnswers(response.data.results);
      })
      .catch((err) => {
        console.log('Error on getAnswers: ', err);
      });
  };

  return (
    <div>
    <AddAnswerButton getAnswers={getAnswers} questionId={questionId} questionBody={questionBody} productName={productName}/>
    <div>
      {answers.length === 0 ? (
        <div style={{ marginTop: '10px' }}>
          <b>A:</b>
          <i> No answer yet...</i>
        </div>
      ) : (
        <div className='answer-list'>
          {answers.slice(0, showMore ? answers.length : 2).map((answer) => (
              <div key={answer.answer_id} style={{ marginTop: '10px' }}>
                <b>A:</b> {answer.body}
                <br />
                <small>
                  by {answer.answerer_name === 'Seller' ? <b>{answer.answerer_name}</b> : answer.answerer_name}, on {format(parseISO(answer.date), "MMMM-dd-yyyy")} | Helpful?{' '}
                  <AnswerHelpful answers={answers} setAnswers={setAnswers} answerId={answer.answer_id}/>
                  | <ReportButton answerId={answer.answer_id} />
                </small>
                <AnswersPhotos photos={answer.photos}/>
              </div>
            ))}
          {answers.length > 2 && (
            <button onClick={()=>setShowMore(!showMore)} style={{marginTop: '10px', background:'none', borderRadius: '10px', border: '1px solid #ccc'}}>{showMore ? 'COLLAPSE ANSWERS' : 'LOAD MORE ANSWERS'}</button>
          )}
        </div>
      )}
    </div>
    </div>
  );
};

export default AnswersList;
