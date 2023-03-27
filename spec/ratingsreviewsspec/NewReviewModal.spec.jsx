import { assert, expect, it } from 'vitest'
import {render, screen, fireEvent} from '@testing-library/react'
import NewReviewModal from '../../src/components/RatingsReviews/NewReviewModal.jsx'

describe('NewReviewModal', () => {
  it('Should render to the DOM', () => {
    render(<NewReviewModal />);
    expect(screen.getByTitle('new-review-modal')).toBeInTheDocument();
  })
})