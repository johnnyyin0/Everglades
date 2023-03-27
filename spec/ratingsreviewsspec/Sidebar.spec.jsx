import { assert, expect, it } from 'vitest'
import {render, screen, fireEvent} from '@testing-library/react'
import Sidebar from '../../src/components/RatingsReviews/Sidebar.jsx'
import sampleReviewData from './sampleReviewData.js'

//requires id, allreviews, setAllReviews
//renders MainAverage, TotalsFilters, FitSliders

describe('Ratings & Reviews Sidebar', () => {
  const props = {}
  props.id = 37311
  props.allReviews = sampleReviewData
  props.setAllReviews = vi.fn()

  it('Should render to the Dom', () => {
    render(<Sidebar {...props} />);
    expect(screen.getByTitle('ratings-reviews-sidebar')).toBeInTheDocument()
  })
})