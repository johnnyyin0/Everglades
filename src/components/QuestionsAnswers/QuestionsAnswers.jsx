import React, {useState,useEffect} from 'react'
import axios from 'axios'
import List from './List'
import MoreQuestions from './MoreQuestions'
import AddQuestion from './AddQuestion'

//MAIN CONTAINER
const QuestionsAnswers = () => {
    //take in props with productId, should be passed down from overview
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        getQuestions()
    },[])

    const getQuestions = () => {
        //takes in a param ie: productId
        axios.get('http://localhost:3000/questions', )
        .then(response => {
            setQuestions(response.data.results)
            // console.log('DATA RECEIVED FROM GETQUESTIONS: ', response.data.results)
        })
        .catch(err => {
            console.log('Error on getQuestions: ', err )
        })
    }

    return (
        <div>
            <b>QUESTIONS & ANSWERS</b>
            <List questions={questions} setQuestions={setQuestions}/>
            <MoreQuestions /> <AddQuestion />
        </div>
    )
}

export default QuestionsAnswers;