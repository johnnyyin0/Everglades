//fetches the answer for every particular questionId
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Report from './Report';

const Answers = ({ questionId}) => {
  const [answers, setAnswers] = useState([]);
  const [helpfulClicks, setHelpfulClicks] = useState([]);

  useEffect(() => {
    getAnswers(questionId);
  }, [questionId]);

  //axios get the answers for a particular questionId, data should be an array
  const getAnswers = (questionId) => {
    axios.get('http://localhost:3000/questions/answers', { params: { questionId } })
      .then((response) => {
        setAnswers(response.data.results);
      })
      .catch((err) => {
        console.log('Error on getAnswers: ', err);
      });
  };

  const handleHelpfulClick = (answerId) => {
    if (!helpfulClicks.includes(answerId)) {
      axios.put(`http://localhost:3000/questions/answer/helpful`, { params: { answerId } })
        .then((response) => {
          const updatedAnswers = answers.map((answer) => {
            if (answer.answer_id === answerId) {
              return { ...answer, helpfulness: answer.helpfulness + 1 };
            }
            return answer;
          });
          setAnswers(updatedAnswers);
          setHelpfulClicks([...helpfulClicks, answerId]);
        })
        .catch((err) => {
          console.log('Error on handleHelpfulClick: ', err);
        });
    }
  };

  return (
    <div>
      {answers.length === 0 ? (
        <div style={{ marginTop: '10px' }}>
          <b>A:</b>
          <i> No answer yet...</i>
        </div>
      ) : (
        answers.slice(0, 2).map((answer) => (
          <div key={answer.answer_id} style={{ marginTop: '10px' }}>
            <b>A:</b> {answer.body}
            <br />
            <small>
              by {answer.answerer_name}, on {answer.date} | Helpful?{' '}
              <span
                style={{
                  textDecoration: 'underline',
                  cursor: 'pointer',
                  pointerEvents: helpfulClicks.includes(answer.answer_id) ? 'none' : 'auto',
                }}
                onClick={() => handleHelpfulClick(answer.answer_id)}
              >
                Yes ({answer.helpfulness})
              </span>{' '}
              | <Report answerId={answer.answer_id} />
            </small>
          </div>
        ))
      )}
    </div>
  );
};

export default Answers;