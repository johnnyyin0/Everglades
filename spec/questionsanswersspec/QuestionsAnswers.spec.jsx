import { it, expect, } from 'vitest';
import { render, screen } from '@testing-library/react';
import QuestionsAnswers from '../../src/components/QuestionsAnswers/QuestionsAnswers';

it('renders QuestionsAnswers component', () => {
  render(<QuestionsAnswers />);
  const component = screen.getByText('QUESTIONS & ANSWERS');
  expect(component).toBeInTheDocument();
});
