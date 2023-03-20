import React, {useState,useEffect} from 'react'
import axios from 'axios'
import List from './List'
import Overview from '../Overview/Overview'

const QuestionsAnswers = () => {
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        getQuestions()
    },[])

    const getQuestions = () => {
        let productId = window.location.pathname.slice(1) || 37311;
        axios.get('http://localhost:3000/questions', { params: { productId } })
        .then(response => {
            setQuestions(response.data.results)
            // console.log('DATA RECEIVED FROM GETQUESTIONS: ', response.data.results)
        })
        .catch(err => {
            console.log('Error on getQuestions: ', err )
        })
    }

    return (
        <div style={{ marginTop: '20px' , marginBottom: '20px'}}>
            <b>QUESTIONS & ANSWERS</b>
            <List questions={questions} setQuestions={setQuestions}/>
        </div>
    )
}

export default QuestionsAnswers;