import { assert, expect, it } from 'vitest'
import {render, screen, fireEvent} from '@testing-library/react'
import sampleReviewData from './sampleReviewData.js'
import ReviewsList from '../../src/components/RatingsReviews/ReviewsList.jsx'

//requires id, setPhoto, shownReviews, setShownReviews, allReviews, setAllReviews, sort, setSort
//renders ReviewTile(s), SortDropDown

describe('ReviewsList', () => {

  const props = {}
  props.id = 37311;
  props.setPhoto = vi.fn();
  props.shownReviews = sampleReviewData.results.slice(0, 2)
  props.setShownReviews = vi.fn();
  props.allReviews = sampleReviewData.results
  props.setAllReviews = vi.fn();
  props.sort = 'relevant';
  props.setSort = vi.fn();

  it('Should render to the DOM', () => {

    render(<ReviewsList {...props} />);
    expect(screen.getByTitle('reviews-list')).toBeInTheDocument()
  })
})