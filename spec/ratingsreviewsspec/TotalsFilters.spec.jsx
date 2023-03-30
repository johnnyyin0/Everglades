import { assert, expect, it } from 'vitest'
import {render, screen, fireEvent} from '@testing-library/react'
import sampleMeta from './sampleMeta.js'
import sampleReviewData from './sampleReviewData.js'
import TotalsFilters from '../../src/components/RatingsReviews/TotalsFilters.jsx'

// needs ratings, totalRatings, allReviews, setAllReviews props

describe('TotalsFilters', () => {
  const props = {};
  props.ratings = sampleMeta.ratings;
  props.totalRatings = 788;
  props.allReviews = sampleReviewData;
  props.setAllReviews = vi.fn()

  it('Should render to the DOM', () => {
    render(<TotalsFilters {...props}/>);
    expect(screen.getByTitle('totals-filters')).toBeInTheDocument()
  })
})