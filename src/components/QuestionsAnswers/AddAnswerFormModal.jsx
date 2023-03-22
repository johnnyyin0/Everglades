import axios from 'axios';
import React, { useState } from 'react';
import AddPhotos from './AddPhotos';

const AddAnswerFormModal = ({questionId, questionBody, closeModal, productName,}) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('Form data:', {params: { questionId, username, email, answer }});
    axios.post('http://localhost:3000/questions/questionId/answer', {params: { question_id: questionId, name, email, body }})
    .then((response) => {
      // console.log('Answer submitted successfully', response.data);
      closeModal();
    })
    .catch((error) => {
      console.error('Error submitting answer', error);
    });
  };

  return (
    <div className='question-answer-modal-overlay'>
      <div className='question-answer-modal-box'>
        <span className='close' onClick={closeModal}>
          &times;
        </span>
        <h1><b>SUBMIT YOUR ANSWER</b></h1>
        <h2><b>PRODUCT: {productName}</b></h2>
        <h2><b>QUESTION: {questionBody}</b></h2>
        <h2><b>* Indicates a required field</b></h2>
        <form onSubmit={handleSubmit}>
          <p>
            <label className='label' htmlFor="nickname">
              <span className='label-text'>Nickname*</span>
            </label>
            <input
              type='text'
              placeholder='Example: jack543!'
              className='input input-bordered w-full max-w-xs'
              value={name}
              onChange={handleNameChange}
              id="nickname"
              maxLength={60}
              required
            />
            <div>
            <i>
            <small>*For privacy reasons, do not use your full name or email address!</small> 
            </i>
            </div>
            <label className='label' htmlFor="email">
              <span className='label-text'>Your Email*</span>
            </label>
            <input
              type='email'
              placeholder='Example: jack@email.com'
              className='input input-bordered w-full max-w-xs'
              value={email}
              onChange={handleEmailChange}
              id="email"
              maxLength={60}
              required
            />
            <div>
            <i>
            <small>*For authentication reasons, you will not be emailed!</small>
            </i>
            </div>
            <label className='label' htmlFor="answer">
              <span className='label-text'>Your Answer*</span>
            </label>
            <textarea
              placeholder='Type your answer here...'
              className='input input-bordered w-full max-w-xs'
              rows='3'
              value={body}
              onChange={handleBodyChange}
              id="answer"
              maxLength={1000}
              required
            />
          </p>
          <AddPhotos />
          <button className='btn' style= {{marginTop: '20px',}} type='submit'>SUBMIT</button>

        </form>
      </div>
    </div>
  );
};

export default AddAnswerFormModal;