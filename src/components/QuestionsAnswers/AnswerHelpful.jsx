import React, {useState} from 'react'
import axios from 'axios';

const AnswerHelpful = ({answers, setAnswers, answerId,}) => {
    const [helpfulClicks, setHelpfulClicks] = useState([]);

    const handleHelpfulClick = (answerId) => {
        if (!helpfulClicks.includes(answerId)) {
          axios.put(`/api/qa/answers/:answer_id/helpful`, { params: { answerId } })
            .then((response) => {
              const updatedAnswers = answers.map((answer) => {
                if (answer.answer_id === answerId) {
                  return { ...answer, helpfulness: answer.helpfulness+ 1 };
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
        <span>        
        <span
        style={{textDecoration: 'underline', cursor: 'pointer', pointerEvents: helpfulClicks.includes(answerId) ? 'none' : 'auto',
        }}
        onClick={() => handleHelpfulClick(answerId)}
      >
        Yes ({answers.find(answer => answer.answer_id === answerId).helpfulness})
      </span>{' '}
     </span>
     )
}

export default AnswerHelpful
