import React, {useState,useEffect} from 'react'
import axios from 'axios'
import QuestionList from './QuestionList'

const QuestionsAnswers = () => {
    const [questions, setQuestions] = useState([])
    const [productName, setProductName] = useState([])

    useEffect(() => {
        getQuestions()
    },[])

    useEffect(() => {
        getProductName()
    },[])

    let productId = window.location.pathname.slice(1) || 37311;
    
    const getProductName = () => {
        axios.get(`/api/product/${productId}`)
        .then(response => {
            setProductName(response.data.name)
        })
        .catch(err => {
            console.log('Error on getQuestions: ', err )
        })
    }

    const getQuestions = () => {
        axios.get('/api/qa/questions', { params: { productId } })
        .then(response => {
            setQuestions(response.data.results)
        })
        .catch(err => {
            console.log('Error on getQuestions: ', err )
        })
    }

    return (
        <div style={{ margin: '0 auto', maxWidth: '100%', marginBottom: '60px', marginTop: '60px',}}>
            <b style={{fontSize:'20px'}}>QUESTIONS & ANSWERS</b>
            <QuestionList questions={questions} setQuestions={setQuestions} productId={productId} productName={productName} getQuestions={getQuestions}/>
        </div>
    )
}

export default QuestionsAnswers;