//fetches the answer for every particular questionId
import axios from 'axios';
import React, {useState, useEffect} from 'react';

const Answers = ({questionId}) => {

    const[answers, setAnswers] =useState([])

    useEffect(() => {
        getAnswers(questionId);
    }, [questionId]);

    //axios get the answers for a particular questionId, data should be an array
    const getAnswers = (questionId) => {
        axios.get('http://localhost:3000/questions/answers', { params: { questionId }})
        .then(response => {
            setAnswers(response.data.results)
        })
        .catch(err => {
            console.log('Error on getAnswers: ', err )
        })
    }

    //set those answers to that question

    //simple Answer: {answer}
    //display one of the answers
    //import more Answers for the button
    return (
      <div>
         {answers.map((answer) => (
            <div key={answer.answer_id}>{answer.answer_body}</div>
      ))}
    </div>
    )
}

export default Answers