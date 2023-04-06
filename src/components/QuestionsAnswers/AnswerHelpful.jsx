import React, {useState} from 'react'
import axios from 'axios';

const AnswerHelpful = ({answers, setAnswers, answerId,}) => {
    const [helpfulClicks, setHelpfulClicks] = useState([]);

    const handleHelpfulClick = (answerId) => {
        if (!helpfulClicks.includes(answerId)) {
          axios.put(`/api/questions/answer/helpful`, { params: { answerId } })
            .then((response) => {
              const updatedAnswers = answers.map((answer) => {
                if (answer.id === answerId) {
                  return { ...answer, answer_helpfulness: answer.answer_helpfulness + 1 };
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
        Yes ({answers.find(answer => answer.id === answerId).answer_helpfulness})
      </span>{' '}
     </span>
     )
}

export default AnswerHelpful
