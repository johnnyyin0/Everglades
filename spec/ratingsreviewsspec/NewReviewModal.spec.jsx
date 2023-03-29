import { assert, expect, it } from 'vitest'
import {render, screen, fireEvent} from '@testing-library/react'
import NewReviewModal from '../../src/components/RatingsReviews/NewReviewModal.jsx'

//expects id prop
//renders StarsRater, CharacteristicReview, PhotoUploader

describe('NewReviewModal', () => {
  it('Should render to the DOM', () => {
    render(<NewReviewModal id={37311}/>);
    expect(screen.getByTitle('new-review-modal')).toBeInTheDocument();
  })
})