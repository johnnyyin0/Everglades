import { assert, expect, it } from 'vitest'
import {render, screen, fireEvent} from '@testing-library/react'
import StarsRater from '../../src/components/RatingsReviews/StarsRater.jsx'


describe('StarsRater', () => {
  it('should exist on the DOM', () => {

    render(<StarsRater />);
    expect(screen.getByTitle('stars-rater')).toBeInTheDocument();
  })
})