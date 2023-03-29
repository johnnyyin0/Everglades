import { assert, expect, it } from 'vitest'
import {render, screen, fireEvent, waitFor} from '@testing-library/react'
import Sidebar from '../../src/components/RatingsReviews/Sidebar.jsx'
import sampleReviewData from './sampleReviewData.js'
import sampleMeta from './sampleMeta.js'
import * as api from '../../src/components/RatingsReviews/reviewsapi.js'

//requires id, allreviews, setAllReviews
//renders MainAverage, TotalsFilters, FitSliders

vi.mock('../../src/components/RatingsReviews/reviewsapi.js');

beforeEach(() => vi.clearAllMocks());

describe('Ratings & Reviews Sidebar', () => {
  const props = {}
  props.id = 37311
  props.allReviews = sampleReviewData
  props.setAllReviews = vi.fn()
  props.avgReview = 3.5
  props.pctRecommended = 89

  it('Should render to the Dom', () => {
    //Sidebar imports getMeta from the file we're mocking in line 10
    api.getMeta.mockResolvedValue({data: sampleMeta})
    render(<Sidebar {...props} />);
    expect(screen.getByTitle('ratings-reviews-sidebar')).toBeInTheDocument()
  })
  it('Should render MainAverage, TotalsFilters, and FitSliders components once it has data', async () => {
    render(<Sidebar {...props} />);
    await waitFor(() => {
      expect(screen.getByTitle('main-average')).toBeInTheDocument();
    })
    await waitFor(() => {
      expect(screen.getByTitle('totals-filters')).toBeInTheDocument();
    })
    await waitFor(() => {
      expect(screen.getByTitle('fit-sliders')).toBeInTheDocument();
    })
  })
})