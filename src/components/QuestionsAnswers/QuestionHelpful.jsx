import React, {useState} from 'react';
import axios from 'axios';

const QuestionHelpful = ({questions, questionId, setQuestions, questionHelpfulness}) => {
    const [helpfulClicks, setHelpfulClicks] = useState([]);

    const handleHelpfulClick = (questionId) => {
        // console.log('questionID', questionId)
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
    <span>
      <small>Helpful? </small>
      <span style={{ textDecoration: 'underline', cursor: 'pointer' }}
        onClick={() => {handleHelpfulClick(questionId)}}>
        <small> Yes ({questionHelpfulness})</small> 
      </span> 
    </span>
    )
}

export default QuestionHelpful;