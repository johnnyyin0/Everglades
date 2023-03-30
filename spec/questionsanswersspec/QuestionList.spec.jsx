import { it, expect, } from 'vitest';
import { render, screen } from '@testing-library/react';
import QuestionList from '../../src/components/QuestionsAnswers/QuestionList';

it('renders QuestionList component', () => {
  render(<QuestionList />);
  const component = screen.getByText('Q: ');
  expect(component).toBeInTheDocument();
});
