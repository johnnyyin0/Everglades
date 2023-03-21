import axios from 'axios';
import React, { useState } from 'react';

const AddAnswerFormModal = ({ questionId, closeModal}) => {
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
    <div className='add-answer-modal-overlay'>
      <div className='add-answer-modal-box'>
        <span className='close' onClick={closeModal}>
          &times;
        </span>
        <form onSubmit={handleSubmit}>
          <p>
            <label className='label'>
              <span className='label-text'>Username:</span>
            </label>
            <input
              type='text'
              placeholder='Enter username...'
              className='input input-bordered w-full max-w-xs'
              value={name}
              onChange={handleNameChange}
            />
            <label className='label'>
              <span className='label-text'>Email:</span>
            </label>
            <input
              type='text'
              placeholder='Enter email...'
              className='input input-bordered w-full max-w-xs'
              value={email}
              onChange={handleEmailChange}
            />
            <label className='label'>
              <span className='label-text'>Your Answer:</span>
            </label>
            <input
              type='text'
              placeholder='Type your answer here...'
              className='input input-bordered w-full max-w-xs'
              rows='3'
              value={body}
              onChange={handleBodyChange}
            />
          </p>
          
          <button style= {{marginTop: '20px',}} type='submit'><b>SUBMIT</b></button>
        </form>
      </div>
    </div>
  );
};

export default AddAnswerFormModal;