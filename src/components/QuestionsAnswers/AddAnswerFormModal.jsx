import React, { useState } from 'react';

const AddAnswerFormModal = ({ questionId, closeModal }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [answer, setAnswer] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Do something with the form data (e.g. send it to the server)
    console.log('Form data:', { questionId, username, email, answer });
    closeModal();
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
              value={username}
              onChange={handleUsernameChange}
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
              value={answer}
              onChange={handleAnswerChange}
            />
          </p>
          
          <button style= {{marginTop: '20px'}} type='submit'><b>SUBMIT</b></button>
        </form>
      </div>
    </div>
  );
};

export default AddAnswerFormModal;