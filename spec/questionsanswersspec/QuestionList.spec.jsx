import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import QuestionList from '../../src/components/QuestionsAnswers/QuestionList';

const questions = [
  {
    question_id: 1,
    question_body: 'What material is this made of?',
    question_helpfulness: 7,
    answers: []
  },
  {
    question_id: 2,
    question_body: 'Can this be used outdoors?',
    question_helpfulness: 3,
    answers: []
  }
];

const setQuestions = jest.fn();
const productId = 123;
const productName = 'Test Product';
const getQuestions = jest.fn();

test('displays the list of questions', () => {
  render(
    <QuestionList
      questions={questions}
      setQuestions={setQuestions}
      productId={productId}
      productName={productName}
      getQuestions={getQuestions}
    />
  );

  expect(screen.getByText('What material is this made of?')).toBeDefined();
  expect(screen.getByText('Can this be used outdoors?')).toBeDefined();
});

test('filters the list of questions based on search term', () => {
  render(
    <QuestionList
      questions={questions}
      setQuestions={setQuestions}
      productId={productId}
      productName={productName}
      getQuestions={getQuestions}
    />
  );

  const searchInput = screen.getByPlaceholderText('HAVE A QUESTION? SEARCH FOR ANSWERS...🔍');

  fireEvent.change(searchInput, { target: { value: 'outdoors' } });

  expect(screen.getByText('Can this be used outdoors?')).toBeDefined();
  expect(screen.queryByText('What material is this made of?')).toBeNull();
});

test('loads more questions when "LOAD MORE QUESTIONS" button is clicked', () => {
  render(
    <QuestionList
      questions={questions}
      setQuestions={setQuestions}
      productId={productId}
      productName={productName}
      getQuestions={getQuestions}
    />
  );

  const loadMoreButton = screen.getByText('LOAD MORE QUESTIONS');

  expect(loadMoreButton).toBeDefined();

  fireEvent.click(loadMoreButton);

  expect(setQuestions).toHaveBeenCalledTimes(1);
  expect(setQuestions).toHaveBeenCalledWith(4);

  fireEvent.click(loadMoreButton);

  expect(setQuestions).toHaveBeenCalledTimes(2);
  expect(setQuestions).toHaveBeenCalledWith(6);
});

test('displays "Add a Question +" button', () => {
  render(
    <QuestionList
      questions={questions}
      setQuestions={setQuestions}
      productId={productId}
      productName={productName}
      getQuestions={getQuestions}
    />
  );

  expect(screen.getByText('Add a Question +')).toBeDefined();
});
