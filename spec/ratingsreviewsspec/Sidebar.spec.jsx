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
  props.avgReview = 3.5
  props.pctRecommended = 89

  it('Should render to the Dom', () => {
    render(<Sidebar {...props} />);
    expect(screen.getByTitle('ratings-reviews-sidebar')).toBeInTheDocument()
  })
  it('Should render MainAverage, TotalsFilters, and FitSliders components once it has data', async () => {
    render(<Sidebar {...props} />);
    await expect(screen.getByTitle('main-average')).toBeInTheDocument()
    await expect(screen.getByTitle('totals-filters')).toBeInTheDocument()
    await expect(screen.getByTitle('fit-sliders')).toBeInTheDocument()
  })
})