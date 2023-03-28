import { assert, expect, it } from 'vitest'
import {render, screen, fireEvent, waitFor, queryByText } from '@testing-library/react'
import sampleReviewData from './SampleReviewData.js'
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
  it('Should include buttons for "More Reviews" and "Add a Review"', () => {
    render(<ReviewsList {...props} />);
    expect(screen.getByRole('button', { name: 'More Reviews'})).toBeInTheDocument();
    expect(screen.getByText('Add Review')).toBeInTheDocument();
  })

  it('Should give the total number of reviews retrieved', () => {
    render(<ReviewsList {...props} />);
    expect(screen.getByText(/5\s*reviews/)).toBeInTheDocument();
  })

  it('Should have sort options that default to "relevant"', () => {
    render(<ReviewsList {...props} />);
    expect(screen.getByTitle('sort-dropdown')).toBeInTheDocument();
    expect(screen.getByText('relevant')).toBeInTheDocument();
    expect(screen.getByText('newest')).toBeInTheDocument();
    expect(screen.getByText('helpful')).toBeInTheDocument();

    expect(props.sort).toBe('relevant')
    fireEvent.click(screen.getByText('newest'))
    expect(props.setSort).toHaveBeenCalledWith('newest')
    fireEvent.click(screen.getByText('helpful'))
    expect(props.setSort).toHaveBeenCalledWith('helpful')
  })

  it('Should render two review tiles on initial load', () => {
    render(<ReviewsList {...props} />);
    expect(screen.getAllByTitle('review-tile').length).toBe(2)
  })

  it('Should render two additional review tiles when "More Reviews" is clicked', () => {
    render(<ReviewsList {...props} />);
    const moreReviews = screen.getByText('More Reviews')
    fireEvent.click(moreReviews)
    expect(props.setShownReviews).toHaveBeenCalledWith(sampleReviewData.results.slice(0,4))
  })

  it('Should make the "Add Reviews" button disappear when all reviews are shown', async () => {
    const disappearProps = {}
    disappearProps.id = 37311;
    disappearProps.setPhoto = vi.fn();
    disappearProps.shownReviews = sampleReviewData.results.slice(0,1)
    disappearProps.setShownReviews = vi.fn();
    disappearProps.allReviews = sampleReviewData.results.slice(0,1)
    disappearProps.setAllReviews = vi.fn();
    disappearProps.sort = 'relevant';
    disappearProps.setSort = vi.fn();
    console.log(disappearProps.allReviews, 'all reviews')

    render(<ReviewsList {...disappearProps}/>);
    await waitFor(() => {
      expect(screen.queryByText('More Reviews')).not.toBeInTheDocument()
    })
  })
})