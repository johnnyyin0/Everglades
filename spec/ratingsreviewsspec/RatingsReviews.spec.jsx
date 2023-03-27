
import { assert, expect, it } from 'vitest'
import {render, screen, fireEvent} from '@testing-library/react'
import RatingsReviews from '../../src/components/RatingsReviews/RatingsReviews.jsx'


describe('RatingsReviews', () => {
  it('should exist on the DOM', () => {

    render(<RatingsReviews />);
    expect(screen.getByTitle('ratings-reviews-module')).toBeInTheDocument();

  })

  it('should render a sidebar, reviews list, and new reviews modal', () => {
    render(<RatingsReviews />);
    expect(screen.getByTitle('ratings-reviews-sidebar')).toBeInTheDocument();
    expect(screen.getByTitle('reviews-list')).toBeInTheDocument();
    expect(screen.getByTitle('new-review-modal')).toBeInTheDocument();

  })
})